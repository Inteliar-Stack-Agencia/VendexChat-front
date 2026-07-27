import { Search, Instagram, Facebook, ShoppingCart, Calendar, MessageCircle, Truck } from "lucide-react";
import { getSocialLink } from "../../../utils/format";
import { MV_BG, MV_SURFACE, MV_TEXT, MV_TITLE, MV_CTA, MV_BADGE_BG, MV_HIGHLIGHT } from "./morfiViandasColors";

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

interface MorfiViandasHeaderProps {
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
    onPerrosClick?: () => void;
    hideChatButton?: boolean;
    isMorfiEmpresas?: boolean;
}

export function MorfiViandasHeader({
    name, banner, description, whatsapp, instagram, facebook,
    totalItems, onSearch, onChatClick, onCartClick, hideChatButton, isMorfiEmpresas
}: MorfiViandasHeaderProps) {
    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="morfiviandas-body" style={{ backgroundColor: MV_BG }}>
            {/* Nav */}
            <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 md:px-8 py-3 backdrop-blur-md border-b flex-wrap"
                style={{ backgroundColor: 'rgba(249,244,242,0.95)', borderColor: 'rgba(0,0,0,0.06)' }}>
                <span className="morfiviandas-title font-semibold text-xl flex-shrink-0" style={{ color: MV_TITLE }}>
                    {name}
                </span>

                {!isMorfiEmpresas && (
                    <div className="hidden lg:flex items-center gap-6 mx-auto">
                        <a href="#productos" onClick={scrollTo('productos')} className="text-sm font-semibold hover:opacity-70" style={{ color: MV_TEXT }}>Menú Semanal</a>
                        <a href="#como-funciona" onClick={scrollTo('como-funciona')} className="text-sm font-semibold hover:opacity-70" style={{ color: MV_TEXT }}>Cómo Funciona</a>
                        <a href="#planes" onClick={scrollTo('planes')} className="text-sm font-semibold hover:opacity-70" style={{ color: MV_TEXT }}>Planes</a>
                        <a href="#contacto" onClick={scrollTo('contacto')} className="text-sm font-semibold hover:opacity-70" style={{ color: MV_TEXT }}>Contacto</a>
                    </div>
                )}

                <div className="relative flex-1 max-w-[180px] md:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" style={{ color: MV_TEXT }} />
                    <input
                        type="text"
                        placeholder="Buscar viandas..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full rounded-full py-2 pl-9 pr-3 text-sm font-semibold focus:outline-none"
                        style={{ backgroundColor: MV_SURFACE, border: '1px solid rgba(0,0,0,0.1)', color: MV_TEXT }}
                    />
                </div>

                <div className="flex items-center gap-1.5">
                    {whatsapp && !hideChatButton && (
                        <button onClick={onChatClick} aria-label="Asistente IA"
                            className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:opacity-80"
                            style={{ backgroundColor: MV_BADGE_BG, color: MV_CTA }}>
                            <MessageCircle className="w-5 h-5" />
                        </button>
                    )}
                    {whatsapp && hideChatButton && (
                        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, tengo una consulta')}`} target="_blank" rel="noreferrer"
                            aria-label="¿Dudas? Escribinos por WhatsApp"
                            className="h-10 px-3.5 flex items-center gap-1.5 rounded-full text-xs font-bold transition-all hover:opacity-80"
                            style={{ backgroundColor: MV_BADGE_BG, color: MV_CTA }}>
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden md:inline">¿Dudas? Escribinos</span>
                        </a>
                    )}
                    {instagram && (
                        <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer" className="w-10 h-10 hidden sm:flex items-center justify-center rounded-full hover:opacity-70" style={{ color: MV_TEXT }}>
                            <Instagram className="w-5 h-5" />
                        </a>
                    )}
                    {facebook && (
                        <a href={getSocialLink(facebook, 'facebook')} target="_blank" rel="noreferrer" className="w-10 h-10 hidden sm:flex items-center justify-center rounded-full hover:opacity-70" style={{ color: MV_TEXT }}>
                            <Facebook className="w-5 h-5" />
                        </a>
                    )}
                    {whatsapp && (
                        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                            className="w-10 h-10 hidden sm:flex items-center justify-center rounded-full hover:opacity-70" style={{ color: MV_TEXT }}>
                            <WhatsAppIcon className="w-5 h-5" />
                        </a>
                    )}
                    <button onClick={onCartClick} aria-label="Pedir Ahora" className="relative h-10 px-4 flex items-center gap-2 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: MV_CTA }}>
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden md:inline">Pedir Ahora</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2"
                                style={{ backgroundColor: MV_HIGHLIGHT, color: MV_TITLE, borderColor: MV_BG }}>
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Hero */}
            {isMorfiEmpresas ? (
                <section id="hero" className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-14">
                    <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden flex items-center"
                        style={banner
                            ? { backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                            : { background: `linear-gradient(120deg, ${MV_CTA} 0%, ${MV_BADGE_BG} 100%)` }}>
                        {banner && (
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />
                        )}
                        <div className="relative z-10 px-8 md:px-14">
                            <h1 className="morfiviandas-title font-semibold text-2xl md:text-4xl leading-tight mb-5 text-white">
                                Hacé tu pedido de la semana
                            </h1>
                            <a href="#productos" onClick={scrollTo('productos')} className="inline-block px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90"
                                style={{ backgroundColor: MV_TITLE, color: '#fff' }}>
                                Ver Menú
                            </a>
                        </div>
                    </div>
                </section>
            ) : (
                <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center max-w-[1440px] mx-auto px-4 md:px-8 py-10 md:py-16">
                    <div>
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold mb-5" style={{ backgroundColor: MV_HIGHLIGHT, color: MV_TITLE }}>
                            Comida real, hecha en casa
                        </span>
                        <h1 className="morfiviandas-title font-semibold text-3xl md:text-5xl leading-[1.1] mb-5" style={{ color: MV_TITLE }}>
                            Comida casera y natural, todos los días
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed mb-7 max-w-md" style={{ color: MV_TEXT }}>
                            {description || 'Viandas preparadas con ingredientes reales, entregadas frescas en tu puerta.'}
                        </p>
                        <div className="flex gap-3 flex-wrap mb-6">
                            <a href="#productos" onClick={scrollTo('productos')} className="px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                                style={{ backgroundColor: MV_CTA }}>
                                Ver Menú
                            </a>
                            <a href="#como-funciona" onClick={scrollTo('como-funciona')} className="px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-80"
                                style={{ border: `2px solid ${MV_CTA}`, color: MV_CTA }}>
                                Cómo Funciona
                            </a>
                        </div>
                        <div className="flex gap-2.5 flex-wrap">
                            {['100% Natural', 'Casero', 'Entrega a domicilio'].map(b => (
                                <span key={b} className="px-4 py-2 rounded-full text-xs font-bold" style={{ backgroundColor: MV_BADGE_BG, color: MV_CTA }}>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full h-64 md:h-[440px] rounded-3xl overflow-hidden" style={{ backgroundColor: MV_SURFACE }}>
                        {banner ? (
                            <img src={banner} alt={name} className="w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: MV_BADGE_BG }}>
                                <span className="morfiviandas-title text-4xl opacity-40" style={{ color: MV_CTA }}>{name}</span>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Cómo Funciona */}
            {!isMorfiEmpresas && (
                <section id="como-funciona" className="py-12 md:py-14 px-4 md:px-8" style={{ backgroundColor: MV_SURFACE }}>
                    <div className="max-w-[1440px] mx-auto flex gap-8 flex-wrap justify-between">
                        {[
                            { icon: Calendar, title: '1. Elegís tu pack', body: 'Semanal, quincenal o mensual.' },
                            { icon: MessageCircle, title: '2. Coordinás por WhatsApp', body: 'Confirmamos menú, días y dirección.' },
                            { icon: Truck, title: '3. Recibís en tu casa', body: 'Entrega fresca coordinada por WhatsApp.' },
                        ].map(({ icon: Icon, title, body }) => (
                            <div key={title} className="flex-1 min-w-[220px] flex gap-3.5 items-start">
                                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: MV_BADGE_BG }}>
                                    <Icon className="w-5 h-5" style={{ color: MV_CTA }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base mb-1" style={{ color: MV_TITLE }}>{title}</h3>
                                    <p className="text-sm" style={{ color: MV_TEXT }}>{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </header>
    );
}
