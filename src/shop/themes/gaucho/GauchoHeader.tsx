import { Search, MapPin, Instagram, Facebook, ShoppingCart } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';

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
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.5-1.5L11 13.1l6.5-6.5L19 8l-8 9z" />
            <circle cx="7" cy="9" r="1.5" />
            <circle cx="10" cy="6" r="1.5" />
            <circle cx="14" cy="6" r="1.5" />
            <circle cx="17" cy="9" r="1.5" />
            <path d="M12 11c-2 0-4 1.5-4 4s1.5 3 4 3 4-1 4-3-2-4-4-4z" />
        </svg>
    );
}

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
    name, logo, banner, description, address, whatsapp, instagram, facebook,
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

                    {/* Search */}
                    <div className="relative flex-1 max-w-sm">
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
                                style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: `1px solid rgba(212,165,116,0.4)` }}
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

                    {/* Cart button — golden CTA */}
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

            {/* Hero Banner */}
            <div className="relative h-56 md:h-72 overflow-hidden" style={{ backgroundColor: G_GREEN }}>
                {banner ? (
                    <img src={banner} alt={name} className="w-full h-full object-cover" loading="eager" decoding="async" />
                ) : (
                    /* Decorative leaf pattern fallback */
                    <div className="w-full h-full" style={{ backgroundColor: G_GREEN }}>
                        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="gaucho-leaves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <path d="M40 8 C28 20, 10 32, 14 52 C18 68, 40 70, 40 70 C40 70, 62 68, 66 52 C70 32, 52 20, 40 8Z" fill="#F5F1EB" opacity="0.7" />
                                    <circle cx="40" cy="70" r="3" fill="#D4A574" opacity="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#gaucho-leaves)" />
                        </svg>
                    </div>
                )}

                {/* Gradient overlay — bottom to top green fade */}
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${G_GREEN}CC 0%, ${G_GREEN}55 45%, transparent 100%)` }} />

                {/* Store profile overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-5">
                    <div className="max-w-[1440px] mx-auto flex items-end gap-4">
                        {/* Logo — round with golden border */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 overflow-hidden shadow-2xl border-4" style={{ borderColor: G_GOLDEN, backgroundColor: G_CREAM }}>
                            {logo ? (
                                <img src={logo} alt={name} className="w-full h-full object-cover" loading="eager" decoding="async" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center gaucho-title text-3xl uppercase" style={{ color: G_GREEN }}>
                                    {name.charAt(0)}
                                </div>
                            )}
                        </div>

                        <div className="flex-1 pb-1">
                            <h1 className="gaucho-title text-3xl md:text-5xl leading-none drop-shadow-md" style={{ color: G_WARM_WHITE }}>
                                {name}
                            </h1>
                            <p className="gaucho-subtitle text-sm md:text-base mt-1 drop-shadow" style={{ color: G_GOLDEN }}>
                                Comida real para una vida más sana y feliz
                            </p>
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                                {address && (
                                    <span className="gaucho-body flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: G_WARM_WHITE, opacity: 0.85 }}>
                                        <MapPin className="w-3 h-3 flex-shrink-0" />
                                        {address}
                                    </span>
                                )}
                                <span className="gaucho-body text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1"
                                    style={{ backgroundColor: 'rgba(212,165,116,0.2)', color: G_GOLDEN, border: '1px solid rgba(212,165,116,0.4)' }}>
                                    <PawIcon className="w-3 h-3" />
                                    Perros & Gatos
                                </span>
                                <span className="gaucho-body text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                                    style={{ backgroundColor: 'rgba(245,241,235,0.15)', color: G_WARM_WHITE, border: '1px solid rgba(245,241,235,0.3)' }}>
                                    🚚 Martes y Viernes · CABA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop description */}
            {description && (
                <div className="max-w-[1440px] mx-auto px-4 pt-4 pb-2 hidden md:block" style={{ backgroundColor: G_CREAM }}>
                    <p className="gaucho-body text-sm font-medium max-w-2xl pl-4 py-1 italic" style={{ color: '#6A3E24', borderLeft: `4px solid ${G_GOLDEN}` }}>
                        {description}
                    </p>
                </div>
            )}

            {/* Section navigation strip */}
            <div className="overflow-x-auto no-scrollbar" style={{ backgroundColor: G_CREAM, borderBottom: '2px solid rgba(45,95,52,0.1)' }}>
                <div className="flex items-center max-w-[1440px] mx-auto w-max md:w-full md:justify-center px-2">
                    {[
                        { label: 'Productos', href: '#productos' },
                        { label: 'Guía de Pesos', href: '#guia-pesos' },
                        { label: 'Tips', href: '#tips' },
                        { label: 'Preguntas', href: '#faq' },
                        { label: 'Testimonios', href: '#testimonios' },
                        { label: 'Envíos', href: '#envios' },
                    ].map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="px-4 md:px-5 py-3 gaucho-body text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all hover:opacity-60 flex-shrink-0"
                            style={{ color: G_GREEN }}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
