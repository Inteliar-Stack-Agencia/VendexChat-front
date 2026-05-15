import { useState } from "react";
import { ChevronDown, ChevronUp, Leaf, ShieldCheck, Zap, Heart, Package, Truck, MessageCircle } from "lucide-react";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN = '#6A3E24';

interface GauchoInfoSectionsProps {
    whatsapp?: string;
}

/* ─── Benefits ─────────────────────────────────────────────────────────── */
const BENEFITS = [
    {
        icon: Leaf,
        title: "Ingredientes Reales",
        desc: "Pollo, carne, verduras y granos enteros. Lo que ves en la etiqueta es lo que come tu mascota.",
    },
    {
        icon: ShieldCheck,
        title: "Sin Cereales ni Soja",
        desc: "Sin maíz, sin trigo, sin soja. Menos inflamación, mejor digestión y más energía.",
    },
    {
        icon: Zap,
        title: "Sin Aditivos Artificiales",
        desc: "Sin colorantes, sin conservantes artificiales, sin saborizantes químicos.",
    },
    {
        icon: Heart,
        title: "Nutrición Completa",
        desc: "Recetas balanceadas que cubren todos los requerimientos nutricionales de perros y gatos.",
    },
    {
        icon: Package,
        title: "Marca Argentina",
        desc: "Producción local con ingredientes frescos y trazables. Sabés lo que comés.",
    },
    {
        icon: Truck,
        title: "Entregas Martes y Viernes",
        desc: "Pedí cuando quieras y coordinamos la entrega en CABA y alrededores.",
    },
];

/* ─── Transition steps ──────────────────────────────────────────────────── */
const TRANSITION_STEPS = [
    { week: "Semana 1", label: "25% natural · 75% anterior", desc: "Empezá con poco. Mezclá el alimento nuevo con el que ya comía." },
    { week: "Semana 2", label: "50% natural · 50% anterior", desc: "El sistema digestivo ya lo conoce. Podés aumentar la proporción." },
    { week: "Semana 3", label: "75% natural · 25% anterior", desc: "Casi ahí. Seguí observando heces, energía y pelaje." },
    { week: "Semana 4", label: "100% Gaucho Natural Pet", desc: "Transición completa. Tu mascota ya come real." },
];

/* ─── FAQ ───────────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: "¿A partir de qué edad puede comer alimento natural?",
        a: "Cachorros desde las 4 semanas y gatitos desde el destete. Para animales muy pequeños recomendamos consultar la guía de porciones por peso que compartimos por WhatsApp.",
    },
    {
        q: "¿Cuánto le doy por día?",
        a: "La porción estándar es del 2% al 3% del peso corporal diario para adultos, y del 4% al 6% para cachorros. Por ejemplo, un perro de 10 kg come entre 200 g y 300 g por día. Te enviamos la guía de pesos con tu primer pedido.",
    },
    {
        q: "¿Cómo conservo el alimento?",
        a: "En heladera hasta 3 días una vez abierto, o en freezer hasta 3 meses sin abrir. Los packs vienen sellados al vacío para máxima frescura.",
    },
    {
        q: "¿Es apto para perros con alergias o sensibilidad alimenticia?",
        a: "Sí. Tenemos la fórmula Hipoalergénica (Cerdo + Batata + Quinoa + Zapallo) especialmente formulada para mascotas con sensibilidades. Sin los alérgenos más comunes.",
    },
    {
        q: "¿Puedo hacer el pedido y que me llegue el mismo día?",
        a: "Los pedidos se procesan y entregan los martes y viernes. Podés pedirlo cualquier día de la semana y coordinamos el próximo día de reparto más cercano.",
    },
    {
        q: "¿Mi gato puede comer lo mismo que el perro?",
        a: "No. Los gatos tienen requerimientos nutricionales muy distintos (taurina, arginina). Tenemos una línea específica para gatos con Pollo + Corazón + Hígado + Zapallo.",
    },
    {
        q: "¿Es normal que las heces cambien al inicio?",
        a: "Sí, es completamente normal. Al inicio puede haber heces más blandas o un cambio de olor. Suele regularizarse en 7-10 días. Si hacés la transición gradual, los síntomas son mínimos.",
    },
    {
        q: "¿Pueden comer Gaucho Natural Pet cachorros y adultos mayores?",
        a: "Sí. El alimento es apto para todas las etapas de vida. Para cachorros y seniors recomendamos ajustar la porción y frecuencia según la guía de pesos.",
    },
];

/* ─── Tips content ──────────────────────────────────────────────────────── */
const TIPS = [
    {
        emoji: "🥣",
        title: "Servir a temperatura ambiente",
        desc: "Si estaba en freezer, descongelá en heladera la noche anterior. Servir frío directo puede causar malestar gástrico.",
    },
    {
        emoji: "💧",
        title: "Agua fresca siempre disponible",
        desc: "Con alimento húmedo el consumo de agua suele bajar, pero igual es fundamental tenerla disponible en todo momento.",
    },
    {
        emoji: "⚖️",
        title: "Pesá las porciones al inicio",
        desc: "En los primeros días pesá con balanza. Después del primer mes ya vas a tener el ojo entrenado.",
    },
    {
        emoji: "📅",
        title: "Dividí en 2 comidas",
        desc: "Repartí la porción diaria en mañana y noche. Ayuda a la digestión y evita el síndrome de la torsión gástrica en razas grandes.",
    },
];

/* ─── FAQ Item ──────────────────────────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="rounded-2xl overflow-hidden transition-all"
            style={{
                border: `1px solid ${open ? 'rgba(45,95,52,0.2)' : 'rgba(45,95,52,0.1)'}`,
                backgroundColor: open ? G_WARM_WHITE : 'rgba(255,253,248,0.5)',
            }}
        >
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left transition-all"
            >
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black gaucho-body mt-0.5"
                    style={{ backgroundColor: open ? G_GREEN : G_CREAM, color: open ? G_WARM_WHITE : G_GREEN }}>
                    {index + 1}
                </span>
                <span className="flex-1 gaucho-body text-sm font-semibold leading-snug"
                    style={{ color: G_GREEN }}>
                    {q}
                </span>
                <span className="flex-shrink-0 mt-0.5" style={{ color: G_GOLDEN }}>
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
            </button>
            {open && (
                <div className="px-5 pb-4 pl-14">
                    <p className="gaucho-body text-sm leading-relaxed" style={{ color: G_BROWN }}>
                        {a}
                    </p>
                </div>
            )}
        </div>
    );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export function GauchoInfoSections({ whatsapp }: GauchoInfoSectionsProps) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <div className="w-full">

            {/* ── 1. Credentials strip ──────────────────────────────────── */}
            <div className="py-4 px-4 overflow-x-auto no-scrollbar" style={{ backgroundColor: G_GREEN }}>
                <div className="flex items-center justify-center gap-2 md:gap-4 w-max md:w-full mx-auto flex-nowrap">
                    {['100% Natural', 'Sin Cereales', 'Sin Soja', 'Sin Aditivos', 'Marca Argentina', 'Perros & Gatos'].map(tag => (
                        <span key={tag} className="gaucho-body text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap px-3 py-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.35)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── 2. Benefits ───────────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_WARM_WHITE }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Más bienestar en cada comida</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Por qué elegir alimento natural
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {BENEFITS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="rounded-2xl p-5 flex flex-col gap-3"
                                style={{ border: `1px solid rgba(45,95,52,0.1)`, backgroundColor: G_CREAM }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(45,95,52,0.1)' }}>
                                    <Icon className="w-5 h-5" style={{ color: G_GREEN }} />
                                </div>
                                <h3 className="gaucho-body font-extrabold text-sm uppercase tracking-tight" style={{ color: G_GREEN }}>{title}</h3>
                                <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. Transition guide ───────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_CREAM }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Un cambio que suma calidad</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Cómo hacer la transición
                        </h2>
                        <p className="gaucho-body text-sm mt-3 max-w-md mx-auto" style={{ color: G_BROWN }}>
                            Cambiar de golpe puede causar malestar digestivo. La transición gradual en 4 semanas es la forma más segura y efectiva.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line connecting steps */}
                        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px hidden sm:block" style={{ backgroundColor: 'rgba(45,95,52,0.15)' }} />

                        <div className="flex flex-col gap-4">
                            {TRANSITION_STEPS.map((step, i) => (
                                <div key={step.week} className="flex items-start gap-4 md:gap-6 relative">
                                    {/* Step number */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
                                        style={{ backgroundColor: i === TRANSITION_STEPS.length - 1 ? G_GREEN : G_WARM_WHITE, border: `2px solid ${G_GREEN}` }}>
                                        <span className="gaucho-title text-lg" style={{ color: i === TRANSITION_STEPS.length - 1 ? G_WARM_WHITE : G_GREEN }}>
                                            {i + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1 rounded-2xl p-4" style={{ backgroundColor: G_WARM_WHITE, border: `1px solid rgba(45,95,52,0.1)` }}>
                                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                            <span className="gaucho-body text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                                                style={{ backgroundColor: 'rgba(45,95,52,0.08)', color: G_GREEN }}>
                                                {step.week}
                                            </span>
                                            <span className="gaucho-body text-sm font-extrabold" style={{ color: G_GREEN }}>{step.label}</span>
                                        </div>
                                        <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="gaucho-body text-xs text-center mt-6 italic" style={{ color: 'rgba(106,62,36,0.6)' }}>
                        Animales con enfermedades preexistentes: consultá con tu veterinario antes de hacer el cambio.
                    </p>
                </div>
            </section>

            {/* ── 4. Tips ───────────────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_WARM_WHITE }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Pequeños detalles, grandes resultados</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Tips para empezar bien
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {TIPS.map(tip => (
                            <div key={tip.title} className="rounded-2xl p-5 flex gap-4"
                                style={{ backgroundColor: G_CREAM, border: `1px solid rgba(45,95,52,0.1)` }}>
                                <span className="text-3xl flex-shrink-0">{tip.emoji}</span>
                                <div>
                                    <h3 className="gaucho-body font-extrabold text-sm mb-1" style={{ color: G_GREEN }}>{tip.title}</h3>
                                    <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. FAQ ────────────────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_CREAM }}>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Todo lo que querés saber</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        {FAQS.map((faq, i) => (
                            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. Order CTA ──────────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_GREEN }}>
                <div className="max-w-lg mx-auto text-center">
                    {/* Decorative paw */}
                    <div className="text-5xl mb-4">🐾</div>
                    <h2 className="gaucho-title text-4xl md:text-5xl mb-3" style={{ color: G_WARM_WHITE }}>
                        ¿Listo para el cambio?
                    </h2>
                    <p className="gaucho-subtitle text-lg mb-6" style={{ color: G_GOLDEN }}>
                        Ingredientes nobles. Resultados reales.
                    </p>
                    <p className="gaucho-body text-sm mb-8 max-w-sm mx-auto" style={{ color: 'rgba(245,241,235,0.8)' }}>
                        Hacé tu pedido directo por WhatsApp o usá el carrito de la tienda. Coordinamos la entrega para el próximo martes o viernes.
                    </p>
                    {whatsapp && (
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-xl gaucho-body text-sm uppercase tracking-widest"
                            style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Hacer pedido por WhatsApp
                        </a>
                    )}
                    <p className="gaucho-body text-[10px] mt-5 uppercase tracking-widest" style={{ color: 'rgba(212,165,116,0.5)' }}>
                        Entregas martes y viernes · CABA y alrededores
                    </p>
                </div>
            </section>

        </div>
    );
}
