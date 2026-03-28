import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "ما هو أفضل اشتراك IPTV في السعودية؟", a: "Junker22 يقدم أفضل اشتراك IPTV في السعودية مع أكثر من 10,000 قناة مباشرة، أفلام، مسلسلات، ومباريات رياضية بجودة 4K بدون تقطيع. باقات تبدأ من 30 ريال سعودي مع تفعيل فوري بعد الدفع." },
  { q: "ما هو IPTV وكيف يعمل؟", a: "IPTV هو بث تلفزيوني عبر الإنترنت يتيح لك مشاهدة آلاف القنوات العربية والعالمية، الأفلام، المسلسلات، والمباريات الرياضية مباشرة على أي جهاز ذكي متصل بالإنترنت في السعودية." },
  { q: "ما هي الأجهزة المدعومة لتشغيل IPTV؟", a: "ندعم جميع الأجهزة الذكية بما فيها Smart TV (سامسونج، LG، سوني)، أجهزة Android و iPhone و iPad، أجهزة الكمبيوتر، Fire Stick، وأجهزة Android Box." },
  { q: "كم سعر اشتراك IPTV الشهري والسنوي؟", a: "باقاتنا تبدأ من 30 ريال سعودي للشهر الواحد، 69 ريال لـ 3 أشهر، 99 ريال لـ 6 أشهر، و149 ريال للاشتراك السنوي مع توفير يصل إلى 91 ريال." },
  { q: "هل يوجد تجربة مجانية لخدمة IPTV؟", a: "نعم، نوفر تجربة مجانية لمدة 10 ساعات بدون الحاجة لبطاقة ائتمان. يمكنك تجربة جودة البث وتصفح القنوات قبل الاشتراك." },
  { q: "كيف يمكنني الدفع لاشتراك IPTV؟", a: "نقبل الدفع عبر Visa، MasterCard، مدى (Mada)، Apple Pay، وتحويل بنكي محلي. جميع المعاملات مشفرة وآمنة 100%." },
  { q: "هل IPTV يدعم مشاهدة المباريات الرياضية؟", a: "نعم، يشمل اشتراكنا جميع القنوات الرياضية مع تغطية كاملة لكأس العالم FIFA، الدوري السعودي، دوري أبطال أوروبا، والدوري الإنجليزي بجودة 4K." },
  { q: "هل يمكنني استخدام اشتراك IPTV على أكثر من جهاز؟", a: "نعم، تواصل معنا عبر واتساب للحصول على باقة متعددة الأجهزة تناسب احتياجاتك وعائلتك." },
  { q: "هل يوجد ضمان استرداد الأموال؟", a: "نعم، نوفر ضمان استرداد كامل خلال 24 ساعة من الاشتراك إذا لم تكن راضياً عن الخدمة." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
      >
        الأسئلة الشائعة عن اشتراك <span className="text-accent">IPTV</span> في السعودية
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AccordionItem value={`item-${i}`} className="bg-muted rounded-xl border border-border px-4">
              <AccordionTrigger className="text-foreground font-semibold text-right">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-popover-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
