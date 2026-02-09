import { motion } from "framer-motion";
import { ArrowDown, Sun, Sunrise, Sunset, Moon } from "lucide-react";
import { TimeOfDay, getTimeGreeting } from "@/hooks/useTimeOfDay";

interface HeroSectionProps {
  timeOfDay: TimeOfDay;
}

const timeIcons: Record<TimeOfDay, typeof Sun> = {
  morning: Sunrise,
  afternoon: Sun,
  evening: Sunset,
  night: Moon,
};

const HeroSection = ({ timeOfDay }: HeroSectionProps) => {
  const TimeIcon = timeIcons[timeOfDay];
  const greeting = getTimeGreeting(timeOfDay);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-grid">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <TimeIcon className="h-4 w-4 text-primary" />
            <p className="text-primary font-mono text-sm tracking-wider">
              {greeting} — DATA ENGINEER
            </p>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the
            <br />
            <span className="text-gradient">data backbone</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I design and build scalable data systems — from pipelines and warehouses
            to real-time analytics platforms that power data-driven decisions.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#expertise"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-glow hover:text-primary transition-all"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#expertise" aria-label="Scroll down">
            <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
