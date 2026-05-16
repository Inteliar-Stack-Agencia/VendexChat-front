import { Search, Instagram, ShoppingCart } from "lucide-react";
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
        <section style={{ lineHeight: 0, display: 'block', backgroundColor: '#F5EDDB' }}>
            <a href={waLink} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noreferrer' : undefined}
                style={{ display: 'block', lineHeight: 0 }}>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/gaucho/gaucho_banner_mobile_780x1360.jpg" />
                    <img
                        src="/gaucho/gaucho_banner_desktop_2880x1240.jpg"
                        alt="Gaucho Natural Pet — Comida real, vida real."
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </picture>
            </a>
        </section>
    );
}

/* ── Benefits ─────────────────────────────────────────────────────────────── */

function BenefitsSection() {
    const items = [
        { icon: '🥩', title: 'Ingredientes Reales', desc: 'Pollo, carne y verduras frescas. Lo que ves en la etiqueta es lo que come tu mascota.' },
        { icon: '✨', title: 'Sin Cereales', desc: 'Sin maíz ni trigo. Mejor digestión, menos inflamación y más energía natural.' },
        { icon: '🛡️', title: 'Sin Aditivos', desc: 'Sin colorantes, conservantes ni saborizantes artificiales. Solo naturaleza pura.' },
        { icon: '💪', title: 'Más Energía', desc: 'Nutrición completa que fortalece el sistema inmune y devuelve vitalidad.' },
        { icon: '🌍', title: '100% Natural', desc: 'Hecho en Argentina con ingredientes frescos y trazables. Sabés de dónde viene.' },
        { icon: '❤️', title: 'Hecho con Amor', desc: 'Cada porción preparada con cuidado pensando en el bienestar de tu mascota.' },
    ];

    return (
        <section id="beneficios" className="relative overflow-hidden" style={{ backgroundColor: '#ffffff', paddingTop: '1rem' }}>
            <div style={{
                position: 'absolute', top: '-8%', right: '-6%',
                width: '320px', height: '320px',
                backgroundColor: G_GOLDEN,
                borderRadius: '52% 48% 45% 55% / 50% 58% 42% 50%',
                opacity: 0.08, pointerEvents: 'none',
            }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 relative" style={{ zIndex: 10 }}>
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: G_SALMON }}>
                        Por qué elegir Gaucho
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: G_DARK }}>
                        Beneficios Reales
                    </h2>
                    <p className="gaucho-body mt-3 leading-relaxed" style={{ color: '#666', fontSize: '1.05rem' }}>
                        Ingredientes naturales que hacen la diferencia en la salud de tu mascota.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {items.map((b) => (
                        <div key={b.title}
                            className="group relative rounded-3xl p-8 overflow-hidden"
                            style={{ backgroundColor: G_CREAM, boxShadow: '0 4px 24px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${G_GREEN}20`; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'; }}
                        >
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', backgroundColor: G_CORAL, borderRadius: '50%', opacity: 0.1 }} />
                            <div className="text-5xl mb-5">{b.icon}</div>
                            <h3 className="gaucho-subtitle font-bold text-xl mb-3" style={{ color: G_GREEN }}>{b.title}</h3>
                            <p className="gaucho-body text-sm leading-relaxed" style={{ color: '#666' }}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CurveUp from="#ffffff" to={G_CREAM} />
        </section>
    );
}

/* ── About ─────────────────────────────────────────────────────────────────── */

function AboutSection() {
    const highlights = [
        { icon: '🥕', title: 'Ingredientes Trazables', desc: 'Sabés exactamente qué come tu mascota' },
        { icon: '⚡', title: 'Resultados Visibles', desc: 'Mejor pelaje, energía y digestión' },
        { icon: '🔬', title: 'Fórmulas Científicas', desc: 'Desarrolladas por especialistas' },
        { icon: '🚚', title: 'Entrega Rápida', desc: 'A tu puerta, fresco y listo' },
    ];

    return (
        <section id="nosotros" className="relative overflow-hidden" style={{ backgroundColor: G_CREAM, paddingTop: '1rem' }}>
            <div style={{ position: 'absolute', bottom: '-15%', left: '-12%', width: '380px', height: '380px', backgroundColor: G_GREEN, borderRadius: '55% 45% 50% 50% / 48% 52% 48% 52%', opacity: 0.06, pointerEvents: 'none' }} />

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 relative" style={{ zIndex: 10 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                        <div style={{
                            position: 'absolute', width: '320px', height: '320px',
                            background: `linear-gradient(135deg, ${G_OLIVE} 0%, ${G_GREEN} 100%)`,
                            borderRadius: '48% 52% 55% 45% / 45% 48% 52% 55%',
                            opacity: 0.85, boxShadow: `0 24px 60px ${G_GREEN}28`,
                        }} />
                        <div style={{ position: 'absolute', zIndex: 10, width: '265px', height: '265px', borderRadius: '48% 52% 55% 45% / 45% 48% 52% 55%', overflow: 'hidden' }}>
                            <img src="/gaucho/mascots-group.png.png" alt="Mascotas felices" className="w-full h-full object-cover" style={{ mixBlendMode: 'screen' }} />
                        </div>
                        <div style={{ position: 'absolute', zIndex: 15, bottom: '10%', right: '10%', width: '64px', height: '64px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontSize: '1.7rem' }}>🐾</div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="gaucho-body text-sm font-semibold tracking-widest uppercase" style={{ color: G_SALMON }}>Nuestra historia</p>
                        <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: G_DARK }}>
                            Nos importa la salud de tu mascota
                        </h2>
                        <p className="gaucho-body leading-relaxed" style={{ color: '#555', fontSize: '1.02rem' }}>
                            Somos una marca argentina dedicada a ofrecer alimento natural de calidad premium para perros y gatos. Creemos que nuestras mascotas merecen ingredientes reales, sin artificiales ni rellenos.
                        </p>
                        <p className="gaucho-body leading-relaxed" style={{ color: '#555', fontSize: '1.02rem' }}>
                            Cada receta es formulada para garantizar el equilibrio perfecto de nutrientes en cada etapa de vida.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            {highlights.map(h => (
                                <div key={h.title} className="flex gap-3 items-start">
                                    <span className="text-2xl flex-shrink-0">{h.icon}</span>
                                    <div>
                                        <p className="gaucho-body text-sm font-semibold" style={{ color: G_GREEN }}>{h.title}</p>
                                        <p className="gaucho-body text-xs mt-0.5" style={{ color: '#666' }}>{h.desc}</p>
                                    </div>
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

            {/* ── Nav — blanco, acorde al banner crema ── */}
            <div className="sticky top-0 z-50"
                style={{ backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center gap-4">
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full overflow-hidden" style={{ border: `2px solid ${G_GREEN}50` }}>
                            <img src={logo || '/gaucho/logo.png.png'} alt={name} className="w-full h-full object-contain p-0.5" />
                        </div>
                        <span className="hidden md:block gaucho-subtitle font-bold text-base" style={{ color: G_DARK }}>{name}</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 ml-4">
                        {[['#productos', 'Productos'], ['#beneficios', 'Beneficios'], ['#nosotros', 'Nosotros']].map(([href, label]) => (
                            <a key={href} href={href} className="gaucho-body text-sm font-medium"
                                style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = G_GREEN)}
                                onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="relative flex-1 max-w-xs mx-auto md:mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#aaa' }} />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none"
                            style={{ backgroundColor: G_CREAM, color: G_DARK, fontFamily: 'inherit', border: `1px solid ${G_BEIGE}` }}
                        />
                    </div>

                    <div className="flex items-center gap-1 ml-auto">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick}
                                className="h-9 px-3 flex items-center gap-1.5 rounded-full hover:opacity-80"
                                style={{ backgroundColor: `${G_CORAL}15`, color: G_CORAL, transition: 'opacity 0.2s' }}>
                                <AssistantIcon className="w-4 h-4" />
                                <span className="hidden lg:inline gaucho-body text-[10px] font-bold uppercase tracking-widest">IA</span>
                            </button>
                        )}
                        {instagram && (
                            <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60"
                                style={{ color: '#555' }}>
                                <Instagram className="w-4 h-4" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60"
                                style={{ color: '#555' }} aria-label="WhatsApp">
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        )}
                        <button onClick={onCartClick}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 ml-1"
                            style={{ background: `linear-gradient(135deg, ${G_SALMON} 0%, ${G_CORAL} 100%)`, boxShadow: `0 4px 15px ${G_SALMON}40`, transition: 'transform 0.2s' }}>
                            <ShoppingCart className="w-5 h-5 text-white" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full"
                                    style={{ backgroundColor: G_GREEN }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <HeroSection whatsapp={whatsapp} address={address} />
            <BenefitsSection />
            <AboutSection />
        </header>
    );
}
