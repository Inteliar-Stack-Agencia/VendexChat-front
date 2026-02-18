import { UtensilsCrossed, Coffee, Wrench, Pizza } from "lucide-react";

const cases = [
  { icon: UtensilsCrossed, title: "Meal prep / Viandas", description: "Recibe pedidos semanales con selección de platos y horarios de entrega." },
  { icon: Pizza, title: "Hamburgueserías y pizzerías", description: "Menú visual con combos, extras y envío. Sin llamadas, sin errores." },
  { icon: Coffee, title: "Cafeterías", description: "Pedidos para retirar o delivery con personalización de bebidas." },
  { icon: Wrench, title: "Talleres y reparaciones", description: "Turnos y presupuestos organizados. El cliente elige servicio y horario." },
];

const UseCasesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Casos de uso</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Perfecto para tu tipo de negocio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
