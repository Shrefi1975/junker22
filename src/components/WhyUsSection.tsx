import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeadphonesIcon, Globe, Trophy, Tv2 } from "lucide-react";

const reasons = [
{
  icon: <Zap size={28} />,
  color: "hsl(var(--accent))",
  bg: "hsl(var(--accent)/0.12)",
  title: "بث فائق السرعة بدون تقطيع",
  desc: "خوادمنا الموزعة عالمياً تضمن لك بثاً سلساً بدون انقطاع حتى في أوقات الذروة"
},
{
  icon: <Trophy size={28} />,
  color: "hsl(var(--secondary))",
  bg: "hsl(var(--secondary)/0.12)",
  title: "تغطية كأس العالم FIFA كاملة",
  desc: "استمتع بكل مباريات البطولة مباشرة بجودة 4K مع تعليق بالعربي وبدون إعلانات"
},
{
  icon: <Tv2 size={28} />,
  color: "hsl(var(--primary))",
  bg: "hsl(var(--primary)/0.12)",
  title: "+10,000 قناة على جميع الأجهزة",
  desc: "سواء كنت على الهاتف أو الشاشة الذكية أو الكمبيوتر — تجربة متكاملة في كل مكان"
},
{
  icon: <HeadphonesIcon size={28} />,
  color: "#25D366",
  bg: "rgba(37,211,102,0.12)",
  title: "دعم فني 24/7 على واتساب",
  desc: "فريقنا يرد عليك في دقائق — لا انتظار ولا تأخير. دعم حقيقي من أشخاص حقيقيين"
},
{
  icon: <ShieldCheck size={28} />,
  color: "hsl(var(--success))",
  bg: "hsl(var(--success)/0.12)",
  title: "تفعيل فوري بعد الدفع",
  desc: "لحظة إتمام دفعك — يصلك كود الاشتراك وروابط التنزيل على واتساب وإيميلك فوراً"
},
{
  icon: <Globe size={28} />,
  color: "hsl(var(--accent))",
  bg: "hsl(var(--accent)/0.12)",
  title: "أسعار منافسة وعروض حصرية",
  desc: "أرخص سعر IPTV مع أعلى جودة — باقات تناسب جميع الاحتياجات بدءاً من 30 ريال"
}];


const WhyUsSection = () =>
<section id="why-us" className="py-16 sm:py-20 bg-background overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">
      
        <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-5 py-2 text-sm font-bold mb-5">
        
          <Trophy size={15} />
          لماذا نحن الأفضل؟
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
          لماذا Junker22 هو{" "}
          <span className="text-gradient">أفضل سيرفر IPTV في السعودية</span>
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-popover-foreground">
          اكتشف لماذا يثق أكثر من 50,000 مشترك سعودي بخدمة IPTV لدينا
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {reasons.map((r, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="group relative bg-card border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 overflow-hidden">
        
            {/* Subtle glow */}
            <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{ background: r.bg, transform: "translate(30%, -30%)" }} />
        

            <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 relative"
          style={{ background: r.bg, color: r.color }}>
          
              {r.icon}
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{r.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{r.desc}</p>
          </motion.div>
      )}
      </div>

      {/* Bottom CTA banner */}
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-14 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
      
        <div>
          <p className="text-xl font-bold text-foreground mb-1">جاهز تجرب بنفسك؟ 🚀</p>
          <p className="text-sm text-popover-foreground">ابدأ بتجربة مجانية 10 ساعة — بدون بطاقة ائتمان</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
          href="#free-trial"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap">
          
            🎁 جرّب مجاناً
          </a>
          <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap">
          
            اشترك الآن
          </a>
        </div>
      </motion.div>
    </div>
  </section>;


export default WhyUsSection;