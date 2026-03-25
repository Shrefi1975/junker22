import vultureImg from "@/assets/vulture-subscription.webp";
import smartersImg from "@/assets/smarters-player.webp";
import kidsImg from "@/assets/kids-subscription.webp";
import marquee1 from "@/assets/marquee-1.jpeg";
import marquee2 from "@/assets/marquee-2.jpeg";
import marquee3 from "@/assets/marquee-3.jpeg";
import marquee4 from "@/assets/marquee-4.jpeg";

const images = [
  { src: vultureImg, alt: "اشتراك فولتشر" },
  { src: smartersImg, alt: "Smarters Player Lite" },
  { src: kidsImg, alt: "اشتراك الأطفال" },
  { src: marquee1, alt: "مسلسلات وأفلام" },
  { src: marquee2, alt: "أفلام أجنبية" },
  { src: marquee3, alt: "قنوات رياضية" },
  { src: marquee4, alt: "الدوري السعودي" },
];

const MarqueeSection = () => (
  <section className="py-12 overflow-hidden bg-primary-foreground shadow-xl">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
      اشتراكاتنا المميزة
    </h2>
    <div className="relative">
      <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarqueeSection;
