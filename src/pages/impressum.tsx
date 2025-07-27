import { Scale, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Zscherneck</h1>
                <p className="text-sm text-slate-600">Rechtsanwaltskanzlei</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Zurück zur Startseite
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl">
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Impressum</h1>
              </div>

              <div className="space-y-8 text-slate-600 leading-relaxed">
                <section>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-800">Rechtsanwalt Christoph Zscherneck</p>
                    <p>Kranichstr. 12</p>
                    <p>63329 Egelsbach</p>
                    <p>Telefon: 06103 / 947074</p>
                    <p>Telefax: 06103 / 947075</p>
                    <p>E-mail: mail@zscherneck-rechtsanwalt.de</p>
                  </div>
                </section>


                <section>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Berufsbezeichnung
                  </h2>
                  <div className="space-y-2">
                    <p><strong>Berufsbezeichnung: </strong>Rechtsanwalt nach dem Recht der Bundesrepublik Deutschland</p>
                    <p><strong>Zuständige Zulassungs- und Aufsichtsbehörde: </strong> Rechtsanwaltskammer Frankfurt am Main</p>
                    <p><strong>Adresse der Kammer: </strong>Bockenheimer Anlage 36, 60322 Frankfurt am Main</p>
                    <p><strong>Berufsrechtliche Regelungen:</strong></p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                      <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                      <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                      <li>Fachanwaltsordnung (FAO)</li>
                    </ul>
                    <p className="mt-2">
                      Die Regelungen können eingesehen werden unter:
                      <a href="https://www.brak.de" className="text-emerald-600 hover:text-emerald-700 underline ml-1" target="_blank" rel="noopener noreferrer">
                        www.brak.de
                      </a>
                    </p>
                    <p> Umsatzsteueridentifikationsnummer (§ 27 a UStG): 53974287612</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Berufshaftpflichtversicherung
                  </h2>
                  <div className="space-y-2">
                    <p>HDI Gerling Firmen- und Privatversicherungs AG</p>
                    <p>Riedhorst 2</p>
                    <p>30659 Hannover</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Inhaltlich Verantwortlicher (§ 6 MDStV)
                  </h2>
                  <div className="space-y-2">
                    <p>Rechtsanwalt Christoph Zscherneck</p>
                  </div>
                </section>


                <section>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Haftung für Links
                  </h2>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                    der Seiten verantwortlich.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    Urheberrecht
                  </h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default impressum;
