import { Smartphone, Laptop, ShoppingBag, Monitor, Wrench, HardDrive, Cpu, Database, RefreshCw, Settings } from "lucide-react";

const BLUE      = '#00A8FF';
const BLUE2     = '#3A78B5';
const DARK      = '#0F172A';
const WHITE     = '#FFFFFF';
const LIGHT     = '#F5F7FA';
const GRAY      = '#64748B';
const DARK_TEXT = '#111827';
const GRADIENT  = `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`;
const SHADOW    = '0 10px 30px rgba(0,0,0,0.06)';
const RADIUS    = '20px';

const ECOSYSTEM = [
    { icon: Smartphone,  label: 'Reparación de celulares', desc: 'Pantallas, baterías, software, placas.', color: BLUE },
    { icon: Laptop,      label: 'Notebooks & PCs',         desc: 'SSD, RAM, optimización y mantenimiento.', color: BLUE2 },
    { icon: ShoppingBag, label: 'Ecommerce & accesorios',  desc: 'Productos originales y premium.', color: '#10b981' },
    { icon: Monitor,     label: 'Soporte técnico',          desc: 'Asistencia a domicilio y empresas.', color: '#f59e0b' },
];

const REPAIR_SERVICES = [
    { icon: RefreshCw, label: 'Recuperación de cuentas Google' },
    { icon: Settings,  label: 'Reparación de software' },
    { icon: Cpu,       label: 'Microelectrónica y placas' },
    { icon: Database,  label: 'Recuperación de datos' },
    { icon: HardDrive, label: 'Diagnóstico avanzado' },
    { icon: Wrench,    label: 'Reparaciones de hardware' },
];

const UPGRADES = [
    'Instalación de SSD',
    'Ampliación de RAM',
    'Limpieza profunda',
    'Formateo y reinstalación',
    'Backup y migración de datos',
    'Pasta térmica premium',
    'Instalación Windows / Linux',
    'Optimización de rendimiento',
];

interface MundoTopSectionsProps {
    whatsapp?: string;
    seccion2Img?: string;
    onShowShop: () => void;
}

export function MundoTopSections({ whatsapp, seccion2Img, onShowShop }: MundoTopSectionsProps) {
    const wa = (msg: string) => whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`
        : '#';

    return (
        <div style={{ backgroundColor: WHITE }}>

            {/* SECCIÓN 2 — Ecosistema */}
            <section id="servicios" className="py-20 px-4" style={{ backgroundColor: LIGHT }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Nuestros servicios</p>
                        <h2 className="text-4xl font-black" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                            Todo lo que necesitás para tu tecnología.
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {ECOSYSTEM.map(({ icon: Icon, label, desc, color }) => (
                            <div key={label} className="rounded-[20px] p-6 flex flex-col gap-3 bg-white"
                                style={{ boxShadow: SHADOW }}>
                                <div className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                                    style={{ backgroundColor: `${color}15` }}>
                                    <Icon className="w-5 h-5" style={{ color }} />
                                </div>
                                <h3 className="font-bold text-sm leading-tight" style={{ color: DARK_TEXT }}>{label}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: GRAY }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3 — Reparación avanzada */}
            <section className="py-20 px-4" style={{ backgroundColor: WHITE }}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Visual */}
                        {seccion2Img ? (
                            <div className="w-full md:w-1/2 relative">
                                <div className="rounded-[20px] overflow-hidden"
                                    style={{ boxShadow: '0 20px 50px rgba(0,168,255,0.15)' }}>
                                    <img src={seccion2Img} alt="Reparación avanzada" className="w-full" style={{ display: 'block' }} />
                                </div>
                                {whatsapp && (
                                    <a href={wa('Hola! Quiero un diagnóstico sin cargo')}
                                        target="_blank" rel="noreferrer"
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-[14px] font-bold text-xs whitespace-nowrap flex items-center gap-2"
                                        style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}50` }}>
                                        Diagnóstico sin cargo →
                                    </a>
                                )}
                            </div>
                        ) : (
                            <div className="w-full md:w-1/2 rounded-[20px] p-8 flex items-center justify-center"
                                style={{ backgroundColor: LIGHT, minHeight: 220 }}>
                                <Wrench className="w-20 h-20" style={{ color: `${BLUE}40` }} />
                            </div>
                        )}

                        {/* Text */}
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Especialización técnica</p>
                            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                                Reparaciones avanzadas con técnicos especializados.
                            </h2>
                            <ul className="space-y-3">
                                {REPAIR_SERVICES.map(({ icon: Icon, label }) => (
                                    <li key={label} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${BLUE}12` }}>
                                            <Icon className="w-4 h-4" style={{ color: BLUE }} />
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: DARK_TEXT }}>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4 — Soporte técnico & empresas (dark) */}
            <section className="py-20 px-4" style={{ backgroundColor: DARK }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>IT & Soporte</p>
                        <h2 className="text-3xl md:text-4xl font-black" style={{ color: WHITE, letterSpacing: '-0.02em' }}>
                            Soporte técnico donde lo necesites.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { emoji: '🏢', title: 'Empresas',        items: ['Mantenimiento preventivo', 'Revisión de PCs', 'Upgrades corporativos', 'Soporte mensual'] },
                            { emoji: '🏠', title: 'Hogares',          items: ['Impresoras y periféricos', 'Configuración de redes', 'Reparación de PCs', 'Instalación de software'] },
                            { emoji: '🚚', title: 'Retiro y entrega', items: ['Retiro a domicilio', 'Entrega en oficina', 'Logística segura', 'Caja especial incluida'] },
                        ].map(({ emoji, title, items }) => (
                            <div key={title} className="rounded-[20px] p-6"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="text-3xl mb-4">{emoji}</div>
                                <h3 className="font-black text-base mb-4" style={{ color: WHITE }}>{title}</h3>
                                <ul className="space-y-2">
                                    {items.map(item => (
                                        <li key={item} className="text-sm flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                            <span style={{ color: BLUE, flexShrink: 0 }}>·</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {whatsapp && (
                        <div className="text-center mt-10">
                            <a href={wa('Hola! Necesito soporte técnico')}
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-bold text-sm transition-all hover:opacity-90"
                                style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}40` }}>
                                Consultar disponibilidad →
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* SECCIÓN 5 — Upgrades & optimización */}
            <section className="py-20 px-4" style={{ backgroundColor: LIGHT }}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Performance</p>
                            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                                Mejoramos el rendimiento de tus equipos.
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {UPGRADES.map(u => (
                                    <div key={u} className="flex items-center gap-2.5 rounded-[12px] px-4 py-3 bg-white"
                                        style={{ boxShadow: SHADOW }}>
                                        <span style={{ color: BLUE, fontWeight: 700, fontSize: 14 }}>✓</span>
                                        <span className="text-sm" style={{ color: DARK_TEXT }}>{u}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="rounded-[20px] p-10 flex flex-col items-center gap-4 text-center bg-white"
                                style={{ boxShadow: '0 20px 50px rgba(0,168,255,0.1)' }}>
                                <div className="text-6xl">⚡</div>
                                <p className="font-black text-xl" style={{ color: DARK_TEXT }}>Tu equipo como nuevo</p>
                                <p className="text-sm" style={{ color: GRAY }}>Resultados en el día. Sin perder tus datos.</p>
                                {whatsapp && (
                                    <a href={wa('Hola! Quiero un upgrade para mi equipo')}
                                        target="_blank" rel="noreferrer"
                                        className="mt-2 px-6 py-3 rounded-[14px] font-bold text-sm transition-all hover:opacity-90"
                                        style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 16px ${BLUE}40` }}>
                                        Pedir presupuesto
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA tienda */}
            <section className="py-16 px-4 text-center" style={{ backgroundColor: WHITE }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Tienda online</p>
                <h2 className="text-3xl font-black mb-4" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                    Productos seleccionados para vos.
                </h2>
                <p className="text-base mb-8" style={{ color: GRAY }}>
                    Accesorios, periféricos y electrónica de calidad con garantía.
                </p>
                <button
                    onClick={onShowShop}
                    className="px-8 py-4 rounded-[14px] font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                    style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}40` }}>
                    Ver productos →
                </button>
            </section>

        </div>
    );
}
