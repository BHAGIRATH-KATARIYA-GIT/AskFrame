import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main className="flex w-full flex-1 flex-col">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
}
