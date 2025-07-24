import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Heart, Coffee, Music, Camera, MapPin, Briefcase, GraduationCap, Sparkles, Code, Zap, ArrowRight, FolderOpen } from "lucide-react";
import "animate.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Particles.js initialisieren
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500">
      {/* Particles.js Container */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse"style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
      <br/>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         {/* Left content */}
         <div className="space-y-8 relative ">
           <div className="bg-gradient-to-br from-white/80 via-gray-50/90 to-blue-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl p-8 shadow-xl animate__animated animate__fadeInDown animate__slow ">
             <div className="relative z-10 ">
               <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                 Hi, ich bin{" "}
                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                   Sebastian
                 </span>
                 <span className="text-neutral dark:text-neutral-200"> Zscherneck</span>
               </h1>

               <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                 Wirtschaftsinformatik Student im Bachelor an der TU Darmstadt mit Leidenschaft für Innovation,
                 Design und Technologie. Ich liebe es, Ideen zum Leben zu erwecken und dabei stets neue Wege zu erkunden.
                 Falls sie Interesse an einer Zusammenarbeit bei einem Projekt haben, kontaktieren sie mich gerne.
               </p>
               <br/>
             </div>
           </div>

           {/* Redesigned Buttons with glassmorphism style - Equal width */}
           <div className="flex gap-4 relative z-10">
             <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group animate__animated animate__fadeInLeft animate__slow">
               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ">
                   <ArrowRight className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">Erfahren Sie mehr</div>
                 </div>
               </div>
             </div>

             <div className="flex-1 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group animate__animated animate__fadeInUp animate__delay-1s animate__slow">
               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                   <FolderOpen className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">Meine Projekte</div>
                 </div>
               </div>
             </div>
           </div>
         </div>

          {/* Right content */}
          {/* Mobile: Nur Bild und Social, Desktop: Asymmetrisches Grid */}
          <div className="flex justify-center relative">
            {/* Mobile Ansicht */}
            <div className="w-full flex flex-col items-center gap-6 lg:hidden">
              <div className="w-40 h-40 rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/src/assets/profile-image.jpg"
                  alt="Sebastian Zscherneck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Egelsbach, Deutschland</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.linkedin.com/in/sebastian-zscherneck-717a44297" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </a>
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Ansicht */}
            <div className="relative max-w-6xl w-full z-10 hidden lg:block">
              {/* Asymmetric Grid Layout */}
              <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full h-[600px]">

                {/* Small decorative element - top left */}
                <div className="col-span-1 row-span-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 animate__animated animate__fadeInLeft animate__delay-2s animate__slow flex items-center justify-center" >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                {/* Main Profile Card - Large asymmetric placement */}
                <div className="col-span-3 rounded-3xl row-span-3 col-start-2 row-start-1 bg-white/90 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-4xl p-8 shadow-2xl hover:shadow-xl transition-all duration-500 animate__animated animate__zoomIn animate__delay-1s animate__slow">
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <div className="relative">
                     <div className="w-58 h-58 rounded-3xl shadow-xl overflow-hidden">
                             <img
                               src="/src/assets/profile-image.jpg"
                               alt="Sebastian Zscherneck"
                               className="w-full h-full object-cover"
                             />
                           </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Egelsbach, Deutschland</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tall Card - right side */}
                <div className="col-span-1 row-span-2 col-start-5 row-start-2 bg-gradient-to-b from-red-400/20 to-pink-500/20 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInDown animate__slower">
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="w-8 h-1 bg-red-400 rounded-full"></div>
                      <div className="w-6 h-1 bg-pink-400 rounded-full"></div>
                      <div className="w-10 h-1 bg-red-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Code decoration - far right */}
                <div className="col-span-1 row-span-1 col-start-6 row-start-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 flex items-center justify-center animate__animated animate__fadeInRightBig animate__delay-2s animate__slow">
                  <Coffee className="w-6 h-6 text-white" />
                </div>

                {/* University Card - repositioned */}
                <div className="col-span-3 row-span-1 col-start-4 row-start-4 relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInRight animate__slow">
                  <div className="flex items-center justify-center h-full space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">TU Darmstadt</div>
                      <div className="text-neutral-600 dark:text-neutral-400 text-xs">Bachelor Studium</div>
                    </div>
                  </div>
                </div>

                {/* Social Media Section - repositioned asymmetrically */}
                <div className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-neutral-800/50 dark:to-neutral-900/50 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInUpBig animate__slower">
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-lg">Let´s Connect</h3>
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                        <a href= "https://www.linkedin.com/in/sebastian-zscherneck-717a44297" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-white" />
                        </a>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Energy/Lightning decoration */}
                <div className="col-span-1 row-span-2 col-start-1 row-start-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 flex items-center justify-center animate__animated animate__fadeInLeft animate__delay-3s">
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Math Tutoring - smaller, repositioned */}
                <a
                  href="https://nachhilfe-langen-egelsbach.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 row-span-1 col-start-5 row-start-1"
                >
                <div className="col-span-1 row-span-1 col-start-4 row-start-5 bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInDown animate__delay-2s" >
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-2">

                                      <div>
                                        <div className="font-bold text-neutral-800 dark:text-neutral-200 text-xs">Mathe Nachhilfe</div>
                                      </div>
                                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                                                                              <ExternalLink className="text-white"></ExternalLink>
                                                                            </div>
                                    </div>

                </div>
                   </a>

                {/* Small code decoration */}
                <div className="col-span-1 row-span-1 col-start-1 row-start-5 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 animate__animated animate__fadeInUpBig animate__delay-1s animate__slow flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>

                {/* Wirtschaftsinformatik badge - floating */}
                <div className="col-span-3 row-span-1 col-start-4 row-start-5 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInUpBig animate__slow">
                  <div className="flex items-center justify-center h-full space-x-6">

                    <div className="text-center flex flex-col items-center space-y-1">
                      <Code className="w-6 h-6 text-sm" />
                      <div className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">Wirtschaftsinformatik</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

export default Hero;