import { useState, useEffect } from "react";
import { fetchMockCatalog } from "../data/mockAdapter";
import { fetchFreshCatalog, fetchStorePreview, getCachedEntry } from "../../api/catalog";
import type { CatalogResponse, Store } from "../../types";

const USE_MOCK = false; // Switch manual para desarrollo

export function useShopData(slug: string | undefined, isDemo?: boolean) {
    const [data, setData] = useState<CatalogResponse | null>(null);
    const [storePreview, setStorePreview] = useState<Store | null>(null);
    const [loading, setLoading] = useState(true);
    const [slow, setSlow] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const hostname = typeof window !== "undefined" ? window.location.hostname : "";
        const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
        const isMainDomain = hostname.endsWith("vendexchat.app");

        // Si es demo, forzamos un identificador conocido
        const identifier = isDemo ? "demo-store" : ((isLocal || isMainDomain) ? slug : hostname);

        if (!identifier) {
            setLoading(false);
            return;
        }

        setError(null);

        // ── Stale-While-Revalidate ──────────────────────────────────────────────
        const cached = getCachedEntry(identifier);
        if (cached && !isDemo) { // No usar caché para Demo VIP para que siempre sea fresca
            setData(cached.data);
            setLoading(false);
            setSlow(false);

            if (!cached.isStale) return;

            // Caché viejo: actualizar silenciosamente en background
            if (!USE_MOCK) {
                fetchFreshCatalog(identifier)
                    .then(fresh => setData(fresh))
                    .catch(() => { /* falla silenciosa */ });
            }
            return;
        }

        // ── Sin caché o Modo Demo: carga progresiva ─────────────────────────────
        setLoading(true);
        setSlow(false);
        setStorePreview(null);

        if (USE_MOCK || isDemo) {
            fetchMockCatalog(identifier)
                .then(res => { setData(res); setLoading(false); setSlow(false); })
                .catch(err => { setError(err instanceof Error ? err.message : String(err)); setLoading(false); setSlow(false); });
            return;
        }

        // Fase 1: query liviana
        fetchStorePreview(identifier).then(preview => {
            if (preview) setStorePreview(preview);
        });

        const slowTimer = setTimeout(() => setSlow(true), 6_000);

        const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("LOAD_ERROR:timeout")), 90_000)
        );

        // Fase 2: catálogo completo
        Promise.race([fetchFreshCatalog(identifier), timeoutPromise])
            .then(res => { setData(res); setLoading(false); setSlow(false); setStorePreview(null); })
            .catch(err => { setError(err instanceof Error ? err.message : String(err)); setLoading(false); setSlow(false); })
            .finally(() => clearTimeout(slowTimer));
    }, [slug, isDemo]);

    return { data, loading, slow, error, storePreview };
}
