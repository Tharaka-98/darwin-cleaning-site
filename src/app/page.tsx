import FiveStarComponent from "@/components/fiveStarSection/FiveStarComponent";
import HeroSectionComponent from "@/components/heroSection";
import HowItWorksComponent from "@/components/howItWorks";
import ParallaxSection from "@/components/parallaxScroll/ParallaxSectionComponent";
import OurServicesSectionComponent from "@/components/serviceSection";
import TestimonialCarousel from "@/components/Testimonials";
import TeamSectionComponent from "@/components/theTeam";
import WhyChooseUsComponent from "@/components/whyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <WhyChooseUsComponent />
      <HowItWorksComponent />
      <TeamSectionComponent />
      <FiveStarComponent />
      <ParallaxSection />
      <TestimonialCarousel />
      <OurServicesSectionComponent />
    </div>
  );
}
