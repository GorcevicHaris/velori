import { Sparkles, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-600 uppercase">
                  Naša Filozofija
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 leading-[1.1] tracking-tight">
                Luksuz spojen sa udobnošću
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                U VELORI-ju ponovo osmišljavamo šta streetwear može biti. Naša filozofija je jednostavna: izuzetan kvalitet, vanvremenski dizajn i savršeno pristajanje vašem životnom stilu.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Sparkles className="text-white" size={20} />, title: "Premium materijali", desc: "Samo najfinije tkanine nabavljene globalno" },
                { icon: <Shield className="text-white" size={20} />, title: "100% Autentično", desc: "Svaki komad je pedantno izrađen sa preciznošću" },
                { icon: <Zap className="text-white" size={20} />, title: "Brza dostava", desc: "Brza i pouzdana isporuka do vaših vrata" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gray-950 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 text-lg">{item.title}</h3>
                    <p className="text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-12 lg:mt-0">
            <div className="space-y-3 md:space-y-4">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.13.jpeg"
                  alt="VELORI Style 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.15.jpeg"
                  alt="VELORI Style 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.14.jpeg"
                  alt="VELORI Style 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.15_(1).jpeg"
                  alt="VELORI Style 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
