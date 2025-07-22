import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Startup GmbH',
    location: 'Berlin, Deutschland',
    period: '2023 - Present',
    description: [
      'Entwicklung und Wartung von React-basierten Webanwendungen',
      'Implementierung von RESTful APIs mit Node.js und Express',
      'Mentoring von Junior-Entwicklern und Code-Reviews',
      'Verbesserung der Performance um 40% durch Optimierungen'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    type: 'work'
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'München, Deutschland',
    period: '2021 - 2023',
    description: [
      'Entwicklung responsiver Websites für verschiedene Kunden',
      'Zusammenarbeit mit UX/UI-Designern zur Umsetzung von Designs',
      'Optimierung der Ladezeiten und SEO-Performance',
      'Integration von Content Management Systemen'
    ],
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'Firebase'],
    type: 'work'
  },
  {
    id: '3',
    title: 'Bachelor of Science - Informatik',
    company: 'Technische Universität Berlin',
    location: 'Berlin, Deutschland',
    period: '2018 - 2021',
    description: [
      'Schwerpunkt auf Softwareentwicklung und Algorithmen',
      'Abschlussarbeit: "Machine Learning in Web Applications"',
      'Praktikum bei verschiedenen Tech-Unternehmen',
      'Aktiv in der Studierendenvertretung'
    ],
    technologies: ['Java', 'Python', 'C++', 'MySQL', 'Git'],
    type: 'education'
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    company: 'Freelance Projekt',
    location: 'Remote',
    period: '2022',
    description: [
      'Vollständige E-Commerce-Lösung für lokale Unternehmen',
      'Integration von Zahlungsanbietern (Stripe, PayPal)',
      'Admin-Dashboard für Produktverwaltung',
      'Mobile-First responsive Design'
    ],
    technologies: ['React', 'Next.js', 'Stripe API', 'MongoDB', 'Tailwind CSS'],
    type: 'project'
  }
];

const Timeline = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-primary-blue';
      case 'education':
        return 'bg-accent-purple';
      case 'project':
        return 'bg-accent-teal';
      default:
        return 'bg-neutral-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Building className="w-4 h-4 text-white" />;
      case 'education':
        return <Calendar className="w-4 h-4 text-white" />;
      case 'project':
        return <MapPin className="w-4 h-4 text-white" />;
      default:
        return <Calendar className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-blue/5 dark:bg-primary-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mein <span className="bg-gradient-text bg-clip-text text-transparent">Werdegang</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Von der Ausbildung bis zu aktuellen Projekten - hier ist meine berufliche Reise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-accent-purple to-accent-teal"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 ${getTypeColor(item.type)} rounded-full border-4 border-white shadow-medium flex items-center justify-center z-10 hover:scale-125 transition-all duration-300`}>
                    {getTypeIcon(item.type)}
                  </div>

                  {/* Content card */}
                  <div className="ml-20">
                    <Card className="p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-[1.02] group">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-blue transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-lg text-neutral-600 font-medium">{item.company}</p>
                            <div className="flex items-center gap-2 text-neutral-500 mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-neutral-100/50 border-neutral-200 text-neutral-700">
                            {item.period}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          {item.description.map((desc, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-neutral-600">{desc}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="bg-gradient-primary/10 text-primary-blue border-primary-blue/20 hover:bg-gradient-primary/20 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;