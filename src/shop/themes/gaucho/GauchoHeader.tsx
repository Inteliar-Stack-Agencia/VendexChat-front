import { Search, Instagram, ShoppingCart, Package, Heart, Leaf, Lightbulb, ArrowRightLeft, Calculator, Truck, Zap, Shield, Dna } from "lucide-react";
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

/* ── Shared: IG-style section title ─────────────────────────────────────── */

function IgTitle({ label, bold, italic, light = false }: { label: string; bold: string; italic: string; light?: boolean }) {
    return (
        <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: light ? G_GOLDEN : G_CORAL, marginBottom: 14 }}>{label}</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: light ? 'white' : G_DARK, lineHeight: 1.2, margin: 0 }}>
                {bold}<br />
                <em style={{ fontStyle: 'italic', fontWeight: 700, color: light ? G_GOLDEN : G_BROWN }}>{italic}</em>
            </h2>
            <div style={{ width: 36, height: 2.5, backgroundColor: light ? G_GOLDEN : G_GOLDEN, borderRadius: 2, marginTop: 16 }} />
        </div>
    );
}

/* ── Benefits ─────────────────────────────────────────────────────────────── */

function BenefitsSection() {
    const benefits: { Icon: React.ElementType; title: string; desc: string }[] = [
        { Icon: Leaf,   title: 'Ingredientes naturales',        desc: 'Pollo, carne y verduras frescas. Lo que ves en la etiqueta es lo que come tu mascota.' },
        { Icon: Shield, title: 'Sin conservantes artificiales', desc: 'Cero colorantes ni aditivos. Solo lo que la naturaleza ofrece.' },
        { Icon: Zap,    title: 'Más energía y vitalidad',       desc: 'Un sistema inmune fuerte, pelaje brillante y más ganas de jugar.' },
        { Icon: Heart,  title: 'Nutrición balanceada',          desc: 'Fórmulas completas para cada etapa de vida de tu compañero.' },
    ];

    return (
        <section id="beneficios" style={{ backgroundColor: G_CREAM, position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 80 }}>
            <PawPrint style={{ width: 130, height: 130, top: 16, right: '4%', color: G_GREEN, opacity: 0.05, transform: 'rotate(18deg)' }} />
            <PawPrint style={{ width: 80, height: 80, bottom: 32, left: '3%', color: G_GOLDEN, opacity: 0.10, transform: 'rotate(-12deg)' }} />
            <LeafDecor style={{ width: 70, height: 105, top: 24, left: '5%', color: G_GREEN, opacity: 0.07, transform: 'rotate(-22deg)' }} />
            <LeafDecor style={{ width: 55, height: 80, bottom: 16, right: '2%', color: G_OLIVE, opacity: 0.09, transform: 'rotate(28deg)' }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: copy + items */}
                    <div>
                        <IgTitle label="Por qué elegir Gaucho" bold="Elegir ingredientes de calidad" italic="marca la diferencia." />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {benefits.map(({ Icon, title, desc }) => (
                                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                    <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: G_GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 6px 18px ${G_GREEN}30` }}>
                                        <Icon size={20} color="white" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: 14, color: G_DARK, marginBottom: 3 }}>{title}</p>
                                        <p style={{ fontSize: 13, color: '#777', lineHeight: 1.55 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: 32, fontSize: 12, color: '#999', fontStyle: 'italic' }}>
                            Comida real. Amor que se nota. Todos los días.
                        </p>
                    </div>

                    {/* Right: organic photo */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/dog-cta-transparent.png" alt="Perro feliz con ingredientes naturales" id="op-dog" />
                        <div style={{ position: 'absolute', bottom: '10%', right: '-2%', backgroundColor: 'white', borderRadius: 18, padding: '12px 16px', boxShadow: '0 8px 28px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', gap: 10 }}>
                            <PawPrint style={{ width: 28, height: 28, color: G_CORAL, position: 'static' }} />
                            <div>
                                <p style={{ fontWeight: 800, color: G_GREEN, fontSize: 17, lineHeight: 1 }}>+500</p>
                                <p style={{ fontSize: 10, color: '#999' }}>mascotas felices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── How it works ─────────────────────────────────────────────────────────── */

function HowItWorksSection() {
    const steps = [
        { Icon: Package, title: 'Elegís tu menú',  desc: 'Seleccioná el plan ideal para el peso y etapa de vida de tu mascota.' },
        { Icon: Leaf,    title: 'Lo preparamos',   desc: 'Con ingredientes frescos del día, sin conservantes ni rellenos.' },
        { Icon: Truck,   title: 'Lo recibís',      desc: 'A tu puerta, fresco y listo para servir. Pequeños cambios, grandes diferencias.' },
    ];

    return (
        <section style={{ backgroundColor: G_DARK, position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 80 }}>
            <LeafDecor style={{ width: 90, height: 135, top: 8, left: '1%', color: G_OLIVE, opacity: 0.14, transform: 'rotate(-12deg)' }} />
            <LeafDecor style={{ width: 65, height: 95, bottom: 8, right: '1%', color: G_GOLDEN, opacity: 0.11, transform: 'rotate(22deg)' }} />
            <PawPrint style={{ width: 130, height: 130, top: '25%', right: '6%', color: 'white', opacity: 0.03 }} />
            <PawPrint style={{ width: 80, height: 80, bottom: '18%', left: '4%', color: G_GOLDEN, opacity: 0.07 }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left: organic ingredients photo */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/ingredients.png.png" alt="Ingredientes naturales frescos" id="op-ingredients" />
                        <div style={{ position: 'absolute', top: '-4%', left: '-4%', backgroundColor: G_GOLDEN, borderRadius: 14, padding: '10px 16px', boxShadow: `0 8px 24px ${G_GOLDEN}50` }}>
                            <p style={{ fontWeight: 700, color: G_DARK, fontSize: 13 }}>🌿 Ingredientes reales</p>
                        </div>
                    </div>

                    {/* Right: steps */}
                    <div>
                        <IgTitle label="Así de fácil" bold="La diferencia muchas" italic="veces se nota." light />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                            {steps.map(({ Icon, title, desc }, i) => (
                                <div key={title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                                        <div style={{ width: 50, height: 50, borderRadius: '50%', background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_GOLDEN} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 8px 20px ${G_CORAL}40` }}>
                                            <Icon size={20} color="white" strokeWidth={1.5} />
                                        </div>
                                        {i < steps.length - 1 && <div style={{ width: 1, height: 28, backgroundColor: `${G_GOLDEN}30`, marginTop: 4 }} />}
                                    </div>
                                    <div style={{ paddingTop: 6 }}>
                                        <p style={{ fontWeight: 700, fontSize: 16, color: 'white', marginBottom: 5 }}>{title}</p>
                                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.60)', lineHeight: 1.6 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: 36, fontSize: 12, color: `${G_GOLDEN}99`, fontStyle: 'italic' }}>
                            Elegí comida real. Elegí salud y bienestar para tu mejor amigo.
                        </p>
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
        { n: '0',    label: 'Conservantes' },
        { n: '🇦🇷',  label: 'Hecho en Argentina' },
    ];

    return (
        <section id="nosotros" style={{ backgroundColor: G_BEIGE, position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 80 }}>
            <PawPrint style={{ width: 150, height: 150, top: '4%', right: '1%', color: G_GREEN, opacity: 0.05, transform: 'rotate(14deg)' }} />
            <PawPrint style={{ width: 90, height: 90, bottom: '6%', left: '2%', color: G_CORAL, opacity: 0.07, transform: 'rotate(-18deg)' }} />
            <LeafDecor style={{ width: 80, height: 120, bottom: '4%', right: '5%', color: G_GREEN, opacity: 0.07, transform: 'rotate(14deg)' }} />
            <LeafDecor style={{ width: 60, height: 88, top: '8%', left: '2%', color: G_OLIVE, opacity: 0.09, transform: 'rotate(-28deg)' }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    {/* Left: organic photo */}
                    <div style={{ position: 'relative' }}>
                        <OrganicPhoto src="/gaucho/woman-cat.png.png" alt="Amor entre mascota y familia" id="op-mascots" />
                        <PawPrint style={{ width: 65, height: 65, bottom: '6%', right: '-2%', color: G_CORAL, opacity: 0.22 }} />
                        <LeafDecor style={{ width: 46, height: 68, top: '4%', left: '-1%', color: G_GREEN, opacity: 0.18, transform: 'rotate(-14deg)' }} />
                    </div>

                    {/* Right: text */}
                    <div>
                        <IgTitle label="Nuestra historia" bold="Ya no son mascotas." italic="Son familia." />
                        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
                            Ellos dependen completamente de nosotros. Y eso incluye lo que comen todos los días.
                        </p>
                        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, marginBottom: 36 }}>
                            Somos una marca argentina que cree que cada mascota merece ingredientes reales, sin rellenos ni artificiales. Cada receta es formulada para el equilibrio perfecto de nutrientes en cada etapa de vida.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {stats.map(s => (
                                <div key={s.label} style={{ backgroundColor: 'white', borderRadius: 14, padding: '16px 12px', textAlign: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
                                    <p style={{ fontWeight: 800, color: G_GREEN, fontSize: 20, lineHeight: 1.1 }}>{s.n}</p>
                                    <p style={{ fontSize: 10, color: '#999', marginTop: 4 }}>{s.label}</p>
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
