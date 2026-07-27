import { useState } from "react";
import { ChevronDown, Leaf, ThermometerSnowflake, Truck, CalendarCheck } from "lucide-react";
import { MV_BG, MV_SURFACE, MV_TEXT, MV_TITLE, MV_CTA, MV_BADGE_BG, MV_HIGHLIGHT } from "./morfiViandasColors";

interface MorfiViandasInfoSectionsProps {
    whatsapp?: string;
}

const PLANS = [
    {
        name: 'Pack Semanal',
        items: ['5 viandas, de lunes a viernes', 'Menú variado cada día', 'Ideal para probar el servicio'],
        message: 'Hola, quiero consultar por el Pack Semanal',
        featured: false,
    },
    {
        name: 'Pack Quincenal',
        items: ['10 viandas para dos semanas', 'Ahorro respecto al pack semanal', 'Coordinación de entregas fija'],
        message: 'Hola, quiero consultar por el Pack Quincenal',
        featured: true,
    },
    {
        name: 'Pack Mensual',
        items: ['20 viandas al mes', 'Mejor precio por vianda', 'Prioridad para cambios de menú'],
        message: 'Hola, quiero consultar por el Pack Mensual',
        featured: false,
    },
];

const BENEFITS = [
    { icon: Leaf, title: 'Natural', body: 'Ingredientes frescos y reales, sin agregados artificiales.' },
    { icon: ThermometerSnowflake, title: 'Casero', body: 'Preparado al momento, como en casa.' },
    { icon: Truck, title: 'Entrega a domicilio', body: 'Coordinamos la entrega en tu zona por WhatsApp.' },
    { icon: CalendarCheck, title: 'Ideal para toda la semana', body: 'Resolvé tus comidas sin cocinar todos los días.' },
];

function faqAnswers(whatsapp?: string) {
    const waLink = whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : undefined;
    return [
        {
            q: '¿En qué zonas hacen entregas?',
            a: waLink
                ? <>Coordinamos la zona y el costo de envío por <a href={waLink} target="_blank" rel="noreferrer" className="font-bold underline" style={{ color: MV_CTA }}>WhatsApp</a> antes de confirmar tu pedido.</>
                : 'Coordinamos la zona y el costo de envío antes de confirmar tu pedido.',
        },
        {
            q: '¿Qué medios de pago aceptan?',
            a: 'El medio de pago se coordina junto con tu pedido, al momento de confirmarlo.',
        },
        {
            q: '¿Cómo se coordina el día y horario de entrega?',
            a: 'Una vez hecho tu pedido en la web, coordinamos el día y horario de entrega por WhatsApp.',
        },
        {
            q: '¿Puedo cambiar o cancelar un pedido ya hecho?',
            a: waLink
                ? <>Sí, escribinos por <a href={waLink} target="_blank" rel="noreferrer" className="font-bold underline" style={{ color: MV_CTA }}>WhatsApp</a> y te ayudamos con el cambio o la cancelación.</>
                : 'Sí, escribinos y te ayudamos con el cambio o la cancelación.',
        },
        {
            q: '¿Cómo se conservan las viandas?',
            a: 'Consultanos por WhatsApp las recomendaciones de conservación según cada plato.',
        },
    ];
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: MV_SURFACE, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <button onClick={() => setOpen(o => !o)} className="w-full flex items-center gap-3 px-6 py-4 text-left">
                <span className="font-black text-lg flex-shrink-0" style={{ color: MV_CTA }}>?</span>
                <span className="flex-1 font-bold text-sm md:text-base" style={{ color: MV_TITLE }}>{q}</span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: MV_TEXT }} />
            </button>
            {open && (
                <p className="px-6 pb-4 pl-[52px] text-sm" style={{ color: MV_TEXT }}>{a}</p>
            )}
        </div>
    );
}

export function MorfiViandasInfoSections({ whatsapp }: MorfiViandasInfoSectionsProps) {
    const waLink = whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : undefined;

    return (
        <>
            {/* Planes y Packs */}
            <section id="planes" className="py-14 md:py-16 px-4 md:px-8" style={{ backgroundColor: MV_SURFACE }}>
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="morfiviandas-title font-semibold text-2xl md:text-3xl mb-2" style={{ color: MV_TITLE }}>Planes y Packs</h2>
                    <p className="text-sm md:text-base mb-8 max-w-xl" style={{ color: MV_TEXT }}>
                        Elegí la frecuencia que mejor te acomode. La compra se coordina directamente por WhatsApp, sin cobros automáticos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PLANS.map(plan => (
                            <div key={plan.name} className="relative flex flex-col p-7 rounded-2xl"
                                style={plan.featured
                                    ? { backgroundColor: MV_SURFACE, border: `2px solid ${MV_CTA}`, boxShadow: '0 12px 32px rgba(0,140,162,0.15)' }
                                    : { backgroundColor: MV_BG, border: `2px solid ${MV_BG}` }}>
                                {plan.featured && (
                                    <span className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: MV_HIGHLIGHT, color: MV_TITLE }}>
                                        El más elegido
                                    </span>
                                )}
                                <h3 className="font-bold text-lg mb-3.5" style={{ color: MV_TITLE }}>{plan.name}</h3>
                                <ul className="space-y-2.5 mb-7 text-sm flex-1" style={{ color: MV_TEXT }}>
                                    {plan.items.map(item => <li key={item}>✓ {item}</li>)}
                                </ul>
                                {waLink ? (
                                    <a href={`${waLink}?text=${encodeURIComponent(plan.message)}`} target="_blank" rel="noreferrer"
                                        className="mt-auto text-center px-5 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
                                        style={plan.featured ? { backgroundColor: MV_CTA, color: '#fff' } : { border: `2px solid ${MV_CTA}`, color: MV_CTA }}>
                                        Consultar
                                    </a>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por qué elegirnos */}
            <section className="py-14 md:py-16 px-4 md:px-8" style={{ backgroundColor: MV_BG }}>
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="morfiviandas-title font-semibold text-2xl md:text-3xl mb-8" style={{ color: MV_TITLE }}>Por qué elegirnos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {BENEFITS.map(({ icon: Icon, title, body }) => (
                            <div key={title}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: MV_BADGE_BG }}>
                                    <Icon className="w-5 h-5" style={{ color: MV_CTA }} />
                                </div>
                                <h3 className="font-bold text-base mb-1.5" style={{ color: MV_TITLE }}>{title}</h3>
                                <p className="text-sm" style={{ color: MV_TEXT }}>{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-14 md:py-16 px-4 md:px-8" style={{ backgroundColor: MV_SURFACE }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="morfiviandas-title font-semibold text-2xl md:text-3xl mb-8" style={{ color: MV_TITLE }}>Preguntas Frecuentes</h2>
                    <div className="flex flex-col gap-3">
                        {faqAnswers(whatsapp).map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
                    </div>
                    {waLink && (
                        <p className="mt-7 text-sm" style={{ color: MV_TEXT }}>
                            ¿Tenés otra duda?{' '}
                            <a href={`${waLink}?text=${encodeURIComponent('Hola, tengo una consulta')}`} target="_blank" rel="noreferrer" className="font-bold underline" style={{ color: MV_CTA }}>
                                Escribinos por WhatsApp
                            </a>.
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}
