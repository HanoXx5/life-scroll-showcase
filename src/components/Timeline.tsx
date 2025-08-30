import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import { useEffect, useState } from "react";

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
    title: 'Business Development Internship',
    company: 'Ecommerce Startup Störtebekker',
    location: 'Frankfurt, Deutschland',
    period: '08/2025 - 10/2025',
    description: [

    ],
    technologies: ['Management', 'Startup'],
    type: 'work'
  },
  {
      id: '2',
      title: 'Tutor Mathematik',
      company: 'Studienkreis Nachhilfe und Selbständigkeit',
      location: 'Egelsbach, Deutschland',
      period: '03/2024 - heute',
      description: [
          'Unterstützung von Schülern in Mathematik',
          '15+ Schüler betreut'],
      technologies: [],
      type: 'work'
    },
  {
    id: '3',
    title: 'B.Sc. Wirtschaftsinformatik',
    company: 'Technische Universität Darmstadt',
    location: 'Darmstadt, Deutschland',
    period: '2024 - heute',
    description: [
      'Aktulle Durchschnittsnote: 1.05',
      'Objektorientierte Programmierung',
      'Prozessoptimierung und Management',
      'Rechnungswesen und Accounting'
    ],
    technologies: ['Java', 'Git'],
    type: 'education'
  },
  {
    id: '4',
    title: 'Abitur',
    company: 'Weibelfeldschule',
    location: 'Dreieich, Deutschland',
    period: '2021 - 2024',
    description: [
      'Abschlussnote: 1.2',
      'Leistungskurse: Mathematik & Sport',
      'Abiturpreis Deutsche Mathematiker Vereinigung',
      'Abiturpreis Deutsche Physikalische Gesellschaft'
    ],
    technologies: [],
    type: 'education'
  },

];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      if (!timelineSection) return;
      
      const rect = timelineSection.getBoundingClientRect();
      const sectionHeight = timelineSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the timeline section has been scrolled through
      const scrolled = Math.max(0, viewportHeight - rect.top);
      const progress = Math.min(100, (scrolled / (sectionHeight + viewportHeight)) * 100);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
    <section id="timeline-section" className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden transition-colors duration-500">


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
          <p className="text-xl dark:text-neutral-200 text-neutral-600 max-w-2xl mx-auto">
            Von Bildung bis zu aktuellen Projekten hier ist meine berufliche Reise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with scroll progress */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
            <div 
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-blue via-accent-purple to-accent-teal transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 ${getTypeColor(item.type)} rounded-full border-4 border-white shadow-medium flex items-center justify-center z-10 hover:scale-125 transition-all duration-300`}>

                  </div>

                  {/* Content card */}
                  <div className="ml-20">
                    <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl hover:shadow-medium transition-all duration-500 hover:scale-[1.02] group">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold  dark:text-neutral-200 text-neutral-800 group-hover:text-primary-blue transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-lg  dark:text-neutral-200 text-neutral-600 font-medium">{item.company}</p>
                            <div className="flex items-center gap-2  dark:text-neutral-200 text-neutral-500 mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-neutral-100/50 border-neutral-200  dark:text-neutral-200 text-neutral-700">
                            {item.period}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          {item.description.map((desc, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-neutral-600  dark:text-neutral-500">{desc}</p>
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