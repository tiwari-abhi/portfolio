import { useState, useEffect } from "react";
import { Menu, X, Sun, Sunrise, Sunset, Moon } from "lucide-react";
import { TimeOfDay } from "@/hooks/useTimeOfDay";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const timeOptions: { value: TimeOfDay; label: string; icon: typeof Sun }[] = [
  { value: "morning", label: "Morning", icon: Sunrise },
  { value: "afternoon", label: "Afternoon", icon: Sun },
  { value: "evening", label: "Evening", icon: Sunset },
  { value: "night", label: "Night", icon: Moon },
];

const timeIcons: Record<TimeOfDay, typeof Sun> = {
  morning: Sunrise,
  afternoon: Sun,
  evening: Sunset,
  night: Moon,
};

interface NavbarProps {
  timeOfDay: TimeOfDay;
  onThemeChange: (theme: TimeOfDay) => void;
}

const Navbar = ({ timeOfDay, onThemeChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const TimeIcon = timeIcons[timeOfDay];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono border-l border-border pl-4 hover:text-primary transition-colors outline-none">
              <TimeIcon className="h-3.5 w-3.5 text-primary" />
              <span className="capitalize">{timeOfDay}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              {timeOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => onThemeChange(option.value)}
                  className={`flex items-center gap-2 font-mono text-xs cursor-pointer ${
                    timeOfDay === option.value ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <option.icon className="h-3.5 w-3.5" />
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
            <p className="text-xs text-muted-foreground font-mono mb-2">Theme</p>
            <div className="flex gap-2">
              {timeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onThemeChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-center p-2 rounded-md transition-colors ${
                    timeOfDay === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={option.label}
                >
                  <option.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
