import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkHistorySection from "@/components/WorkHistorySection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
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
