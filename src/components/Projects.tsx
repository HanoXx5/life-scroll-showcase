import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";
import StackIcon from "tech-stack-icons";


interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Web App' | 'E-Commerce' | 'Portfolio' | 'SaaS';
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Website Rechtsanwalt',
    description: 'Eine vollständige E-Commerce-Lösung mit modernem Design, Zahlungsintegration und Admin-Dashboard. Unterstützt mehrere Zahlungsmethoden und bietet ein nahtloses Einkaufserlebnis.',
    image: "/src/assets/Screenshot 2025-07-23 154525.png",
    technologies: ['React', 'Next.js', 'Tailwind CSS',"TypeScript"],
    liveUrl: 'https://www.zscherneck-rechtsanwalt.de/',
    githubUrl: '#',
    category: 'Website',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Eine intuitive Projektmanagement-Anwendung mit Kanban-Boards, Echtzeit-Kollaboration und erweiterten Reporting-Features für Teams jeder Größe.',
    image: taskappImage,
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'SaaS',
    featured: true
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Eine moderne, responsive Portfolio-Website mit animierten Übergängen und optimierter Performance. Showcase für kreative Arbeiten und berufliche Erfahrungen.',
    image: portfolioImage,
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Sanity CMS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Portfolio',
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects-section" className="py-20 bg-neutral-650 dark:bg-neutral-950 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-72 h-72 bg-accent-teal/10 dark:bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-72 h-72 bg-primary-blue/50 dark:bg-primary-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-2 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Meine <span className="bg-gradient-text bg-clip-text text-transparent">Projekte</span> mit
          </h2>
        </div>

        {/* Marquee Animation ohne Pause */}
        <div className="flex justify-center my-2 mb-4">
          <div className="content" style={{ overflow: "hidden", width: "100%", maxWidth: "40ch", padding: "1em 1em" }}>
            <div className="marquee" style={{ position: "relative", width: "100%", height: "2em", fontSize: "2.5em", display: "grid", placeItems: "center" }}>
              <div className="marquee_blur" aria-hidden="true" style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", backgroundColor: "", filter: "contrast(15)" }}>
                <p className="marquee_text" style={{ position: "absolute", minWidth: "100%", whiteSpace: "nowrap", filter: "blur(0.07em)" }}>
                  {Array(3).fill("React | Next.js | Tailwind CSS | TypeScript | Java | Git | Lovable |").join(" ")}
                </p>
              </div>
              <div className="marquee_clear" style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                <p className="marquee_text" style={{ position: "absolute", minWidth: "100%", whiteSpace: "nowrap" }}>
                  {Array(3).fill("React | Next.js | Tailwind CSS | TypeScript | Java | Git | Lovable |").join(" ")}
                </p>
              </div>
            </div>
            <style>
              {`
                @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
                .marquee_text {
                  animation: marquee-continuous 20s linear infinite;
                }
                @keyframes marquee-continuous {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-33.333%); }
                }
              `}
            </style>
          </div>
        </div>
        {/* Featured Projects */}
        <div className="mb-16">
          {/* Mobile Ansicht */}
          <div className="flex flex-col gap-8 md:hidden">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <div className="px-4 pb-4">
                  <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gradient-primary/10 text-primary-blue border-primary-blue/20"
                      >
                        <StackIcon name={tech} className="w-4 h-4 mr-1 inline-block" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </a>
                    )}

                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Desktop Ansicht */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto hidden md:grid">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-neutral-800  border-0 shadow-soft">
                      {project.category}
                    </Badge>
                  </div>
                  {/* Action buttons auf dem Bild entfernt */}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-300 mb-2 group-hover:text-primary-blue transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gradient-primary/10 text-primary-blue border-primary-blue/20 hover:bg-gradient-primary/20 transition-all duration-300"
                      >
                        <StackIcon name={tech} className="w-4 h-4 mr-1 inline-block" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live ansehen
                        </Button>
                      </a>
                    )}
                    {/* GitHub Button entfernt */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
};

export default Projects;
