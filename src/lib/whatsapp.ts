import { SITE } from "@/config/site";

/** Ouvre WhatsApp Web / app avec le message prérempli (`text` encodé). */
export function whatsappContactUrl(prefillMessage: string): string {
  const phone = SITE.whatsappPhoneE164.replace(/\D/g, "");
  const params = new URLSearchParams();
  const text = prefillMessage.trim();
  if (text) params.set("text", text);
  const q = params.toString();
  return q ? `https://wa.me/${phone}?${q}` : `https://wa.me/${phone}`;
}
