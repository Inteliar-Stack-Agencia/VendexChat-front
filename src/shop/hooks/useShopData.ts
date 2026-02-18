import { useState, useEffect } from "react";
import { fetchMockCatalog } from "../data/mockAdapter";
import { fetchCatalog } from "../../api/catalog";
import type { CatalogResponse } from "../../types";

const USE_MOCK = false; // Switch manual para desarrollo

export function useShopData(slug: string | undefined) {
    const [data, setData] = useState<CatalogResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        setLoading(true);
        setError(null);

        const fetchFn = USE_MOCK ? fetchMockCatalog : fetchCatalog;

        fetchFn(slug)
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [slug]);

    return { data, loading, error };
}
