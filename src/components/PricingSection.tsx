import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import vultureImg from "@/assets/vulture-subscription.webp";
import smartersImg from "@/assets/smarters-player.webp";
import kidsImg from "@/assets/kids-subscription.webp";

interface Plan {
  name: string;
  price?: number;
  oldPrice?: number;
  duration: string;
  saving?: string;
  badge?: string;
  badgeColor?: string;
  featured?: boolean;
  image: string;
  features: string[];
  link: string;
}

const plans: Plan[] = [
{ name: "فولتشر - شهر واحد", price: 30, duration: "30 يوم", image: vultureImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/xAqVgxK" },
{ name: "فولتشر - 3 أشهر", price: 69, duration: "90 يوم", saving: "توفير 21 ريال", image: vultureImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/wWEVbvB" },
{ name: "فولتشر - 6 أشهر", price: 99, duration: "180 يوم", saving: "توفير 81 ريال", image: vultureImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/OqAOvQe" },
{ name: "فولتشر - 12 شهر", price: 149, oldPrice: 240, duration: "365 يوم", saving: "توفير 91 ريال", badge: "الأكثر شعبية", badgeColor: "bg-accent", featured: true, image: vultureImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/xAqVgKl" },
{ name: "تجديد فولتشر", duration: "للعملاء الحاليين", image: vultureImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/zvzBjNR" },
{ name: "سمارت - 12 شهر", price: 49, oldPrice: 89, duration: "سنة كاملة", badge: "الأوفر", badgeColor: "bg-success", featured: true, image: smartersImg, features: ["جميع القنوات + أفلام + مسلسلات حصرية", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/" },
{ name: "اشتراك kids خاص للاطفال 6 شهور", price: 39, duration: "6 أشهر", image: kidsImg, features: ["قنوات أطفال حصرية + أفلام كرتون", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/EZYbGxD" },
{ name: "اشتراك kids خاص للاطفال 12 شهر", price: 69, duration: "سنة كاملة", saving: "توفير 9 ريال", image: kidsImg, features: ["قنوات أطفال حصرية + أفلام كرتون", "🏆 يشمل بطولة كأس العالم FIFA", "جودة 4K على جميع الأجهزة الذكية", "تحديث يومي | دعم 24/7"], link: "https://junker21.com/nEaeGVw" }];


const PricingCard = ({ plan, index }: {plan: Plan;index: number;}) =>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.05 }}
  className={`relative bg-card rounded-2xl border-2 border-border p-6 shadow-sm hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/15 hover:border-primary transition-all duration-300 flex flex-col ${plan.featured ? "border-t-4 border-t-accent" : ""}`}>
  
    {plan.badge &&
  <span className={`absolute -top-3 right-4 ${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
        {plan.badge}
      </span>
  }

    <img src={plan.image} alt={plan.name} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />

    <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
    <p className="text-sm mb-3 text-popover-foreground">{plan.duration}</p>

    {plan.price !== undefined &&
  <div className="mb-4">
        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
        <span className="text-foreground font-medium mr-1">ريال</span>
        {plan.oldPrice &&
    <span className="text-sm text-muted-foreground line-through mr-2">{plan.oldPrice} ريال</span>
    }
      </div>
  }

    {plan.saving &&
  <span className="inline-block bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
        {plan.saving}
      </span>
  }

    <ul className="space-y-2 mb-4 flex-grow">
      {plan.features.map((f, i) =>
    <li key={i} className="flex items-center gap-2 text-card-foreground text-sm">
          <Check size={16} className="text-success flex-shrink-0" />
          {f}
        </li>
    )}
    </ul>

    {/* Post-payment notice */}
    <div className="bg-primary/8 border border-primary/20 rounded-lg px-3 py-2 mb-4 text-xs text-primary font-semibold flex items-start gap-2">
      <Zap size={13} className="mt-0.5 flex-shrink-0" />
      <span className="text-popover-foreground">بعد الدفع ستصلك رسالة واتساب وإيميل فورية بكود الاشتراك وروابط التنزيل 📲</span>
    </div>

    <a
    href={plan.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center gradient-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
    
      اشترك الآن
    </a>
  </motion.div>;


const PricingSection = () =>
<section id="pricing" className="py-20 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        باقات <span className="text-accent">IPTV</span> المناسبة لك
      </h2>
      <p className="text-center mb-4 text-popover-foreground text-lg">اختر اشتراك IPTV الأنسب واستمتع بالبث فوراً</p>

      {/* Post-payment global notice */}
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/25 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
      
        <span className="text-3xl">📩</span>
        <div className="text-right">
          <p className="font-bold text-foreground text-sm">التوصيل الفوري بعد الدفع</p>
          <p className="mt-0.5 text-sm text-popover-foreground">ستتلقى رسالة واتساب + إيميل فور إتمام الدفع تحتوي على كود الاشتراك الخاص بك وروابط تنزيل التطبيق على الهاتف والشاشة الذكية</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plans.map((plan, i) =>
      <PricingCard key={i} plan={plan} index={i} />
      )}
      </div>
    </div>
  </section>;


export default PricingSection;