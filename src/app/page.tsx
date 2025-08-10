import HeroSectionComponent from "@/components/heroSection";
import OurServicesSectionComponent from "@/components/serviceSection";
import TeamSectionComponent from "@/components/theTeam";
import WhyChooseUsComponent from "@/components/whyChooseUs";


export default function Home() {
  return (
    <div >
      <HeroSectionComponent />
      <WhyChooseUsComponent />
      <TeamSectionComponent />
      <OurServicesSectionComponent />
    </div>
  );
}
