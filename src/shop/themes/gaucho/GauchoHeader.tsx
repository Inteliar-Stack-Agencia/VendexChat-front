import { Search, Instagram, Facebook, ShoppingCart, Leaf, Truck, Check, Shield, Heart } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';
const G_MINT = '#EDF5EC';
const G_BROWN = '#6A3E24';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function PawIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <circle cx="7" cy="9" r="1.8" />
            <circle cx="10.5" cy="6" r="1.8" />
            <circle cx="14" cy="6" r="1.8" />
            <circle cx="17" cy="9" r="1.8" />
            <path d="M12 11.5c-2.5 0-5 1.8-5 4.5 0 2 1.5 3 5 3s5-1 5-3c0-2.7-2.5-4.5-5-4.5z" />
        </svg>
    );
}

/* ── Hero Section ───────────────────────────────────────────────────────── */

function HeroSection({ name, logo, address, whatsapp }: {
    name: string; logo?: string; address?: string; whatsapp?: string;
}) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <section
            className="relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${G_MINT} 0%, ${G_CREAM} 65%, ${G_WARM_WHITE} 100%)` }}
        >
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left: Text content */}
                <div className="flex-1 text-center md:text-left">
                    {/* Label pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                        style={{ backgroundColor: 'rgba(212,165,116,0.15)', border: '1px solid rgba(212,165,116,0.35)' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: G_GOLDEN }} />
                        <span className="gaucho-body text-[10px] font-black uppercase tracking-widest" style={{ color: G_GOLDEN }}>
                            Alimento 100% Natural
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="gaucho-title text-5xl md:text-7xl leading-[0.92] mb-5" style={{ color: G_GREEN }}>
                        Cuidá a tu<br />Mascota<br />con Lo Mejor
                    </h1>

                    {/* Subtitle */}
                    <p className="gaucho-body text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm mb-8"
                        style={{ color: G_BROWN }}>
                        Comida real, sin cereales ni aditivos. Para perros y gatos que merecen vivir mejor.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-5">
                        <a
                            href="#productos"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg gaucho-body text-[11px] uppercase tracking-widest"
                            style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}
                        >
                            Ver Productos
                        </a>
                        {whatsapp && (
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold transition-all hover:opacity-80 gaucho-body text-[11px] uppercase tracking-widest"
                                style={{ border: `2px solid ${G_GREEN}`, color: G_GREEN, backgroundColor: 'transparent' }}
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Pedir Ahora
                            </a>
                        )}
                    </div>

                    {/* Address badge */}
                    {address && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: 'rgba(45,95,52,0.07)', border: '1px solid rgba(45,95,52,0.14)' }}>
                            <span className="text-xs">📍</span>
                            <span className="gaucho-body text-[10px] font-semibold" style={{ color: G_GREEN }}>{address}</span>
                        </div>
                    )}
                </div>

                {/* Right: Pet photos */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-56 h-56 md:w-72 md:h-72">
                    {/* Outer dashed ring */}
                    <div className="absolute inset-0 rounded-full"
                        style={{ border: `2px dashed ${G_GOLDEN}45` }} />
                    {/* Main circle — dog photo */}
                    <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden relative z-10"
                        style={{ border: `3px solid ${G_GOLDEN}55` }}>
                        <img
                            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=480&h=480&fit=crop&q=80"
                            alt="Perro feliz con alimento natural"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating: cat photo */}
                    <div className="absolute -bottom-2 -left-2 w-14 h-14 rounded-full overflow-hidden shadow-md z-20"
                        style={{ border: `2px solid ${G_GOLDEN}` }}>
                        <img
                            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=112&h=112&fit=crop&q=80"
                            alt="Gato"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating: leaf badge */}
                    <div className="absolute top-0 -right-2 w-11 h-11 rounded-full flex items-center justify-center shadow-lg z-20"
                        style={{ backgroundColor: G_GREEN, color: G_GOLDEN }}>
                        <Leaf className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div className="overflow-hidden" style={{ height: '40px', marginTop: '-1px' }}>
                <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none" style={{ height: '40px', display: 'block' }}>
                    <path d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z" fill={G_WARM_WHITE} />
                </svg>
            </div>
        </section>
    );
}

/* ── Feature Cards Strip ────────────────────────────────────────────────── */

function FeatureCardsStrip() {
    return (
        <div style={{ backgroundColor: G_WARM_WHITE }} className="py-10 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    {
                        iconBg: 'rgba(212,165,116,0.14)',
                        el: <Leaf className="w-5 h-5" style={{ color: G_GOLDEN }} />,
                        title: 'Alimento Natural',
                        desc: 'Ingredientes reales sin cereales ni aditivos artificiales.',
                    },
                    {
                        iconBg: 'rgba(45,95,52,0.1)',
                        el: <Truck className="w-5 h-5" style={{ color: G_GREEN }} />,
                        title: 'Entregas en CABA',
                        desc: 'Martes y viernes. Pedís cualquier día de la semana.',
                    },
                    {
                        iconBg: 'rgba(106,62,36,0.1)',
                        el: <div style={{ color: G_BROWN }}><PawIcon className="w-5 h-5" /></div>,
                        title: 'Perros & Gatos',
                        desc: 'Líneas especiales formuladas para cada especie y etapa.',
                    },
                ].map(f => (
                    <div key={f.title} className="rounded-2xl p-5 flex items-start gap-4"
                        style={{ backgroundColor: '#fff', border: '1px solid rgba(45,95,52,0.08)', boxShadow: '0 2px 12px rgba(45,95,52,0.06)' }}>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: f.iconBg }}>
                            {f.el}
                        </div>
                        <div>
                            <h3 className="gaucho-body font-extrabold text-sm mb-1" style={{ color: G_GREEN }}>{f.title}</h3>
                            <p className="gaucho-body text-xs leading-relaxed" style={{ color: G_BROWN }}>{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── "We Care" Two-Column Section ───────────────────────────────────────── */

function WeCareSection() {
    const bullets = [
        'Sin cereales, sin soja — menos inflamación y mejor digestión',
        'Sin colorantes ni conservantes artificiales',
        'Ingredientes trazables de producción local argentina',
        'Formulado para todas las etapas de vida',
    ];

    return (
        <section style={{ backgroundColor: G_CREAM }} className="py-16 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left: text */}
                <div>
                    <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>
                        Calidad que se nota
                    </p>
                    <h2 className="gaucho-title text-4xl md:text-5xl mb-6" style={{ color: G_GREEN }}>
                        Nos importa la salud de tu mascota
                    </h2>
                    <div className="flex flex-col gap-3.5">
                        {bullets.map(b => (
                            <div key={b} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: G_GREEN }}>
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                                <p className="gaucho-body text-sm leading-relaxed" style={{ color: G_BROWN }}>{b}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: real pet photo with overlay */}
                <div className="rounded-3xl overflow-hidden h-64 md:h-80 relative shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1601758174493-9c2d3f2baff?w=800&h=600&fit=crop&q=80"
                        alt="Persona cuidando a su mascota"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${G_GREEN}E0 0%, ${G_GREEN}60 45%, transparent 100%)` }} />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                        <p className="gaucho-title text-xl md:text-2xl leading-tight mb-3"
                            style={{ color: G_WARM_WHITE }}>
                            Comida Real Para<br />una Vida Más Sana
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {['100% Natural', 'Sin Cereales', 'Marca Argentina'].map(tag => (
                                <span key={tag}
                                    className="gaucho-body text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                                    style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.3)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Services / "What We Offer" Section ─────────────────────────────────── */

function ServicesSection() {
    const services = [
        { emoji: '🥩', label: 'Alimento Natural', bg: 'rgba(212,165,116,0.15)', border: 'rgba(212,165,116,0.3)' },
        { emoji: '🐕', label: 'Para Perros',       bg: 'rgba(45,95,52,0.1)',    border: 'rgba(45,95,52,0.2)' },
        { emoji: '🐈', label: 'Para Gatos',        bg: 'rgba(106,62,36,0.1)',   border: 'rgba(106,62,36,0.2)' },
        { emoji: '🌿', label: 'Sin Cereales',       bg: 'rgba(85,139,47,0.1)',   border: 'rgba(85,139,47,0.2)' },
        { emoji: '🚚', label: 'Envíos CABA',        bg: 'rgba(21,101,192,0.08)', border: 'rgba(21,101,192,0.2)' },
    ];

    return (
        <section style={{ backgroundColor: G_WARM_WHITE }} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <p className="gaucho-subtitle text-base mb-2" style={{ color: G_GOLDEN }}>
                        Para toda la familia peluda
                    </p>
                    <h2 className="gaucho-title text-4xl md:text-5xl" style={{ color: G_GREEN }}>
                        Lo Que Ofrecemos
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
                    {services.map(s => (
                        <div key={s.label} className="flex flex-col items-center gap-2.5 w-20">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-sm transition-transform hover:scale-105"
                                style={{ backgroundColor: s.bg, border: `2px solid ${s.border}` }}>
                                {s.emoji}
                            </div>
                            <p className="gaucho-body text-[9px] font-black uppercase tracking-widest text-center leading-tight"
                                style={{ color: G_GREEN }}>{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="#productos"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-md gaucho-body text-[11px] uppercase tracking-widest"
                        style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}>
                        Ver Todos los Productos
                    </a>
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
            {/* Announcement Banner */}
            {announcement && (
                <div className="px-4 py-2.5 text-center" style={{ backgroundColor: G_GOLDEN }}>
                    <p className="gaucho-body text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: G_GREEN }}>
                        {announcement}
                    </p>
                </div>
            )}

            {/* Sticky Top Nav — forest green */}
            <div className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: G_GREEN }}>
                <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center gap-3">
                    {/* Logo mini in nav */}
                    {logo && (
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2" style={{ borderColor: G_GOLDEN }}>
                            <img src={logo} alt={name} className="w-full h-full object-cover" />
                        </div>
                    )}

                    {/* Store name (desktop) */}
                    <span className="hidden md:block gaucho-title text-base leading-none flex-shrink-0" style={{ color: G_GOLDEN }}>
                        {name}
                    </span>

                    {/* Search */}
                    <div className="relative flex-1 max-w-sm mx-auto">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: G_GREEN }} />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-2xl py-2.5 pl-10 pr-4 text-sm font-semibold focus:outline-none focus:ring-2 transition-all placeholder:font-normal placeholder:text-sm"
                            style={{
                                backgroundColor: G_CREAM,
                                color: G_GREEN,
                                fontFamily: 'Montserrat, Inter, sans-serif',
                                fontSize: '14px',
                            }}
                        />
                    </div>

                    {/* Action icons */}
                    <div className="flex items-center gap-1">
                        {whatsapp && !hideChatButton && (
                            <button
                                onClick={onChatClick}
                                className="h-10 px-3 md:px-4 flex items-center gap-2 rounded-xl transition-all hover:opacity-90 active:scale-95"
                                style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.4)' }}
                            >
                                <AssistantIcon className="w-5 h-5" />
                                <span className="hidden md:inline gaucho-body text-[10px] font-black uppercase tracking-widest">Asistente IA</span>
                            </button>
                        )}
                        {instagram && (
                            <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:opacity-70"
                                style={{ color: G_GOLDEN }}>
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {facebook && (
                            <a href={getSocialLink(facebook, 'facebook')} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:opacity-70"
                                style={{ color: G_GOLDEN }}>
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:opacity-70"
                                style={{ color: G_WARM_WHITE }}
                                aria-label="WhatsApp">
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    {/* Cart button */}
                    <button
                        onClick={onCartClick}
                        className="relative ml-auto h-10 px-3 md:px-5 flex items-center gap-2 rounded-xl transition-all hover:opacity-90 active:scale-95 shadow-lg"
                        style={{ backgroundColor: G_GOLDEN, color: G_GREEN }}
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="hidden md:inline gaucho-body text-[10px] font-black uppercase tracking-widest">Mi Pedido</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 animate-in zoom-in"
                                style={{ backgroundColor: G_GREEN, borderColor: G_CREAM }}>
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Landing sections */}
            <HeroSection name={name} logo={logo} address={address} whatsapp={whatsapp} />
            <FeatureCardsStrip />
            <WeCareSection />
            <ServicesSection />
        </header>
    );
}
