import { Store, Upload, Share2, Bell } from "lucide-react";

const steps = [
  {
    icon: Store,
    step: "01",
    title: "Creá tu tienda",
    description: "Registrate y configurá tu negocio en minutos.",
  },
  {
    icon: Upload,
    step: "02",
    title: "Subí productos y stock",
    description: "Cargá productos con fotos y pausá lo que no está disponible.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Compartí tu link",
    description: "WhatsApp, Instagram o un QR para tu local.",
  },
  {
    icon: Bell,
    step: "04",
    title: "Recibí pedidos ordenados",
    description: "Te llega todo armado para coordinar pago y entrega, sin confusiones.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="min-h-[calc(88vh-5rem)] flex items-center py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Cómo funciona</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            De cero a recibir pedidos en 4 pasos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <span className="text-5xl font-display font-bold text-muted/60 absolute top-4 right-5 select-none group-hover:text-primary/20 transition-colors">
                {s.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-primary/30" />
                <span className="h-1.5 w-3 rounded-full bg-primary/20" />
                <span className="h-1.5 w-2 rounded-full bg-primary/10" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
