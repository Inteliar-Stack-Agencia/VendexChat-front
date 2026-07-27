/**
 * REGLA OBLIGATORIA: Toda personalización de tienda va aquí.
 *
 * Para agregar una tienda nueva con comportamiento especial:
 *   1. Agregar una entrada en STORE_CONFIGS con el slug exacto de la BD.
 *   2. Declarar solo los flags que difieren del DEFAULT_CONFIG.
 *   3. NO agregar comparaciones de slug en ShopPage, CartDrawer ni ningún
 *      otro componente. Leer siempre desde getStoreConfig().
 *
 * Slugs vigentes: 'empresas' | 'gauchopet' | 'mundoelectronico' | 'caba' | 'laplata'
 */

export type StoreTheme = 'default' | 'gaucho' | 'mundoelectronico' | 'morfiviandas';

export interface StoreConfig {
  /** Tema visual: define qué componentes de Header/ProductCard/CategoryChips se usan */
  theme: StoreTheme;
  /** Color de fondo del body */
  bgClass: string;
  /** Oculta precios en ProductCard y CartBar */
  hidePrice: boolean;
  /** Oculta el botón "Asistente IA" en el header */
  hideChatButton: boolean;
  /** Oculta el ChatBotWidget y FloatingAiAssistant */
  hideAI: boolean;
  /** Fuerza apertura del modal de producto en lugar de agregar directo al carrito */
  alwaysOpenModal: boolean;
  /** Muestra selector de día de entrega (Lunes–Viernes) en el modal */
  requiresDeliveryDay: boolean;
  /** Campo "Empresa" obligatorio en el carrito */
  requiresCompany: boolean;
  /** Texto real de zona de entrega para el FAQ del theme morfiviandas */
  deliveryZoneText?: string;
  /** Texto real de medios de pago para el FAQ del theme morfiviandas */
  paymentMethodsText?: string;
}

const DEFAULT_CONFIG: StoreConfig = {
  theme: 'default',
  bgClass: 'bg-white',
  hidePrice: false,
  hideChatButton: false,
  hideAI: false,
  alwaysOpenModal: false,
  requiresDeliveryDay: false,
  requiresCompany: false,
};

/**
 * Mapa de configuraciones por slug.
 * Slug = valor exacto de la columna `slug` en la tabla `stores` de Supabase.
 */
const MORFI_EMPRESAS_CONFIG: Partial<StoreConfig> = {
  hidePrice: true,
  hideChatButton: true,
  hideAI: true,
  alwaysOpenModal: true,
  requiresDeliveryDay: true,
  requiresCompany: true,
};

const STORE_CONFIGS: Record<string, Partial<StoreConfig>> = {
  'empresas': MORFI_EMPRESAS_CONFIG,    // morfiviandas.com.ar/empresas
  'gauchopet': {
    theme: 'gaucho',
    bgClass: 'bg-[#F5F1EB]',
  },
  'mundoelectronico': {
    theme: 'mundoelectronico',
  },
  'caba': {                              // morfiviandas.com.ar/caba
    theme: 'morfiviandas',
    bgClass: 'bg-[#F9F4F2]',
    deliveryZoneText: 'Entregamos en CABA y alrededores. Consultanos tu zona por WhatsApp para confirmar si está dentro de la cobertura.',
    paymentMethodsText: 'Aceptamos efectivo, transferencia bancaria y tarjetas de crédito (con recargo).',
  },
  'laplata': {                           // morfiviandas.com.ar/laplata
    theme: 'morfiviandas',
    bgClass: 'bg-[#F9F4F2]',
  },
};

/**
 * Devuelve la configuración completa para un slug dado.
 * Siempre retorna un objeto con todos los campos (nunca undefined).
 * Usa el slug de la BD cuando esté disponible; si no, el slug de la URL.
 */
export function getStoreConfig(dbSlug: string | undefined, urlSlug?: string): StoreConfig {
  const slug = dbSlug || urlSlug || '';
  const overrides = STORE_CONFIGS[slug] ?? {};
  return { ...DEFAULT_CONFIG, ...overrides };
}
