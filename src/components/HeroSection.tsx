import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile-pic.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background pointer-events-none" />

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
            className="flex flex-col items-center gap-4 mb-6"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
              <img
                src={profilePic}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the
            <br />
            <span className="text-gradient">data backbone</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I design and build scalable data systems - from pipelines and warehouses
            to analytic platforms that power data driven decisions and AI enablements.
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
