import { Instagram, Facebook, MapPin, Clock } from "lucide-react";
import { getSocialLink } from "../../../utils/format";
import { MV_TITLE, MV_HIGHLIGHT } from "./morfiViandasColors";

interface MorfiViandasFooterProps {
    name: string;
    address?: string | null;
    whatsapp?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    schedule?: any | null;
}

function summarizeSchedule(schedule: any) {
    if (!schedule) return null;
    const daysShort = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    const getHoursStr = (dayKey: string) => {
        const dayData = schedule[dayKey];
        if (!dayData || !dayData.open) return "Cerrado";
        const interval = dayData.intervals?.[0];
        if (!interval) return "Cerrado";
        if (interval.start === "00:00" && interval.end === "23:59") return "24hs";
        return `${interval.start} a ${interval.end}hs`;
    };

    const groups: { days: number[]; hours: string }[] = [];
    for (let i = 0; i < 7; i++) {
        const hours = getHoursStr(daysShort[i]);
        if (groups.length > 0 && groups[groups.length - 1].hours === hours) {
            groups[groups.length - 1].days.push(i);
        } else {
            groups.push({ days: [i], hours });
        }
    }

    return groups
        .filter(g => g.hours !== "Cerrado")
        .map(g => {
            const start = dayNames[g.days[0]];
            const end = dayNames[g.days[g.days.length - 1]];
            const range = g.days.length > 1 ? `${start} a ${end}` : start;
            return `${range}: ${g.hours}`;
        })
        .join(' · ') || null;
}

export function MorfiViandasFooter({ name, address, whatsapp, instagram, facebook, schedule }: MorfiViandasFooterProps) {
    const scheduleText = summarizeSchedule(schedule);

    return (
        <footer id="contacto" className="morfiviandas-body px-4 md:px-8 py-12" style={{ backgroundColor: MV_TITLE, color: '#f5f5f5' }}>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <div className="morfiviandas-title font-semibold text-xl text-white mb-3">{name}</div>
                    <p className="text-sm opacity-80">Comida casera y natural, entregada en tu puerta.</p>
                </div>
                <div className="space-y-2.5">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-1">Contacto</h3>
                    {address && (
                        <div className="flex items-start gap-2 text-sm opacity-85">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{address}</span>
                        </div>
                    )}
                    {whatsapp && (
                        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                            className="block text-sm font-bold" style={{ color: MV_HIGHLIGHT }}>
                            WhatsApp: {whatsapp}
                        </a>
                    )}
                    {scheduleText && (
                        <div className="flex items-start gap-2 text-sm opacity-85">
                            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{scheduleText}</span>
                        </div>
                    )}
                </div>
                <div className="space-y-2.5">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-1">Redes</h3>
                    {instagram && (
                        <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold" style={{ color: MV_HIGHLIGHT }}>
                            <Instagram className="w-4 h-4" /> Instagram
                        </a>
                    )}
                    {facebook && (
                        <a href={getSocialLink(facebook, 'facebook')} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold" style={{ color: MV_HIGHLIGHT }}>
                            <Facebook className="w-4 h-4" /> Facebook
                        </a>
                    )}
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto border-t pt-5 text-xs opacity-60" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                © {new Date().getFullYear()} {name}. Todos los derechos reservados.
            </div>
        </footer>
    );
}
