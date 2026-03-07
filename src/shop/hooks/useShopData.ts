import { useState, useEffect } from "react";
import { fetchMockCatalog } from "../data/mockAdapter";
import { fetchCatalog } from "../../api/catalog";
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

        setLoading(true);
        setSlow(false);
        setError(null);

        const fetchFn = USE_MOCK ? fetchMockCatalog : fetchCatalog;

        // Mostrar aviso de "tardando" a los 6 segundos
        const slowTimer = setTimeout(() => setSlow(true), 6_000);

        // Timeout total de 90 segundos (Supabase cold start puede tardar ~40s)
        const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("No pudimos cargar la tienda. Revisá tu conexión e intentá de nuevo.")), 90_000)
        );

        Promise.race([fetchFn(identifier), timeoutPromise])
            .then((res) => {
                setData(res);
                setLoading(false);
                setSlow(false);
            })
            .catch((err) => {
                setError(err instanceof Error ? err.message : String(err));
                setLoading(false);
                setSlow(false);
            })
            .finally(() => clearTimeout(slowTimer));
    }, [slug]);

    return { data, loading, slow, error };
}
