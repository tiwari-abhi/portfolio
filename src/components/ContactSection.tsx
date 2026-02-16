import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: `${form.firstName} ${form.lastName}`.trim(),
        from_email: form.email,
        message: form.message,
      }, EMAILJS_PUBLIC_KEY);
      toast({ title: "Message sent successfully!" });
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="container max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// LET'S CONNECT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Interested in working together or have a question about data engineering? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" placeholder="Your message..." rows={5} value={form.message} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={sending}>
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/tiwari-abhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinavyogeshtiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            Boston, MA
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
