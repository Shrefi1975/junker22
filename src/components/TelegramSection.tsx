import { motion } from "framer-motion";
import { Send } from "lucide-react";

const TelegramSection = () =>
<section className="py-16 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center shadow-2xl py-[35px]">
      
        <div className="relative inline-block mb-6">
          <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0088cc] to-[#00aaff] flex items-center justify-center mx-auto shadow-lg">
          
            <Send size={36} className="text-white" />
          </motion.div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          تابعنا على <span className="bg-gradient-to-r from-[#0088cc] to-[#00aaff] bg-clip-text text-transparent">تليجرام</span>
        </h2>
        <p className="mb-8 text-popover-foreground text-base">
          انضم لقناتنا للحصول على آخر العروض والتحديثات الحصرية
        </p>

        <motion.a
        href="https://t.me/junker_7"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#0088cc] to-[#00aaff] hover:opacity-90 transition-opacity shadow-lg">
        
          <Send size={22} />
          @junker_7
        </motion.a>

        <div className="mt-8 flex items-center justify-center text-muted-foreground text-sm gap-[19px]">
          <div className="text-center">
            <span className="block text-2xl font-bold text-foreground">+3346</span>
            مشترك
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <span className="block text-2xl font-bold text-foreground">يومي</span>
            عروض جديدة
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <span className="block text-2xl font-bold text-foreground">فوري</span>
            دعم مباشر
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default TelegramSection;