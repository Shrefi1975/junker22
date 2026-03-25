import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/junker-tv-logo.png";

const navLinks = [
{ label: "الرئيسية", href: "#hero" },
{ label: "الباقات", href: "#pricing" },
{ label: "المميزات", href: "#features" },
{ label: "الأسئلة الشائعة", href: "#faq" },
{ label: "تواصل معنا", href: "#contact" }];


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[hsl(220,26%,10%)]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-14 lg:h-16">
        <a href="#hero" className="flex-shrink-0">
          <img alt="Junker TV شعار" className="h-10 lg:h-12 w-auto" src={logo} />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="القائمة الرئيسية">
          {navLinks.map((l) =>
          <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors font-medium text-[15px]">
              {l.label}
            </a>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          

          
          <a href="#pricing" className="gradient-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
            اشترك الآن
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="فتح القائمة">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-[hsl(220,26%,10%)] border-t border-white/10 overflow-hidden">
          
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((l) =>
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white py-2 font-medium">
                  {l.label}
                </a>
            )}
              <a href="#pricing" onClick={() => setOpen(false)} className="gradient-primary text-primary-foreground text-center py-3 rounded-lg font-semibold mt-2">
                اشترك الآن
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;