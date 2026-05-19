import { ShieldCheck, FileText, Zap, Bot, MessageCircle } from "lucide-react";

const M_BG    = '#0f0f1a';
const M_CARD  = '#1a1a2e';
const M_BLUE  = '#3b82f6';
const M_WHITE = '#ffffff';
const M_MUTED = 'rgba(255,255,255,0.5)';
const M_DIM   = 'rgba(255,255,255,0.7)';

const INFO_ITEMS = [
    {
        icon: ShieldCheck,
        title: 'Garantía 60 días',
        desc: 'Si no quedás satisfecho te devolvemos el dinero. Sin preguntas.',
        color: '#22c55e',
    },
    {
        icon: FileText,
        title: 'Factura A',
        desc: 'Emitimos factura A para empresas y monotributistas. Pedila al finalizar la compra.',
        color: M_BLUE,
    },
    {
        icon: Zap,
        title: 'Entrega en el día',
        desc: 'Pedidos antes de las 14 hs entregados el mismo día en zona de cobertura.',
        color: '#f59e0b',
    },
];

interface MundoInfoSectionsProps {
    whatsapp?: string;
}

export function MundoInfoSections({ whatsapp }: MundoInfoSectionsProps) {
    const waLink = whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero hacer una consulta sobre Mundo Electrónico 📱')}`
        : '#';

    return (
        <div className="w-full" style={{ backgroundColor: M_BG }}>

            {/* Info cards */}
            <section className="py-16 px-4" style={{ borderTop: '1px solid rgba(59,130,246,0.12)' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: M_BLUE }}>Por qué elegirnos</p>
                        <h2 className="text-3xl md:text-4xl font-black" style={{ color: M_WHITE }}>
                            Comprá con confianza
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {INFO_ITEMS.map(({ icon: Icon, title, desc, color }) => (
                            <div key={title} className="rounded-2xl p-6 flex flex-col gap-4"
                                style={{ backgroundColor: M_CARD, border: '1px solid rgba(59,130,246,0.15)' }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${color}18` }}>
                                    <Icon className="w-6 h-6" style={{ color }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-tight mb-2" style={{ color: M_WHITE }}>{title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: M_MUTED }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Asistente IA */}
            <section className="py-16 px-4" style={{ backgroundColor: '#0d0d1f', borderTop: '1px solid rgba(59,130,246,0.12)' }}>
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', boxShadow: '0 8px 24px rgba(59,130,246,0.3)' }}>
                        <Bot className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: M_BLUE }}>
                        Tecnología AI
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: M_WHITE }}>
                        Asistente Inteligente
                    </h2>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: M_DIM }}>
                        Nuestro asistente de IA te ayuda a encontrar el producto ideal, responde tus preguntas sobre compatibilidad, garantía y stock en tiempo real.
                    </p>
                    {whatsapp && (
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-xl text-sm uppercase tracking-widest"
                            style={{ backgroundColor: M_BLUE, color: M_WHITE, boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}>
                            <MessageCircle className="w-5 h-5" />
                            Consultar por WhatsApp
                        </a>
                    )}
                </div>
            </section>

        </div>
    );
}
