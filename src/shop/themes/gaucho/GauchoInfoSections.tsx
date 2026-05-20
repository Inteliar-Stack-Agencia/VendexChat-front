import { useState } from "react";
import { ChevronDown, ChevronUp, Leaf, ShieldCheck, Zap, Heart, Package, Truck, MessageCircle, Star, ArrowRight } from "lucide-react";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN = '#6A3E24';

/* ─── Benefits ─────────────────────────────────────────────────────────── */
const BENEFITS = [
    { icon: Leaf,        title: "Ingredientes Reales",    desc: "Pollo, carne, verduras y granos enteros. Lo que ves en la etiqueta es lo que come tu mascota." },
    { icon: ShieldCheck, title: "Sin Cereales ni Soja",   desc: "Sin maíz, sin trigo, sin soja. Menos inflamación, mejor digestión y más energía." },
    { icon: Zap,         title: "Sin Aditivos Artificiales", desc: "Sin colorantes, sin conservantes artificiales, sin saborizantes químicos." },
    { icon: Heart,       title: "Nutrición Completa",     desc: "Recetas balanceadas que cubren todos los requerimientos nutricionales de perros y gatos." },
    { icon: Package,     title: "Marca Argentina",        desc: "Producción local con ingredientes frescos y trazables. Sabés de dónde viene lo que come." },
    { icon: Truck,       title: "Entregas Martes y Viernes", desc: "Pedí cuando quieras y coordinamos la entrega en CABA y alrededores." },
];

/* ─── Transition steps ──────────────────────────────────────────────────── */
const TRANSITION_STEPS = [
    { week: "Semana 1", pct: "25%", label: "25% natural · 75% anterior", desc: "Empezá con poco. Mezclá el alimento nuevo con el que ya comía." },
    { week: "Semana 2", pct: "50%", label: "50% natural · 50% anterior", desc: "El sistema digestivo ya lo conoce. Podés aumentar la proporción." },
    { week: "Semana 3", pct: "75%", label: "75% natural · 25% anterior", desc: "Casi ahí. Seguí observando heces, energía y pelaje." },
    { week: "Semana 4", pct: "100%",label: "100% Gaucho Natural Pet",    desc: "Transición completa. Tu mascota ya come real." },
];

/* ─── Tips ──────────────────────────────────────────────────────────────── */
const TIPS = [
    { emoji: "🥣", title: "Servir a temperatura ambiente", desc: "Si estaba en freezer, descongelá en heladera la noche anterior. Servir frío directo puede causar malestar gástrico." },
    { emoji: "💧", title: "Agua fresca siempre disponible", desc: "Con alimento húmedo el consumo de agua suele bajar, pero igual es fundamental tenerla en todo momento." },
    { emoji: "⚖️", title: "Pesá las porciones al inicio",  desc: "En los primeros días pesá con balanza. Después del primer mes ya vas a tener el ojo entrenado." },
    { emoji: "📅", title: "Dividí en 2 comidas",           desc: "Repartí la porción diaria en mañana y noche. Ayuda a la digestión y evita la torsión gástrica en razas grandes." },
];

/* ─── FAQ ───────────────────────────────────────────────────────────────── */
const FAQS = [
    { q: "¿A partir de qué edad puede comer alimento natural?",             a: "Cachorros desde las 4 semanas y gatitos desde el destete. Para animales muy pequeños compartimos la guía de porciones por edad por WhatsApp." },
    { q: "¿Cuánto le doy por día?",                                         a: "La porción estándar es del 2% al 3% del peso corporal para adultos y del 4% al 6% para cachorros. Usá la Guía de Pesos de arriba para calcular la porción exacta." },
    { q: "¿Cómo conservo el alimento?",                                     a: "En heladera hasta 3 días una vez abierto, o en freezer hasta 3 meses sin abrir. Los packs vienen sellados al vacío para máxima frescura." },
    { q: "¿Es apto para perros con alergias o sensibilidad alimenticia?",   a: "Sí. La fórmula Hipoalergénica (Cerdo + Batata + Quinoa + Zapallo) está formulada especialmente para mascotas con sensibilidades, sin los alérgenos más comunes." },
    { q: "¿Puedo hacer el pedido y que llegue el mismo día?",               a: "Los pedidos se procesan y entregan los martes y viernes. Podés pedirlo cualquier día de la semana y coordinamos el próximo día de reparto más cercano." },
    { q: "¿Mi gato puede comer lo mismo que el perro?",                    a: "No. Los gatos tienen requerimientos muy distintos (taurina, arginina). Tenemos una línea específica para gatos: Pollo + Corazón + Hígado + Zapallo." },
    { q: "¿Es normal que las heces cambien al inicio?",                     a: "Sí, es completamente normal. Puede haber heces más blandas o un cambio de olor. Se regulariza en 7-10 días, especialmente si hacés la transición gradual." },
    { q: "¿El alimento es apto para cachorros y adultos mayores?",         a: "Sí. Apto para todas las etapas de vida. Para cachorros y seniors recomendamos ajustar la porción según la Guía de Pesos." },
];

/* ─── Testimonials ──────────────────────────────────────────────────────── */
const TESTIMONIALS = [
    { name: "María G.",  city: "Buenos Aires",  stars: 5, text: "Mi perro mejoró muchísimo el pelaje y la energía. En dos meses no es el mismo animal. 100% recomendado." },
    { name: "Juan P.",   city: "CABA",          stars: 5, text: "Finalmente comida real para mis dos gatos. Se la devoran en segundos y noto que están más activos." },
    { name: "Laura M.",  city: "Zona Sur",      stars: 5, text: "Excelente calidad y las entregas siempre llegan el día que dicen. Ya llevo 6 meses siendo cliente." },
    { name: "Carlos T.", city: "San Martín",    stars: 5, text: "Mi perra tenía problemas digestivos constantes. Con Gaucho mejoró en la primera semana. Increíble." },
];

/* ─── Weight guide data ─────────────────────────────────────────────────── */
const DOG_WEIGHTS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50];
const CAT_WEIGHTS = [1, 2, 3, 4, 5, 6, 7, 8];

function calcPortions(weightKg: number, petType: 'dog' | 'cat', lifeStage: 'puppy' | 'adult' | 'senior') {
    const pctMap: Record<string, [number, number]> = {
        'dog-adult':  [0.02, 0.03],
        'dog-puppy':  [0.04, 0.06],
        'dog-senior': [0.015, 0.025],
        'cat-adult':  [0.02, 0.03],
        'cat-puppy':  [0.04, 0.06],
        'cat-senior': [0.015, 0.02],
    };
    const [minPct, maxPct] = pctMap[`${petType}-${lifeStage}`];
    const minG = Math.round(weightKg * 1000 * minPct);
    const maxG = Math.round(weightKg * 1000 * maxPct);
    const daysMin = Math.floor(1000 / maxG);
    const daysMax = Math.floor(1000 / minG);
    return { minG, maxG, daysMin, daysMax };
}

/* ─── FAQ Item ──────────────────────────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl overflow-hidden transition-all"
            style={{ border: `1px solid ${open ? 'rgba(45,95,52,0.2)' : 'rgba(45,95,52,0.1)'}`, backgroundColor: open ? G_WARM_WHITE : 'rgba(255,253,248,0.6)' }}>
            <button onClick={() => setOpen(v => !v)} className="w-full flex items-start gap-3 px-5 py-4 text-left">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black gaucho-body mt-0.5"
                    style={{ backgroundColor: open ? G_GREEN : G_CREAM, color: open ? G_WARM_WHITE : G_GREEN }}>
                    {index + 1}
                </span>
                <span className="flex-1 gaucho-body text-sm font-semibold leading-snug" style={{ color: G_GREEN }}>{q}</span>
                <span className="flex-shrink-0 mt-0.5" style={{ color: G_GOLDEN }}>
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
            </button>
            {open && (
                <div className="px-5 pb-4 pl-14">
                    <p className="gaucho-body text-sm leading-relaxed" style={{ color: G_BROWN }}>{a}</p>
                </div>
            )}
        </div>
    );
}

/* ─── Weight Guide ──────────────────────────────────────────────────────── */
function WeightGuide() {
    const [petType, setPetType]     = useState<'dog' | 'cat'>('dog');
    const [lifeStage, setLifeStage] = useState<'puppy' | 'adult' | 'senior'>('adult');
    const [weight, setWeight]       = useState<number>(10);

    const weights = petType === 'dog' ? DOG_WEIGHTS : CAT_WEIGHTS;
    const safeWeight = weights.includes(weight) ? weight : weights[Math.floor(weights.length / 2)];
    const { minG, maxG, daysMin, daysMax } = calcPortions(safeWeight, petType, lifeStage);

    const handlePetTypeChange = (type: 'dog' | 'cat') => {
        setPetType(type);
        const newWeights = type === 'dog' ? DOG_WEIGHTS : CAT_WEIGHTS;
        setWeight(newWeights[Math.floor(newWeights.length / 2)]);
    };

    return (
        <div className="rounded-3xl overflow-hidden shadow-lg" style={{ border: `1px solid rgba(45,95,52,0.15)`, backgroundColor: G_WARM_WHITE }}>
            {/* Pet type toggle */}
            <div className="flex border-b" style={{ borderColor: 'rgba(45,95,52,0.1)' }}>
                {(['dog', 'cat'] as const).map(type => (
                    <button
                        key={type}
                        onClick={() => handlePetTypeChange(type)}
                        className="flex-1 py-3.5 gaucho-body text-sm font-black uppercase tracking-widest transition-all"
                        style={petType === type
                            ? { backgroundColor: G_GREEN, color: G_WARM_WHITE }
                            : { backgroundColor: 'transparent', color: G_GREEN }}>
                        {type === 'dog' ? '🐕 Perros' : '🐈 Gatos'}
                    </button>
                ))}
            </div>

            <div className="p-5 md:p-6">
                {/* Life stage */}
                <div className="flex gap-2 mb-5 flex-wrap">
                    {(['puppy', 'adult', 'senior'] as const).map(stage => {
                        const labels = { puppy: petType === 'dog' ? 'Cachorro' : 'Gatito', adult: 'Adulto', senior: 'Senior' };
                        return (
                            <button
                                key={stage}
                                onClick={() => setLifeStage(stage)}
                                className="px-4 py-1.5 rounded-full gaucho-body text-[10px] font-bold uppercase tracking-widest transition-all"
                                style={lifeStage === stage
                                    ? { backgroundColor: G_GOLDEN, color: G_GREEN }
                                    : { backgroundColor: G_CREAM, color: G_BROWN, border: '1px solid rgba(106,62,36,0.2)' }}>
                                {labels[stage]}
                            </button>
                        );
                    })}
                </div>

                {/* Weight selector */}
                <p className="gaucho-body text-xs font-bold uppercase tracking-widest mb-2" style={{ color: G_BROWN }}>
                    Peso de tu mascota:
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {weights.map(w => (
                        <button
                            key={w}
                            onClick={() => setWeight(w)}
                            className="px-3 py-1.5 rounded-xl gaucho-body text-xs font-bold transition-all"
                            style={safeWeight === w
                                ? { backgroundColor: G_GREEN, color: G_WARM_WHITE, boxShadow: '0 2px 8px rgba(45,95,52,0.3)' }
                                : { backgroundColor: G_CREAM, color: G_GREEN, border: '1px solid rgba(45,95,52,0.15)' }}>
                            {w} kg
                        </button>
                    ))}
                </div>

                {/* Result */}
                <div className="rounded-2xl p-4 md:p-5" style={{ backgroundColor: G_CREAM, border: `1px solid rgba(45,95,52,0.15)` }}>
                    <p className="gaucho-body text-xs font-bold uppercase tracking-wider mb-3" style={{ color: G_BROWN }}>
                        📊 Resultado para {petType === 'dog' ? 'perro' : 'gato'} {({ puppy: petType === 'dog' ? 'cachorro' : 'gatito', adult: 'adulto', senior: 'senior' })[lifeStage]} de {safeWeight} kg:
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: 'Por día',       value: `${minG}–${maxG} g` },
                            { label: 'Por comida (×2)', value: `${Math.round(minG/2)}–${Math.round(maxG/2)} g` },
                            { label: 'Rinde (1 kg)',  value: `${daysMin}–${daysMax} días` },
                        ].map(item => (
                            <div key={item.label} className="text-center rounded-xl p-2.5" style={{ backgroundColor: G_WARM_WHITE }}>
                                <p className="gaucho-title text-xl md:text-2xl leading-none" style={{ color: G_GREEN }}>{item.value}</p>
                                <p className="gaucho-body text-[9px] font-semibold uppercase tracking-wider mt-1" style={{ color: G_BROWN, opacity: 0.7 }}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="gaucho-body text-[10px] mt-3 italic" style={{ color: 'rgba(106,62,36,0.6)' }}>
                        * Ajustá según nivel de actividad, estado corporal y recomendación veterinaria.
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ─── CTA Banner ────────────────────────────────────────────────────────── */
function CTABanner({ whatsapp }: { whatsapp?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1A3D20' }}>
            {/* Decorative background pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="cta-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="3" fill="#D4A574" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>

            <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
                {/* Left: text */}
                <div className="flex-1 text-center md:text-left">
                    <p className="gaucho-subtitle text-base mb-3" style={{ color: G_GOLDEN }}>
                        Martes y viernes en CABA
                    </p>
                    <h2 className="gaucho-title text-4xl md:text-6xl leading-none mb-5" style={{ color: G_WARM_WHITE }}>
                        Hacé tu Pedido<br />Hoy
                    </h2>
                    <p className="gaucho-body text-sm leading-relaxed max-w-sm mb-8"
                        style={{ color: 'rgba(245,241,235,0.75)' }}>
                        Comida natural entregada en tu puerta. Pedís cuando querés y coordinamos el próximo día de reparto.
                    </p>
                    {whatsapp && (
                        <a href={waLink} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-xl gaucho-body text-sm uppercase tracking-widest"
                            style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                            <MessageCircle className="w-5 h-5" />
                            Pedir por WhatsApp
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {/* Right: decorative circles with pets */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-52 h-52 md:w-64 md:h-64">
                    <div className="absolute inset-0 rounded-full opacity-20"
                        style={{ border: `2px dashed ${G_GOLDEN}` }} />
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center gap-2"
                        style={{ backgroundColor: 'rgba(212,165,116,0.15)', border: `2px solid rgba(212,165,116,0.25)` }}>
                        <div className="flex gap-2 text-5xl">
                            <span>🐶</span>
                            <span>🐱</span>
                        </div>
                        <p className="gaucho-body text-[9px] font-black uppercase tracking-widest text-center px-4"
                            style={{ color: G_GOLDEN }}>
                            Comida Real
                        </p>
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: G_GOLDEN }}>
                        <span className="text-xl">🌿</span>
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: 'rgba(245,241,235,0.1)', border: '1px solid rgba(212,165,116,0.3)' }}>
                        <span className="text-lg">🚚</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Main component ────────────────────────────────────────────────────── */
interface GauchoInfoSectionsProps {
    whatsapp?: string;
}

export function GauchoInfoSections({ whatsapp }: GauchoInfoSectionsProps) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <div className="w-full">

            {/* ── CTA Banner ────────────────────────────────────────────── */}
            <CTABanner whatsapp={whatsapp} />

            {/* ── Credentials strip ─────────────────────────────────────── */}
            <div className="py-4 px-4 overflow-x-auto no-scrollbar" style={{ backgroundColor: G_GREEN }}>
                <div className="flex items-center justify-center gap-2 md:gap-3 w-max md:w-full mx-auto">
                    {['100% Natural', 'Sin Cereales', 'Sin Soja', 'Sin Aditivos', 'Marca Argentina', 'Perros & Gatos'].map(tag => (
                        <span key={tag} className="gaucho-body text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap px-3 py-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'rgba(212,165,116,0.18)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.35)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Benefits ──────────────────────────────────────────────── */}
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

            {/* ── Weight Guide ───────────────────────────────────────────── */}
            <section id="guia-pesos" className="py-16 px-4" style={{ backgroundColor: G_CREAM }}>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Calculadora interactiva</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Guía de Pesos
                        </h2>
                        <p className="gaucho-body text-sm mt-3 max-w-sm mx-auto" style={{ color: G_BROWN }}>
                            Seleccioná el tipo de mascota, la etapa de vida y el peso. Te calculamos la porción diaria exacta.
                        </p>
                    </div>
                    <WeightGuide />
                </div>
            </section>

            {/* ── Transition guide ──────────────────────────────────────── */}
            <section className="py-16 px-4" style={{ backgroundColor: G_WARM_WHITE }}>
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
                    <div className="flex flex-col gap-4">
                        {TRANSITION_STEPS.map((step, i) => (
                            <div key={step.week} className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                                    style={{ backgroundColor: i === TRANSITION_STEPS.length - 1 ? G_GREEN : G_CREAM, border: `2px solid ${G_GREEN}` }}>
                                    <span className="gaucho-title text-xl" style={{ color: i === TRANSITION_STEPS.length - 1 ? G_WARM_WHITE : G_GREEN }}>
                                        {step.pct}
                                    </span>
                                </div>
                                <div className="flex-1 rounded-2xl p-4" style={{ backgroundColor: G_CREAM, border: `1px solid rgba(45,95,52,0.1)` }}>
                                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                        <span className="gaucho-body text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                                            style={{ backgroundColor: 'rgba(45,95,52,0.08)', color: G_GREEN }}>{step.week}</span>
                                        <span className="gaucho-body text-sm font-extrabold" style={{ color: G_GREEN }}>{step.label}</span>
                                    </div>
                                    <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="gaucho-body text-xs text-center mt-6 italic" style={{ color: 'rgba(106,62,36,0.5)' }}>
                        Mascotas con enfermedades preexistentes: consultá con tu veterinario antes de hacer el cambio.
                    </p>
                </div>
            </section>

            {/* ── Tips ──────────────────────────────────────────────────── */}
            <section id="tips" className="py-16 px-4" style={{ backgroundColor: G_CREAM }}>
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
                                style={{ backgroundColor: G_WARM_WHITE, border: `1px solid rgba(45,95,52,0.1)` }}>
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

            {/* ── FAQ ───────────────────────────────────────────────────── */}
            <section id="faq" className="py-16 px-4" style={{ backgroundColor: G_WARM_WHITE }}>
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

            {/* ── Testimonials ──────────────────────────────────────────── */}
            <section id="testimonios" className="py-16 px-4" style={{ backgroundColor: G_CREAM }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>Lo que dicen nuestros clientes</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                            Testimonios
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.name} className="rounded-2xl p-5 flex flex-col gap-3"
                                style={{ backgroundColor: G_WARM_WHITE, border: `1px solid rgba(45,95,52,0.12)`, boxShadow: '0 2px 10px rgba(45,95,52,0.06)' }}>
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.stars }).map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: G_GOLDEN }} />
                                    ))}
                                </div>
                                <p className="gaucho-body text-xs leading-relaxed italic flex-1" style={{ color: G_BROWN }}>
                                    "{t.text}"
                                </p>
                                <div className="border-t pt-3 flex items-center gap-2" style={{ borderColor: 'rgba(45,95,52,0.1)' }}>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center gaucho-title text-base flex-shrink-0"
                                        style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="gaucho-body text-xs font-bold" style={{ color: G_GREEN }}>{t.name}</p>
                                        <p className="gaucho-body text-[9px]" style={{ color: G_BROWN, opacity: 0.6 }}>{t.city}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Shipping process ──────────────────────────────────────── */}
            <section id="envios" className="py-16 px-4" style={{ backgroundColor: G_GREEN }}>

                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>CABA y alrededores</p>
                        <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_WARM_WHITE }}>
                            Entregas Programadas
                        </h2>
                        <p className="gaucho-body text-sm mt-3" style={{ color: 'rgba(245,241,235,0.75)' }}>
                            Martes y viernes. El proceso es simple:
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {[
                            { n: '1', emoji: '📲', label: 'Hacés tu pedido',   sub: 'Por la tienda o WhatsApp' },
                            { n: '2', emoji: '💳', label: 'Coordinás el pago', sub: 'Transferencia o efectivo' },
                            { n: '3', emoji: '📅', label: 'Confirmamos entrega', sub: 'Martes o viernes próximo' },
                            { n: '4', emoji: '🎉', label: '¡Llega tu comida!',  sub: 'Fresca y lista para servir' },
                        ].map(step => (
                            <div key={step.n} className="text-center rounded-2xl p-4"
                                style={{ backgroundColor: 'rgba(245,241,235,0.08)', border: '1px solid rgba(245,241,235,0.15)' }}>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 gaucho-title text-base"
                                    style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                                    {step.n}
                                </div>
                                <div className="text-2xl mb-1">{step.emoji}</div>
                                <p className="gaucho-body text-xs font-bold uppercase tracking-wide" style={{ color: G_WARM_WHITE }}>{step.label}</p>
                                <p className="gaucho-body text-[9px] mt-1" style={{ color: 'rgba(245,241,235,0.55)' }}>{step.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="gaucho-subtitle text-lg mb-6" style={{ color: G_GOLDEN }}>
                            Ingredientes nobles. Resultados reales.
                        </p>
                        {whatsapp && (
                            <a href={waLink} target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-xl gaucho-body text-sm uppercase tracking-widest"
                                style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                                <MessageCircle className="w-5 h-5" />
                                Hacer pedido por WhatsApp
                            </a>
                        )}
                        <p className="gaucho-body text-[10px] mt-5 uppercase tracking-widest" style={{ color: 'rgba(212,165,116,0.45)' }}>
                            Entregas martes y viernes · CABA y alrededores
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
