import Head from "next/head";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  <Head>
    {/* Primary Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <NewsLetterSection />
      <TeamSection />
    </div>
  );
}
