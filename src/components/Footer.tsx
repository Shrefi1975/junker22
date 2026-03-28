import { MessageCircle, Send, Phone } from "lucide-react";

const TikTokIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>;


const XIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>;


const InstagramIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>;


const Footer = () =>
<footer className="bg-[hsl(220,26%,10%)] text-white border-t border-white/10">
    <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <img alt="Junker TV" className="h-10 mb-4 rounded-xl" src="/lovable-uploads/0ca0edc8-7a27-43ea-b893-f9a727400f0a.png" />
          <p className="leading-relaxed text-sm mb-5 text-primary-foreground">
            أفضل مزود خدمة IPTV في السعودية — بث مباشر بجودة 4K، آلاف القنوات، وأسعار منافسة.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
            href="https://www.tiktok.com/@junker_sup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110">
            
              <TikTokIcon />
            </a>
            <a
            href="https://x.com/junker_sup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110">
            
              <XIcon />
            </a>
            <a
            href="https://www.instagram.com/junker.sup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-9 h-9 rounded-xl text-white transition-all duration-200 hover:scale-110 hover:opacity-90"
            style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
            
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-5 text-base">روابط سريعة</h4>
          <ul className="space-y-3">
            {[
          { label: "الرئيسية", href: "#hero" },
          { label: "تجربة مجانية", href: "#free-trial" },
          { label: "باقات IPTV", href: "#pricing" },
          { label: "المميزات", href: "#features" },
          { label: "الأسئلة الشائعة", href: "#faq" },
          { label: "تواصل معنا", href: "#contact" }].
          map((l) =>
          <li key={l.href}>
                <a href={l.href} className="transition-colors text-sm flex items-center gap-2 text-primary-foreground">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {l.label}
                </a>
              </li>
          )}
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h4 className="font-bold text-white mb-5 text-base">طرق الدفع</h4>
          <div className="flex flex-wrap gap-2">
            {[
          { name: "Visa", color: "bg-[#1A1F71] text-white border-[#1A1F71]" },
          { name: "MasterCard", color: "bg-[#EB001B]/20 text-[#F79E1B] border-[#EB001B]/30" },
          { name: "Mada", color: "bg-[#004B87]/20 text-[#56B947] border-[#004B87]/30" },
          { name: "Apple Pay", color: "bg-white/15 text-white border-white/20" }].
          map((p) =>
          <span key={p.name} className={`${p.color} border rounded-lg px-4 py-2 text-xs font-semibold`}>
                {p.name}
              </span>
          )}
          </div>
          <p className="text-xs mt-4 text-primary-foreground">جميع المعاملات مشفرة وآمنة</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-5 text-base">تواصل معنا</h4>
          <div className="space-y-3">
            <a href="https://wa.me/966502276389" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors text-sm text-primary-foreground">
              <Phone size={16} className="text-[#25D366]" /> +966502276389
            </a>
            <a href="https://t.me/junker_7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors text-sm text-primary-foreground">
              <Send size={16} className="text-[#0088cc]" /> @junker_7
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground">© {new Date().getFullYear()} Junker22. جميع الحقوق محفوظة</p>
        <p className="text-sm text-primary-foreground">أفضل اشتراك IPTV في السعودية — بث مباشر 4K بدون تقطيع</p>
      </div>
    </div>
  </footer>;


export default Footer;