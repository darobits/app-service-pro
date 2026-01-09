export function buildWhatsAppLink(whatsappE164: string, message: string) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${whatsappE164}?text=${text}`;
}
