import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";
import NavigationBar from "../components/NavigationBar";
import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/Footer";
import CodeExample from "../components/CodeExample";

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

      {/* Code Example Section */}
      <CodeExample />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
