import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";
import NavigationBar from "../components/NavigationBar";
import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/Footer";
import CodeExampleSection from "../components/CodeExampleSection";
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* News / Updates Banner */}
      <NewsBanner />

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Code Example Section */}
      <div className="px-6 lg:px-16">
        <CodeExampleSection />
      </div>

      {/* Community / Ecosystem Section */}
      <CommunitySection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
