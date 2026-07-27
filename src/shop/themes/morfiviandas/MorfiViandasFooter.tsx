import { Instagram, Facebook, MapPin, Clock, MessageCircle } from "lucide-react";
import { getSocialLink } from "../../../utils/format";
import { MV_CTA } from "./morfiViandasColors";

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
        <footer id="contacto" className="morfiviandas-body px-4 md:px-8 py-8" style={{ backgroundColor: MV_CTA, color: '#ffffff' }}>
            <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
                <div>
                    <div className="morfiviandas-title font-semibold text-xl text-white">{name}</div>
                    <p className="text-sm opacity-80">Comida casera y natural, entregada en tu puerta.</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm">
                    {address && (
                        <span className="flex items-center gap-2 opacity-90">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            {address}
                        </span>
                    )}
                    {scheduleText && (
                        <span className="flex items-center gap-2 opacity-90">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            {scheduleText}
                        </span>
                    )}
                    {whatsapp && (
                        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:opacity-80">
                            <MessageCircle className="w-4 h-4 flex-shrink-0" /> {whatsapp}
                        </a>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {instagram && (
                        <a href={getSocialLink(instagram, 'instagram')} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-70">
                            <Instagram className="w-5 h-5" />
                        </a>
                    )}
                    {facebook && (
                        <a href={getSocialLink(facebook, 'facebook')} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-70">
                            <Facebook className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto mt-4 pt-3 border-t text-xs opacity-70" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                © {new Date().getFullYear()} {name}. Todos los derechos reservados.
            </div>
        </footer>
    );
}
