import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "ما هو IPTV وكيف يعمل؟", a: "IPTV هو بث تلفزيوني عبر الإنترنت يتيح لك مشاهدة آلاف القنوات والأفلام والمسلسلات على أي جهاز ذكي متصل بالإنترنت." },
  { q: "ما هي الأجهزة المدعومة؟", a: "ندعم جميع الأجهزة الذكية، التلفزيونات، الهواتف، الأجهزة اللوحية، وأجهزة الكمبيوتر." },
  { q: "كيف يمكنني الاشتراك؟", a: "اختر الباقة المناسبة واضغط على زر الاشتراك، سيتم توجيهك لإتمام عملية الشراء والتفعيل فوري." },
  { q: "هل يوجد ضمان استرداد الأموال؟", a: "نعم، نوفر ضمان استرداد خلال 24 ساعة من الاشتراك." },
  { q: "ما هي طرق الدفع المتاحة؟", a: "ندعم الدفع عبر Visa، MasterCard، مدى، Apple Pay، وتحويل بنكي." },
  { q: "هل يمكنني استخدام الاشتراك على أكثر من جهاز؟", a: "نعم، تواصل معنا عبر واتساب للحصول على باقة متعددة الأجهزة." },
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
        الأسئلة الشائعة عن <span className="text-accent">IPTV</span>
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
