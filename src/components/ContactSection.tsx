import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const TikTokIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>;


const XIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>;


const InstagramIcon = () =>
<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>;


const socialLinks = [
{
  label: "TikTok",
  href: "https://www.tiktok.com/@junker_sup",
  icon: <TikTokIcon />,
  style: { background: "#000000" },
  hoverClass: "hover:shadow-black/50"
},
{
  label: "Twitter X",
  href: "https://x.com/junker_sup",
  icon: <XIcon />,
  style: { background: "#000000" },
  hoverClass: "hover:shadow-black/50"
},
{
  label: "Instagram",
  href: "https://www.instagram.com/junker.sup",
  icon: <InstagramIcon />,
  style: { background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" },
  hoverClass: "hover:shadow-pink-500/40"
}];


const ContactSection = () =>
<section id="contact" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8 max-w-xl">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center">
      
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">تواصل معنا الآن</h2>
        <p className="mb-8 text-base text-popover-foreground">سنرد عليك في أسرع وقت</p>

        {/* WhatsApp CTA Card */}
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-2xl shadow-xl p-8 mb-8">
        
          <div className="mb-5">
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: "#25D366" }}>
              <MessageCircle size={32} className="text-white" />
            </div>
            <p className="text-sm leading-relaxed text-popover-foreground">
              تحدث معنا مباشرة على واتساب — فريقنا جاهز للرد على استفساراتك وطلباتك
            </p>
          </div>

          <motion.a
          href="https://wa.me/966502276389"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-3 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
          
            <MessageCircle size={22} />
            ابدأ المحادثة على واتساب
          </motion.a>
        </motion.div>

        {/* Social Media */}
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}>
        
          <p className="text-sm font-semibold mb-4 text-popover-foreground">تابعنا على منصات التواصل الاجتماعي</p>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((s) =>
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center gap-2 group`}>
            
                <div
              className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-lg ${s.hoverClass} transition-all duration-200`}
              style={s.style}>
              
                  {s.icon}
                </div>
                <span className="text-xs font-medium transition-colors text-popover-foreground">{s.label}</span>
              </motion.a>
          )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>;


export default ContactSection;