import { Search, MapPin, Clock } from "lucide-react";

interface StoreHeaderProps {
    name: string;
    logo?: string;
    banner?: string;
    description?: string;
    onSearch: (q: string) => void;
}

export function StoreHeader({ name, logo, banner, description, onSearch }: StoreHeaderProps) {
    return (
        <header className="bg-white border-b border-slate-100">
            {/* Banner Section */}
            <div className="relative h-48 md:h-64 bg-slate-200 overflow-hidden">
                {banner ? (
                    <img src={banner} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-500 opacity-80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Profile Section */}
            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10 pb-6">
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-1 shadow-2xl flex-shrink-0 border-2 border-white overflow-hidden">
                        {logo ? (
                            <img src={logo} alt={name} className="w-full h-full object-cover rounded-[1.4rem]" />
                        ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 font-black text-2xl uppercase">
                                {name.charAt(0)}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 space-y-2">
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">{name}</h1>
                        {description && (
                            <p className="text-sm text-slate-500 font-medium max-w-2xl">{description}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <MapPin className="w-3 h-3 text-emerald-500" /> Envío a Domicilio
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <Clock className="w-3 h-3 text-emerald-500" /> 40-60 min
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar Section */}
                <div className="mt-8 sticky top-4 z-40">
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando hoy?..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full bg-white border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-900 shadow-xl shadow-slate-100 focus:ring-0 focus:border-emerald-500 transition-all placeholder:text-slate-300"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
