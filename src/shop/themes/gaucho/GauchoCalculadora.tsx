import { useState } from "react";

const C_GREEN  = '#234B34';
const C_BEIGE  = '#E9DDCF';
const C_BEIGE2 = '#F3EADF';
const C_BROWN  = '#4A2E1B';
const C_ORANGE = '#FF7A00';

type PetType   = 'perro' | 'gato';
type LifeStage = 'cachorro' | 'adulto' | 'senior';

const WEIGHTS: number[] = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60];

const PCT: Record<PetType, Record<LifeStage, [number, number]>> = {
    perro: { cachorro: [0.04, 0.05], adulto: [0.025, 0.03], senior: [0.02, 0.025] },
    gato:  { cachorro: [0.04, 0.05], adulto: [0.02,  0.03], senior: [0.015, 0.02] },
};

function round10(n: number) { return Math.round(n / 10) * 10; }

function calcResult(pet: PetType, stage: LifeStage, kg: number) {
    const [lo, hi] = PCT[pet][stage];
    const minG = round10(kg * 1000 * lo);
    const maxG = round10(kg * 1000 * hi);
    const avg  = (minG + maxG) / 2;
    const rMin = Math.floor(1000 / maxG);
    const rMax = Math.ceil(1000 / minG);
    return {
        porDia:     `${minG}–${maxG} g`,
        porComida:  `${round10(minG / 2)}–${round10(maxG / 2)} g`,
        rendimiento: `${rMin}–${rMax} días`,
        label: `${pet === 'perro' ? 'Perro' : 'Gato'} ${stage} de ${kg} kg`,
    };
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button onClick={onClick} style={{
            padding: '10px 22px', borderRadius: 100,
            border: `1.5px solid ${active ? C_GREEN : C_BEIGE}`,
            background: active ? C_GREEN : 'white',
            color: active ? 'white' : C_BROWN,
            cursor: 'pointer', fontWeight: 600, fontSize: 14,
            transition: 'all 0.18s', fontFamily: 'inherit',
        }}>
            {children}
        </button>
    );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button onClick={onClick} style={{
            padding: '8px 14px', borderRadius: 100,
            border: `1.5px solid ${active ? C_GREEN : C_BEIGE}`,
            background: active ? C_GREEN : 'white',
            color: active ? 'white' : C_BROWN,
            cursor: 'pointer', fontWeight: 600, fontSize: 13,
            transition: 'all 0.18s', fontFamily: 'inherit',
        }}>
            {children}
        </button>
    );
}

export function GauchoCalculadora({ whatsapp }: { whatsapp?: string }) {
    const [pet,    setPet]    = useState<PetType>('perro');
    const [stage,  setStage]  = useState<LifeStage>('adulto');
    const [weight, setWeight] = useState(10);

    const result = calcResult(pet, stage, weight);

    const waCalc = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Necesito ayuda para calcular la porción de mi mascota 🐾')}`
        : '#';

    return (
        <section id="calculadora" style={{ backgroundColor: C_BEIGE2, padding: '36px 24px', fontFamily: 'inherit' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <span style={{ color: C_ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        CALCULADORA INTERACTIVA
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '8px 0 4px' }}>
                        <div style={{ height: 1, width: 40, backgroundColor: C_BEIGE }} />
                        <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, color: C_GREEN }} fill="currentColor">
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2v-.02C8 5.32 5 8 5 8s3.68 0 7.42 2.35A8.59 8.59 0 0 1 15 14c-2-2-4-2.5-6-2.5 1.5 3 5 4 7 4-2 3-5 3-7 3 2.5 2 7 1 9-2 2-4 2-7 1.5-9.5C19.5 7 17 8 17 8z"/>
                        </svg>
                        <div style={{ height: 1, width: 40, backgroundColor: C_BEIGE }} />
                    </div>
                    <h2 style={{ color: C_GREEN, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, margin: '0 0 4px', lineHeight: 1.1 }}>
                        Guía de porciones
                    </h2>
                    <p style={{ color: C_BROWN, fontStyle: 'italic', fontSize: 'clamp(0.9rem,1.5vw,1.1rem)', margin: '0 0 8px' }}>
                        calculá la porción ideal ♥
                    </p>
                    <p style={{ color: C_BROWN, opacity: 0.65, fontSize: 14, maxWidth: 460, margin: '0 auto', lineHeight: 1.5 }}>
                        Seleccioná el tipo de mascota, etapa y peso para calcular <strong>la cantidad recomendada.</strong>
                    </p>
                </div>

                {/* Card */}
                <div style={{
                    background: 'white', borderRadius: 24,
                    padding: '28px 32px',
                    boxShadow: '0 8px 48px rgba(35,75,52,0.10)',
                    display: 'flex', gap: 36, flexWrap: 'wrap', alignItems: 'flex-start',
                }}>

                    {/* Controls */}
                    <div style={{ flex: '1 1 460px', minWidth: 0 }}>

                        {/* Pet tabs */}
                        <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', border: `1.5px solid ${C_BEIGE}`, marginBottom: 20 }}>
                            {(['perro', 'gato'] as PetType[]).map(p => (
                                <button key={p} onClick={() => setPet(p)} style={{
                                    flex: 1, padding: '11px 0',
                                    background: pet === p ? C_GREEN : 'white',
                                    color: pet === p ? 'white' : C_BROWN,
                                    border: 'none', cursor: 'pointer',
                                    fontWeight: 700, fontSize: 15,
                                    letterSpacing: '0.06em', textTransform: 'uppercase',
                                    transition: 'all 0.2s', fontFamily: 'inherit',
                                }}>
                                    {p === 'perro' ? '🐶  PERROS' : '🐱  GATOS'}
                                </button>
                            ))}
                        </div>

                        {/* Life stage */}
                        <div style={{ marginBottom: 16 }}>
                            <p style={{ color: C_BROWN, fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                                ETAPA DE VIDA
                            </p>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                <Pill active={stage === 'cachorro'} onClick={() => setStage('cachorro')}>Cachorro</Pill>
                                <Pill active={stage === 'adulto'}   onClick={() => setStage('adulto')}>Adulto</Pill>
                                <Pill active={stage === 'senior'}   onClick={() => setStage('senior')}>Senior</Pill>
                            </div>
                        </div>

                        {/* Weight */}
                        <div style={{ marginBottom: 20 }}>
                            <p style={{ color: C_BROWN, fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                                PESO DE TU MASCOTA
                            </p>
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                {WEIGHTS.map(w => (
                                    <Chip key={w} active={weight === w} onClick={() => setWeight(w)}>{w} kg</Chip>
                                ))}
                            </div>
                        </div>

                        {/* Result */}
                        <div style={{ backgroundColor: C_BEIGE2, borderRadius: 14, padding: '14px 18px', marginBottom: 14 }}>
                            <p style={{ color: C_GREEN, fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                                📊 RESULTADO PARA {result.label.toUpperCase()}:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                                {[
                                    { icon: '🥗', label: 'POR DÍA',         value: result.porDia,      sub: 'DE COMIDA NATURAL' },
                                    { icon: '🍽️', label: 'POR COMIDA (×2)', value: result.porComida,   sub: 'POR COMIDA' },
                                    { icon: '📅', label: 'RENDIMIENTO',      value: result.rendimiento, sub: 'RINDE APROX. (1 KG)' },
                                ].map(r => (
                                    <div key={r.label} style={{
                                        background: 'white', borderRadius: 10,
                                        padding: '12px 8px',
                                        textAlign: 'center',
                                        boxShadow: '0 2px 8px rgba(35,75,52,0.07)',
                                    }}>
                                        <div style={{ fontSize: 16, marginBottom: 4 }}>{r.icon}</div>
                                        <p style={{ color: C_BROWN, opacity: 0.5, fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 4 }}>{r.label}</p>
                                        <p style={{ color: C_GREEN, fontWeight: 800, fontSize: 'clamp(0.9rem,1.8vw,1.2rem)', fontStyle: 'italic', margin: '0 0 2px', lineHeight: 1.1 }}>{r.value}</p>
                                        <p style={{ color: C_BROWN, opacity: 0.4, fontSize: 9, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{r.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legal */}
                        <p style={{ color: C_BROWN, opacity: 0.45, fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>
                            🌿 Las porciones son orientativas y pueden variar según actividad, metabolismo y objetivos nutricionales.
                        </p>

                        {/* WhatsApp CTA */}
                        {whatsapp && (
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 16,
                                backgroundColor: C_BEIGE2, borderRadius: 16, padding: '16px 20px',
                                flexWrap: 'wrap',
                            }}>
                                <div style={{ flex: 1, minWidth: 180 }}>
                                    <p style={{ color: C_BROWN, fontWeight: 700, fontSize: 14, margin: '0 0 2px' }}>¿Necesitás ayuda?</p>
                                    <p style={{ color: C_BROWN, opacity: 0.6, fontSize: 13, margin: 0 }}>Escribinos por WhatsApp y te asesoramos 🧡</p>
                                </div>
                                <a href={waCalc} target="_blank" rel="noreferrer"
                                    style={{
                                        backgroundColor: C_ORANGE, color: 'white',
                                        padding: '12px 22px', borderRadius: 100,
                                        fontWeight: 700, fontSize: 13,
                                        textDecoration: 'none', whiteSpace: 'nowrap',
                                        transition: 'opacity 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                                >
                                    WhatsApp
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right illustration */}
                    <div style={{
                        flex: '0 0 240px', display: 'flex',
                        flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', gap: 16, paddingTop: 8,
                    }} className="hidden lg:flex">
                        <div style={{
                            width: 220, height: 220, borderRadius: '50%',
                            backgroundColor: C_BEIGE2,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 90,
                            boxShadow: `0 8px 32px rgba(35,75,52,0.12)`,
                        }}>
                            {pet === 'perro' ? '🐶' : '🐱'}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: C_GREEN, fontWeight: 700, fontSize: 13, margin: '0 0 4px' }}>
                                Comida real, vida real.
                            </p>
                            <p style={{ color: C_BROWN, opacity: 0.5, fontSize: 12 }}>
                                Sin ultraprocesados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
