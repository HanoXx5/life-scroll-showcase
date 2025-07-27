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
                  Sebastian Zscherneck
                </span>
              </h3>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-primary-blue text-neutral-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary-blue text-neutral-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-accent-purple text-neutral-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-accent-purple transition-all duration-300">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>© {currentYear} Sebastian Zscherneck</span>
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