import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  Dein Name
                </span>
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Leidenschaftlicher Full-Stack Developer mit dem Fokus auf moderne, 
                benutzerfreundliche Webanwendungen und innovative Lösungen.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-primary-blue/20 hover:border-primary-blue/50 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-neutral-600 text-neutral-300 hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#hero" className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Über mich
              </a>
              <a href="#timeline" className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Werdegang
              </a>
              <a href="#projects" className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Projekte
              </a>
              <a href="#contact" className="block text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                Frontend Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                Backend Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                UI/UX Consulting
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>© {currentYear} Dein Name. Gemacht mit</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in Berlin</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Datenschutz
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Impressum
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;