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
  X
} from "lucide-react";
import ShopPage from "@/shop/pages/ShopPage";

/* ── COMPONENTS ── */

const TooltipCloud = ({ text, position = "top", visible, onClose }: { text: string; position?: "top" | "bottom" | "left" | "right"; visible: boolean; onClose: () => void }) => {
  if (!visible) return null;

  const posClasses = {
    top: "-top-12 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-4 left-1/2 -translate-x-1/2",
    left: "right-full mr-4 top-1/2 -translate-y-1/2",
    right: "left-full ml-4 top-1/2 -translate-y-1/2"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-slate-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900",
    left: "left-full top-1/2 -translate-y-1/2 border-l-slate-900",
    right: "right-full top-1/2 -translate-y-1/2 border-r-slate-900"
  };

  return (
    <div className={`absolute z-[100] animate-in fade-in zoom-in duration-300 ${posClasses[position]}`}>
      <div className="bg-slate-900/95 backdrop-blur text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap flex items-center gap-2 border border-slate-700/50">
        <Sparkles className="w-3 h-3 text-emerald-400" />
        {text}
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="ml-2 hover:text-emerald-400 transition-colors">
          <X className="w-3 h-3" />
        </button>
      </div>
      <div className={`absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] ${arrowClasses[position]}`} />
    </div>
  );
};

export default function DemoPage() {
  const [tutorialStep, setTutorialStep] = useState(0);

  const closeTutorial = () => setTutorialStep(100);

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 overflow-x-hidden" style={{ "--primary-color": "#14b8a6" } as React.CSSProperties}>

      {/* Welcome Modal */}
      {tutorialStep === 0 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Sparkles className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">¡Bienvenido al Showroom!</h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Hemos preparado esta demo para que experimentes <b>VENDEx</b> en ambos lados: como cliente y como administrador.
            </p>
            <button
              onClick={() => setTutorialStep(1)}
              className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
            >
              Empezar Tour Interactivo
            </button>
            <button onClick={closeTutorial} className="mt-6 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
              Saltar intro
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl space-y-24">

        {/* Header de la página */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Showroom Real-Time
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Experiencia <span className="text-emerald-500">VENDEx</span> Demo
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Interactúa con la tienda a la izquierda y observa cómo la inteligencia artificial gestiona tus pedidos a la derecha.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">

          {/* ── COLUMNA 1: TIENDA (MOTOR REAL) ── */}
          <div className="xl:col-span-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-200">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Vista del Cliente</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tu tienda funcionando 24/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100 relative">
              {/* Browser bar */}
              <div className="bg-slate-100 border-b border-slate-200 px-8 py-5 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
                </div>
                <div className="flex-1 bg-white rounded-2xl px-5 py-2.5 text-sm text-slate-400 font-bold border border-slate-200 flex items-center gap-3 shadow-inner">
                  <span className="text-slate-300">🔒</span>
                  tusabor.vendexchat.app
                </div>
              </div>

              {/* Contenido de la tienda (Motor REAL Unificado) */}
              <div className="bg-white relative overflow-hidden h-[800px] border-b border-slate-100">
                <ShopPage isDemo={true} />
              </div>
            </div>
          </div>

          {/* ── SECCIÓN 2: DASHBOARD ADMIN ── */}
          <div className="xl:col-span-12 mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-violet-600 rounded-2xl shadow-lg shadow-violet-200">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Tu Dashboard Administrativo</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Gestiona con IA en tiempo real</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-100">
              {/* Browser bar admin */}
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

              {/* Dashboard content */}
              <div className="bg-slate-50 p-8 md:p-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    { label: "Ventas hoy", value: `$45.000`, icon: TrendingUp, change: "+18%", color: "text-emerald-500" },
                    { label: "Pedidos", value: "48", icon: Package, change: "+12", color: "text-blue-500" },
                    { label: "Mensajes IA", value: "234", icon: MessageCircle, change: "activo", color: "text-violet-500" },
                    { label: "Analítica", value: "98%", icon: Sparkles, change: "Óptima", color: "text-pink-500" },
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Editor de Producto (Sincronizado) */}
                  <div className="lg:col-span-12 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <Settings className="w-5 h-5" />
                      </div>
                      <h3 className="font-black text-slate-800 uppercase tracking-tight">Gestión en Vivo</h3>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-8">
                      <p className="text-sm text-amber-800 font-medium">
                        <b>Multitenancy Consolidado:</b> En esta demo, los cambios que ves arriba vienen del motor real <code>ShopPage</code>. Cualquier mejora en la UI/UX se aplica automáticamente a todas tus tiendas.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-black text-slate-700 text-xs uppercase tracking-widest">Estado del Sistema</h4>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-sm font-bold text-slate-600">Motor de Tiendas Sincronizado</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-bold text-slate-600">Layout Autoadaptable Activo</span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center p-8 bg-indigo-50 rounded-[2rem] text-center">
                        <Sparkles className="w-8 h-8 text-indigo-600 mb-4" />
                        <p className="text-sm text-indigo-900 font-bold mb-4">La Demo ahora usa el código real de producción.</p>
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all">
                          Ver Repositorio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center pt-16 max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-48 h-48 text-emerald-500" />
          </div>
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Empieza Hoy Mismo</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
            ¿Listo para llevar tu negocio al <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">siguiente nivel?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://admin.vendexchat.app/register"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-emerald-500 text-white font-black text-xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 group"
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
              VENDExChat.IA © 2026 • Unified Architecture
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
