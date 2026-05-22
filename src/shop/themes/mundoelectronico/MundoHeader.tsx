import { Search, ShoppingCart, Instagram } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const BLUE  = '#00A8FF';
const BLUE2 = '#3A78B5';
const DARK  = '#0F172A';
const WHITE = '#FFFFFF';

const HERO_URL = 'https://images.vendexchat.app/mundoelectronico/hero1.webp';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export interface MundoHeaderProps {
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

export function MundoHeader({
    name, logo, whatsapp, instagram,
    totalItems, onSearch, onChatClick, onCartClick, hideChatButton,
}: MundoHeaderProps) {
    return (
        <header>
            {/* Navbar */}
            <div className="sticky top-0 z-50"
                style={{ backgroundColor: DARK, borderBottom: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
                <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-4">

                    {logo ? (
                        <img src={logo} alt={name} style={{ height: 40, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                    ) : (
                        <span style={{ color: BLUE, fontWeight: 900, fontSize: 17, letterSpacing: '-0.02em', flexShrink: 0 }}>{name}</span>
                    )}

                    <div className="relative flex-1 max-w-sm mx-auto md:mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(255,255,255,0.35)' }} />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            onChange={e => onSearch(e.target.value)}
                            className="w-full rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none"
                            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: WHITE, border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'inherit' }}
                        />
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                        {whatsapp && !hideChatButton && (
                            <button onClick={onChatClick}
                                className="h-9 px-3 flex items-center gap-1.5 rounded-full hover:opacity-80 transition-opacity"
                                style={{ backgroundColor: `${BLUE}20`, color: WHITE, border: `1px solid ${BLUE}40` }}>
                                <AssistantIcon className="w-4 h-4" />
                                <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-widest">IA</span>
                            </button>
                        )}
                        {instagram && (
                            <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60 transition-opacity"
                                style={{ color: 'rgba(255,255,255,0.7)' }}>
                                <Instagram className="w-4 h-4" />
                            </a>
                        )}
                        {whatsapp && (
                            <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-60 transition-opacity"
                                style={{ color: 'rgba(255,255,255,0.7)' }} aria-label="WhatsApp">
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        )}
                        <button onClick={onCartClick}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 ml-1"
                            style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`, boxShadow: `0 4px 15px ${BLUE}50`, transition: 'transform 0.2s' }}>
                            <ShoppingCart className="w-5 h-5 text-white" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full"
                                    style={{ color: DARK }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section style={{ lineHeight: 0 }}>
                <img src={HERO_URL} alt={name} style={{ width: '100%', display: 'block' }} />
            </section>
        </header>
    );
}
