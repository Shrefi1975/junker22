import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
{ name: "أحمد الشمري", text: "خدمة ممتازة وجودة بث عالية، أنصح الجميع بالتجربة. الدعم الفني سريع ومتجاوب.", initials: "أش" },
{ name: "محمد العتيبي", text: "أفضل اشتراك حصلت عليه، المحتوى متنوع والأسعار منافسة جداً. شكراً لفريق Junker22.", initials: "مع" },
{ name: "خالد القحطاني", text: "سرعة في التفعيل ودعم فني على مدار الساعة. تجربة رائعة ومميزة بكل المقاييس.", initials: "خق" },
{ name: "فهد الدوسري", text: "المباريات بجودة ممتازة بدون تقطيع. أنصح فيهم بقوة لكل عشاق الرياضة والترفيه.", initials: "فد" },
{ name: "عبدالله المالكي", text: "اشتراك مميز وسعر ممتاز، التفعيل كان فوري والقنوات شغالة بدون مشاكل.", initials: "عم" },
{ name: "سعود الحربي", text: "جربت أكثر من خدمة بث وهذي الأفضل بدون منازع. الجودة عالية والأسعار معقولة جداً.", initials: "سح" },
{ name: "ياسر الغامدي", text: "باقة الأطفال ممتازة، المحتوى آمن ومناسب وأولادي مبسوطين فيها.", initials: "يغ" },
{ name: "ماجد السبيعي", text: "خدمة عملاء ممتازة ورد سريع على واتساب. تم التفعيل خلال دقائق.", initials: "مس" }];


const TestimonialsSection = () =>
<section className="py-20 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        ماذا يقول <span className="text-gradient">عملاؤنا</span>؟
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="bg-card rounded-2xl p-6 shadow-sm border-b-[3px] border-accent">
        
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-sm">
                  {t.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) =>
              <Star key={j} size={14} className="fill-accent text-accent" />
              )}
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-sm text-popover-foreground">{t.text}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default TestimonialsSection;