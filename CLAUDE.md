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

---

## ⚠️ REGLA OBLIGATORIA: Configuración de tiendas

**Toda lógica específica de tienda se declara en `src/shop/config/storeConfig.ts`. Esta regla es no negociable.**

### Por qué existe esta regla
Comparar slugs dispersos en múltiples archivos causa que cambios en una tienda rompan otras tiendas. Pasó con morfi-empresas cuando se agregó Gaucho/Mundo Electronico.

### Cómo agregar una tienda nueva con comportamiento especial

1. Abrir `src/shop/config/storeConfig.ts`
2. Agregar una entrada en `STORE_CONFIGS` con el **slug exacto de la columna `slug` en Supabase**:
   ```ts
   'mi-nueva-tienda': {
     hidePrice: true,
     // solo los flags que difieren del DEFAULT
   },
   ```
3. **No tocar** `ShopPage.tsx` ni `CartDrawer.tsx` ni ningún otro componente para agregar el nuevo caso.

### Tiendas con config especial (slugs actuales en Supabase)

| Store | slug en Supabase | Flags activos |
|-------|-----------------|---------------|
| Morfi Empresas | `morfi-empresas` | hidePrice, hideChatButton, hideAI, alwaysOpenModal, requiresDeliveryDay, requiresCompany |
| Gaucho Pet | `gauchopet` | theme: gaucho |
| Mundo Electronico | `mundoelectronico` | theme: mundoelectronico |

### Lo que está prohibido

- ❌ `storeSlug === 'nombre-tienda'` en cualquier componente
- ❌ Constantes de slug (`const MORFI_EMPRESAS_SLUG = ...`) en componentes
- ❌ Modificar ShopPage.tsx o CartDrawer.tsx para agregar un nuevo `if (isTal)`

### Lo que está permitido

- ✅ `getStoreConfig(slug).algúnFlag` en cualquier componente
- ✅ Agregar nuevos flags a `StoreConfig` si se necesitan
- ✅ Agregar entradas en `STORE_CONFIGS` para tiendas nuevas

---

## Otras reglas

- **Tiendas con selector Particular/Empresa** → se configuran en `CUSTOMER_TYPE_STORES` dentro de `CartDrawer.tsx` (array de slugs). Cuando esto sea más de 3 tiendas, mover a `storeConfig.ts` también.

- **Assets estáticos** los maneja el worker `vendexchat-domain-proxy` en el repo admin. Si aparecen 404 en JS/CSS/imágenes bajo dominio custom, revisar el regex `STATIC_ASSET_RE` en `workers/domain-proxy/src/index.ts`.

- **Probar siempre en incógnito** después de cambios para evitar caché.

## Deploy
Push a `main` → Cloudflare Pages buildea y deploya automáticamente. No hay pasos manuales.
