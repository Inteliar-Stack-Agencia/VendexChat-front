import { MapPin, MessageCircle } from "lucide-react";

const BLUE      = '#00A8FF';
const BLUE2     = '#3A78B5';
const DARK      = '#0F172A';
const WHITE     = '#FFFFFF';
const LIGHT     = '#F5F7FA';
const GRAY      = '#64748B';
const DARK_TEXT = '#111827';
const GRADIENT  = `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`;
const SHADOW    = '0 10px 30px rgba(0,0,0,0.06)';

const REVIEWS = [
    { name: 'Martín G.', stars: 5, text: 'Me repararon el celular en el día. Excelente atención y precio justo.' },
    { name: 'Carla P.', stars: 5, text: 'Diagnóstico sin cargo como prometieron. Profesionales y honestos.' },
    { name: 'Lucas F.', stars: 5, text: 'Le pusieron SSD a mi notebook y quedó como nueva. Recomiendo 100%.' },
    { name: 'Sofía M.', stars: 5, text: 'Recuperaron datos que pensé que había perdido. Increíbles.' },
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'Lenovo', 'HP', 'Asus'];

const PAQUETERIA = [
    { name: 'Correo Argentino', emoji: '📮' },
    { name: 'Pickit',           emoji: '📦' },
    { name: 'Meli Places',      emoji: '🛒' },
];

function Stars({ n }: { n: number }) {
    return <span style={{ color: '#FBBF24', fontSize: 13 }}>{'★'.repeat(n)}</span>;
}

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

interface MundoInfoSectionsProps {
    whatsapp?: string;
    address?: string;
    instagram?: string;
}

export function MundoInfoSections({ whatsapp, address, instagram }: MundoInfoSectionsProps) {
    const wa = (msg: string) => whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`
        : '#';

    return (
        <div style={{ backgroundColor: WHITE }}>

            {/* SECCIÓN 7 — Reseñas */}
            <section className="py-20 px-4" style={{ backgroundColor: LIGHT }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-4">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <Stars n={5} />
                            <span className="font-black text-lg" style={{ color: DARK_TEXT }}>4.9</span>
                            <span className="text-sm" style={{ color: GRAY }}>(172 reseñas)</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                            Más de 172 clientes ya confiaron en nosotros.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                        {REVIEWS.map(r => (
                            <div key={r.name} className="rounded-[20px] p-5 bg-white flex flex-col gap-3" style={{ boxShadow: SHADOW }}>
                                <Stars n={r.stars} />
                                <p className="text-sm leading-relaxed flex-1" style={{ color: DARK_TEXT }}>"{r.text}"</p>
                                <p className="text-xs font-bold" style={{ color: GRAY }}>{r.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 8 — Marcas */}
            <section className="py-16 px-4" style={{ backgroundColor: WHITE }}>
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-xs font-bold uppercase tracking-widest mb-10" style={{ color: GRAY }}>
                        Trabajamos con las mejores marcas
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {BRANDS.map(b => (
                            <span key={b} className="text-lg font-black tracking-tight" style={{ color: '#CBD5E1' }}>{b}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 9 — Retiro de paquetería */}
            <section className="py-16 px-4" style={{ backgroundColor: LIGHT }}>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Logística</p>
                    <h2 className="text-2xl font-black mb-8" style={{ color: DARK_TEXT }}>
                        Punto de retiro y recepción de paquetería.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {PAQUETERIA.map(p => (
                            <div key={p.name} className="flex items-center gap-3 rounded-[16px] px-6 py-4 bg-white" style={{ boxShadow: SHADOW }}>
                                <span className="text-2xl">{p.emoji}</span>
                                <span className="font-bold text-sm" style={{ color: DARK_TEXT }}>{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 10 — Inteliar */}
            <section className="py-20 px-4" style={{ backgroundColor: DARK }}>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Powered by</p>
                    <h2 className="text-3xl font-black mb-4" style={{ color: WHITE }}>
                        ¿Necesitás soluciones digitales?
                    </h2>
                    <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        También desarrollamos páginas web, ecommerce y software a medida.
                    </p>
                    <a href="https://inteliar.com" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] font-bold text-sm transition-all hover:opacity-90"
                        style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}40` }}>
                        Conocer Inteliar →
                    </a>
                </div>
            </section>

            {/* SECCIÓN 11 — Footer */}
            <footer className="py-14 px-4" style={{ backgroundColor: DARK, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Izquierda */}
                    <div className="flex flex-col gap-4">
                        <p className="font-black text-base" style={{ color: WHITE }}>Mundo Electrónico</p>
                        {address && (
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{address}</span>
                            </div>
                        )}
                        {whatsapp && (
                            <a href={wa('Hola! Quiero hacer una consulta')} target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                                style={{ color: BLUE }}>
                                <WhatsAppIcon className="w-4 h-4" />
                                WhatsApp
                            </a>
                        )}
                        {instagram && (
                            <a href={`https://instagram.com/${instagram.replace('@', '')}`} target="_blank" rel="noreferrer"
                                className="text-sm font-semibold hover:opacity-80 transition-opacity"
                                style={{ color: BLUE }}>
                                @{instagram.replace('@', '')}
                            </a>
                        )}
                    </div>

                    {/* Centro */}
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-sm mb-1" style={{ color: WHITE }}>Servicios</p>
                        {['Reparaciones', 'Ecommerce', 'Soporte técnico', 'Upgrades'].map(s => (
                            <span key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{s}</span>
                        ))}
                    </div>

                    {/* Derecha */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-[16px] p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                            <p className="text-xs font-bold mb-1" style={{ color: BLUE }}>Garantía 60 días</p>
                            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Si no quedás satisfecho te devolvemos el dinero.</p>
                        </div>
                        <div className="rounded-[16px] p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                            <p className="text-xs font-bold mb-1" style={{ color: BLUE }}>Diagnóstico sin cargo</p>
                            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Revisamos tu equipo antes de presupuestarte.</p>
                        </div>
                        {whatsapp && (
                            <a href={wa('Hola! Necesito ayuda')} target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 py-3 rounded-[14px] font-bold text-sm transition-all hover:opacity-90"
                                style={{ background: GRADIENT, color: WHITE }}>
                                <WhatsAppIcon className="w-4 h-4" />
                                Contactar ahora
                            </a>
                        )}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto mt-10 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        © 2024 Mundo Electrónico · Tecnología con Inteliar Stack
                    </p>
                </div>
            </footer>

            {/* Sticky mobile bar */}
            {whatsapp && (
                <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
                    style={{ backgroundColor: DARK, borderTop: '1px solid rgba(255,255,255,0.08)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
                    <a href={wa('Hola! Quiero hacer una consulta')} target="_blank" rel="noreferrer"
                        className="flex-1 flex flex-col items-center justify-center gap-1 py-3"
                        style={{ color: WHITE }}>
                        <WhatsAppIcon className="w-5 h-5" />
                        <span className="text-[10px] font-bold">WhatsApp</span>
                    </a>
                    <a href={`tel:${whatsapp.replace(/\D/g, '')}`}
                        className="flex-1 flex flex-col items-center justify-center gap-1 py-3"
                        style={{ color: WHITE, borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-[10px] font-bold">Llamar</span>
                    </a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(address || 'Moreno 1878 Buenos Aires')}`}
                        target="_blank" rel="noreferrer"
                        className="flex-1 flex flex-col items-center justify-center gap-1 py-3"
                        style={{ color: WHITE, borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                        <MapPin className="w-5 h-5" />
                        <span className="text-[10px] font-bold">Cómo llegar</span>
                    </a>
                </div>
            )}
        </div>
    );
}
