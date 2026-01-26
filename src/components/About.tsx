import { Sparkles, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-950 leading-tight mb-6">
                Luksuz spojen sa udobnošću
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                U VELORI-ju ponovo osmišljavamo šta streetwear može biti. Naša filozofija je jednostavna: izuzetan kvalitet, vanvremenski dizajn i savršeno pristajanje vašem životnom stilu.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 mb-2 text-lg">Premium materijali</h3>
                  <p className="text-gray-600">Samo najfinije tkanine nabavljene globalno kako bi se osigurala izdržljivost i udobnost</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 mb-2 text-lg">100% Autentično</h3>
                  <p className="text-gray-600">Svaki komad je pedantno izrađen sa preciznošću i strašću</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 mb-2 text-lg">Brza dostava</h3>
                  <p className="text-gray-600">Brza i pouzdana isporuka kako bi vaša porudžbina stigla na vreme</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.13.jpeg"
                  alt="VELORI Style 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.15.jpeg"
                  alt="VELORI Style 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.14.jpeg"
                  alt="VELORI Style 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.15_(1).jpeg"
                  alt="VELORI Style 4"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
