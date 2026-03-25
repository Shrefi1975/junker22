import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Gift, CheckCircle2, Clock, ShieldCheck, Zap, PlayCircle, CreditCard } from "lucide-react";

const perks = [
  { icon: <Zap size={15} />, text: "تفعيل فوري" },
  { icon: <Clock size={15} />, text: "10 ساعات مجانية" },
  { icon: <ShieldCheck size={15} />, text: "بدون بطاقة ائتمان" },
];

const FreeTrialSection = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const lastSubmit = useRef(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmit.current < 5000) {
      setError("يرجى الانتظار قبل الإرسال مرة أخرى");
      return;
    }
    const cleaned = phone.trim();
    if (!cleaned) {
      setError("يرجى إدخال رقم الجوال");
      return;
    }
    if (!/^(05\d{8}|\+9665\d{8}|009665\d{8})$/.test(cleaned)) {
      setError("يرجى إدخال رقم جوال سعودي صحيح (مثال: 05xxxxxxxx)");
      return;
    }
    setError("");
    lastSubmit.current = now;
    const message = `السلام عليكم 👋\n\nأطلب تجربة مجانية لمدة 10 ساعات\n\nرقم الجوال: ${cleaned}\n\nشكراً!`;
    window.open(`https://wa.me/966502276389?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="free-trial" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(var(--primary)/0.35) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, hsl(var(--accent)/0.3) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 text-accent rounded-full px-5 py-2 text-sm font-bold mb-5 shadow-sm"
            >
              <Gift size={15} />
              عرض حصري — تجربة مجانية 10 ساعات
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 leading-tight">
              جاهز تجرّب{" "}
              <span className="relative inline-block">
                <span className="text-gradient">بنفسك؟</span>
              </span>
            </h2>
            <p className="text-base md:text-lg text-popover-foreground max-w-lg mx-auto leading-relaxed">
              أدخل رقم جوالك واحصل على{" "}
              <span className="text-accent font-bold">10 ساعات</span>{" "}
              تستمتع فيها بآلاف القنوات والمحتوى بجودة 4K — بدون أي التزام
            </p>
          </motion.div>

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <motion.a
              href="#free-trial"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector("form")?.querySelector("input")?.focus(); }}
              className="flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-accent/30 transition-all w-full sm:w-auto justify-center"
            >
              <PlayCircle size={20} />
              جرّب مجاناً
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-primary/30 transition-all w-full sm:w-auto justify-center"
            >
              <CreditCard size={20} />
              اشترك الآن
            </motion.a>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Gradient stripe */}
            <div className="h-1 gradient-primary" />

            <div className="p-6 md:p-8">
              {/* Perks pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
                {perks.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-semibold"
                  >
                    {p.icon}
                    {p.text}
                  </motion.div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={44} className="text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">تم الإرسال بنجاح! 🎉</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      سيتواصل معك فريقنا على واتساب لتفعيل تجربتك المجانية خلال دقائق.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                  >
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <Smartphone size={15} className="text-primary" />
                        أدخل رقم جوالك للحصول على التجربة
                      </label>

                      {/* Input + Button */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value); setError(""); }}
                            placeholder="05xxxxxxxx"
                            maxLength={15}
                            dir="ltr"
                            className="w-full bg-muted border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition text-left text-lg font-mono pr-4"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="gradient-cta text-primary-foreground w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-base shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
                        >
                          <Gift size={18} />
                          احصل على التجربة
                        </motion.button>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-sm mt-2 font-medium"
                        >
                          {error}
                        </motion.p>
                      )}
                    </div>

                    <p className="text-center text-xs text-muted-foreground pt-1">
                      🔒 بياناتك محمية بالكامل — لن يتم مشاركتها مع أي طرف ثالث
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground"
          >
            <span>🏆</span>
            <span>
              انضم لأكثر من{" "}
              <span className="text-foreground font-bold">50,000 مشترك</span>{" "}
              يستمتعون بخدمتنا يومياً
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
