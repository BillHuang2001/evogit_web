import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";
import NavigationBar from "../components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NewsBanner />
      <NavigationBar />
      <HeroSection />
    </main>
  );
}
