import { useState, useEffect } from "react";
import { fetchMockCatalog } from "../data/mockAdapter";
import { fetchFreshCatalog, getCachedEntry } from "../../api/catalog";
import type { CatalogResponse } from "../../types";

const USE_MOCK = false; // Switch manual para desarrollo

export function useShopData(slug: string | undefined) {
    const [data, setData] = useState<CatalogResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [slow, setSlow] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const hostname = typeof window !== "undefined" ? window.location.hostname : "";
        const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
        const isMainDomain = hostname.endsWith("vendexchat.app");

        // Si no es el dominio principal ni local, usamos el hostname como identificador (Dominio Personalizado)
        const identifier = (isLocal || isMainDomain) ? slug : hostname;

        if (!identifier) {
            setLoading(false);
            return;
        }

        setError(null);

        // ── Stale-While-Revalidate ──────────────────────────────────────────────
        // Si hay caché (aunque sea viejo) lo mostramos de inmediato.
        // Luego refrescamos en background para la próxima visita o actualizar datos.
        const cached = getCachedEntry(identifier);
        if (cached) {
            setData(cached.data);
            setLoading(false);
            setSlow(false);

            if (!cached.isStale) return; // caché fresco: no necesitamos refrescar

            // Caché viejo: actualizar silenciosamente en background
            if (!USE_MOCK) {
                fetchFreshCatalog(identifier)
                    .then(fresh => setData(fresh))
                    .catch(() => { /* falla silenciosa: el usuario ya tiene datos */ });
            }
            return;
        }

        // ── Sin caché: mostrar skeleton y cargar ───────────────────────────────
        setLoading(true);
        setSlow(false);

        if (USE_MOCK) {
            fetchMockCatalog(identifier)
                .then(res => { setData(res); setLoading(false); setSlow(false); })
                .catch(err => { setError(err instanceof Error ? err.message : String(err)); setLoading(false); setSlow(false); });
            return;
        }

        // Mostrar aviso "tardando" a los 6 segundos
        const slowTimer = setTimeout(() => setSlow(true), 6_000);

        // Timeout de 90 segundos (incluye hasta 3 intentos con retry de 3s+6s cada uno)
        const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("No pudimos cargar la tienda. Revisá tu conexión e intentá de nuevo.")), 90_000)
        );

        Promise.race([fetchFreshCatalog(identifier), timeoutPromise])
            .then(res => { setData(res); setLoading(false); setSlow(false); })
            .catch(err => { setError(err instanceof Error ? err.message : String(err)); setLoading(false); setSlow(false); })
            .finally(() => clearTimeout(slowTimer));
    }, [slug]);

    return { data, loading, slow, error };
}
