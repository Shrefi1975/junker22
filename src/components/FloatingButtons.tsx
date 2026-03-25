import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/966502276389"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] animate-bounce-gentle hover:bg-[#128C7E] transition-colors group"
        aria-label="تواصل معنا على واتساب"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-10 right-0 bg-foreground text-background text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          تواصل معنا على واتساب
        </span>
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-[9999] w-[50px] h-[50px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_4px_12px_rgba(99,102,241,0.3)] hover:opacity-90 transition-all animate-fade-in"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
