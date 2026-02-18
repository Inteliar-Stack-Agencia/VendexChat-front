import { Clock, HelpCircle, MessageSquareX, Repeat } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Mensajes respondidos tarde",
    description: "Las respuestas llegan tarde y se pierden ventas.",
  },
  {
    icon: Repeat,
    title: "Clientes pidiendo el menú",
    description: "La misma pregunta en el chat una y otra vez.",
  },
  {
    icon: MessageSquareX,
    title: "Pedidos mezclados en conversaciones",
    description: "Entre mensajes, fotos y audios se pierde el pedido.",
  },
  {
    icon: HelpCircle,
    title: "Tiempo perdido tomando pedidos",
    description: "Copiar, sumar y confirmar todo manualmente.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">El problema</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tu WhatsApp no fue diseñado para vender
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Cada día, miles de negocios pierden ventas por tomar pedidos de forma manual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{problem.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
