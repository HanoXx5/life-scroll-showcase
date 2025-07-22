import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue/5 dark:bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lass uns <span className="bg-gradient-text bg-clip-text text-transparent">zusammenarbeiten</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Hast du ein spannendes Projekt im Kopf? Ich würde gerne davon hören und dir dabei helfen, es zum Leben zu erwecken.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Kontaktinformationen</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Ich bin immer offen für neue Herausforderungen und spannende Projekte. 
                Egal ob du eine Idee für eine Webanwendung hast oder Unterstützung bei einem 
                bestehenden Projekt benötigst - lass uns darüber sprechen!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">E-Mail</h4>
                    <p className="text-neutral-600">kontakt@deinename.de</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Telefon</h4>
                    <p className="text-neutral-600">+49 123 456 7890</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Standort</h4>
                    <p className="text-neutral-600">Berlin, Deutschland</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-neutral-800 mb-4">Folge mir</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="hover:bg-neutral-800/10 hover:border-neutral-800 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary-blue/10 hover:border-primary-blue transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-accent-teal/10 hover:border-accent-teal transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Schreib mir eine Nachricht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 resize-none"
                    placeholder="Erzähl mir von deinem Projekt..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Nachricht senden
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-500">
                  Ich antworte normalerweise innerhalb von 24 Stunden
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;