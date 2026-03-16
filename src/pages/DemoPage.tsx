import { useState } from "react";
import {
  TrendingUp,
  Package,
  Users,
  CheckCircle2,
  ChevronRight,
  Settings,
  Sparkles,
  X,
  Search,
  ShoppingCart,
  Bot,
  LayoutGrid,
  PlusCircle,
} from "lucide-react";
import ShopPage from "@/shop/pages/ShopPage";

/* ── ANNOTATION CLOUD ── */

interface AnnotationCloud {
  id: string;
  icon: React.ElementType;
  title: string;
  body: string;
  /** Position of the small pulsing trigger dot */
  triggerClass: string;
  /** Position of the tooltip bubble */
  bubbleClass: string;
  /** Arrow pointing from bubble toward the trigger */
  arrowClass: string;
}

/**
 * Layout assumptions (demo store, mobile frame ~375px wide):
 *  - Sticky nav bar:          top 0 → ~64px  (py-3 + h-10 input)
 *  - Banner image:            ~64px → ~224px  (h-40)
 *  - Category chips:          ~224px → ~276px
 *  - Section header:          ~276px → ~326px
 *  - Product grid starts:     ~330px+
 */
const ANNOTATIONS: AnnotationCloud[] = [
  {
    id: "search",
    icon: Search,
    title: "Buscá cualquier producto",
    body: "Escribí el nombre o categoría y los resultados aparecen al instante.",
    triggerClass: "top-[13px] left-[110px]",
    bubbleClass: "top-[54px] left-[8px]",
    arrowClass:
      "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "ai",
    icon: Bot,
    title: "Asistente IA",
    body: "Preguntale al bot qué tenemos, qué recomienda o cómo hacer el pedido.",
    triggerClass: "top-[13px] left-1/2 -translate-x-1/2",
    bubbleClass: "top-[54px] left-1/2 -translate-x-1/2",
    arrowClass:
      "top-[-8px] left-1/2 -translate-x-1/2 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "cart",
    icon: ShoppingCart,
    title: "Tu carrito",
    body: "Acá se guarda todo lo que agregás. Cuando terminés, confirmás el pedido.",
    triggerClass: "top-[13px] right-[14px]",
    bubbleClass: "top-[54px] right-[8px]",
    arrowClass:
      "top-[-8px] right-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "categories",
    icon: LayoutGrid,
    title: "Categorías",
    body: "Filtrá por sección para ver solo los productos que te interesan.",
    triggerClass: "top-[232px] left-[16px]",
    bubbleClass: "top-[268px] left-[8px]",
    arrowClass:
      "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "addcart",
    icon: PlusCircle,
    title: "Agregar al carrito",
    body: "Tocá el botón + en cualquier producto para sumarlo a tu pedido.",
    triggerClass: "top-[416px] left-[16px]",
    bubbleClass: "top-[452px] left-[8px]",
    arrowClass:
      "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
];

/* ── Trigger dot ── */
const AnnotationTrigger = ({
  cloud,
  isOpen,
  onToggle,
}: {
  cloud: AnnotationCloud;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const Icon = cloud.icon;
  return (
    <button
      onClick={onToggle}
      title={isOpen ? `Cerrar: ${cloud.title}` : cloud.title}
      className={`absolute z-[60] ${cloud.triggerClass} w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 ${
        isOpen
          ? "bg-sky-600 shadow-sky-400/50 scale-105"
          : "bg-sky-500 shadow-sky-300/60 animate-pulse"
      }`}
    >
      <Icon className="w-3.5 h-3.5 text-white" />
    </button>
  );
};

/* ── Tooltip bubble ── */
const AnnotationBubble = ({
  cloud,
  onClose,
}: {
  cloud: AnnotationCloud;
  onClose: () => void;
}) => {
  const Icon = cloud.icon;
  return (
    <div
      className={`absolute z-[50] ${cloud.bubbleClass} max-w-[210px] animate-in fade-in zoom-in duration-300`}
    >
      {/* Arrow */}
      <div className={`absolute w-0 h-0 border-[8px] ${cloud.arrowClass}`} />
      {/* Bubble */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 pt-2.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
              <Icon className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-black text-slate-800 leading-tight">
              {cloud.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-slate-500 transition-colors flex-shrink-0"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
          {cloud.body}
        </p>
      </div>
    </div>
  );
};

export default function DemoPage() {
  const [tutorialStep, setTutorialStep] = useState(0);
  const [openClouds, setOpenClouds] = useState<Set<string>>(new Set());

  const startDemo = () => {
    setTutorialStep(1);
    // Open search bubble first to guide the user
    setOpenClouds(new Set(["search"]));
  };

  const skipIntro = () => {
    setTutorialStep(100);
  };

  const toggleCloud = (id: string) => {
    setOpenClouds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div
      className="min-h-screen bg-slate-50 py-12 md:py-20 overflow-x-hidden"
      style={{ "--primary-color": "#0ea5e9" } as React.CSSProperties}
    >
      {/* Welcome Modal */}
      {tutorialStep === 0 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-sky-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Sparkles className="w-10 h-10 text-sky-500" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
              ¡Bienvenido al Showroom!
            </h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Explorá la tienda como si fueras un cliente real. Buscá
              productos, agregá al carrito y probá el asistente IA.
            </p>
            <button
              onClick={startDemo}
              className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
            >
              Explorar la Demo
            </button>
            <button
              onClick={skipIntro}
              className="mt-6 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
            >
              Saltar intro
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl space-y-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Demo en vivo
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Así se ve tu <span className="text-sky-500">tienda VENDEx</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Interactuá con la tienda: buscá productos, agregá al carrito y
            probá el asistente IA.
          </p>
        </div>

        <div className="space-y-6">

          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-500 rounded-2xl shadow-lg shadow-sky-200">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                Vista del Cliente
              </h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Tu tienda funcionando 24/7
              </p>
            </div>
          </div>

          {/* Browser frame */}
          <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100">
            <div className="bg-slate-100 border-b border-slate-200 px-8 py-5 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 bg-white rounded-2xl px-5 py-2.5 text-sm text-slate-400 font-bold border border-slate-200 flex items-center gap-3 shadow-inner">
                <span className="text-slate-300">🔒</span>
                tutienda.vendexchat.app
              </div>
            </div>

            {/*
             * Store + annotation overlay.
             * - overflow-y-auto: ShopPage scrolls inside the frame (like a real browser).
             * - Absolutely-positioned triggers/bubbles are relative to THIS container,
             *   so they stay fixed in the viewport regardless of scroll position.
             */}
            <div className="bg-white relative overflow-y-auto overflow-x-hidden h-[700px] md:h-[900px] xl:h-[1000px] border-b border-slate-100">
              <ShopPage isDemo={true} />

              {/* Annotation layer — rendered outside ShopPage's scroll context */}
              {tutorialStep > 0 && (
                <>
                  {/* Trigger dots — always visible, pulsing when closed */}
                  {ANNOTATIONS.map((cloud) => (
                    <AnnotationTrigger
                      key={cloud.id}
                      cloud={cloud}
                      isOpen={openClouds.has(cloud.id)}
                      onToggle={() => toggleCloud(cloud.id)}
                    />
                  ))}

                  {/* Open bubbles */}
                  {ANNOTATIONS.filter((c) => openClouds.has(c.id)).map(
                    (cloud) => (
                      <AnnotationBubble
                        key={cloud.id}
                        cloud={cloud}
                        onClose={() => toggleCloud(cloud.id)}
                      />
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Dashboard Admin mockup ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-200">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                Tu Dashboard Administrativo
              </h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Gestiona con IA en tiempo real
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100">
            {/* Browser chrome */}
            <div className="bg-slate-100 border-b border-slate-200 px-8 py-5 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 bg-white rounded-2xl px-5 py-2.5 text-sm text-slate-400 font-bold border border-slate-200 flex items-center gap-3 shadow-inner">
                <span className="text-slate-300">🔒</span>
                admin.vendexchat.app/dashboard
              </div>
            </div>

            {/* Dashboard layout */}
            <div className="flex bg-white overflow-hidden" style={{ minHeight: 620 }}>

              {/* ── Sidebar ── */}
              <aside className="w-52 flex-shrink-0 border-r border-slate-100 bg-white flex flex-col py-4 select-none">
                {/* Logo */}
                <div className="flex items-center gap-2 px-4 pb-5">
                  <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-black text-slate-900 tracking-tight">VENDExChat</span>
                </div>

                {/* OPERACIÓN */}
                <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mb-1">Operación</p>
                {[
                  { label: "Dashboard", active: true },
                  { label: "POS", badge: "NUEVO", badgeColor: "bg-emerald-100 text-emerald-700" },
                  { label: "Pedidos" },
                  { label: "Productos" },
                  { label: "Categorías" },
                  { label: "Clientes", badge: "PRO", badgeColor: "bg-slate-100 text-slate-500" },
                  { label: "Estadísticas", badge: "PRO", badgeColor: "bg-slate-100 text-slate-500" },
                  { label: "Importador IA", badge: "PRO", badgeColor: "bg-slate-100 text-slate-500" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`mx-2 px-3 py-2 rounded-xl flex items-center justify-between mb-0.5 cursor-default ${
                      item.active ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`text-[11px] font-bold ${item.active ? "font-black" : ""}`}>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}

                {/* MÓDULOS VIP */}
                <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mt-4 mb-1">Módulos VIP</p>
                {[
                  { label: "CRM IA" },
                  { label: "Logística" },
                  { label: "Asistente Tienda" },
                ].map((item) => (
                  <div key={item.label} className="mx-2 px-3 py-2 rounded-xl flex items-center justify-between mb-0.5 cursor-default text-slate-600">
                    <span className="text-[11px] font-bold">{item.label}</span>
                    <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">VIP</span>
                  </div>
                ))}

                {/* MÓDULOS ULTRA */}
                <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mt-4 mb-1">Módulos Ultra</p>
                {[
                  { label: "Inteligencia IA" },
                  { label: "Estadísticas IA" },
                  { label: "Bot WhatsApp" },
                ].map((item) => (
                  <div key={item.label} className="mx-2 px-3 py-2 rounded-xl flex items-center justify-between mb-0.5 cursor-default text-slate-600">
                    <span className="text-[11px] font-bold">{item.label}</span>
                    <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700">ULTRA</span>
                  </div>
                ))}
              </aside>

              {/* ── Main content ── */}
              <div className="flex-1 overflow-hidden flex flex-col">

                {/* Top bar */}
                <div className="border-b border-slate-100 px-6 py-3 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900">Mi Tienda Demo</span>
                    <span className="text-[9px] font-black px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full uppercase tracking-widest">Buenos Aires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-600 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      <span>↗</span> Ver mi tienda
                    </button>
                    <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                  </div>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto bg-slate-50/40 p-5">

                  {/* Trial banner */}
                  <div className="bg-emerald-600 rounded-2xl p-4 flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-black text-sm leading-none">Período de Prueba PRO Activo</p>
                        <p className="text-emerald-100 text-[10px] font-medium mt-0.5">
                          Te quedan <span className="font-black text-white">18 DÍAS</span> para disfrutar de todas las funciones premium.
                        </p>
                      </div>
                    </div>
                    <button className="bg-white text-emerald-700 text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-lg flex-shrink-0">
                      Activar Suscripción
                    </button>
                  </div>

                  {/* Page header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">Dashboard</h2>
                      <p className="text-[10px] text-slate-400 font-medium">Bienvenido de nuevo a tu panel de control.</p>
                    </div>
                    <button className="flex items-center gap-1.5 bg-emerald-600 text-white px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                      <span className="text-base leading-none">+</span> Nuevo Producto
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Pedidos de hoy", value: "0", icon: ShoppingCart },
                      { label: "Ventas hoy", value: "$ 0", icon: TrendingUp },
                      { label: "Productos activos", value: "224", icon: Package },
                    ].map((s) => (
                      <div key={s.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
                        <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <s.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">{s.label}</p>
                          <p className="text-xl font-black text-slate-900 leading-none">{s.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Acceso rápido */}
                  <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.15em] mb-3">Acceso Rápido</p>
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {["Mi Tienda", "Ayuda", "Sliders", "Horarios", "Métodos de Cobro", "Envío / Retiro"].map((name) => (
                      <div key={name} className="bg-white border border-slate-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 cursor-default hover:border-emerald-200 transition-colors">
                        <div className="w-7 h-7 rounded-full border-2 border-emerald-200 flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-[8px] font-black text-slate-600 uppercase tracking-wider text-center leading-tight">{name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    {["Menú QR", "Cupones", "Popups", "Editor Precios"].map((name) => (
                      <div key={name} className="bg-white border border-slate-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 cursor-default hover:border-emerald-200 transition-colors">
                        <div className="w-7 h-7 rounded-full border-2 border-emerald-200 flex items-center justify-center">
                          <Settings className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-[8px] font-black text-slate-600 uppercase tracking-wider text-center leading-tight">{name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Asistente IA */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-violet-500" />
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-[0.12em]">Asistente de Ventas IA</span>
                    </div>
                    <button className="flex items-center gap-1 text-[9px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-lg">
                      ✏️ Editar
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 p-4">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Instrucciones actuales del asistente</p>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed line-clamp-2">
                      Sos el asistente de ventas de "Mi Tienda Demo", una tienda especializada. Ayudá a los clientes a encontrar productos, resolver dudas y completar sus pedidos de forma rápida y amigable.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center pt-16 max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-48 h-48 text-sky-500" />
          </div>
          <p className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">
            Empieza Hoy Mismo
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
            ¿Listo para llevar tu negocio al{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
              siguiente nivel?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://admin.vendexchat.app/register"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-sky-500 text-white font-black text-xl hover:bg-sky-600 transition-all shadow-2xl shadow-sky-500/30 hover:scale-105 active:scale-95 group"
            >
              CREAR MI TIENDA GRATIS{" "}
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/"
              className="text-slate-400 font-bold hover:text-slate-600 transition-all uppercase tracking-widest text-xs"
            >
              Volver a la Home
            </a>
          </div>
          <p className="text-slate-400 text-xs font-bold mt-10 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Registro en
            30 segundos • Sin tarjetas
          </p>
        </div>
      </div>

      <div className="mt-32 py-10 text-center bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
              VENDExChat.IA © 2026
            </p>
            <div className="flex items-center gap-8 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer transition-colors">
                Privacidad
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Términos
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Soporte
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
