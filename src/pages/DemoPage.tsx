import { useState } from "react";
import {
  TrendingUp,
  Package,
  MessageCircle,
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
  posClass: string;
  arrowClass: string;
}

const ANNOTATIONS: AnnotationCloud[] = [
  {
    id: "search",
    icon: Search,
    title: "Buscá cualquier producto",
    body: "Escribí el nombre o categoría y los resultados aparecen al instante.",
    posClass: "top-[52px] left-[8px]",
    arrowClass: "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "ai",
    icon: Bot,
    title: "Asistente IA",
    body: "Preguntale al bot qué tenemos, qué recomienda o cómo hacer el pedido.",
    posClass: "top-[52px] left-1/2 -translate-x-1/2",
    arrowClass: "top-[-8px] left-1/2 -translate-x-1/2 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "cart",
    icon: ShoppingCart,
    title: "Tu carrito",
    body: "Acá se guarda todo lo que agregás. Cuando terminés, confirmás el pedido.",
    posClass: "top-[52px] right-[8px]",
    arrowClass: "top-[-8px] right-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "categories",
    icon: LayoutGrid,
    title: "Categorías",
    body: "Filtrá por sección para ver solo los productos que te interesan.",
    posClass: "top-[148px] left-[8px]",
    arrowClass: "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
  {
    id: "addcart",
    icon: PlusCircle,
    title: "Agregar al carrito",
    body: "Tocá el botón + en cualquier producto para sumarlo a tu pedido.",
    posClass: "top-[310px] left-[8px]",
    arrowClass: "top-[-8px] left-6 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  },
];

const AnnotationBubble = ({
  cloud,
  onClose,
}: {
  cloud: AnnotationCloud;
  onClose: () => void;
}) => {
  const Icon = cloud.icon;
  return (
    <div className={`absolute z-[50] ${cloud.posClass} max-w-[210px] animate-in fade-in zoom-in duration-300`}>
      {/* Arrow */}
      <div className={`absolute w-0 h-0 border-[8px] ${cloud.arrowClass}`} />
      {/* Bubble */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 pt-2.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
              <Icon className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-black text-slate-800 leading-tight">{cloud.title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-slate-500 transition-colors flex-shrink-0"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{cloud.body}</p>
      </div>
    </div>
  );
};

export default function DemoPage() {
  const [tutorialStep, setTutorialStep] = useState(0);
  const [dismissedClouds, setDismissedClouds] = useState<Set<string>>(new Set());

  const closeTutorial = () => setTutorialStep(100);
  const dismissCloud = (id: string) => setDismissedClouds(prev => new Set(prev).add(id));

  const visibleClouds = tutorialStep > 0
    ? ANNOTATIONS.filter(a => !dismissedClouds.has(a.id))
    : [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 overflow-x-hidden" style={{ "--primary-color": "#0ea5e9" } as React.CSSProperties}>

      {/* Welcome Modal */}
      {tutorialStep === 0 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-sky-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Sparkles className="w-10 h-10 text-sky-500" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">¡Bienvenido al Showroom!</h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Explorá la tienda como si fueras un cliente real. Buscá productos, agregá al carrito y probá el asistente IA.
            </p>
            <button
              onClick={() => setTutorialStep(1)}
              className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
            >
              Explorar la Demo
            </button>
            <button onClick={closeTutorial} className="mt-6 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
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
            Interactuá con la tienda: buscá productos, agregá al carrito y probá el asistente IA.
          </p>
        </div>

        <div className="space-y-6">

          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-500 rounded-2xl shadow-lg shadow-sky-200">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Vista del Cliente</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tu tienda funcionando 24/7</p>
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

            {/* Store + annotation clouds */}
            <div className="bg-white relative overflow-hidden h-[500px] md:h-[700px] xl:h-[800px] border-b border-slate-100">
              <ShopPage isDemo={true} />

              {/* Annotation clouds overlay */}
              {visibleClouds.map(cloud => (
                <AnnotationBubble
                  key={cloud.id}
                  cloud={cloud}
                  onClose={() => dismissCloud(cloud.id)}
                />
              ))}

              {/* Show all hints button if all dismissed */}
              {tutorialStep > 0 && visibleClouds.length === 0 && (
                <button
                  onClick={() => setDismissedClouds(new Set())}
                  className="absolute bottom-4 right-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm transition-colors"
                >
                  Ver tips
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Dashboard Admin mockup ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-violet-600 rounded-2xl shadow-lg shadow-violet-200">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Tu Dashboard Administrativo</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Gestiona con IA en tiempo real</p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100">
            <div className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 bg-slate-800 rounded-2xl px-5 py-2.5 text-sm text-slate-400 font-bold border border-slate-700 flex items-center gap-3 shadow-inner">
                <span className="text-slate-600">🔒</span>
                admin.vendexchat.app/dashboard
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Ventas hoy", value: "$127.400", icon: TrendingUp, change: "+18%", color: "text-emerald-500" },
                  { label: "Pedidos", value: "48", icon: Package, change: "+12", color: "text-blue-500" },
                  { label: "Mensajes IA", value: "234", icon: MessageCircle, change: "activo", color: "text-violet-500" },
                  { label: "Clientes nuevos", value: "9", icon: Sparkles, change: "+3", color: "text-pink-500" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em]">{stat.label}</span>
                      <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                    <div className="mt-2 flex items-center gap-1">
                      <span className={`text-[11px] font-black ${stat.color}`}>{stat.change}</span>
                      <span className="text-[10px] text-slate-300 font-bold">vs ayer</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-slate-800 uppercase tracking-tight">Gestión en Vivo</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-black text-slate-700 text-xs uppercase tracking-widest">Estado del Sistema</h4>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-bold text-slate-600">Motor de Tiendas Online</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-600">Asistente IA Activo</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-600">Carrito y Pedidos Sincronizados</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-8 bg-indigo-50 rounded-[2rem] text-center">
                    <Sparkles className="w-8 h-8 text-indigo-600 mb-4" />
                    <p className="text-sm text-indigo-900 font-bold mb-4">Gestioná productos, pedidos y clientes desde un solo lugar.</p>
                    <a
                      href="https://admin.vendexchat.app/register"
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all"
                    >
                      Crear mi tienda
                    </a>
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
          <p className="text-sky-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Empieza Hoy Mismo</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
            ¿Listo para llevar tu negocio al <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">siguiente nivel?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://admin.vendexchat.app/register"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-sky-500 text-white font-black text-xl hover:bg-sky-600 transition-all shadow-2xl shadow-sky-500/30 hover:scale-105 active:scale-95 group"
            >
              CREAR MI TIENDA GRATIS <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/" className="text-slate-400 font-bold hover:text-slate-600 transition-all uppercase tracking-widest text-xs">
              Volver a la Home
            </a>
          </div>
          <p className="text-slate-400 text-xs font-bold mt-10 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Registro en 30 segundos • Sin tarjetas
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
              <span className="hover:text-white cursor-pointer transition-colors">Privacidad</span>
              <span className="hover:text-white cursor-pointer transition-colors">Términos</span>
              <span className="hover:text-white cursor-pointer transition-colors">Soporte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
