import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <Badge variant="secondary" className="mb-6 bg-success-green/10 text-success-green border-success-green/20 hover:bg-success-green/20 transition-all duration-300">
                <div className="w-2 h-2 bg-success-green rounded-full mr-2 animate-pulse"></div>
                Verfügbar für Projekte
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, ich bin ein{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Developer
                </span>
                <span className="text-neutral-800">©</span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Mit 5+ Jahren Erfahrung in der Entwicklung von benutzerfreundlichen und 
                innovativen Webanwendungen mit modernen Technologien und einem Fokus auf 
                User Experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Kontaktiere mich
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - Profile card */}
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main profile card */}
              <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-32 h-32">
                    <img 
                      src={profileImage} 
                      alt="Profilbild" 
                      className="w-full h-full object-cover rounded-2xl shadow-medium"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success-green rounded-full border-4 border-white shadow-soft"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">Dein Name</h3>
                    <p className="text-neutral-600 mb-4">Berlin, Deutschland</p>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-primary/10 text-primary-blue px-4 py-2 rounded-full border border-primary-blue/20">
                      <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                      <span className="font-medium">Full-Stack Developer</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neutral-800">€50 - €80/Std</div>
                    <div className="text-sm text-neutral-600">Freiberuflich</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2 shadow-soft hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800">React</div>
                    <div className="text-neutral-600">Expert</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2 shadow-soft hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent-teal rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TS</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800">TypeScript</div>
                    <div className="text-neutral-600">Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;