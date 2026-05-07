// Cloudflare R2 public dev URL – replaced with custom domain via env var for CDN
const CF_IMAGES_BASE = import.meta.env.VITE_CF_IMAGES_URL as string | undefined;

const R2_DEV_PATTERN = /https:\/\/pub-[a-f0-9]+\.r2\.dev/;

// Note: width param kept for API compatibility; Cloudflare Image Resizing
// (cdn-cgi/image) requires Pro plan – using direct CDN URL instead.
export function getProductImageUrl(url: string | null | undefined, _width: number): string {
            if (!url) return "";

    if (CF_IMAGES_BASE && R2_DEV_PATTERN.test(url)) {
                    const base = CF_IMAGES_BASE.replace(/\/$/, "");
                    const path = url.replace(R2_DEV_PATTERN, "");
                    return `${base}${path}`;
    }

    return url;
}
