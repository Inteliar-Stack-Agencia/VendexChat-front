export default function AssistantIcon({ className }: { className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      <img
        src="/iconoVendexchat.png"
        alt="VendexChat"
        style={{ width: '120%', height: '120%', marginLeft: '-10%', marginTop: '-10%', flexShrink: 0, objectFit: 'cover' }}
      />
    </span>
  );
}
