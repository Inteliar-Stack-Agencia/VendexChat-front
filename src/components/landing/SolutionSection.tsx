import { ArrowRight, ShoppingBag, List, Send } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-12 md:py-16 lg:py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">La solución</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Pedidos organizados, automáticamente
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            VendexChat convierte el caos de los chats en un flujo limpio y profesional.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-5xl mx-auto">
          {[
            { icon: ShoppingBag, label: "IA crea tu tienda con una foto", color: "bg-primary/10 text-primary" },
            { icon: List, label: "IA atiende y vende por vos", color: "bg-accent text-accent-foreground" },
            { icon: Send, label: "Recibís el pedido organizado", color: "bg-secondary text-secondary-foreground" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-0">
              <div className="flex flex-col items-center gap-3 px-6">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-soft`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-medium text-foreground text-center max-w-[140px]">{step.label}</span>
              </div>
              {i < 2 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-display font-bold text-gradient mb-1">0%</div>
                <p className="text-sm text-muted-foreground">Comisiones por pedido</p>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Tu tienda siempre abierta</p>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient mb-1">~2min</div>
                <p className="text-sm text-muted-foreground">Crear tu tienda online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
