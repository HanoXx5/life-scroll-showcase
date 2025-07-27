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
            Let's get in <span className="bg-gradient-text bg-clip-text text-transparent">touch</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Hast du ein spannendes Projekt im Kopf? Ich würde gerne davon hören und dir dabei helfen, es zum Leben zu erwecken.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-300 mb-6">Kontaktinformationen</h3>

            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-300">E-Mail</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">s.zscherneck@web.de</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-300">Telefon</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">+49 162 1992865</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-300">Standort</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">Egelsbach, Deutschland</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-300 mb-4">Folge mir</h4>
              <div className="flex gap-4">
              <a href="https://github.com/HanoXx5" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                  <Github className="w-5 h-5" />
                </Button>
                </a>
                <a  href="https://www.linkedin.com/in/sebastian-zscherneck-717a44297/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-300 mb-6">Schreib mir eine Nachricht</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 resize-none dark:bg-neutral-900/60 dark:text-neutral-300"
                    placeholder="Erzähl mir von deinem Projekt..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-glow transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Nachricht senden
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
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