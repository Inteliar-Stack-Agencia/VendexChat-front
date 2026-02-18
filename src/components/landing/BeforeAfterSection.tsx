const beforeItems = [
  "Pedidos mezclados en conversaciones",
  "Clientes preguntando el menú",
  "Errores en pedidos",
  "Mensajes sin responder",
];

const afterItems = [
  "Cliente arma el pedido solo",
  "Pedido llega listo para confirmar",
  "Menos mensajes repetidos",
  "Todo organizado",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Antes y después</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Antes y después de VendexChat
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Así cambian los pedidos por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl border border-border bg-muted/60 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">Antes</h3>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp caótico</span>
            </div>
            <div className="rounded-2xl bg-white border border-border shadow-soft p-5 mb-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>WhatsApp</span>
                <span>12:42</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-muted px-3 py-2">
                  Hola, ¿me pasás el menú?
                </div>
                <div className="max-w-[70%] rounded-2xl rounded-tr-md bg-primary/10 px-3 py-2 ml-auto text-foreground">
                  Claro, te lo envío ahora.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-muted px-3 py-2">
                  ¿Cuánto sale la promo? ¿Y tienen combos?
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-muted px-3 py-2">
                  Quiero 2 hamburguesas, 1 sin queso.
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-base text-muted-foreground">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-destructive/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/30 bg-secondary shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">Después</h3>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">VendexChat ordenado</span>
            </div>
            <div className="rounded-2xl bg-white border border-border shadow-soft p-5 mb-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>Pedido listo</span>
                <span>#1542</span>
              </div>
              <div className="space-y-3 text-sm text-foreground">
                <div className="flex items-center justify-between">
                  <span>Hamburguesa clásica</span>
                  <span>$5.200</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>+ Papas grandes</span>
                  <span>$2.400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Limonada</span>
                  <span>$1.800</span>
                </div>
                <div className="border-t border-dashed border-border pt-3 flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>$9.400</span>
                </div>
                <div className="text-xs text-primary font-semibold bg-primary/10 rounded-full px-3 py-1 w-fit">
                  Listo para confirmar en WhatsApp
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-base text-muted-foreground">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
