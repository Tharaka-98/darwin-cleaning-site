import FiveStarComponent from "@/components/fiveStarSection/FiveStarComponent";
import HeroSectionComponent from "@/components/heroSection";
import ParallaxSection from "@/components/parallaxScroll/ParallaxSectionComponent";
import OurServicesSectionComponent from "@/components/serviceSection";
import TestimonialCarousel from "@/components/Testimonials";
import TeamSectionComponent from "@/components/theTeam";
import WhyChooseUsComponent from "@/components/whyChooseUs";


export default function Home() {
  return (
    <div >
      <HeroSectionComponent />
      <WhyChooseUsComponent />
      <TeamSectionComponent />
      <FiveStarComponent />
      <ParallaxSection />
      <TestimonialCarousel />
      <OurServicesSectionComponent />
    </div>
  );
}
