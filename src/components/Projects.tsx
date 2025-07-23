import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";

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
    <section className="py-20 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-72 h-72 bg-accent-teal/10 dark:bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-72 h-72 bg-primary-blue/50 dark:bg-primary-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meine <span className="bg-gradient-text bg-clip-text text-transparent">Projekte</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Eine Auswahl meiner neuesten Arbeiten und Projekte, die meine Fähigkeiten und Leidenschaft für Entwicklung zeigen
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-300 mb-8 text-center">Featured Projekte</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  
                  {/* Action buttons on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.liveUrl && (
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
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
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live ansehen
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="hover:bg-neutral-800/10 hover:border-neutral-800 transition-all duration-300">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
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
