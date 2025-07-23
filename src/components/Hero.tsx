import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Heart, Coffee, Music, Camera, MapPin, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-teal rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <Badge variant="secondary" className="mb-6 bg-success-green/10 text-success-green border-success-green/20 hover:bg-success-green/20 transition-all duration-300">
                <div className="w-2 h-2 bg-success-green rounded-full mr-2 animate-pulse"></div>
                Offen für neue Möglichkeiten
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, ich bin{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Sebastian
                </span>
                <span className="text-neutral-800 dark:text-neutral-200"> Zscherneck</span>
              </h1>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                Wirtschaftsinformatik Student an der TU Darmstadt mit Leidenschaft für Innovation, 
                Design und Technologie. Ich liebe es, Ideen zum Leben zu erwecken und dabei stets neue Wege zu erkunden.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Heart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Lerne mich kennen
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Personal Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">5+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">∞</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Ideen</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced Profile section */}
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main profile card - größer gemacht */}
              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-white/20 dark:border-neutral-700/20 rounded-3xl p-10 shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-8">
                  <div className="relative mx-auto w-48 h-48">
                    <img 
                      src={profileImage} 
                      alt="Profilbild" 
                      className="w-full h-full object-cover rounded-3xl shadow-medium"
                    />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-success-green rounded-full border-4 border-white dark:border-neutral-900 shadow-soft flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Sebastian Zscherneck</h3>
                    <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400 mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>Darmstadt, Deutschland</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-3 bg-gradient-primary/10 text-primary-blue px-6 py-3 rounded-full border border-primary-blue/20">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-medium text-lg">WI Student</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mehr floating badges mit verschiedenen Animationen */}
              <div className="absolute -top-6 -left-6 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-2xl px-5 py-3 shadow-soft hover:scale-110 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">Musik</div>
                    <div className="text-neutral-600 dark:text-neutral-400">Leidenschaft</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-2xl px-5 py-3 shadow-soft hover:scale-110 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">Fotografie</div>
                    <div className="text-neutral-600 dark:text-neutral-400">Hobby</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-2xl px-5 py-3 shadow-soft hover:scale-110 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-teal rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">5+ Jahre</div>
                    <div className="text-neutral-600 dark:text-neutral-400">Berufserfahrung</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-2xl px-5 py-3 shadow-soft hover:scale-110 transition-all duration-300 animate-slide-up" style={{ animationDelay: '1.1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-purple rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">Wirtschaftsinformatik</div>
                    <div className="text-neutral-600 dark:text-neutral-400">TU Darmstadt</div>
                  </div>
                </div>
              </div>
              
              {/* Neue größere Kacheln */}
              {/* Social Media Kachel */}
              <div className="absolute top-20 -left-20 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-3xl p-6 shadow-soft hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1.3s' }}>
                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg">Social Media</h4>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Uni Kachel */}
              <div className="absolute top-20 -right-20 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-3xl p-6 shadow-soft hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.5s' }}>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-800 dark:text-neutral-200">TU Darmstadt</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Wirtschaftsinformatik</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-500">Bachelor Student</div>
                  </div>
                </div>
              </div>
              
              {/* Dekorative Gradient Kachel */}
              <div className="absolute bottom-20 -left-20 w-24 h-24 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-3xl shadow-soft hover:scale-110 transition-all duration-300 animate-float opacity-80" style={{ animationDelay: '1.7s' }}>
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              </div>
              
              {/* Mathenachhilfe Kachel */}
              <div className="absolute bottom-20 -right-20 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-3xl p-6 shadow-soft hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '1.9s' }}>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">∑</span>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-800 dark:text-neutral-200">Mathenachhilfe</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Verfügbar</div>
                  </div>
                </div>
              </div>

              {/* Zusätzliche floating elements */}
              <div className="absolute top-1/2 -left-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-full p-4 shadow-soft hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '1.3s' }}>
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              
              <div className="absolute top-1/2 -right-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 rounded-full p-4 shadow-soft hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                <ExternalLink className="w-6 h-6 text-primary-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;