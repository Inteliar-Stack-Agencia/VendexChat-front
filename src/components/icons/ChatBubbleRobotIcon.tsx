import type { SVGProps } from "react";

export default function ChatBubbleRobotIcon({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer emerald rounded square */}
      <rect x="0" y="0" width="100" height="100" rx="24" fill="#10b981" />

      {/* Robot (scaled and centered) */}
      <g transform="translate(15, 8) scale(0.70)">
        {/* Chat bubble: circle + triangle tail */}
        <circle cx="50" cy="48" r="48" fill="url(#cbrobot-bg)" />
        <polygon points="10,86 -2,108 30,90" fill="url(#cbrobot-bg)" />
        {/* Antenna base */}
        <rect x="45" y="12" width="10" height="8" rx="3" fill="#2dd4a0" />
        {/* Antenna tip */}
        <circle cx="50" cy="10" r="4" fill="#5eead4" />
        {/* Head */}
        <rect x="22" y="20" width="56" height="42" rx="12" fill="#1cd4a0" />
        {/* Left ear */}
        <rect x="14" y="32" width="8" height="16" rx="4" fill="#1cd4a0" />
        {/* Right ear */}
        <rect x="78" y="32" width="8" height="16" rx="4" fill="#1cd4a0" />
        {/* Face plate */}
        <rect x="28" y="26" width="44" height="30" rx="8" fill="#15b88a" />
        {/* Left eye */}
        <ellipse cx="39" cy="40" rx="5" ry="6" fill="white" />
        <circle cx="40" cy="39" r="2.5" fill="#1a1a2e" />
        {/* Right eye */}
        <ellipse cx="61" cy="40" rx="5" ry="6" fill="white" />
        <circle cx="62" cy="39" r="2.5" fill="#1a1a2e" />
        {/* Mouth */}
        <path d="M42 50 Q50 56 58 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Body */}
        <rect x="30" y="64" width="40" height="22" rx="8" fill="#1cd4a0" />
        {/* Body detail */}
        <rect x="48" y="68" width="4" height="14" rx="2" fill="#15b88a" />
        {/* Left arm */}
        <rect x="20" y="66" width="10" height="6" rx="3" fill="#1cd4a0" />
        {/* Right arm */}
        <rect x="70" y="66" width="10" height="6" rx="3" fill="#1cd4a0" />
      </g>

      <defs>
        <linearGradient id="cbrobot-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b2f80" />
          <stop offset="1" stopColor="#2a1f6e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
