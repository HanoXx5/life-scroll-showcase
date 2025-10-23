import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Heart, Coffee, Music, Camera, MapPin, Briefcase, GraduationCap, Sparkles, Code, Zap, ArrowRight, FolderOpen } from "lucide-react";
import "animate.css";
import { useEffect } from "react";
import StackIcon from "tech-stack-icons";
import TiltedCard from '@/components/ui/TiltedCard';
import FluidGlass from '@/components/ui/FluidGlass';

const ballStyles = `
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
.hero-balls-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.ball {
  position: absolute;
  width: 32vmin;
  height: 32vmin;
  border-radius: 50%;
  backface-visibility: hidden;
  animation: move linear infinite;
  opacity: 0.22;
  filter: blur(22px);
}
.ball:nth-child(odd) {
  background: radial-gradient(circle at 60% 40%, #3b82f6 60%, #6366f1 100%);
}
.ball:nth-child(even) {
  background: radial-gradient(circle at 60% 40%, #6366f1 60%, #3b82f6 100%);
}
.ball:nth-child(1) {
  top: 77%;
  left: 88%;
  animation-duration: 40s;
  animation-delay: -3s;
  transform-origin: 16vw -2vh;
}
.ball:nth-child(2) {
  top: 42%;
  left: 2%;
  animation-duration: 53s;
  animation-delay: -29s;
  transform-origin: -19vw 21vh;
}
.ball:nth-child(3) {
  top: 28%;
  left: 18%;
  animation-duration: 49s;
  animation-delay: -8s;
  transform-origin: -22vw 3vh;
}
.ball:nth-child(4) {
  top: 50%;
  left: 79%;
  animation-duration: 26s;
  animation-delay: -21s;
  transform-origin: -17vw -6vh;
}
.ball:nth-child(5) {
  top: 46%;
  left: 15%;
  animation-duration: 36s;
  animation-delay: -40s;
  transform-origin: 4vw 0vh;
}


`;

const Hero = () => {
  useEffect(() => {
    // Particles.js initialisieren
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    }
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500">
      <style>{ballStyles}</style>
      {/* Hintergrund-Bälle */}
      <div className="hero-balls-bg z-0">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>

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
           <div className="bg-gradient-to-br from-white/80 via-gray-50/90 to-blue-50/80 dark:from-neutral-800/50 dark:via-neutral-900/50 dark:to-neutral-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl p-8 shadow-xl animate__animated animate__fadeInDown animate__slow ">
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
             <div
               className="flex-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group animate__animated animate__fadeInLeft animate__slow"
               onClick={() => scrollToSection("timeline-section")}
             >
               <div className="flex items-center space-x-3">
                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ">
                   <ArrowRight className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">Erfahren Sie mehr</div>
                 </div>
               </div>
             </div>

             <div
               className="flex-1 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-4 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer group animate__animated animate__fadeInUp animate__delay-1s animate__slow"
               onClick={() => scrollToSection("projects-section")}
             >
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
              <div className="bg-white/90 w-64 h-64 rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/assets/IMG_0437 (2)-Photoroom.png"
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
                  <a href="mailto:s.zscherneck@web.de" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                    </a>
                </div>
              </div>
            </div>
            {/* Desktop Ansicht */}
            <div className="relative max-w-6xl w-full z-10 hidden lg:block">
              {/* Asymmetric Grid Layout */}
              <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full h-[600px]">

                {/* Small decorative element - top left */}
                <div className="col-span-1 row-span-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 animate__animated animate__fadeInDownBig animate__delay-2s animate__slow flex items-center justify-center" >
                  <div style={{ width: 80, height: 80 }}>
                        <StackIcon name="java" />
                      </div>
                </div>

                {/* Main Profile Card - Large asymmetric placement */}
                <div className="col-span-3 rounded-3xl row-span-3 col-start-2 row-start-1 bg-white/90 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-4xl p-8 shadow-2xl hover:shadow-xl transition-all duration-500 animate__animated animate__fadeInDown animate__delay-1s animate__slow">
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <div className="relative">
                     <div className="w-58 h-58 rounded-3xl shadow-xl overflow-hidden">
                             <img
                               src="/assets/IMG_0437 (2)-Photoroom.png"
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



                {/* Code decoration - far right */}
                <div className="col-span-1 row-span-1 col-start-5 row-start-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 flex items-center justify-center animate__animated animate__fadeInRightBig animate__delay-2s animate__slow">
                  <a href="https://github.com/HanoXx5" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer ">
                  <div style={{ width: 70, height: 70 }}>
                  <StackIcon name="github" variant="dark"/>
                  </div>
                    </a>
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

                {/* Social Media Section - "Let's Connect" nur Text, 1 Row */}
                <div className="col-span-2 row-span-1 col-start-2 row-start-4 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-neutral-800/50 dark:to-neutral-900/50 backdrop-blur-xl border border-white/30 dark:border-neutral-700/30 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInUpBig animate__slower flex items-center justify-center">
                  <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-lg">Let´s Connect</h3>
                </div>

                {/* LinkedIn Kachel */}
                <div className="col-span-1 row-span-1 col-start-2 row-start-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center animate__animated animate__fadeInUpBig animate__delay-2s animate__slow">
                  <a href="https://www.linkedin.com/in/sebastian-zscherneck-717a44297" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Linkedin className="w-10 h-10 text-white" />
                  </a>
                </div>

                {/* Mail Kachel */}
                <div className="col-span-1 row-span-1 col-start-3 row-start-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center animate__animated animate__fadeInUpBig animate__delay-1s animate__slower">
                  <a href="mailto:s.zscherneck@web.de" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Mail className="w-10 h-10 text-white" />
                  </a>
                </div>

                {/* Energy/Lightning decoration */}
                <div className="col-span-1 row-span-1 col-start-1 row-start-3 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 flex items-center justify-center animate__animated animate__fadeInDown animate__delay-1s animate__slow">
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                      <StackIcon name="react" variant="light"/>
                  </div>
                </div>

                {/* Math Tutoring - größer, rot, col-span-2, row-span-2 */}
                <a
                  href="https://nachhilfe-langen-egelsbach.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-start-5 row-start-1 col-span-2 row-span-2"
                >
                  <div className="bg-gradient-to-br from-red-500/30 to-pink-600/30 backdrop-blur-xl border border-white/20 dark:border-red-700/30 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500 animate__animated animate__fadeInDown animate__delay-2s flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="font-bold text-neutral-800 dark:text-neutral-200 text-lg">Mathe Nachhilfe</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
                      <ExternalLink className="text-white w-9 h-9" />
                    </div>
                  </div>
                </a>

                {/* Small code decoration */}
                <div className="col-span-1 row-span-2 col-start-1 row-start-4 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-2xl shadow-lg hover:scale-110 transition-all duration-500 animate__animated animate__fadeInUpBig animate__delay-1s animate__slow flex items-center justify-center">
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

      {/* FluidGlass Effekt am unteren Rand der Hero Section */}
      <div style={{ height: '600px', position: 'relative', zIndex: 30 }}>
        <FluidGlass
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01
          }}
          barProps={{}}
          cubeProps={{}}
        />
      </div>
    </section>
  );
};

export default Hero;
