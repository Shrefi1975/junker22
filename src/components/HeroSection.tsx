import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const stats = [
{ label: "+10,000 قناة", emoji: "📺" },
{ label: "بث 4K بدون تقطيع", emoji: "🎬" },
{ label: "+50,000 مشترك", emoji: "👥" },
{ label: "دعم فني 24/7", emoji: "⚡" }];


const HeroSection = () =>
<section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-14 lg:pt-20">
    <div className="absolute inset-0">
      <img src={heroBg} alt="IPTV بث مباشر رياضي وترفيهي" className="w-full h-full object-cover object-center sm:object-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
      <div className="max-w-4xl mx-auto text-center my-[12px] py-[23px]">
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-6">
        
          <span className="bg-transparent border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
            🔥 أكثر من 50,000 مشترك يثقون بنا
          </span>
        </motion.div>

        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-0"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}>
        
          أفضل تجربة <span className="text-accent">IPTV</span> عالمية بدون تقطيع
        </motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-sm sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}>
        
          استمتع بآلاف القنوات المباشرة والمحتوى الترفيهي المتجدد بجودة عالية وسرعة بث فائقة على جميع أجهزتك.
        </motion.p>

        {/* Post-payment info banner */}
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 mb-6 sm:mb-8 max-w-sm sm:max-w-xl mx-auto w-full sm:w-auto">
        
          <span className="text-2xl">🚀</span>
          <p className="text-white text-sm font-semibold leading-snug text-right">
            بعد إتمام الدفع — ستصلك رسالة فورية على واتساب وإيميلك تحتوي على كود الاشتراك وروابط تنزيل التطبيق على جميع الأجهزة
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="items-center justify-center gap-3 sm:gap-4 w-full flex flex-row px-0">
        
          





        
          





        
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 flex flex-row">
        
          {stats.map((s, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="bg-transparent rounded-full px-4 py-2 border border-white/15 flex items-center gap-2">
          
              <span className="text-lg">{s.emoji}</span>
              <span className="font-semibold text-sm text-primary-foreground">{s.label}</span>
            </motion.div>
        )}
        </motion.div>
      </div>
    </div>
  </section>;


export default HeroSection;