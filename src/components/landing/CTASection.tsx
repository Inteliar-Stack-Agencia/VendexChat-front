import { ArrowRight, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section id="cta" className="py-12 md:py-16 lg:py-20 hero-gradient scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-elevated">
            <MessageSquare className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            Empieza a recibir pedidos organizados hoy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Crea tu tienda en minutos, comparte tu link y deja que VendexChat haga el trabajo pesado.
          </p>
          <a
            href="https://admin.vendexchat.app/register"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-[#0D9488] transition-all shadow-elevated"
            onClick={() => trackEvent("cta_request_demo_click")}
          >
            Probar Gratis <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
