import Image from "next/image";
import HeroSection from "../components/HeroSection";
import NewsBanner from "../components/NewsBanner";

export default function Home() {
  return (
    <main>
      <NewsBanner />
      <HeroSection />
    </main>
  );
}
