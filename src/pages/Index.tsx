import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import WhyUsSection from "@/components/WhyUsSection";
import StepsSection from "@/components/StepsSection";
import FreeTrialSection from "@/components/FreeTrialSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TelegramSection from "@/components/TelegramSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen font-cairo overflow-x-hidden" dir="rtl">
    <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[10001] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded">
      تخطي إلى المحتوى
    </a>
    <Header />
    <main>
      <HeroSection />
      <MarqueeSection />
      <FreeTrialSection />
      <FeaturesSection />
      <PricingSection />
      <WhyUsSection />
      <StepsSection />
      <TestimonialsSection />
      <TelegramSection />
      <ContactSection />
      <FAQSection />
    </main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
