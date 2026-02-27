import { ShoppingBag, Tag, ClipboardList, Smartphone, Building2, Ban } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Carga Masiva IA", description: "Subí fotos de tus catálogos o listas infinitas. La IA digitaliza cientos de productos con nombre, precio y categoría en segundos." },
  { icon: ShoppingBag, title: "Asistente IA 24/7", description: "Atención automática: tu bot inteligente conoce todo tu stock, responde dudas y guía a tus clientes hasta la venta." },
  { icon: Tag, title: "Organización Automática", description: "La IA clasifica tus productos por categorías lógicas para que tu tienda sea fácil de navegar desde el primer día." },
  { icon: ClipboardList, title: "Gestión Inteligente", description: "Pedidos centralizados que llegan a WhatsApp listos para despachar, con toda la info procesada por IA." },
  { icon: Building2, title: "Estadísticas IA", description: "Entendé tus ventas y recibí recomendaciones inteligentes basadas en tendencias reales de tus clientes." },
  { icon: Ban, title: "Sin Comisiones", description: "Tecnología de punta sin costos ocultos. Tu ganancia es 100% tuya, sin porcentajes por venta." },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="min-h-[calc(88vh-5rem)] flex items-center py-12 md:py-16 lg:py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Funcionalidades</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Todo lo que necesitas para vender online
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
