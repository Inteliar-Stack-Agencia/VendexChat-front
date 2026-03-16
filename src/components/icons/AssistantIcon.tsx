export default function AssistantIcon({ className }: { className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden rounded-sm ${className}`}>
      <img
        src="/iconoVendexchat.png"
        alt="VendexChat"
        className="w-full h-full object-cover scale-[1.18]"
      />
    </span>
  );
}
