import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <NewsLetterSection />
      <TeamSection />
    </div>
  );
}
