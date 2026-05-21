# VendexChat Front — Contexto para agentes

## Repos
- Storefront: este repo (`VendexChat-front`)
- Admin: `C:\Users\oscar\VendexChat-admin\VendexChat-admin` / `github.com/Inteliar-Stack-Agencia/VendexChat-admin`
- Supabase project ID: `pjrhfbhqdbyoljactdkj` (us-east-2)
- Deploy: Cloudflare Pages → `vendexchat.app`
- Sin Vercel.

## Stack
React + Vite, Supabase, Cloudflare Pages, MercadoPago.

## Cómo se resuelve el store por URL

`useShopData.ts` determina el `identifier` para cargar datos:
- En `vendexchat.app/{slug}` o localhost → usa el slug del path
- En dominio custom con sub-ruta (`tienda.com/sucursal`) → usa el slug del path (el domain proxy ya lo resolvió)
- En dominio custom sin sub-ruta (`tienda.com`) → usa el hostname

Luego llama a `get_catalog(identifier)` en Supabase que busca por `slug = identifier` o `custom_domain = identifier`.

## Reglas críticas

1. **Slugs hardcodeados — actualizar si cambian en DB.** Hay referencias a slugs específicos en:
   - `src/shop/components/CartDrawer.tsx` → `CUSTOMER_TYPE_STORES` (tiendas con selector Particular/Empresa) y `MORFI_EMPRESAS_SLUG`
   - `src/shop/pages/ShopPage.tsx` → `isMorfiEmpresas` (activa UI sin precios y pedidos por día)

2. **Slugs actuales** (post-migración 052):
   | Store | slug |
   |-------|------|
   | Morfi Viandas CABA | `caba` |
   | Morfi La Plata | `laplata` |
   | Morfi Empresas | `empresas` |

3. **Assets estáticos** los maneja el worker `vendexchat-domain-proxy` en el repo admin. Si aparecen 404 en JS/CSS/imágenes bajo dominio custom, revisar el regex `STATIC_ASSET_RE` en `workers/domain-proxy/src/index.ts`.

4. **Probar siempre en incógnito** después de cambios para evitar caché.

## Deploy
Push a `main` → Cloudflare Pages buildea y deploya automáticamente. No hay pasos manuales.
