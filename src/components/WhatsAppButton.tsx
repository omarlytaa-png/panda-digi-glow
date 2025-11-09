import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254111679286"; // Format: country code + number without +
  const message = "Hi Panda Tech! I'd like to learn more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-hover transition-smooth animate-fade-in pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
