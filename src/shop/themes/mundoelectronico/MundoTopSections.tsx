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
                <div onClick={onShowShop} style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '1%',
                    width: '22%',
                    height: '25%',
                    zIndex: 10,
                    cursor: 'pointer',
                }} />
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
