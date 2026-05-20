const BLUE     = '#00A8FF';
const BLUE2    = '#3A78B5';
const WHITE    = '#FFFFFF';
const GRAY     = '#64748B';
const DARK_TEXT = '#111827';
const GRADIENT = `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`;

const CDN = 'https://images.vendexchat.app/mundoelectronico';

interface MundoTopSectionsProps {
    whatsapp?: string;
    onShowShop: () => void;
}

export function MundoTopSections({ whatsapp, onShowShop }: MundoTopSectionsProps) {
    return (
        <div style={{ backgroundColor: WHITE }}>

            {/* SECCIÓN 2 */}
            <section id="servicios" style={{ lineHeight: 0 }}>
                <img src={`${CDN}/seccion2.png`} alt="Nuestros servicios" style={{ width: '100%', display: 'block' }} />
            </section>

            {/* SECCIÓN 3 */}
            <section style={{ lineHeight: 0 }}>
                <img src={`${CDN}/seccion3.png`} alt="Reparación avanzada" style={{ width: '100%', display: 'block' }} />
            </section>

            {/* SECCIÓN 4 */}
            <section style={{ lineHeight: 0 }}>
                <img src={`${CDN}/seccion4.png`} alt="Soporte técnico" style={{ width: '100%', display: 'block' }} />
            </section>

            {/* CTA tienda */}
            <section className="py-16 px-4 text-center" style={{ backgroundColor: WHITE }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Tienda online</p>
                <h2 className="text-3xl font-black mb-4" style={{ color: DARK_TEXT, letterSpacing: '-0.02em' }}>
                    Productos seleccionados para vos.
                </h2>
                <p className="text-base mb-8" style={{ color: GRAY }}>
                    Accesorios, periféricos y electrónica de calidad con garantía.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={onShowShop}
                        className="px-8 py-4 rounded-[14px] font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}40` }}>
                        Ver tienda online →
                    </button>
                    <button
                        onClick={onShowShop}
                        className="px-8 py-4 rounded-[14px] font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ border: `2px solid ${BLUE}`, color: BLUE, backgroundColor: 'transparent' }}>
                        Ver productos →
                    </button>
                </div>
            </section>

        </div>
    );
}
