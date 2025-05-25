import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";

export default function Home() {
  return (
    <div>
      {/* News / Updates Banner */}
      <NewsBanner />

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
