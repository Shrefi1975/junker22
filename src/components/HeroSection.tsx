import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

const stats = [
  { label: "+10,000 قناة", emoji: "📺" },
  { label: "بث 4K بدون تقطيع", emoji: "🎬" },
  { label: "+50,000 مشترك", emoji: "👥" },
  { label: "دعم فني 24/7", emoji: "⚡" },
];

const floatingVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(249,115,22,0.15)",
      "0 0 40px rgba(249,115,22,0.3)",
      "0 0 20px rgba(249,115,22,0.15)",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 pb-8 lg:pt-20 lg:pb-12">
    {/* Background */}
    <div className="absolute inset-0">
      <motion.img
        src={heroBg}
        alt="اشتراك IPTV بث مباشر رياضي وترفيهي في السعودية"
        className="w-full h-full object-cover object-center sm:object-top"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
    </div>

    {/* Floating particles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-accent/20 blur-xl pointer-events-none"
        style={{
          width: 60 + i * 30,
          height: 60 + i * 30,
          top: `${15 + i * 16}%`,
          left: `${10 + i * 18}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.7,
        }}
      />
    ))}

    <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="max-w-4xl mx-auto text-center py-6 sm:py-10">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="inline-block mb-5 sm:mb-7"
        >
          <motion.span
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full inline-flex items-center gap-2"
            {...glowPulse}
          >
            🔥 أكثر من 50,000 مشترك يثقون بنا
          </motion.span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 80 }}
          className="text-[1.6rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white mb-4 sm:mb-6 px-1 sm:px-0"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
        >
          أفضل اشتراك{" "}
          <motion.span
            className="text-accent inline-block"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          >
            IPTV
          </motion.span>{" "}
          في السعودية
          <br className="hidden sm:block" />
          <span className="block sm:inline"> بجودة 4K بدون تقطيع</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          استمتع بأكثر من 10,000 قناة مباشرة، أفلام، مسلسلات، ومباريات رياضية
          <br className="hidden md:block" />
          على جميع أجهزتك. باقات تبدأ من 30 ريال مع تفعيل فوري.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2"
        >
          <a
            href="#pricing"
            className="gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            اشترك الآن
          </a>
          <a
            href="#free-trial"
            className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            🎁 جرّب مجاناً
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-1"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={floatingVariants}
              animate="animate"
              className="bg-white/[0.07] backdrop-blur-sm rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 border border-white/15 flex items-center gap-2 hover:bg-white/15 transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">{s.emoji}</span>
              <span className="font-semibold text-xs sm:text-sm text-white">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
