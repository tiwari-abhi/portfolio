import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkHistorySection from "@/components/WorkHistorySection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useTimeOfDay, TimeOfDay } from "@/hooks/useTimeOfDay";
import { useEffect } from "react";

const themeClasses: Record<TimeOfDay, string> = {
  morning: "theme-morning",
  afternoon: "theme-afternoon",
  evening: "theme-evening",
  night: "", // default root styles
};

const Index = () => {
  const timeOfDay = useTimeOfDay();

  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove("theme-morning", "theme-afternoon", "theme-evening");
    
    // Add current theme class
    const themeClass = themeClasses[timeOfDay];
    if (themeClass) {
      document.documentElement.classList.add(themeClass);
    }

    return () => {
      document.documentElement.classList.remove("theme-morning", "theme-afternoon", "theme-evening");
    };
  }, [timeOfDay]);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar timeOfDay={timeOfDay} />
      <HeroSection timeOfDay={timeOfDay} />
      <ExpertiseSection />
      <WorkHistorySection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 text-center text-muted-foreground text-xs font-mono border-t border-border">
        © {new Date().getFullYear()} — Built with precision & passion
      </footer>
    </div>
  );
};

export default Index;
