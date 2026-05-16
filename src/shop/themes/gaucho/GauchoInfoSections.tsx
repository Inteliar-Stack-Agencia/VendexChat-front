import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Instagram, Facebook, Star, Leaf, ArrowRightLeft, Droplets, Eye, Package, Truck, Heart, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const G_GREEN      = '#2D5F34';
const G_OLIVE      = '#4E7A52';
const G_GOLDEN     = '#D4A574';
const G_CREAM      = '#F6F1E7';
const G_BEIGE      = '#EADFCF';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN      = '#6A3E24';
const G_CORAL      = '#E97B63';
const G_SALMON     = '#F29B7A';
const G_DARK       = '#1F402E';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function Wave({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
    const path = flip
        ? "M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z"
        : "M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z";
    return (
        <div style={{ backgroundColor: from, lineHeight: 0, display: 'block', marginBottom: '-1px' }}>
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '52px' }}>
                <path d={path} fill={to} />
            </svg>
        </div>
    );
}

/* ─── Products Section ──────────────────────────────────────────────────────── */

function ProductsSection() {
    const products = [
        {
            name: 'Para Perros',
            desc: 'Fórmula balanceada para cachorros, adultos y seniors.',
            emoji: '🐕',
            ingredients: '🥩 Pollo · 🥕 Zanahoria · 🎃 Zapallo',
        },
        {
            name: 'Para Gatos',
            desc: 'Con taurina y arginina. Específico para felinos.',
            emoji: '🐈',
            ingredients: '🥩 Pollo · 🫀 Corazón · 🫁 Hígado',
        },
        {
            name: 'Carne Real',
            desc: 'Pollo, carne y cerdo como primer ingrediente.',
            emoji: '🥩',
            ingredients: '🐄 Carne · 🐖 Cerdo · 🎃 Zapallo',
        },
        {
            name: 'Pack Prueba',
            desc: 'Perfecto para empezar la transición. Comenzá hoy.',
            emoji: '📦',
            ingredients: '🥩 Pollo · 🥕 Zanahoria · 🌿 Vegetales',
        },
    ];

    return (
        <section id="productos" className="relative overflow-hidden py-24 px-6 md:px-12" style={{ backgroundColor: '#fff' }}>
            {/* Decorative blob */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 pointer-events-none"
                style={{ background: '#68BE4E', borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%', opacity: 0.08 }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center max-w-xl mx-auto mb-14">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_SALMON }}>
                        Nuestras opciones
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>
                        Productos Destacados
                    </h2>
                    <p className="gaucho-body mt-3" style={{ color: '#666', fontSize: '1.02rem' }}>
                        Diferentes opciones para perros, gatos, cachorros y adultos mayores.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {products.map((p) => (
                        <div key={p.name}
                            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.07)', backgroundColor: G_CREAM }}>
                            {/* Image area — dark green with pack photo, taller at 240px */}
                            <div className="relative flex items-center justify-center overflow-hidden"
                                style={{ height: '240px', backgroundColor: G_DARK }}>
                                <img
                                    src="/gaucho/pack-bag.png.png"
                                    alt={p.name}
                                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                    style={{ mixBlendMode: 'screen' }}
                                />
                                <div className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-lg"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                                    {p.emoji}
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-4">
                                <h3 className="gaucho-subtitle font-semibold text-base mb-1" style={{ color: G_GREEN }}>{p.name}</h3>
                                <p className="gaucho-body text-xs leading-relaxed mb-2" style={{ color: '#666' }}>{p.desc}</p>
                                {/* Ingredients line */}
                                <p className="gaucho-body text-[10px] font-medium mb-3 px-2 py-1.5 rounded-lg"
                                    style={{ color: G_OLIVE, backgroundColor: `${G_GREEN}12`, border: `1px solid ${G_GREEN}20` }}>
                                    {p.ingredients}
                                </p>
                                <span className="gaucho-body text-xs font-semibold transition-all group-hover:gap-2"
                                    style={{ color: G_SALMON, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    Ver más <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ver productos button */}
                <div className="mt-10 flex justify-center">
                    <a href="#productos"
                        className="gaucho-body font-semibold inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90 active:scale-95 w-full md:w-auto justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_SALMON} 100%)`,
                            color: '#fff',
                            fontSize: '0.95rem',
                            boxShadow: `0 8px 28px ${G_CORAL}40`,
                        }}>
                        Ver productos →
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─── Tips Section ───────────────────────────────────────────────────────────── */

const TIPS = [
    {
        Icon: Leaf,
        title: 'Proteína como primer ingrediente',
        desc: 'Pollo, carne, pescado. Leé la etiqueta: lo primero que aparece es lo que más contiene.',
    },
    {
        Icon: ArrowRightLeft,
        title: 'Transición gradual, siempre',
        desc: 'Nunca cambies de golpe. 25% por semana evita el malestar digestivo.',
    },
    {
        Icon: Droplets,
        title: 'Agua siempre disponible',
        desc: 'La comida natural es más seca. Agua fresca 24/7 es fundamental.',
    },
    {
        Icon: Eye,
        title: 'Observá las señales',
        desc: 'Pelaje brillante, más energía, heces firmes: señales de que la dieta funciona.',
    },
    {
        Icon: Package,
        title: 'Porción exacta, no más',
        desc: '2–3% del peso corporal para adultos. Usá nuestra calculadora.',
    },
    {
        Icon: Heart,
        title: 'Rotá las proteínas',
        desc: 'Alternar pollo, carne y pescado da nutrientes distintos y evita la monotonía.',
    },
];

function TipsSection() {
    return (
        <section id="tips" className="relative py-24 px-6 md:px-12" style={{ backgroundColor: G_CREAM }}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_CORAL }}>
                        Tips &amp; Consejos
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>
                        Pequeños cambios,{' '}
                        <span className="italic" style={{ color: G_BROWN }}>Grandes diferencias.</span>
                    </h2>
                    {/* Golden divider */}
                    <div className="mx-auto mt-5" style={{ width: '36px', height: '2.5px', backgroundColor: G_GOLDEN, borderRadius: '2px' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TIPS.map(({ Icon, title, desc }) => (
                        <div key={title}
                            className="group bg-white rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            style={{
                                borderLeft: `4px solid ${G_GREEN}`,
                                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                            }}>
                            <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: `${G_GREEN}18` }}>
                                <Icon className="w-5 h-5" style={{ color: G_GREEN }} />
                            </div>
                            <div>
                                <h3 className="gaucho-subtitle font-bold text-sm mb-1" style={{ color: G_DARK }}>{title}</h3>
                                <p className="gaucho-body text-xs leading-relaxed" style={{ color: '#666' }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="gaucho-body text-sm text-center mt-10 italic" style={{ color: G_BROWN, opacity: 0.75 }}>
                    La diferencia muchas veces se nota. Elegí comida real.
                </p>
            </div>
        </section>
    );
}

/* ─── Transition Section ─────────────────────────────────────────────────── */

const TRANSITION_STEPS = [
    { n: '1', week: 'Semana 1', pct: '25%', desc: 'Gaucho · 75% Anterior. Empezá con poco. Mezclá con el alimento que ya comía.' },
    { n: '2', week: 'Semana 2', pct: '50%', desc: 'Gaucho · 50% Anterior. El sistema digestivo ya lo conoce. Aumentá la proporción.' },
    { n: '3', week: 'Semana 3', pct: '75%', desc: 'Gaucho · 25% Anterior. Casi ahí. Observá heces, energía y pelaje.' },
    { n: '4', week: 'Semana 4', pct: '100%', desc: 'Gaucho Natural Pet. Transición completa. Tu mascota ya come real.' },
];

function TransitionSection() {
    return (
        <section id="transicion" className="relative overflow-hidden py-24 px-6 md:px-12"
            style={{ background: `linear-gradient(135deg, ${G_GREEN} 0%, ${G_OLIVE} 100%)` }}>
            {/* Blob decorativo */}
            <div className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none"
                style={{ background: G_GOLDEN, borderRadius: '55% 45% 48% 52% / 52% 48% 45% 55%', opacity: 0.1 }} />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-14">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_GOLDEN }}>
                        Un cambio que suma calidad
                    </p>
                    <h2 className="gaucho-subtitle font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}>
                        Plan de Transición
                    </h2>
                    <p className="gaucho-body mt-3 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem' }}>
                        Cambiar de golpe puede causar malestar. La transición gradual en 4 semanas es la forma más segura.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {TRANSITION_STEPS.map((step) => (
                        <div key={step.n}
                            className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.18)',
                            }}>
                            <div className="gaucho-subtitle font-bold text-4xl mb-1" style={{ color: G_GOLDEN }}>{step.n}</div>
                            <div className="gaucho-body text-sm font-semibold mb-3 text-white">{step.week}</div>
                            <div className="gaucho-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                                <span className="font-bold" style={{ color: G_GOLDEN }}>{step.pct} </span>
                                {step.desc}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="gaucho-body text-xs text-center mt-8 italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Mascotas con enfermedades preexistentes: consultá con tu veterinario antes de hacer el cambio.
                </p>
            </div>
        </section>
    );
}

/* ─── Weight Guide ───────────────────────────────────────────────────────── */

const DOG_WEIGHTS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50];
const CAT_WEIGHTS = [1, 2, 3, 4, 5, 6, 7, 8];

function calcPortions(weightKg: number, petType: 'dog' | 'cat', lifeStage: 'puppy' | 'adult' | 'senior') {
    const pctMap: Record<string, [number, number]> = {
        'dog-adult': [0.02, 0.03], 'dog-puppy': [0.04, 0.06], 'dog-senior': [0.015, 0.025],
        'cat-adult': [0.02, 0.03], 'cat-puppy': [0.04, 0.06], 'cat-senior': [0.015, 0.02],
    };
    const [minPct, maxPct] = pctMap[`${petType}-${lifeStage}`];
    const minG = Math.round(weightKg * 1000 * minPct);
    const maxG = Math.round(weightKg * 1000 * maxPct);
    return { minG, maxG, daysMin: Math.floor(1000 / maxG), daysMax: Math.floor(1000 / minG) };
}

function WeightGuide() {
    const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
    const [lifeStage, setLifeStage] = useState<'puppy' | 'adult' | 'senior'>('adult');
    const [weight, setWeight] = useState<number>(10);

    const weights = petType === 'dog' ? DOG_WEIGHTS : CAT_WEIGHTS;
    const safeWeight = weights.includes(weight) ? weight : weights[Math.floor(weights.length / 2)];
    const { minG, maxG, daysMin, daysMax } = calcPortions(safeWeight, petType, lifeStage);

    return (
        <section id="calculadora" className="relative py-24 px-6 md:px-12" style={{ backgroundColor: G_CREAM }}>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_SALMON }}>Calculadora interactiva</p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>Guía de Pesos</h2>
                    <p className="gaucho-body mt-3" style={{ color: '#666' }}>
                        Seleccioná el tipo de mascota, etapa de vida y peso para calcular la porción exacta.
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor: G_WARM_WHITE, border: `1px solid ${G_BEIGE}` }}>
                    {/* Pet type */}
                    <div className="flex border-b" style={{ borderColor: G_BEIGE }}>
                        {(['dog', 'cat'] as const).map(type => (
                            <button key={type} onClick={() => { setPetType(type); setWeight(type === 'dog' ? 10 : 4); }}
                                className="flex-1 py-3.5 gaucho-body text-sm font-bold uppercase tracking-widest transition-all"
                                style={petType === type ? { backgroundColor: G_GREEN, color: '#fff' } : { backgroundColor: 'transparent', color: G_GREEN }}>
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
                                    <button key={stage} onClick={() => setLifeStage(stage)}
                                        className="px-4 py-1.5 rounded-full gaucho-body text-[10px] font-bold uppercase tracking-widest transition-all"
                                        style={lifeStage === stage
                                            ? { backgroundColor: G_GOLDEN, color: G_GREEN }
                                            : { backgroundColor: G_CREAM, color: G_BROWN, border: `1px solid ${G_BEIGE}` }}>
                                        {labels[stage]}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Weight */}
                        <p className="gaucho-body text-xs font-bold uppercase tracking-widest mb-2" style={{ color: G_BROWN }}>Peso de tu mascota:</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {weights.map(w => (
                                <button key={w} onClick={() => setWeight(w)}
                                    className="px-3 py-1.5 rounded-xl gaucho-body text-xs font-bold transition-all"
                                    style={safeWeight === w
                                        ? { backgroundColor: G_GREEN, color: '#fff', boxShadow: `0 2px 8px ${G_GREEN}40` }
                                        : { backgroundColor: G_CREAM, color: G_GREEN, border: `1px solid ${G_BEIGE}` }}>
                                    {w} kg
                                </button>
                            ))}
                        </div>

                        {/* Result */}
                        <div className="rounded-2xl p-4 md:p-5" style={{ backgroundColor: G_CREAM, border: `1px solid ${G_BEIGE}` }}>
                            <p className="gaucho-body text-xs font-bold uppercase tracking-wider mb-3" style={{ color: G_BROWN }}>
                                📊 Resultado para {petType === 'dog' ? 'perro' : 'gato'} {({ puppy: petType === 'dog' ? 'cachorro' : 'gatito', adult: 'adulto', senior: 'senior' })[lifeStage]} de {safeWeight} kg:
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: 'Por día', value: `${minG}–${maxG} g` },
                                    { label: 'Por comida (×2)', value: `${Math.round(minG / 2)}–${Math.round(maxG / 2)} g` },
                                    { label: 'Rinde (1 kg)', value: `${daysMin}–${daysMax} días` },
                                ].map(item => (
                                    <div key={item.label} className="text-center rounded-xl p-2.5" style={{ backgroundColor: G_WARM_WHITE }}>
                                        <p className="gaucho-subtitle font-bold text-xl leading-none" style={{ color: G_GREEN }}>{item.value}</p>
                                        <p className="gaucho-body text-[9px] font-semibold uppercase tracking-wider mt-1" style={{ color: G_BROWN, opacity: 0.65 }}>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Mascots Gallery ────────────────────────────────────────────────────── */

function MascotsSection() {
    return (
        <section className="relative overflow-hidden py-20 px-6 md:px-12" style={{ backgroundColor: G_DARK }}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_GOLDEN }}>
                        Nuestros clientes
                    </p>
                    <h2 className="gaucho-subtitle font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}>
                        Mascotas Felices
                    </h2>
                    <p className="gaucho-body mt-3 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Miles de perros y gatos ya disfrutan de comida real. ¿El tuyo también?
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: G_DARK }}>
                    <img
                        src="/gaucho/mascots.png.png"
                        alt="Mascotas felices con Gaucho Natural Pet"
                        className="w-full object-cover"
                        style={{ mixBlendMode: 'screen' }}
                    />
                </div>
            </div>
        </section>
    );
}

/* ─── Testimonials ───────────────────────────────────────────────────────── */

const TESTIMONIALS = [
    { name: 'María G.', city: 'Buenos Aires', stars: 5, text: 'Mi perro mejoró muchísimo el pelaje y la energía. En dos meses no es el mismo animal. 100% recomendado.' },
    { name: 'Juan P.', city: 'CABA', stars: 5, text: 'Finalmente comida real para mis dos gatos. Se la devoran en segundos y noto que están más activos.' },
    { name: 'Laura M.', city: 'Zona Sur', stars: 5, text: 'Excelente calidad y las entregas siempre llegan el día que dicen. Ya llevo 6 meses siendo cliente.' },
    { name: 'Carlos T.', city: 'San Martín', stars: 5, text: 'Mi perra tenía problemas digestivos constantes. Con Gaucho mejoró en la primera semana. Increíble.' },
];

function PawPrint({ style }: { style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 64 64" fill="currentColor" style={style}>
            {/* Main pad */}
            <ellipse cx="32" cy="44" rx="14" ry="11" />
            {/* Toe pads */}
            <ellipse cx="14" cy="30" rx="7" ry="9" />
            <ellipse cx="26" cy="22" rx="7" ry="9" />
            <ellipse cx="38" cy="22" rx="7" ry="9" />
            <ellipse cx="50" cy="30" rx="7" ry="9" />
        </svg>
    );
}

function TestimonialsSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: G_CREAM }}>
            {/* Decorative paw prints */}
            <PawPrint style={{ position: 'absolute', top: 24, left: 16, width: 56, height: 56, color: G_GREEN, opacity: 0.07, transform: 'rotate(-20deg)' }} />
            <PawPrint style={{ position: 'absolute', bottom: 32, right: 24, width: 72, height: 72, color: G_GREEN, opacity: 0.07, transform: 'rotate(15deg)' }} />
            <PawPrint style={{ position: 'absolute', top: '40%', right: 8, width: 40, height: 40, color: G_GOLDEN, opacity: 0.1, transform: 'rotate(30deg)' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_SALMON }}>
                        Lo que dicen nuestros clientes
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>
                        Testimonios
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.name} className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                            style={{ backgroundColor: '#fff', border: `1px solid ${G_BEIGE}`, boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                            {/* Large background quote mark */}
                            <div className="absolute -top-2 -right-1 gaucho-subtitle font-black select-none pointer-events-none"
                                style={{ fontSize: '7rem', lineHeight: 1, color: G_GOLDEN, opacity: 0.1 }}>
                                "
                            </div>
                            <div className="flex gap-0.5 relative z-10">
                                {Array.from({ length: t.stars }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: G_GOLDEN }} />
                                ))}
                            </div>
                            <p className="gaucho-body text-xs leading-relaxed italic flex-1 relative z-10" style={{ color: '#555' }}>"{t.text}"</p>
                            <div className="flex items-center gap-2 border-t pt-3 relative z-10" style={{ borderColor: G_BEIGE }}>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center gaucho-subtitle font-bold text-sm flex-shrink-0"
                                    style={{ backgroundColor: G_GREEN, color: '#fff' }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="gaucho-body text-xs font-semibold" style={{ color: G_GREEN }}>{t.name}</p>
                                    <p className="gaucho-body text-[9px]" style={{ color: '#999' }}>{t.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="gaucho-body text-sm text-center mt-10 italic" style={{ color: G_BROWN, opacity: 0.7 }}>
                    Tu mascota también puede hacer el cambio.
                </p>
            </div>
        </section>
    );
}

/* ─── FAQ ────────────────────────────────────────────────────────────────── */

const FAQS = [
    { q: '¿Qué es la comida natural?', a: 'Es comida real, hecha con ingredientes frescos y balanceados. Sin conservantes, sin colorantes, sin aditivos artificiales. Lo mismo que vos comerías.' },
    { q: '¿Cómo hago la transición?', a: 'Recomendamos un plan gradual de 4 semanas: 25% → 50% → 75% → 100% Gaucho. El sistema digestivo se adapta sin malestar.' },
    { q: '¿A partir de qué edad puede comer alimento natural?', a: 'Cachorros desde las 4 semanas y gatitos desde el destete. Para animales muy pequeños compartimos la guía de porciones por edad por WhatsApp.' },
    { q: '¿Cuánto le doy por día?', a: 'La porción estándar es del 2% al 3% del peso corporal para adultos y del 4% al 6% para cachorros. Usá la Guía de Pesos para calcular la porción exacta.' },
    { q: '¿Cómo conservo el alimento?', a: 'En heladera hasta 3 días una vez abierto, o en freezer hasta 3 meses sin abrir. Los packs vienen sellados al vacío para máxima frescura.' },
    { q: '¿Es apto para perros con alergias?', a: 'Sí. La fórmula Hipoalergénica (Cerdo + Batata + Quinoa + Zapallo) está formulada especialmente para mascotas con sensibilidades.' },
    { q: '¿Puedo hacer el pedido y que llegue el mismo día?', a: 'Los pedidos se procesan y entregan los martes y viernes. Podés pedirlo cualquier día de la semana y coordinamos el próximo día de reparto más cercano.' },
    { q: '¿Mi gato puede comer lo mismo que el perro?', a: 'No. Los gatos tienen requerimientos muy distintos (taurina, arginina). Tenemos una línea específica para gatos: Pollo + Corazón + Hígado + Zapallo.' },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl overflow-hidden transition-all"
            style={{ border: `1px solid ${G_BEIGE}`, backgroundColor: open ? '#fff' : `${G_CREAM}99` }}>
            <button onClick={() => setOpen(v => !v)} className="w-full flex items-start gap-3 px-5 py-4 text-left">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black gaucho-body mt-0.5"
                    style={{ backgroundColor: open ? G_GREEN : G_BEIGE, color: open ? '#fff' : G_GREEN }}>
                    {index + 1}
                </span>
                <span className="flex-1 gaucho-body text-sm font-semibold leading-snug" style={{ color: G_DARK }}>{q}</span>
                <span className="flex-shrink-0 mt-0.5" style={{ color: G_SALMON }}>
                    {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
            </button>
            {open && (
                <div className="px-5 pb-4 pl-14">
                    <p className="gaucho-body text-sm leading-relaxed" style={{ color: '#555' }}>{a}</p>
                </div>
            )}
        </div>
    );
}

function FaqSection() {
    return (
        <section id="preguntas" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#fff' }}>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_SALMON }}>
                        Todo lo que necesitás saber
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>
                        Preguntas Frecuentes
                    </h2>
                </div>
                <div className="flex flex-col gap-3">
                    {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
                </div>
            </div>
        </section>
    );
}

/* ─── Envios Section ─────────────────────────────────────────────────────── */

function EnviosSection({ whatsapp }: { whatsapp?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    const steps = [
        {
            Icon: Clock,
            label: 'Pedís cuando querés',
            desc: 'Cualquier día de la semana por WhatsApp.',
        },
        {
            Icon: Package,
            label: 'Lo preparamos',
            desc: 'Con ingredientes frescos del día, sellado al vacío.',
        },
        {
            Icon: Truck,
            label: 'Lo recibís',
            desc: 'Martes y viernes en CABA y alrededores.',
        },
    ];

    return (
        <section id="envios" className="relative py-24 px-6 md:px-12" style={{ backgroundColor: G_DARK }}>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_GOLDEN }}>
                        Entregas
                    </p>
                    <h2 className="gaucho-subtitle font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}>
                        Lo recibís fresco,{' '}
                        <span className="italic" style={{ color: G_GOLDEN }}>en la puerta de tu casa.</span>
                    </h2>
                    {/* Golden divider */}
                    <div className="mx-auto mt-5" style={{ width: '36px', height: '2.5px', backgroundColor: G_GOLDEN, borderRadius: '2px' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: delivery steps */}
                    <div className="flex flex-col gap-5">
                        {steps.map(({ Icon, label, desc }, idx) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: G_CORAL }}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-white bg-opacity-10 rounded-2xl px-5 py-4 flex-1"
                                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <p className="gaucho-subtitle font-bold text-white text-sm mb-0.5">{label}</p>
                                    <p className="gaucho-body text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: delivery info card */}
                    <div className="bg-white rounded-2xl p-7 flex flex-col gap-5" style={{ color: G_DARK }}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-0.5">
                                <p className="gaucho-subtitle font-bold text-xl" style={{ color: G_DARK }}>📅 Martes y Viernes</p>
                                <p className="gaucho-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#888' }}>Días de entrega</p>
                            </div>
                            <div className="h-px" style={{ backgroundColor: G_BEIGE }} />
                            <div className="flex flex-col gap-0.5">
                                <p className="gaucho-subtitle font-bold text-xl" style={{ color: G_DARK }}>📍 CABA y alrededores</p>
                                <p className="gaucho-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#888' }}>Zona de cobertura</p>
                            </div>
                            <div className="h-px" style={{ backgroundColor: G_BEIGE }} />
                            <div className="flex flex-col gap-0.5">
                                <p className="gaucho-subtitle font-bold text-xl" style={{ color: G_DARK }}>❄️ Sellado al vacío</p>
                                <p className="gaucho-body text-xs font-semibold uppercase tracking-widest" style={{ color: '#888' }}>Llega fresco siempre</p>
                            </div>
                        </div>
                        {whatsapp && (
                            <a href={waLink} target="_blank" rel="noreferrer"
                                className="gaucho-body font-semibold inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95 mt-2"
                                style={{
                                    background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_SALMON} 100%)`,
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    boxShadow: `0 8px 28px ${G_CORAL}40`,
                                }}>
                                <WhatsAppIcon className="w-5 h-5" />
                                Pedir por WhatsApp
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── CTA Final ──────────────────────────────────────────────────────────── */

function CTAFinal({ whatsapp }: { whatsapp?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <section className="relative overflow-hidden py-24 px-6 md:px-12" style={{ backgroundColor: G_CREAM }}>
            {/* Salmon blob */}
            <div className="absolute -top-24 -left-32 w-[500px] h-[500px] pointer-events-none"
                style={{ background: G_SALMON, borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%', opacity: 0.18 }} />
            {/* Golden blob right */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 pointer-events-none"
                style={{ background: G_GOLDEN, borderRadius: '55% 45% 48% 52% / 52% 48% 45% 55%', opacity: 0.18 }} />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-3xl"
                    style={{ backgroundColor: `${G_CORAL}20` }}>
                    🐾
                </div>
                <h2 className="gaucho-subtitle font-bold mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: G_DARK }}>
                    ¿Tu mascota ya come real?
                </h2>
                <p className="gaucho-body leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#555', fontSize: '1.05rem' }}>
                    Hacé tu pedido hoy. Entregamos los martes y viernes en CABA y alrededores. Comida natural, fresca y sellada al vacío.
                </p>
                {whatsapp && (
                    <a href={waLink} target="_blank" rel="noreferrer"
                        className="gaucho-body font-semibold inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all hover:opacity-90 active:scale-95"
                        style={{
                            background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_SALMON} 100%)`,
                            color: '#fff',
                            fontSize: '1rem',
                            boxShadow: `0 12px 35px ${G_CORAL}40`,
                        }}>
                        <WhatsAppIcon className="w-5 h-5" />
                        Pedir por WhatsApp
                    </a>
                )}
                <p className="gaucho-body text-xs mt-6 uppercase tracking-widest" style={{ color: `${G_BROWN}80` }}>
                    Entregas martes y viernes · CABA y alrededores
                </p>
            </div>
        </section>
    );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer({ whatsapp, instagram, facebook }: { whatsapp?: string; instagram?: string; facebook?: string }) {
    return (
        <footer style={{ backgroundColor: G_GREEN }}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {/* Brand */}
                <div>
                    <h3 className="gaucho-subtitle font-bold text-xl text-white mb-3">Gaucho Natural Pet</h3>
                    <p className="gaucho-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                        Comida real para perros y gatos. Sin aditivos, sin cereales, sin compromisos. Hecho en Argentina.
                    </p>
                    <div className="flex gap-3 mt-5">
                        {instagram && (
                            <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                                <Instagram className="w-4 h-4" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="gaucho-subtitle font-semibold text-base text-white mb-4">Navegá</h3>
                    <ul className="flex flex-col gap-2.5">
                        {[
                            ['#productos', 'Productos'],
                            ['#tips', 'Tips & Consejos'],
                            ['#transicion', 'Plan de Transición'],
                            ['#calculadora', 'Calculadora'],
                            ['#preguntas', 'Preguntas Frecuentes'],
                            ['#envios', 'Envíos'],
                        ].map(([href, label]) => (
                            <li key={href}>
                                <a href={href} className="gaucho-body text-sm transition-opacity hover:opacity-70"
                                    style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="gaucho-subtitle font-semibold text-base text-white mb-4">Entregas</h3>
                    <p className="gaucho-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                        Martes y viernes en CABA y alrededores. Pedís cuando querés y coordinamos el próximo día de reparto.
                    </p>
                    {whatsapp && (
                        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido 🐾')}`}
                            target="_blank" rel="noreferrer"
                            className="gaucho-body text-sm font-semibold inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                            style={{ backgroundColor: G_CORAL, color: '#fff' }}>
                            <WhatsAppIcon className="w-4 h-4" />
                            Hacer pedido
                        </a>
                    )}
                </div>
            </div>

            <div className="border-t px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <p className="gaucho-body text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    © {new Date().getFullYear()} Gaucho Natural Pet · Buenos Aires, Argentina
                </p>
                <p className="gaucho-body text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Comida real · Sin aditivos · Hecho con amor 🐾
                </p>
            </div>
        </footer>
    );
}

/* ─── Main export ────────────────────────────────────────────────────────── */

interface GauchoInfoSectionsProps {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
}

export function GauchoInfoSections({ whatsapp, instagram, facebook }: GauchoInfoSectionsProps) {
    return (
        <div className="w-full">
            <Wave from={G_CREAM} to={G_GREEN} />

            {/* Credentials ticker */}
            <div className="py-3.5 px-4 overflow-x-auto no-scrollbar" style={{ backgroundColor: G_GREEN }}>
                <div className="flex items-center justify-center gap-3 w-max md:w-full mx-auto">
                    {['🐾 100% Natural', '🌾 Sin Cereales', '🌿 Sin Soja', '🚫 Sin Aditivos', '🇦🇷 Marca Argentina', '🐕 Perros & Gatos'].map(tag => (
                        <span key={tag} className="gaucho-body text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap px-3 py-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: 'rgba(212,165,116,0.18)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.3)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <Wave from={G_GREEN} to="#fff" flip />
            <ProductsSection />
            <Wave from="#fff" to={G_CREAM} />
            <TipsSection />
            <Wave from={G_CREAM} to={G_GREEN} />
            <TransitionSection />
            <Wave from={G_GREEN} to={G_CREAM} flip />
            <WeightGuide />
            <Wave from={G_CREAM} to={G_DARK} />
            <MascotsSection />
            <Wave from={G_DARK} to={G_CREAM} flip />
            <TestimonialsSection />
            <Wave from={G_CREAM} to="#fff" />
            <FaqSection />
            <Wave from="#fff" to={G_DARK} flip />
            <EnviosSection whatsapp={whatsapp} />
            <Wave from={G_DARK} to={G_CREAM} />
            <CTAFinal whatsapp={whatsapp} />
            <Wave from={G_CREAM} to={G_GREEN} />
            <Footer whatsapp={whatsapp} instagram={instagram} facebook={facebook} />
        </div>
    );
}
