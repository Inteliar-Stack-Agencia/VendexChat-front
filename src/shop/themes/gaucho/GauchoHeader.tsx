import { Search, Instagram, Facebook, ShoppingCart, Check, ChevronRight } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

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

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function HeroSection({ whatsapp, address }: { whatsapp?: string; address?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#';

    return (
        <>
            <style>{`
                @keyframes gaucho-float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50%       { transform: translateY(22px) rotate(4deg); }
                }
                @keyframes gaucho-float-rev {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50%       { transform: translateY(-18px) rotate(-3deg); }
                }
                .gnp-blob-bg::before {
                    content: '';
                    position: absolute;
                    bottom: -80px; right: -120px;
                    width: 420px; height: 420px;
                    background: var(--gnp-golden, #D4A574);
                    border-radius: 45% 55% 52% 48% / 48% 45% 55% 52%;
                    opacity: 0.28;
                    animation: gaucho-float 7s ease-in-out infinite;
                    pointer-events: none;
                }
                .gnp-blob-bg::after {
                    content: '';
                    position: absolute;
                    top: -130px; left: -80px;
                    width: 340px; height: 340px;
                    background: var(--gnp-olive, #4E7A52);
                    border-radius: 55% 45% 48% 52% / 52% 48% 45% 55%;
                    opacity: 0.18;
                    animation: gaucho-float-rev 9s ease-in-out infinite;
                    pointer-events: none;
                }
                .gnp-deco { animation: gaucho-float 5s ease-in-out infinite; }
                .gnp-deco-2 { animation: gaucho-float-rev 6s ease-in-out infinite; }
                .gnp-benefit-card:hover .gnp-card-bar { transform: scaleX(1); }
                .gnp-benefit-card .gnp-card-bar { transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; }
            `}</style>

            <section
                className="gnp-blob-bg relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${G_CREAM} 0%, ${G_BEIGE}88 100%)`,
                    minHeight: '100vh',
                    '--gnp-golden': G_GOLDEN,
                    '--gnp-olive': G_OLIVE,
                } as React.CSSProperties}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24 md:py-16 relative z-10">

                    {/* ── Left text ── */}
                    <div className="flex flex-col gap-5 text-center md:text-left order-2 md:order-1">
                        <span className="gaucho-body text-sm font-semibold tracking-widest uppercase self-center md:self-start"
                            style={{ color: G_SALMON }}>
                            🐕 Nutrición Natural
                        </span>

                        <h1 className="gaucho-subtitle font-extrabold leading-tight"
                            style={{ fontSize: 'clamp(2.4rem, 7vw, 4rem)', color: G_DARK, letterSpacing: '-1px' }}>
                            Comida real,<br />vida real.
                        </h1>

                        <p className="gaucho-body leading-relaxed max-w-md mx-auto md:mx-0"
                            style={{ fontSize: '1.05rem', color: '#555', fontWeight: 300 }}>
                            Ingredientes naturales, sin aditivos artificiales y hecho con amor para ellos.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <a href="#productos"
                                className="gaucho-body font-semibold inline-flex items-center gap-2 px-8 py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95"
                                style={{
                                    background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_SALMON} 100%)`,
                                    color: '#fff',
                                    boxShadow: `0 8px 25px ${G_CORAL}40`,
                                    fontSize: '1rem',
                                }}>
                                Ver productos
                            </a>
                            {whatsapp && (
                                <a href={waLink} target="_blank" rel="noreferrer"
                                    className="gaucho-body font-semibold inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-all hover:opacity-85"
                                    style={{ border: `2px solid ${G_GREEN}`, color: G_GREEN, fontSize: '0.95rem' }}>
                                    <WhatsAppIcon className="w-4 h-4" />
                                    Pedir ahora
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                            {['✓ 100% Natural', '✓ Sin Aditivos', '✓ Hecho con Amor'].map(b => (
                                <span key={b} className="gaucho-body text-sm font-semibold" style={{ color: G_GREEN }}>
                                    {b}
                                </span>
                            ))}
                        </div>

                        {address && (
                            <p className="gaucho-body text-xs" style={{ color: G_BROWN }}>📍 {address}</p>
                        )}
                    </div>

                    {/* ── Right blob + pet ── */}
                    <div className="relative flex items-center justify-center order-1 md:order-2" style={{ minHeight: '440px' }}>
                        {/* Main blob */}
                        <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px]"
                            style={{
                                background: `linear-gradient(135deg, ${G_GREEN} 0%, ${G_OLIVE} 100%)`,
                                borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
                                boxShadow: `0 24px 60px ${G_GREEN}35`,
                            }} />

                        {/* Coral accent blob */}
                        <div className="gnp-deco-2 absolute w-28 h-28"
                            style={{
                                bottom: '6%', left: '6%',
                                background: G_CORAL,
                                borderRadius: '60% 40% 55% 45% / 42% 58% 42% 58%',
                                opacity: 0.88,
                                boxShadow: `0 8px 24px ${G_CORAL}45`,
                            }} />

                        {/* Pet photo — screen blend */}
                        <div className="absolute z-10" style={{ width: '72%', bottom: 0 }}>
                            <img
                                src="/gaucho/hero-puppy.png.png"
                                alt="Cachorro feliz"
                                className="w-full object-contain"
                                style={{ mixBlendMode: 'screen' }}
                            />
                        </div>

                        {/* Floating card: Carne Real */}
                        <div className="gnp-deco absolute z-20 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
                            style={{ top: '16%', left: '0', border: `1.5px solid ${G_BEIGE}` }}>
                            <span className="text-lg">🥩</span>
                            <div>
                                <p className="gaucho-body text-[9px] font-bold uppercase" style={{ color: G_GREEN }}>Carne Real</p>
                                <p className="gaucho-body text-[8px]" style={{ color: G_BROWN, opacity: 0.55 }}>Primer ingrediente</p>
                            </div>
                        </div>

                        {/* Floating card: Sin Cereales */}
                        <div className="gnp-deco-2 absolute z-20 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
                            style={{ top: '42%', right: '0', border: `1.5px solid ${G_BEIGE}` }}>
                            <span className="text-lg">🌿</span>
                            <div>
                                <p className="gaucho-body text-[9px] font-bold uppercase" style={{ color: G_GREEN }}>Sin Cereales</p>
                                <p className="gaucho-body text-[8px]" style={{ color: G_BROWN, opacity: 0.55 }}>100% libre</p>
                            </div>
                        </div>

                        {/* Leaf decorations */}
                        <div className="gnp-deco absolute z-20 text-2xl select-none" style={{ top: '8%', right: '18%' }}>🌿</div>
                        <div className="gnp-deco-2 absolute z-20 text-xl select-none" style={{ bottom: '28%', left: '4%' }}>🍃</div>
                    </div>

                </div>
            </section>
        </>
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
        <section id="beneficios" className="relative overflow-hidden py-24 px-6 md:px-12" style={{ backgroundColor: '#fff' }}>
            {/* Decorative blob */}
            <div className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none"
                style={{
                    background: G_GOLDEN,
                    borderRadius: '55% 45% 48% 52% / 52% 48% 45% 55%',
                    opacity: 0.12,
                }} />

            <div className="max-w-6xl mx-auto relative z-10">
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
                            className="gnp-benefit-card group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            style={{
                                backgroundColor: G_CREAM,
                                border: `2px solid transparent`,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = G_SALMON)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
                        >
                            {/* Coral top bar */}
                            <div className="gnp-card-bar absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                style={{ background: `linear-gradient(90deg, ${G_CORAL}, ${G_SALMON})` }} />

                            <div className="text-5xl mb-5">{b.icon}</div>
                            <h3 className="gaucho-subtitle font-bold text-xl mb-3" style={{ color: G_GREEN }}>{b.title}</h3>
                            <p className="gaucho-body text-sm leading-relaxed" style={{ color: '#666' }}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Nosotros ─────────────────────────────────────────────────────────────── */

function AboutSection() {
    const highlights = [
        { icon: '🥕', title: 'Ingredientes Trazables', desc: 'Sabés exactamente qué come tu mascota' },
        { icon: '⚡', title: 'Resultados Visibles', desc: 'Mejor pelaje, energía y digestión' },
        { icon: '🔬', title: 'Fórmulas Científicas', desc: 'Desarrolladas por especialistas' },
        { icon: '🚚', title: 'Entrega Rápida', desc: 'A tu puerta, fresco y listo' },
    ];

    return (
        <section id="nosotros" className="relative overflow-hidden py-24 px-6 md:px-12"
            style={{ background: `linear-gradient(135deg, ${G_CREAM} 0%, ${G_GOLDEN}18 100%)` }}>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

                {/* Left: blob + photo */}
                <div className="relative flex items-center justify-center" style={{ minHeight: '440px' }}>
                    {/* Blob */}
                    <div className="absolute w-80 h-80"
                        style={{
                            background: `linear-gradient(135deg, ${G_OLIVE} 0%, #68BE4E 100%)`,
                            borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
                            opacity: 0.88,
                            boxShadow: `0 20px 50px ${G_GREEN}22`,
                        }} />
                    {/* Person photo */}
                    <div className="absolute z-10 w-72 h-72 overflow-hidden" style={{ borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%' }}>
                        <img
                            src="/gaucho/mascots-group.png.png"
                            alt="Familia con mascota"
                            className="w-full h-full object-cover"
                            style={{ mixBlendMode: 'screen' }}
                        />
                    </div>
                </div>

                {/* Right: text */}
                <div className="flex flex-col gap-5">
                    <p className="gaucho-body text-sm font-semibold tracking-widest uppercase" style={{ color: G_SALMON }}>
                        Nuestra historia
                    </p>
                    <h2 className="gaucho-subtitle font-bold" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', color: G_DARK }}>
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
                                <span className="text-2xl flex-shrink-0" style={{ color: G_SALMON }}>{h.icon}</span>
                                <div>
                                    <p className="gaucho-body text-sm font-semibold" style={{ color: G_GREEN }}>{h.title}</p>
                                    <p className="gaucho-body text-xs mt-0.5" style={{ color: '#666' }}>{h.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Wave ─────────────────────────────────────────────────────────────────── */

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

            {/* ── Nav — white with blur ── */}
            <div className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}>
                <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full overflow-hidden border" style={{ borderColor: G_GOLDEN }}>
                            <img src={logo || '/gaucho/logo.png.png'} alt={name} className="w-full h-full object-contain p-0.5 bg-white" />
                        </div>
                        <span className="hidden md:block gaucho-subtitle font-bold text-base" style={{ color: G_GREEN }}>{name}</span>
                    </div>

                    {/* Nav links — desktop */}
                    <nav className="hidden md:flex items-center gap-6 ml-4">
                        {[['#productos', 'Productos'], ['#beneficios', 'Beneficios'], ['#nosotros', 'Nosotros']].map(([href, label]) => (
                            <a key={href} href={href}
                                className="gaucho-body text-sm font-medium transition-colors hover:opacity-60"
                                style={{ color: '#333', textDecoration: 'none' }}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Search */}
                    <div className="relative flex-1 max-w-xs mx-auto md:mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#aaa' }} />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none transition-all"
                            style={{ backgroundColor: G_CREAM, color: G_DARK, fontFamily: 'inherit', border: `1px solid ${G_BEIGE}` }}
                        />
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-1 ml-auto">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick}
                                className="h-9 px-3 flex items-center gap-1.5 rounded-full transition-all hover:opacity-80"
                                style={{ backgroundColor: `${G_CORAL}15`, color: G_CORAL }}>
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
                        {/* Cart — coral gradient circle */}
                        <button onClick={onCartClick}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 ml-1"
                            style={{
                                background: `linear-gradient(135deg, ${G_SALMON} 0%, ${G_CORAL} 100%)`,
                                boxShadow: `0 4px 15px ${G_SALMON}40`,
                            }}>
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
            <Wave from={`${G_BEIGE}88`} to="#fff" />
            <BenefitsSection />
            <Wave from="#fff" to={G_CREAM} flip />
            <AboutSection />
        </header>
    );
}
