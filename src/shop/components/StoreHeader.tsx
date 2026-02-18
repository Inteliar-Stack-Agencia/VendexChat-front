import { Search } from "lucide-react";

interface StoreHeaderProps {
    name: string;
    logo?: string;
    onSearch: (q: string) => void;
}

export function StoreHeader({ name, logo, onSearch }: StoreHeaderProps) {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    {logo && (
                        <img
                            src={logo}
                            alt={name}
                            className="w-10 h-10 rounded-full bg-slate-100 object-cover"
                        />
                    )}
                    <h1 className="font-bold text-lg text-slate-900 truncate">{name}</h1>
                </div>

                <div className="relative flex-1 max-w-[200px] sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full bg-slate-100 border-none rounded-full py-2 pl-9 pr-4 text-sm focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                </div>
            </div>
        </header>
    );
}
