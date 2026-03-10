# 🤖 VendexChat - Front-end Multitenant

Bienvenido al repositorio oficial de la tienda online inteligente de **VendexChat**. Este proyecto es un motor de tiendas multitenant escalable que genera catálogos dinámicos con integración de Inteligencia Artificial y pedidos automáticos vía WhatsApp.

## 🏎️ Resumen Rápido
- **URL Principal**: [vendexchat.app](https://vendexchat.app)
- **Modo Sandbox VIP**: `/demo` (Entorno de pruebas seguro).
- **Tecnología**: React + Vite + Supabase + Cloudflare.

---

## 🏛️ Arquitectura Multitenant
El sistema utiliza una arquitectura de **"Motor Único"**:
1. El archivo `src/shop/pages/ShopPage.tsx` es responsable de renderizar TODAS las tiendas.
2. Identifica la tienda mediante el **slug** en la URL (ej: `vendexchat.app/tienda-pepe`) o mediante el dominio personalizado.
3. Consume una única función RPC en Supabase (`get_catalog`) que descarga todo lo necesario de un solo golpe.

---

## 🏗️ Flujo de Trabajo y Consistencia (IMPORTANTE)

Para mantener el orden y no afectar a clientes reales durante el desarrollo, seguimos estas reglas:

### 1. Zona de Pruebas (Sandbox VIP)
La página **`/demo`** es nuestro laboratorio oficial.
- **Datos Seguros**: Usa el archivo `src/shop/data/mockAdapter.ts`. No toca la base de datos real.
- **Experiencia Completa**: Tiene todos los módulos premium desbloqueados (Plan Semanal, Cupones, IA).
- **Motor Real**: Cualquier cambio que hagas aquí se verá igual en las tiendas de los clientes.

### 2. Sincronización e Inconsistencias
- Hemos configurado un **caché de 5 segundos** en `src/api/catalog.ts`. 
- Si haces un cambio en el administrador y no lo ves en la tienda, espera 5 segundos y recarga la página. Esto evita que los cambios "desaparezcan".

### 3. Personalización por Cliente
Si un cliente necesita un cambio específico (ej: un color o botón único):
1. No se toca el código global.
2. Se añade una configuración en el campo `metadata` de su tienda en la base de datos.
3. El código lee esa metadata y se adapta condicionalmente.

---

## 🚀 Despliegue
El proyecto se despliega automáticamente en **Cloudflare Pages**. Cada cambio genera una **Preview URL** para que puedas probar antes de pasar a producción.

### Comandos Útiles
- `npm run dev`: Iniciar desarrollo local.
- `npm run build`: Generar versión de producción.

---

## 📄 Notas de Versión
Este proyecto ha sido optimizado para la consistencia global y la escalabilidad masiva, eliminando código duplicado y centralizando la lógica de negocio en componentes reutilizables.
