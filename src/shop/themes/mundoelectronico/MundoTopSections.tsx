const BLUE     = '#00A8FF';
const BLUE2    = '#3A78B5';
const WHITE    = '#FFFFFF';
const GRADIENT = `linear-gradient(135deg, ${BLUE} 0%, ${BLUE2} 100%)`;

const CDN = 'https://images.vendexchat.app/mundoelectronico';

interface MundoTopSectionsProps {
    whatsapp?: string;
    onShowShop: () => void;
}

export function MundoTopSections({ whatsapp, onShowShop }: MundoTopSectionsProps) {
    return (
        <div style={{ backgroundColor: WHITE }}>

            {/* SECCIÓN 2 — Tienda, con botones superpuestos */}
            <section id="servicios" style={{ position: 'relative', lineHeight: 0 }}>
                <img src={`${CDN}/seccion2.png`} alt="Tienda online" style={{ width: '100%', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '18%', left: '2%', lineHeight: 'normal' }}>
                    <button
                        onClick={onShowShop}
                        className="px-5 py-2.5 rounded-[10px] font-bold text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ background: GRADIENT, color: WHITE, boxShadow: `0 4px 20px ${BLUE}50`, opacity: 0.01, minWidth: 160 }}>
                        Ver productos →
                    </button>
                </div>
            </section>

            {/* SECCIÓN 3 */}
            <section style={{ lineHeight: 0 }}>
                <img src={`${CDN}/seccion3.png`} alt="Reparación avanzada" style={{ width: '100%', display: 'block' }} />
            </section>

            {/* SECCIÓN 4 */}
            <section style={{ lineHeight: 0 }}>
                <img src={`${CDN}/seccion4.png`} alt="Soporte técnico" style={{ width: '100%', display: 'block' }} />
            </section>

        </div>
    );
}
