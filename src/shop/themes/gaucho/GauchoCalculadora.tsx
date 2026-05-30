import { useState } from "react";

const CDN = '/gaucho';
const G  = '#234B34';   // verde principal
const G2 = '#2E5A41';   // verde secundario
const B  = '#E9DDCF';   // beige
const B2 = '#F3EADF';   // beige claro
const BR = '#4A2E1B';   // marrón tipográfico
const OR = '#FF7A00';   // naranja CTA

type Pet   = 'perro' | 'gato';
type Stage = 'cachorro' | 'adulto' | 'senior';

const WEIGHTS = [1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 40, 50, 60];

const PCT: Record<Pet, Record<Stage, [number, number]>> = {
    perro: { cachorro: [0.04, 0.05], adulto: [0.025, 0.03], senior: [0.02, 0.025] },
    gato:  { cachorro: [0.04, 0.05], adulto: [0.02,  0.03], senior: [0.015, 0.02] },
};

function r10(n: number) { return Math.round(n / 10) * 10; }

function calc(pet: Pet, stage: Stage, kg: number) {
    const [lo, hi] = PCT[pet][stage];
    const minG = r10(kg * 1000 * lo);
    const maxG = r10(kg * 1000 * hi);
    return {
        dia:   `${minG}–${maxG}`,
        comida:`${r10(minG / 2)}–${r10(maxG / 2)}`,
        rinde: `${Math.floor(1000 / maxG)}–${Math.ceil(1000 / minG)}`,
        label: `${pet === 'perro' ? 'Perro' : 'Gato'} ${stage} · ${kg} kg`,
    };
}

export function GauchoCalculadora({ whatsapp }: { whatsapp?: string }) {
    const [pet,    setPet]    = useState<Pet>('perro');
    const [stage,  setStage]  = useState<Stage>('adulto');
    const [weight, setWeight] = useState(10);

    const res = calc(pet, stage, weight);
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Necesito ayuda para calcular la porción de mi mascota 🐾')}`
        : '#';

    return (
        <section id="calculadora" style={{ backgroundColor: B2, padding: '40px 20px 56px', fontFamily: 'inherit', position: 'relative', overflow: 'hidden' }}>

            {/* Background blobs */}
            <div style={{ position: 'absolute', top: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: B, opacity: 0.5, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: B, opacity: 0.4, pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    <span style={{ color: OR, fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                        CALCULADORA INTERACTIVA
                    </span>
                    <h2 style={{ color: G, fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, margin: '6px 0 2px', lineHeight: 1 }}>
                        Guía de porciones
                    </h2>
                    <p style={{ color: BR, fontStyle: 'italic', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', margin: 0, opacity: 0.75 }}>
                        calculá la porción ideal ♥
                    </p>
                </div>

                {/* Main card */}
                <div style={{
                    background: 'white',
                    borderRadius: 32,
                    boxShadow: '0 16px 64px rgba(35,75,52,0.12)',
                    display: 'flex',
                    overflow: 'hidden',
                    minHeight: 480,
                }}>

                    {/* LEFT — controls */}
                    <div style={{ flex: '1 1 0', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 24 }}>

                        {/* Pet tabs */}
                        <div style={{ display: 'flex', background: B2, borderRadius: 16, padding: 4, gap: 4 }}>
                            {(['perro', 'gato'] as Pet[]).map(p => (
                                <button key={p} onClick={() => setPet(p)} style={{
                                    flex: 1, padding: '12px 0',
                                    borderRadius: 12,
                                    background: pet === p ? G : 'transparent',
                                    color: pet === p ? 'white' : BR,
                                    border: 'none', cursor: 'pointer',
                                    fontWeight: 700, fontSize: 14,
                                    letterSpacing: '0.06em', textTransform: 'uppercase',
                                    transition: 'all 0.2s', fontFamily: 'inherit',
                                }}>
                                    {p === 'perro' ? '🐶  PERROS' : '🐱  GATOS'}
                                </button>
                            ))}
                        </div>

                        {/* Stage */}
                        <div>
                            <p style={{ color: BR, opacity: 0.45, fontWeight: 700, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>ETAPA DE VIDA</p>
                            <div style={{ display: 'flex', gap: 8 }}>
                                {(['cachorro', 'adulto', 'senior'] as Stage[]).map(s => (
                                    <button key={s} onClick={() => setStage(s)} style={{
                                        flex: 1, padding: '11px 0',
                                        borderRadius: 12,
                                        border: `2px solid ${stage === s ? G : B}`,
                                        background: stage === s ? G : 'white',
                                        color: stage === s ? 'white' : BR,
                                        cursor: 'pointer', fontWeight: 600, fontSize: 13,
                                        transition: 'all 0.18s', fontFamily: 'inherit',
                                        textTransform: 'capitalize',
                                    }}>
                                        {s.charAt(0).toUpperCase() + s.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Weight */}
                        <div>
                            <p style={{ color: BR, opacity: 0.45, fontWeight: 700, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>PESO DE TU MASCOTA</p>
                            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                                {WEIGHTS.map(w => (
                                    <button key={w} onClick={() => setWeight(w)} style={{
                                        padding: '9px 14px',
                                        borderRadius: 10,
                                        border: `2px solid ${weight === w ? G : B}`,
                                        background: weight === w ? G : 'white',
                                        color: weight === w ? 'white' : BR,
                                        cursor: 'pointer', fontWeight: 600, fontSize: 13,
                                        transition: 'all 0.18s', fontFamily: 'inherit',
                                        lineHeight: 1,
                                    }}>
                                        {w} kg
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results */}
                        <div style={{ background: B2, borderRadius: 20, padding: '20px 24px', marginTop: 'auto' }}>
                            <p style={{ color: G, fontWeight: 700, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 16px', opacity: 0.7 }}>
                                RESULTADO · {res.label.toUpperCase()}
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                                {[
                                    { label: 'POR DÍA',        value: res.dia,    unit: 'g', sub: 'de comida natural' },
                                    { label: 'POR COMIDA (×2)', value: res.comida, unit: 'g', sub: 'por comida' },
                                    { label: 'RENDIMIENTO',     value: res.rinde,  unit: 'días', sub: 'por kg aprox.' },
                                ].map(r => (
                                    <div key={r.label} style={{
                                        background: 'white', borderRadius: 16,
                                        padding: '18px 14px', textAlign: 'center',
                                        boxShadow: '0 2px 16px rgba(35,75,52,0.08)',
                                    }}>
                                        <p style={{ color: BR, opacity: 0.4, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', margin: '0 0 8px' }}>{r.label}</p>
                                        <p style={{ color: G, fontWeight: 900, fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontStyle: 'italic', margin: '0 0 2px', lineHeight: 1 }}>
                                            {r.value}
                                            <span style={{ fontSize: '0.45em', fontStyle: 'normal', fontWeight: 600, marginLeft: 3, opacity: 0.7 }}>{r.unit}</span>
                                        </p>
                                        <p style={{ color: BR, opacity: 0.35, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>{r.sub}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: BR, opacity: 0.35, fontSize: 11, lineHeight: 1.5, margin: '14px 0 0' }}>
                                🌿 Porciones orientativas. Pueden variar según actividad y metabolismo.
                            </p>
                        </div>

                        {/* WhatsApp CTA */}
                        {whatsapp && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: 150 }}>
                                    <p style={{ color: BR, fontWeight: 700, fontSize: 13, margin: '0 0 2px' }}>¿Necesitás ayuda?</p>
                                    <p style={{ color: BR, opacity: 0.5, fontSize: 12, margin: 0 }}>Escribinos y te asesoramos 🧡</p>
                                </div>
                                <a href={waLink} target="_blank" rel="noreferrer" style={{
                                    background: OR, color: 'white',
                                    padding: '12px 24px', borderRadius: 100,
                                    fontWeight: 700, fontSize: 13,
                                    textDecoration: 'none', whiteSpace: 'nowrap',
                                    boxShadow: `0 4px 16px ${OR}44`,
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

                    {/* RIGHT — premium visual panel */}
                    <div className="hidden lg:flex" style={{
                        width: 280, flexShrink: 0,
                        background: G,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0,
                        padding: '40px 28px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Decorative circles */}
                        <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: G2, opacity: 0.5 }} />
                        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: G2, opacity: 0.4 }} />

                        {/* Paw prints decorative */}
                        <svg viewBox="0 0 100 90" style={{ position:'absolute', top:30, left:20, width:48, opacity:0.12, pointerEvents:'none' }} fill="white">
                            <ellipse cx="50" cy="72" rx="22" ry="17"/><ellipse cx="20" cy="46" rx="10" ry="13"/><ellipse cx="38" cy="33" rx="10" ry="13"/><ellipse cx="62" cy="33" rx="10" ry="13"/><ellipse cx="80" cy="46" rx="10" ry="13"/>
                        </svg>
                        <svg viewBox="0 0 100 90" style={{ position:'absolute', bottom:40, right:16, width:32, opacity:0.10, pointerEvents:'none', transform:'rotate(20deg)' }} fill="white">
                            <ellipse cx="50" cy="72" rx="22" ry="17"/><ellipse cx="20" cy="46" rx="10" ry="13"/><ellipse cx="38" cy="33" rx="10" ry="13"/><ellipse cx="62" cy="33" rx="10" ry="13"/><ellipse cx="80" cy="46" rx="10" ry="13"/>
                        </svg>

                        {/* Bowl image */}
                        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                            <div style={{ width: 160, height: 160, borderRadius: '50%', background: G2, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
                                <img src={`${CDN}/dog-cta-transparent.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', mixBlendMode: 'luminosity', opacity: 0.9 }} />
                            </div>

                            <p style={{ color: 'white', fontWeight: 800, fontSize: 16, margin: '0 0 6px', lineHeight: 1.2 }}>
                                Comida real,<br />vida real.
                            </p>
                            <p style={{ color: 'white', opacity: 0.55, fontSize: 12, margin: '0 0 20px' }}>
                                Sin ultraprocesados
                            </p>

                            {/* Mini stats */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                                {[
                                    { n: '100%', t: 'ingredientes naturales' },
                                    { n: '0%',   t: 'conservantes' },
                                    { n: '∞',    t: 'amor por tu mascota' },
                                ].map(s => (
                                    <div key={s.t} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 12px' }}>
                                        <span style={{ color: OR, fontWeight: 900, fontSize: 15, minWidth: 36 }}>{s.n}</span>
                                        <span style={{ color: 'white', opacity: 0.7, fontSize: 11 }}>{s.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
