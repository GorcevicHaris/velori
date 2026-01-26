import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';

export default function InstagramCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Instagram size={20} />
            <span className="text-sm font-bold tracking-widest uppercase">Pridruži se našoj zajednici</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Unapredi svoj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-white">
              Streetwear stil
            </span>
          </h2>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
            Otkrijte ekskluzivne modele, inspiraciju za stil i povežite se sa našom zajednicom. Naručite svoju VELORI trenerku putem Instagram DM-a za personalizovanu uslugu i trenutnu podršku.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-500 text-slate-900 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Instagram size={24} className="relative z-10" />
              <span className="relative z-10">@velori.wear</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-transparent text-white px-8 py-4 rounded-2xl border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-lg"
            >
              <MessageCircle size={22} />
              <span>Pošalji DM za narudžbinu</span>
            </a>
          </div>

          <div className="pt-16">
            <p className="text-sm text-blue-200 uppercase tracking-widest font-semibold mb-8">
              Izdvojeni stilovi
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.13.jpeg"
                  alt="Tamno Plava"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold">Tamno Plava</p>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.14.jpeg"
                  alt="Crna"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold">Crna</p>
                  </div>
                </div>
              </div>

              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                <img
                  src="/whatsapp_image_2026-01-26_at_23.04.15_(1).jpeg"
                  alt="Tamno Siva"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold">Tamno Siva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
