import { useState, useEffect } from "react";
import { Menu, X, Sun, Sunset } from "lucide-react";
import { Theme } from "@/hooks/useTimeOfDay";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
}

const Navbar = ({ theme, onThemeToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isAfternoon = theme === "afternoon";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg tracking-tight">
          <span className="text-primary">&lt;</span>DE<span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={onThemeToggle}
            className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono border-l border-border pl-4 hover:text-primary transition-colors outline-none"
            aria-label="Toggle theme"
          >
            {isAfternoon ? (
              <Sun className="h-3.5 w-3.5 text-primary" />
            ) : (
              <Sunset className="h-3.5 w-3.5 text-primary" />
            )}
            <span className="capitalize">{theme}</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-border">
            <button
              onClick={() => {
                onThemeToggle();
                setOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {isAfternoon ? (
                <Sun className="h-4 w-4 text-primary" />
              ) : (
                <Sunset className="h-4 w-4 text-primary" />
              )}
              Switch to {isAfternoon ? "Evening" : "Afternoon"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
