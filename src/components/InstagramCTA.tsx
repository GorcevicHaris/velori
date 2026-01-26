import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';

export default function InstagramCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 md:space-y-12">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
            <Instagram size={18} className="text-blue-400" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Pridruži se pokretu</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Unapredi svoj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              Streetwear stil
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Otkrijte ekskluzivne modele, inspiraciju za stil i povežite se sa našom zajednicom. Naručite svoju VELORI trenerku putem Instagram DM-a.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-black text-lg shadow-xl"
            >
              <Instagram size={22} />
              <span>@velori.wear</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-transparent text-white px-8 py-4 rounded-2xl border-2 border-white/20 hover:border-white transition-all duration-300 font-bold text-lg backdrop-blur-sm"
            >
              <MessageCircle size={22} />
              <span>Pošalji DM</span>
            </a>
          </div>

          <div className="pt-20">
            <div className="flex items-center justify-between mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
              <p className="px-6 text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.4em] font-black">
                Featured on Feed
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { img: '/whatsapp_image_2026-01-26_at_23.04.13.jpeg', name: 'Premium Navy' },
                { img: '/whatsapp_image_2026-01-26_at_23.04.14.jpeg', name: 'Classic Black' },
                { img: '/whatsapp_image_2026-01-26_at_23.04.15_(1).jpeg', name: 'Urban Grey' }
              ].map((item, idx) => (
                <div key={idx} className={`group relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 md:p-8">
                    <p className="text-white text-sm md:text-base font-black tracking-wide uppercase">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
