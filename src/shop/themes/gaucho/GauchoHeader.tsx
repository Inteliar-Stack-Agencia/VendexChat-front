import { Search, Instagram, Facebook, ShoppingCart, Leaf, Truck, Check, Star } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN = '#6A3E24';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

/* ── Hero Section — estilo Pawsitive ───────────────────────────────────── */

function HeroSection({ name, logo, whatsapp, address }: {
    name: string; logo?: string; whatsapp?: string; address?: string;
}) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <section style={{ backgroundColor: G_CREAM }} className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 pt-10 pb-0 md:pt-16 flex flex-col md:flex-row items-center gap-6">

                {/* Left: Text content */}
                <div className="flex-1 z-10 text-center md:text-left pb-10">
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                        style={{ backgroundColor: 'rgba(212,165,116,0.18)', border: '1px solid rgba(212,165,116,0.4)' }}>
                        <span className="text-sm">🐾</span>
                        <span className="gaucho-body text-[10px] font-black uppercase tracking-widest" style={{ color: G_GOLDEN }}>
                            Alimento 100% Natural
                        </span>
                    </div>

                    <h1 className="gaucho-title text-5xl md:text-7xl leading-[0.92] mb-5" style={{ color: G_GREEN }}>
                        Cuidá a tu<br />Mascota con<br />Lo Mejor
                    </h1>

                    <p className="gaucho-body text-sm md:text-base leading-relaxed max-w-sm mb-8" style={{ color: G_BROWN }}>
                        Comida real, sin cereales ni aditivos artificiales. Ingredientes frescos para perros y gatos que merecen vivir mejor.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                        <a href="#productos"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg gaucho-body text-[11px] uppercase tracking-widest"
                            style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                            Ver Productos
                        </a>
                        {whatsapp && (
                            <a href={waLink} target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold transition-all hover:opacity-80 gaucho-body text-[11px] uppercase tracking-widest"
                                style={{ border: `2px solid ${G_GREEN}`, color: G_GREEN }}>
                                <WhatsAppIcon className="w-4 h-4" />
                                Pedir Ahora
                            </a>
                        )}
                    </div>

                    {address && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: 'rgba(45,95,52,0.07)', border: '1px solid rgba(45,95,52,0.14)' }}>
                            <span className="text-xs">📍</span>
                            <span className="gaucho-body text-[10px] font-semibold" style={{ color: G_GREEN }}>{address}</span>
                        </div>
                    )}
                </div>

                {/* Right: Blob orgánico + foto cachorro */}
                <div className="relative flex-shrink-0 w-full md:w-[480px] h-72 md:h-[480px]">
                    {/* Blob verde SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 480 480"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M240,40 C310,25 400,60 440,140 C480,220 465,330 395,395 C325,460 205,468 130,415 C55,362 20,255 35,160 C50,65 110,30 175,25 C205,22 220,43 240,40Z"
                            fill={G_GREEN}
                        />
                        {/* Hojas decorativas */}
                        <ellipse cx="410" cy="110" rx="14" ry="6" fill="#4A8C55" transform="rotate(-35 410 110)" opacity="0.8"/>
                        <ellipse cx="425" cy="128" rx="11" ry="5" fill="#4A8C55" transform="rotate(-25 425 128)" opacity="0.7"/>
                        <ellipse cx="65" cy="370" rx="12" ry="5" fill="#4A8C55" transform="rotate(25 65 370)" opacity="0.7"/>
                        <ellipse cx="80" cy="388" rx="10" ry="4" fill="#4A8C55" transform="rotate(15 80 388)" opacity="0.6"/>
                    </svg>

                    {/* Blob crema inferior — hace el efecto de que el perro "emerge" */}
                    <svg
                        className="absolute bottom-0 left-0 w-full"
                        viewBox="0 0 480 120"
                        preserveAspectRatio="none"
                        style={{ height: '90px' }}
                    >
                        <path
                            d="M0,60 C80,20 160,10 240,30 C320,50 400,45 480,50 L480,120 L0,120Z"
                            fill={G_CREAM}
                        />
                    </svg>

                    {/* Foto del cachorro con mix-blend-mode para eliminar fondo negro */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 md:w-72 z-10">
                        <img
                            src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=576&h=576&fit=crop&crop=top&q=80"
                            alt="Cachorro feliz con alimento natural"
                            className="w-full object-cover"
                            style={{ borderRadius: '50% 50% 0 0' }}
                        />
                    </div>

                    {/* Ingredientes flotantes */}
                    <div className="absolute top-10 right-10 text-2xl rotate-12 select-none">🥕</div>
                    <div className="absolute top-6 left-14 text-xl -rotate-10 select-none">🌿</div>
                    <div className="absolute bottom-24 left-6 text-xl rotate-6 select-none">🍃</div>
                </div>
            </div>
        </section>
    );
}

/* ── Feature Cards Strip ────────────────────────────────────────────────── */

function FeatureCardsStrip() {
    const cards = [
        { emoji: '🥩', title: 'Carne Real', desc: 'Pollo, carne y cerdo como primer ingrediente. Sin rellenos ni subproductos.' },
        { emoji: '🐕', title: 'Para Perros', desc: 'Fórmulas balanceadas para cachorros, adultos y seniors.' },
        { emoji: '🐈', title: 'Para Gatos', desc: 'Línea específica con taurina y arginina. No es lo mismo que el perro.' },
        { emoji: '🚚', title: 'Envíos CABA', desc: 'Martes y viernes. Pedís cuando querés.' },
    ];

    return (
        <section style={{ backgroundColor: G_WARM_WHITE }} className="py-14 px-4">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>
                    Calidad en cada porción
                </p>
                <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                    Lo que ofrecemos
                </h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map(c => (
                    <div key={c.title}
                        className="rounded-2xl p-5 flex flex-col items-start gap-3 transition-all hover:shadow-md"
                        style={{ backgroundColor: '#fff', border: '1px solid rgba(45,95,52,0.08)', boxShadow: '0 2px 12px rgba(45,95,52,0.05)' }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                            style={{ backgroundColor: 'rgba(45,95,52,0.07)' }}>
                            {c.emoji}
                        </div>
                        <h3 className="gaucho-body font-extrabold text-sm" style={{ color: G_GREEN }}>{c.title}</h3>
                        <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{c.desc}</p>
                        <span className="gaucho-body text-[9px] font-black uppercase tracking-widest mt-auto"
                            style={{ color: G_GOLDEN }}>
                            Ver más →
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ── "Nos importa" Section — Pawsitive style ────────────────────────────── */

function WeCareSection() {
    const bullets = [
        { title: 'Sin cereales ni soja', desc: 'Menos inflamación, mejor digestión y más energía natural.' },
        { title: 'Sin aditivos artificiales', desc: 'Sin colorantes, conservantes ni saborizantes químicos.' },
        { title: 'Ingredientes trazables', desc: 'Producción local argentina. Sabés de dónde viene cada ingrediente.' },
        { title: 'Todas las etapas de vida', desc: 'Fórmulas para cachorros, adultos y seniors.' },
    ];

    return (
        <section style={{ backgroundColor: G_CREAM }} className="py-16 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: foto con blob orgánico */}
                <div className="relative h-80 md:h-[420px]">
                    {/* Blob dorado de fondo */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" preserveAspectRatio="xMidYMid meet">
                        <path
                            d="M210,30 C290,15 375,65 405,150 C435,235 405,340 330,390 C255,440 145,430 75,370 C5,310 -10,195 30,110 C70,25 130,45 210,30Z"
                            fill={G_GOLDEN}
                            opacity="0.25"
                        />
                    </svg>
                    {/* Blob verde pequeño */}
                    <svg className="absolute bottom-4 right-4 w-32 h-32" viewBox="0 0 120 120">
                        <path d="M60,10 C85,5 110,25 115,55 C120,85 100,110 70,115 C40,120 10,100 5,70 C0,40 20,10 60,10Z"
                            fill={G_GREEN} opacity="0.15"/>
                    </svg>

                    {/* Foto persona con mascotas */}
                    <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1601758174493-9c2d3f2baff?w=700&h=600&fit=crop&q=80"
                            alt="Persona cuidando a su mascota"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0"
                            style={{ background: `linear-gradient(to top, ${G_GREEN}99 0%, transparent 50%)` }} />
                        {/* Badge flotante */}
                        <div className="absolute bottom-4 left-4 px-3 py-2 rounded-xl"
                            style={{ backgroundColor: G_GOLDEN }}>
                            <p className="gaucho-body text-[10px] font-black uppercase tracking-widest" style={{ color: G_GREEN }}>
                                🐾 Comida Real
                            </p>
                        </div>
                    </div>

                    {/* Huellas decorativas */}
                    <div className="absolute top-2 right-8 text-2xl opacity-30 select-none">🐾</div>
                </div>

                {/* Right: texto */}
                <div>
                    <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>
                        Calidad que se nota
                    </p>
                    <h2 className="gaucho-title text-4xl md:text-5xl mb-8" style={{ color: G_GREEN }}>
                        Nos importa la salud de tu mascota
                    </h2>

                    <div className="flex flex-col gap-4">
                        {bullets.map((b, i) => (
                            <div key={i}
                                className="rounded-2xl p-4 flex items-start gap-3"
                                style={{ backgroundColor: G_WARM_WHITE, border: '1px solid rgba(45,95,52,0.08)' }}>
                                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: G_GREEN }}>
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                                <div>
                                    <p className="gaucho-body font-extrabold text-sm mb-0.5" style={{ color: G_GREEN }}>{b.title}</p>
                                    <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Main GauchoHeader ──────────────────────────────────────────────────── */

export interface GauchoHeaderProps {
    name: string;
    logo?: string;
    banner?: string;
    description?: string;
    address?: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    totalItems: number;
    announcement?: string | null;
    onSearch: (q: string) => void;
    onChatClick: () => void;
    onCartClick: () => void;
    hideChatButton?: boolean;
}

export function GauchoHeader({
    name, logo, address, whatsapp, instagram, facebook,
    totalItems, announcement, onSearch, onChatClick, onCartClick, hideChatButton
}: GauchoHeaderProps) {
    return (
        <header>
            {announcement && (
                <div className="px-4 py-2.5 text-center" style={{ backgroundColor: G_GOLDEN }}>
                    <p className="gaucho-body text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: G_GREEN }}>
                        {announcement}
                    </p>
                </div>
            )}

            {/* Sticky nav */}
            <div className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: G_GREEN }}>
                <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center gap-3">
                    {logo && (
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: G_GOLDEN }}>
                            <img src={logo} alt={name} className="w-full h-full object-cover" />
                        </div>
                    )}
                    <span className="hidden md:block gaucho-title text-base leading-none flex-shrink-0" style={{ color: G_GOLDEN }}>
                        {name}
                    </span>

                    <div className="relative flex-1 max-w-sm mx-auto">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: G_GREEN }} />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-2xl py-2.5 pl-10 pr-4 text-sm font-semibold focus:outline-none transition-all placeholder:font-normal"
                            style={{ backgroundColor: G_CREAM, color: G_GREEN, fontFamily: 'Montserrat, Inter, sans-serif', fontSize: '14px' }}
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick}
                                className="h-10 px-3 md:px-4 flex items-center gap-2 rounded-xl transition-all hover:opacity-90 active:scale-95"
                                style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.4)' }}>
                                <AssistantIcon className="w-5 h-5" />
                                <span className="hidden md:inline gaucho-body text-[10px] font-black uppercase tracking-widest">Asistente IA</span>
                            </button>
                        )}
                        {instagram && (
                            <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:opacity-70"
                                style={{ color: G_GOLDEN }}>
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {facebook && (
                            <a href={getSocialLink(facebook, 'facebook')} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:opacity-70"
                                style={{ color: G_GOLDEN }}>
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:opacity-70"
                                style={{ color: G_WARM_WHITE }} aria-label="WhatsApp">
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    <button onClick={onCartClick}
                        className="relative ml-auto h-10 px-3 md:px-5 flex items-center gap-2 rounded-xl transition-all hover:opacity-90 active:scale-95 shadow-lg"
                        style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                        <ShoppingCart className="w-5 h-5" />
                        <span className="hidden md:inline gaucho-body text-[10px] font-black uppercase tracking-widest">Mi Pedido</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2"
                                style={{ backgroundColor: G_GREEN, borderColor: G_CREAM }}>
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <HeroSection name={name} logo={logo} whatsapp={whatsapp} address={address} />
            <FeatureCardsStrip />
            <WeCareSection />
        </header>
    );
}
