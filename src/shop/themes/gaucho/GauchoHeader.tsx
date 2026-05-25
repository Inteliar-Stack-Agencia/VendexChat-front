import { Search, Instagram, ShoppingCart, Package, Heart, Leaf, Lightbulb, ArrowRightLeft, Calculator, Truck, ChefHat, Zap } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const G_GREEN  = '#2D5F34';
const G_OLIVE  = '#4E7A52';
const G_GOLDEN = '#D4A574';
const G_CREAM  = '#F5EDDB';
const G_BEIGE  = '#EADFCF';
const G_BROWN  = '#6A3E24';
const G_CORAL  = '#E97B63';
const G_SALMON = '#F29B7A';
const G_DARK   = '#1A3A20';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

/* ── Hero ──────────────────────────────────────────────────────────────────── */

function HeroSection({ whatsapp }: { whatsapp?: string; address?: string }) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer un pedido de Gaucho Natural Pet 🐾')}`
        : '#productos';

    return (
        <section style={{ display: 'block', lineHeight: 0, marginTop: '-64px' }}>
            <a href={waLink} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noreferrer' : undefined}
                style={{ display: 'block', lineHeight: 0 }}>
                <picture style={{ display: 'block', width: '100%' }}>
                    <source media="(max-width: 768px)" srcSet="/gaucho/heromobile.png" />
                    <img
                        src="/gaucho/hero (2).png"
                        alt="Gaucho Natural Pet — Comida real, vida real."
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </picture>
            </a>
        </section>
    );
}

function Section2() {
    return (
        <section id="beneficios" style={{ lineHeight: 0, display: 'block' }}>
            <picture>
                <source media="(max-width: 768px)" srcSet="/gaucho/comidanaturalmobile.png" />
                <img src="/gaucho/seccion2.png" alt="Comida natural" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </picture>
        </section>
    );
}

function Section3() {
    return (
        <section style={{ lineHeight: 0, display: 'block' }}>
            <picture>
                <source media="(max-width: 768px)" srcSet="/gaucho/ultraprocesadosmobile.png" />
                <img src="/gaucho/seccion3.png" alt="Menos ultraprocesados" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </picture>
        </section>
    );
}

function Section4({ whatsapp }: { whatsapp?: string }) {
    return (
        <section id="transicion" style={{ lineHeight: 0, display: 'block' }}>
            <picture>
                <source media="(max-width: 768px)" srcSet="/gaucho/transicionmobile.png" />
                <img src="/gaucho/seccion4.png" alt="Transición a comida natural" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </picture>
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
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, ${G_CORAL} 0%, ${G_GOLDEN} 100%)`, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: G_GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = G_DARK)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = G_GREEN)}>
                    <Icon size={18} color="white" />
                </div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 10, fontWeight: 600, letterSpacing: '0.04em', fontFamily: 'inherit' }}>{label}</span>
        </a>
    );
}

export function GauchoHeader({
    name, logo, address, whatsapp, instagram,
    totalItems, announcement, onSearch, onChatClick, onCartClick, hideChatButton
}: GauchoHeaderProps) {
    return (
        <header>
            {announcement && (
                <div className="px-4 py-2.5 text-center" style={{ backgroundColor: G_CORAL }}>
                    <p className="gaucho-body text-xs font-semibold uppercase tracking-widest text-white">{announcement}</p>
                </div>
            )}

            <div className="sticky top-0 z-50"
                style={{ backgroundColor: 'rgba(45,95,52,0.97)', backdropFilter: 'blur(14px)', boxShadow: '0 2px 16px rgba(0,0,0,0.18)' }}>
                <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-4">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo || '/gaucho/logo-transparent.png'} alt={name} style={{ height: 52, width: 'auto', objectFit: 'contain' }} />
                    </div>

                    <nav className="hidden md:flex items-center gap-4 ml-3">
                        <NavHighlight href="#productos"   icon={Package}        label="Productos"   />
                        <NavHighlight href="#beneficios"  icon={Heart}          label="Beneficios"  />
                        <NavHighlight href="#tips"        icon={Lightbulb}      label="Tips"        />
                        <NavHighlight href="#transicion"  icon={ArrowRightLeft} label="Transición"  />
                        <NavHighlight href="#calculadora" icon={Calculator}     label="Calculadora" />
                        <NavHighlight href="#envios"      icon={Truck}          label="Envíos"      />
                    </nav>

                    <div className="relative flex-1 max-w-xs mx-auto md:mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
                        <input type="text" placeholder="Buscar..." onChange={e => onSearch(e.target.value)}
                            className="w-full rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none"
                            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', fontFamily: 'inherit', border: '1px solid rgba(255,255,255,0.2)' }} />
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick} className="h-9 px-3 flex items-center gap-1.5 rounded-full hover:opacity-80"
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
                        <a href="#productos"
                            className="hidden lg:flex items-center gap-2 px-4 h-10 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: G_CORAL, color: 'white', whiteSpace: 'nowrap' }}>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Tienda on line
                        </a>
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
            <Section2 />
            <section style={{ lineHeight: 0, display: 'block' }}>
                <picture>
                    <source media="(max-width: 768px)" srcSet="/gaucho/ultraprocesadosmobile.png" />
                    <img src="/gaucho/ultraprocesados.webp" alt="Menos ultraprocesados" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
                </picture>
            </section>
            <Section4 whatsapp={whatsapp} />
            <section style={{ lineHeight: 0, display: 'block' }}>
                <img src="/gaucho/perros.png" alt="Perros" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </section>
            <section style={{ lineHeight: 0, display: 'block' }}>
                <img src="/gaucho/gatos.png" alt="Gatos" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </section>
            <section style={{ lineHeight: 0, display: 'block' }}>
                <img src="/gaucho/seccion6.png" alt="Compará y elegí lo mejor para tu mascota" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </section>
        </header>
    );
}
