import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";
import NavigationBar from "../components/NavigationBar";
import KeyFeatures from "../components/KeyFeatures";

export default function Home() {
  return (
    <div>
      {/* News / Updates Banner */}
      <NewsBanner />

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />
    </div>
  );
}
