import { motion } from "framer-motion";

const steps = [
{ num: "1", emoji: "📦", title: "اختر الباقة", desc: "اختر من باقاتنا المتنوعة", gradient: "from-primary to-secondary" },
{ num: "2", emoji: "💳", title: "أكمل الدفع", desc: "ادفع بطريقة آمنة وسهلة", gradient: "from-secondary to-accent" },
{ num: "3", emoji: "🎉", title: "استلم فوراً", desc: "تفعيل فوري للاشتراك", gradient: "from-accent to-success" }];


const StepsSection = () =>
<section className="py-20 bg-background">
    <div className="container mx-auto lg:px-8 py-0 px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        كيف تشترك في <span className="text-gradient">IPTV</span> في 3 خطوات بسيطة؟
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 right-[20%] left-[20%] h-1 bg-gradient-to-l from-secondary via-secondary to-secondary/30 rounded-full" />

        {steps.map((s, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className="text-center relative z-10">
        
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-3xl shadow-lg`}>
              {s.emoji}
            </div>
            <span className="text-accent font-bold text-lg">الخطوة {s.num}</span>
            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sidebar-primary">{s.desc}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default StepsSection;