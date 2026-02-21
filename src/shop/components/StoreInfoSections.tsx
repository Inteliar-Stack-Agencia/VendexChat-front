import { MapPin, Truck, Heart } from "lucide-react";

interface StoreInfoSectionsProps {
    description?: string | null;
    address?: string | null;
    deliveryInfo?: string | null;
    storeName: string;
}

export function StoreInfoSections({ description, address, deliveryInfo, storeName }: StoreInfoSectionsProps) {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
            {/* Nosotros / Descripción */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-emerald-600">
                    <Heart className="w-5 h-5 fill-current" />
                    <h2 className="text-lg font-black uppercase tracking-widest text-slate-900 leading-none">Nosotros</h2>
                </div>
                <div className="max-w-2xl mx-auto">
                    <p className="text-slate-500 font-medium leading-relaxed italic">
                        {description || `Bienvenidos a ${storeName}. Nos apasiona ofrecerte los mejores productos con la mejor calidad y atención.`}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zonas de Entrega */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Zonas de Entrega</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {deliveryInfo || "Realizamos envíos a toda la ciudad. Consulta disponibilidad para tu zona antes de realizar el pedido."}
                    </p>
                </div>

                {/* Retiro en Local */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Retiro en Local</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {address || "Visítanos en nuestra sucursal principal. Te esperamos para que retires tu pedido recién hecho."}
                    </p>
                </div>
            </div>

            {/* Footer / Copyright */}
            <div className="pt-12 border-t border-slate-100 text-center space-y-2">
                <p className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Potenciado por VENDEx & @InteliarStack</p>
                <p className="text-[10px] font-bold text-slate-400">© {new Date().getFullYear()} {storeName}. Desarrollado por @InteliarStack. Todos los derechos reservados.</p>
            </div>
        </section>
    );
}
