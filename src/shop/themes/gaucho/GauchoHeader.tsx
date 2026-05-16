import { Search, Instagram, ShoppingCart, Package, Heart, Leaf, Lightbulb, ArrowRightLeft, Calculator, Truck } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const G_GREEN      = '#2D5F34';
const G_OLIVE      = '#4E7A52';
const G_GOLDEN     = '#D4A574';
const G_CREAM      = '#F5EDDB';
const G_BEIGE      = '#EADFCF';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN      = '#6A3E24';
const G_CORAL      = '#E97B63';
const G_SALMON     = '#F29B7A';
const G_DARK       = '#1A3A20';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function LeafSVG({ style }: { style: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 60 90" style={{ ...style, position: 'absolute', pointerEvents: 'none' }} fill={G_OLIVE}>
            <path d="M30,2 C52,2 62,28 52,52 C44,70 30,88 14,86 C2,84 -2,72 4,56 C12,32 10,2 30,2Z" opacity="0.75" />
        </svg>
    );
}

/* ── Organic curve transitions ─────────────────────────────────────────────── */

function CurveDown({ from, to }: { from: string; to: string }) {
    return (
        <div style={{ backgroundColor: from, lineHeight: 0, display: 'block', marginBottom: '-2px' }}>
            <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '110px' }}>
                <path d="M0,0 C360,110 1080,110 1440,0 L1440,110 L0,110 Z" fill={to} />
            </svg>
        </div>
    );
}

function CurveUp({ from, to }: { from: string; to: string }) {
    return (
        <div style={{ backgroundColor: from, lineHeight: 0, display: 'block', marginBottom: '-2px' }}>
            <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '110px' }}>
                <path d="M0,110 C360,0 1080,0 1440,110 L1440,0 L0,0 Z" fill={to} />
            </svg>
        </div>
    );
}

/* ── Hero — banner image ───────────────────────────────────────────────────── */

function HeroSection({ whatsapp }: { whatsapp?: string; address?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#productos';

    return (
        <section style={{ display: 'block', backgroundColor: '#F5EDDB', lineHeight: 0 }}>
            <a href={waLink} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noreferrer' : undefined}
                style={{ display: 'block', lineHeight: 0 }}>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/gaucho/gaucho_cta_mobile_square_780x1360.png" />
                    <img
                        src="/gaucho/gaucho_desktop_2080x1240.png"
                        alt="Gaucho Natural Pet — Comida real, vida real."
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </picture>
            </a>
        </section>
    );
}

/* ── Decorative elements ───────────────────────────────────────────────────── */

function PawPrint({ style }: { style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 100 90" style={{ position: 'absolute', pointerEvents: 'none', ...style }} fill="currentColor">
            <ellipse cx="50" cy="72" rx="22" ry="17" />
            <ellipse cx="20" cy="46" rx="10" ry="13" />
            <ellipse cx="38" cy="33" rx="10" ry="13" />
            <ellipse cx="62" cy="33" rx="10" ry="13" />
            <ellipse cx="80" cy="46" rx="10" ry="13" />
        </svg>
    );
}

function LeafDecor({ style }: { style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 60 90" style={{ position: 'absolute', pointerEvents: 'none', ...style }} fill="currentColor">
            <path d="M30,2 C52,2 62,28 52,52 C44,70 30,88 14,86 C2,84 -2,72 4,56 C12,32 10,2 30,2Z" />
        </svg>
    );
}

/* ── Organic photo clip ────────────────────────────────────────────────────── */

function OrganicPhoto({ src, alt, id, style }: { src: string; alt: string; id: string; style?: React.CSSProperties }) {
    return (
        <div style={{ position: 'relative', width: '100%', ...style }}>
            <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
                <defs>
                    <clipPath id={id} clipPathUnits="objectBoundingBox">
                        {id === 'op-dog'
                            ? <path d="M0.08,0.02 C0.28,-0.04 0.62,0.0 0.85,0.08 C1.08,0.16 1.06,0.42 0.97,0.66 C0.88,0.9 0.72,1.04 0.48,0.98 C0.24,0.92 -0.02,0.86 0.0,0.56 C0.02,0.26 -0.12,0.08 0.08,0.02Z" />
                            : id === 'op-ingredients'
                            ? <path d="M0.12,0.0 C0.36,-0.06 0.7,0.02 0.9,0.14 C1.1,0.26 1.04,0.54 0.95,0.76 C0.86,0.98 0.66,1.06 0.42,0.96 C0.18,0.86 -0.04,0.72 0.02,0.46 C0.08,0.2 -0.12,0.06 0.12,0.0Z" />
                            : <path d="M0.06,0.08 C0.22,-0.06 0.56,0.02 0.8,0.1 C1.04,0.18 1.08,0.46 0.96,0.7 C0.84,0.94 0.62,1.06 0.38,0.96 C0.14,0.86 -0.06,0.7 0.02,0.42 C0.1,0.14 -0.1,0.22 0.06,0.08Z" />
                        }
                    </clipPath>
                </defs>
            </svg>
            <img src={src} alt={alt} style={{ clipPath: `url(#${id})`, width: '100%', height: 'auto', display: 'block' }} />
        </div>
    );
}

/* ── Benefits ─────────────────────────────────────────────────────────────── */

function BenefitsSection() {
    const benefits = [
        { icon: '🥩', title: 'Ingredientes reales', desc: 'Pollo, carne y verduras frescas de origen trazable.' },
        { icon: '🌾', title: 'Sin cereales', desc: 'Mejor digestión, menos inflamación, más energía.' },
        { icon: '🚫', title: 'Sin aditivos', desc: 'Cero colorantes, conservantes ni artificiales.' },
        { icon: '💪', title: 'Más vitalidad', desc: 'Pelaje brillante, energía y sistema inmune fuerte.' },
        { icon: '🇦🇷', title: '100% argentino', desc: 'Producido con ingredientes frescos locales.' },
        { icon: '❤️', title: 'Hecho con amor', desc: 'Cada porción pensada para el bienestar de tu mascota.' },
    ];

    return (
        <section id="beneficios" style={{ backgroundColor: G_CREAM, position: 'relative', overflow: 'hidden', paddingTop: 72, paddingBottom: 72 }}>
            {/* Decorative paw prints */}
            <PawPrint style={{ width: 120, height: 120, top: 20, right: '5%', color: G_GREEN, opacity: 0.06, transform: 'rotate(20deg)' }} />
            <PawPrint style={{ width: 80, height: 80, bottom: 40, left: '3%', color: G_GOLDEN, opacity: 0.12, transform: 'rotate(-15deg)' }} />
            <LeafDecor style={{ width: 80, height: 120, top: 30, left: '8%', color: G_GREEN, opacity: 0.08, transform: 'rotate(-20deg)' }} />
            <LeafDecor style={{ width: 60, height: 90, bottom: 20, right: '3%', color: G_OLIVE, opacity: 0.1, transform: 'rotate(30deg)' }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="gaucho-body text-xs font-bold tracking-widest uppercase mb-3" style={{ color: G_CORAL }}>Por qué elegir Gaucho</p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: G_DARK }}>
                        Comida real para mascotas reales
                    </h2>
                </div>

                {/* Two columns: image left, benefits right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/dog-cta-transparent.png" alt="Perro feliz con ingredientes naturales" id="op-dog" />
                        {/* Floating badge */}
                        <div style={{
                            position: 'absolute', bottom: '8%', right: '-4%',
                            backgroundColor: 'white', borderRadius: 20,
                            padding: '12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            display: 'flex', alignItems: 'center', gap: 10,
                        }}>
                            <span style={{ fontSize: 28 }}>🐾</span>
                            <div>
                                <p className="gaucho-subtitle font-bold" style={{ color: G_GREEN, fontSize: 18, lineHeight: 1 }}>+500</p>
                                <p className="gaucho-body" style={{ color: '#888', fontSize: 11 }}>mascotas felices</p>
                            </div>
                        </div>
                        <PawPrint style={{ width: 60, height: 60, top: '-5%', left: '5%', color: G_CORAL, opacity: 0.2 }} />
                    </div>

                    {/* Benefits grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {benefits.map(b => (
                            <div key={b.title} style={{
                                backgroundColor: 'white', borderRadius: 16,
                                padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${G_GREEN}18`; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; }}>
                                <span style={{ fontSize: 26, flexShrink: 0 }}>{b.icon}</span>
                                <div>
                                    <p className="gaucho-subtitle font-bold" style={{ color: G_DARK, fontSize: 14, marginBottom: 4 }}>{b.title}</p>
                                    <p className="gaucho-body" style={{ color: '#777', fontSize: 12, lineHeight: 1.5 }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── How it works ─────────────────────────────────────────────────────────── */

function HowItWorksSection() {
    const steps = [
        { n: '01', icon: '🛒', title: 'Elegís tu menú', desc: 'Seleccioná el plan ideal para el tamaño y etapa de vida de tu mascota.' },
        { n: '02', icon: '🌿', title: 'Lo preparamos', desc: 'Elaboramos con ingredientes frescos del día, sin conservantes.' },
        { n: '03', icon: '🚚', title: 'Lo recibís', desc: 'Llega a tu puerta fresco, listo para servir. Sin vueltas.' },
    ];

    return (
        <section style={{ backgroundColor: G_DARK, position: 'relative', overflow: 'hidden', paddingTop: 72, paddingBottom: 72 }}>
            {/* Decorative */}
            <LeafDecor style={{ width: 100, height: 150, top: 10, left: '2%', color: G_OLIVE, opacity: 0.15, transform: 'rotate(-10deg)' }} />
            <LeafDecor style={{ width: 70, height: 105, bottom: 10, right: '2%', color: G_GOLDEN, opacity: 0.12, transform: 'rotate(25deg)' }} />
            <PawPrint style={{ width: 140, height: 140, top: '30%', right: '8%', color: 'white', opacity: 0.04, transform: 'rotate(10deg)' }} />
            <PawPrint style={{ width: 90, height: 90, bottom: '20%', left: '5%', color: G_GOLDEN, opacity: 0.08 }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left: title + steps */}
                    <div>
                        <p className="gaucho-body text-xs font-bold tracking-widest uppercase mb-3" style={{ color: G_GOLDEN }}>Así de fácil</p>
                        <h2 className="gaucho-subtitle font-bold mb-10" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: 'white' }}>
                            Cómo funciona
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                            {steps.map((s, i) => (
                                <div key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                                        background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_GOLDEN} 100%)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: `0 8px 24px ${G_CORAL}40`,
                                    }}>
                                        <span style={{ fontSize: 22 }}>{s.icon}</span>
                                    </div>
                                    <div>
                                        <p className="gaucho-body font-bold" style={{ color: G_GOLDEN, fontSize: 11, letterSpacing: '0.1em', marginBottom: 4 }}>PASO {s.n}</p>
                                        <p className="gaucho-subtitle font-bold" style={{ color: 'white', fontSize: 18, marginBottom: 6 }}>{s.title}</p>
                                        <p className="gaucho-body" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div style={{ position: 'absolute', left: 26, marginTop: 54, width: 2, height: 20, backgroundColor: `${G_GOLDEN}30` }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: ingredients photo */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/ingredients.png.png" alt="Ingredientes naturales frescos" id="op-ingredients" />
                        {/* Floating label */}
                        <div style={{
                            position: 'absolute', top: '-5%', left: '-6%',
                            backgroundColor: G_GOLDEN, borderRadius: 16,
                            padding: '10px 16px',
                            boxShadow: `0 8px 24px ${G_GOLDEN}50`,
                        }}>
                            <p className="gaucho-subtitle font-bold" style={{ color: G_DARK, fontSize: 13 }}>🌿 Ingredientes reales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── About ─────────────────────────────────────────────────────────────────── */

function AboutSection() {
    const stats = [
        { n: '+500', label: 'Mascotas felices' },
        { n: '100%', label: 'Natural' },
        { n: '0', label: 'Conservantes' },
        { n: '🇦🇷', label: 'Hecho en Argentina' },
    ];

    return (
        <section id="nosotros" style={{ backgroundColor: G_BEIGE, position: 'relative', overflow: 'hidden', paddingTop: 72, paddingBottom: 72 }}>
            <PawPrint style={{ width: 160, height: 160, top: '5%', right: '1%', color: G_GREEN, opacity: 0.05, transform: 'rotate(15deg)' }} />
            <PawPrint style={{ width: 100, height: 100, bottom: '8%', left: '2%', color: G_CORAL, opacity: 0.07, transform: 'rotate(-20deg)' }} />
            <LeafDecor style={{ width: 90, height: 130, bottom: '5%', right: '6%', color: G_GREEN, opacity: 0.08, transform: 'rotate(15deg)' }} />
            <LeafDecor style={{ width: 65, height: 95, top: '10%', left: '3%', color: G_OLIVE, opacity: 0.1, transform: 'rotate(-30deg)' }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left: image */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/mascots-group.png.png" alt="Nuestras mascotas" id="op-mascots" />
                        <PawPrint style={{ width: 70, height: 70, bottom: '5%', right: '-3%', color: G_CORAL, opacity: 0.25 }} />
                        <LeafDecor style={{ width: 50, height: 75, top: '5%', left: '-2%', color: G_GREEN, opacity: 0.2, transform: 'rotate(-15deg)' }} />
                    </div>

                    {/* Right: text */}
                    <div>
                        <p className="gaucho-body text-xs font-bold tracking-widest uppercase mb-3" style={{ color: G_CORAL }}>Nuestra historia</p>
                        <h2 className="gaucho-subtitle font-bold mb-6" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', color: G_DARK }}>
                            Nos importa la salud de tu mascota
                        </h2>
                        <p className="gaucho-body leading-relaxed mb-4" style={{ color: '#666', fontSize: '1rem' }}>
                            Somos una marca argentina dedicada a ofrecer alimento natural de calidad premium para perros y gatos. Creemos que nuestras mascotas merecen ingredientes reales, sin artificiales ni rellenos.
                        </p>
                        <p className="gaucho-body leading-relaxed mb-10" style={{ color: '#666', fontSize: '1rem' }}>
                            Cada receta es formulada para garantizar el equilibrio perfecto de nutrientes en cada etapa de vida.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map(s => (
                                <div key={s.label} style={{
                                    backgroundColor: 'white', borderRadius: 16, padding: '18px 14px',
                                    textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                                }}>
                                    <p className="gaucho-subtitle font-bold" style={{ color: G_GREEN, fontSize: 22, lineHeight: 1.1 }}>{s.n}</p>
                                    <p className="gaucho-body" style={{ color: '#888', fontSize: 11, marginTop: 4 }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Main GauchoHeader ───────────────────────────────────────────────────── */

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

function NavHighlight({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
    return (
        <a href={href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, textDecoration: 'none' }}>
            <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_GOLDEN} 100%)`,
                padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <div style={{
                    width: '100%', height: '100%', borderRadius: '50%',
                    backgroundColor: G_GREEN,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background-color 0.2s',
                }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = G_DARK)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = G_GREEN)}>
                    <Icon size={15} color="white" />
                </div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 9, fontWeight: 600, letterSpacing: '0.04em', fontFamily: 'inherit' }}>{label}</span>
        </a>
    );
}

export function GauchoHeader({
    name, logo, address, whatsapp, instagram, facebook,
    totalItems, announcement, onSearch, onChatClick, onCartClick, hideChatButton
}: GauchoHeaderProps) {
    return (
        <header>
            {announcement && (
                <div className="px-4 py-2.5 text-center" style={{ backgroundColor: G_CORAL }}>
                    <p className="gaucho-body text-xs font-semibold uppercase tracking-widest text-white">{announcement}</p>
                </div>
            )}

            {/* ── Nav — verde ── */}
            <div className="sticky top-0 z-50"
                style={{ backgroundColor: `rgba(45,95,52,0.97)`, backdropFilter: 'blur(14px)', boxShadow: '0 2px 16px rgba(0,0,0,0.18)' }}>
                <div className="max-w-7xl mx-auto px-5 py-2 flex items-center gap-4">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo || '/gaucho/logo-transparent.png'} alt={name} style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
                    </div>

                    <nav className="hidden md:flex items-center gap-3 ml-3">
                        <NavHighlight href="#productos"   icon={Package}         label="Productos"   />
                        <NavHighlight href="#beneficios"  icon={Heart}           label="Beneficios"  />
                        <NavHighlight href="#nosotros"    icon={Leaf}            label="Nosotros"    />
                        <NavHighlight href="#tips"        icon={Lightbulb}       label="Tips"        />
                        <NavHighlight href="#transicion"  icon={ArrowRightLeft}  label="Transición"  />
                        <NavHighlight href="#calculadora" icon={Calculator}      label="Calculadora" />
                        <NavHighlight href="#envios"      icon={Truck}           label="Envíos"      />
                    </nav>

                    <div className="relative flex-1 max-w-xs mx-auto md:mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none"
                            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', fontFamily: 'inherit', border: '1px solid rgba(255,255,255,0.2)' }}
                        />
                    </div>

                    <div className="flex items-center gap-1 ml-auto">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick}
                                className="h-9 px-3 flex items-center gap-1.5 rounded-full hover:opacity-80"
                                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', transition: 'opacity 0.2s' }}>
                                <AssistantIcon className="w-4 h-4" />
                                <span className="hidden lg:inline gaucho-body text-[10px] font-bold uppercase tracking-widest">IA</span>
                            </button>
                        )}
                        {instagram && (
                            <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60"
                                style={{ color: 'rgba(255,255,255,0.8)' }}>
                                <Instagram className="w-4 h-4" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60"
                                style={{ color: 'rgba(255,255,255,0.8)' }} aria-label="WhatsApp">
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        )}
                        <button onClick={onCartClick}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 ml-1"
                            style={{ background: `linear-gradient(135deg, ${G_SALMON} 0%, ${G_CORAL} 100%)`, boxShadow: `0 4px 15px ${G_SALMON}40`, transition: 'transform 0.2s' }}>
                            <ShoppingCart className="w-5 h-5 text-white" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full"
                                    style={{ backgroundColor: G_CREAM, color: G_DARK }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <HeroSection whatsapp={whatsapp} address={address} />
            <BenefitsSection />
            <HowItWorksSection />
            <AboutSection />
        </header>
    );
}
