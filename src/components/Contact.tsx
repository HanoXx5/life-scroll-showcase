import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Formspree Hook für die Formular-Verarbeitung
  const [state, handleSubmit] = useForm("mzzgygov");

  // Erfolgsmeldung anzeigen, wenn das Formular erfolgreich gesendet wurde
  if (state.succeeded) {
    return (
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 bg-gradient-to-br from-green-50/90 via-emerald-50/80 to-teal-50/80 dark:from-green-900/90 dark:via-emerald-800/90 dark:to-teal-900/90 backdrop-blur-xl border border-green-200/30 dark:border-green-600/30 rounded-3xl shadow-xl">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 dark:text-green-200">
                  Nachricht erfolgreich gesendet!
                </h2>
                <p className="text-green-700 dark:text-green-300 text-lg">
                  Vielen Dank für deine Nachricht. Ich werde mich so schnell wie möglich bei dir melden.
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  Neue Nachricht senden
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

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

       <div className="max-w-2xl mx-auto">
         {/* Contact Information */}
         <div className="space-y-8 animate-slide-up">
           <div className="text-center">
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
           <div className="text-center">
             <h4 className="font-semibold text-neutral-800 dark:text-neutral-300 mb-4">Folge mir</h4>
             <div className="flex gap-4 justify-center">
               <a href="https://github.com/HanoXx5" target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                   <Github className="w-5 h-5" />
                 </Button>
               </a>
               <a href="https://www.linkedin.com/in/sebastian-zscherneck-717a44297/" target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-primary-blue transition-all duration-300">
                   <Linkedin className="w-5 h-5" />
                 </Button>
               </a>
             </div>
           </div>
         </div>

          {/*
          {/* Contact Form mit Formspree Integration
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-blue-900/90 backdrop-blur-xl border border-white/30 dark:border-gray-600/30 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-300 mb-6">Schreib mir eine Nachricht</h3>

              <div className="space-y-6">
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
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                      placeholder="Dein Name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
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
                      className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                      placeholder="deine@email.de"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
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
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 dark:bg-neutral-900/60 dark:text-neutral-300"
                    placeholder="Worum geht es?"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
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
                    rows={6}
                    className="bg-white/50 border-neutral-200 focus:border-primary-blue transition-all duration-300 resize-none dark:bg-neutral-900/60 dark:text-neutral-300"
                    placeholder="Erzähl mir von deinem Projekt..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-glow transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  {state.submitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  Mit dem Absenden dieses Formulars stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten gemäß unserer{" "}
                  <a
                    href="/datenschutz"
                    className="text-sm-300 hover:text-purple-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </div>
            </Card>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;