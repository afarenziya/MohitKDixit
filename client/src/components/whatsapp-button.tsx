import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919871775302"; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent("Hello! I would like to inquire about your CA services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] border-2 border-white hover:scale-110 group"
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
}
