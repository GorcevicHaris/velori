import { Instagram, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-slate-200 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 max-w-2xl">
            <div className="inline-block">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
                Premium Streetwear Kolekcija
              </span>
            </div>

            <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-gray-950 leading-[0.9] md:leading-none">
              Pure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-slate-900">
                Elegance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-light">
              Doživite savršen spoj udobnosti i luksuza. VELORI trenerke su kreirane za one koji zahtevaju izvrsnost u svakom detalju.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8">
              <a
                href="https://www.instagram.com/velori.wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl active:scale-[0.95] transition-all duration-300 font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Instagram size={22} className="relative z-10 shrink-0" />
                <span className="relative z-10 leading-none mt-1">Naruči odmah</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#products"
                className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-50 active:scale-[0.95] transition-all duration-300 font-bold text-lg border-2 border-gray-100 hover:border-gray-200"
              >
                <span className="leading-none mt-1">Pogledaj kolekciju</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 md:pt-12 border-t border-gray-100">
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900">100%</p>
                <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wider">Kvalitet</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900">PREM</p>
                <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wider">Stilovi</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900">FAST</p>
                <p className="text-[10px] md:text-sm text-gray-500 font-medium uppercase tracking-wider">Dostava</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2.5rem] blur-2xl opacity-10"></div>
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50">
              <img
                src="/whatsapp_image_2026-01-26_at_23.04.14.jpeg"
                alt="Premium Tracksuit Model"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
