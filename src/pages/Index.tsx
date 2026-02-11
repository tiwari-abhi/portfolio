import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkHistorySection from "@/components/WorkHistorySection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Theme } from "@/hooks/useTimeOfDay";

const Index = () => {
  const [theme, setTheme] = useState<Theme>("evening");

  useEffect(() => {
    document.documentElement.classList.remove("theme-morning", "theme-afternoon", "theme-evening");
    if (theme === "afternoon") {
      document.documentElement.classList.add("theme-afternoon");
    } else {
      document.documentElement.classList.add("theme-evening");
    }
    return () => {
      document.documentElement.classList.remove("theme-afternoon", "theme-evening");
    };
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "evening" ? "afternoon" : "evening"));
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar theme={theme} onThemeToggle={handleToggle} />
      <HeroSection />
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
