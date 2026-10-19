import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import FeaturesSection from "./FeaturesSection";
import IntroVideoSection from "./IntroVideoSection";
import PricingSection from "./PricingSection";
import TeamSection from "./TeamSection";
import NewsletterSection from "./NewsletterSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import ClientsSection from "./ClientsSection";
import FooterSection from "./FooterSection";

export default function StartupLandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <IntroVideoSection />
      <PricingSection />
      <TeamSection />
      <NewsletterSection />
      <TestimonialsSection />
      <ContactSection />
      <ClientsSection />
      <FooterSection />
    </main>
  );
}
