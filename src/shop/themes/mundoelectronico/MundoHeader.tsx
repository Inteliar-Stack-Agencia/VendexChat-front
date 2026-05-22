import { useState, useEffect } from "react";
import { Search, ShoppingCart, Instagram, Smartphone, Laptop, ShoppingBag, Package, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import AssistantIcon from "../../../components/icons/AssistantIcon";
import { getSocialLink } from "../../../utils/format";

const BLUE  = '#00A8FF';
const BLUE2 = '#3A78B5';
const DARK  = '#0F172A';
const WHITE = '#FFFFFF';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

interface Slide {
    id: number;
    type: 'image' | 'design';
    bg: string;
    tag: string;
    title: string;
    subtitle: string;
    chips?: string[];
    icon?: React.ReactNode;
    imageUrl?: string;
    cta?: string;
    ctaHref?: string;
    accent: string;
}

function HeroSlider({ slides, whatsapp }: { slides: Slide[]; whatsapp?: string }) {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const goTo = (index: number) => {
        if (transitioning || index === current) return;
        setTransitioning(true);
        setTimeout(() => {
            setCurrent(index);
            setTransitioning(false);
        }, 300);
    };

    const prev = () => goTo((current - 1 + slides.length) % slides.length);
    const next = () => goTo((current + 1) % slides.length);

    useEffect(() => {
        const t = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrent(c => (c + 1) % slides.length);
                setTransitioning(false);
            }, 300);
        }, 5000);
        return () => clearInterval(t);
    }, [slides.length]);

    const slide = slides[current];

    return (
        <div style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
            {/* Hero image as height sizer — always rendered, invisible on non-hero slides */}
            <img src={slides[0].imageUrl} alt="" aria-hidden style={{ width: '100%', display: 'block', visibility: 'hidden' }} />

            {/* Slide content — absolutely positioned over the sizer */}
            <div style={{
                opacity: transitioning ? 0 : 1,
                transition: 'opacity 0.3s ease',
                background: slide.bg,
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                {/* Decorative circles */}
                <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

                {slide.type === 'image' && slide.imageUrl ? (
                    <img src={slide.imageUrl} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                    <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 w-full" style={{ lineHeight: 'normal' }}>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Text */}
                            <div className="flex-1">
                                <span className="inline-block text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: WHITE }}>
                                    {slide.tag}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-3"
                                    style={{ color: WHITE, letterSpacing: '-0.02em' }}
                                    dangerouslySetInnerHTML={{ __html: slide.title }} />
                                <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                    {slide.subtitle}
                                </p>
                                {slide.chips && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {slide.chips.map(chip => (
                                            <span key={chip} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: WHITE, backdropFilter: 'blur(4px)' }}>
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {slide.cta && (
                                    <a href={slide.ctaHref || (whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(slide.cta)}` : '#')}
                                        target="_blank" rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                                        style={{ backgroundColor: WHITE, color: DARK, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                                        {slide.cta} →
                                    </a>
                                )}
                            </div>
                            {/* Icon */}
                            <div className="hidden md:flex w-64 h-64 items-center justify-center rounded-[40px] flex-shrink-0"
                                style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                                {slide.icon}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Arrows */}
            <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: WHITE, zIndex: 10 }}>
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: WHITE, zIndex: 10 }}>
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10, lineHeight: 'normal' }}>
                {slides.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)}
                        style={{
                            width: i === current ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: i === current ? WHITE : 'rgba(255,255,255,0.4)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: 0,
                        }} />
                ))}
            </div>
        </div>
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
    name, logo, banner, whatsapp, instagram,
    totalItems, onSearch, onChatClick, onCartClick, hideChatButton,
}: MundoHeaderProps) {

    const slides: Slide[] = [
        {
            id: 1,
            type: 'image',
            imageUrl: 'https://images.vendexchat.app/mundoelectronico/hero1.webp',
            bg: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`,
            tag: 'Celulares',
            title: 'Reparación de celulares',
            subtitle: '',
            accent: BLUE,
        },
        {
            id: 2,
            type: 'image',
            imageUrl: 'https://images.vendexchat.app/mundoelectronico/pc2.webp',
            bg: `linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)`,
            tag: 'Notebooks & PCs',
            title: '',
            subtitle: '',
            accent: '#3A78B5',
        },
        {
            id: 3,
            type: 'image',
            imageUrl: 'https://images.vendexchat.app/mundoelectronico/mobileinteliar.webp',
            bg: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)`,
            tag: 'Inteliar',
            title: '',
            subtitle: '',
            accent: '#6366F1',
        },
        {
            id: 4,
            type: 'image',
            imageUrl: 'https://images.vendexchat.app/mundoelectronico/ecommerce2.webp',
            bg: `linear-gradient(135deg, #0a1628 0%, #0f2040 100%)`,
            tag: 'Punto de Retiro y Envío',
            title: '',
            subtitle: '',
            accent: '#00A8FF',
        },
        {
            id: 5,
            type: 'image',
            imageUrl: 'https://images.vendexchat.app/mundoelectronico/seccion7.webp',
            bg: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)`,
            tag: 'Inteliar',
            title: '',
            subtitle: '',
            accent: '#6366F1',
        },
    ];

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

            {/* Hero Slider */}
            <HeroSlider slides={slides} whatsapp={whatsapp} />
        </header>
    );
}
