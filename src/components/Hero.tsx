import { Instagram, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-200 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
                Premium Streetwear Kolekcija
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-950 leading-none">
              Pure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-slate-900">
                Elegance
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-light">
              Doživite savršen spoj udobnosti i luksuza. VELORI trenerke su kreirane za one koji zahtevaju izvrsnost u svakom detalju.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="https://www.instagram.com/velori.wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Instagram size={22} className="relative z-10" />
                <span className="relative z-10">Naruči putem Instagrama</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg border-2 border-gray-200 hover:border-gray-300"
              >
                <span>Pogledaj kolekciju</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-12 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Autentičan kvalitet</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4+</p>
                <p className="text-sm text-gray-600">Premium stila</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Globalna</p>
                <p className="text-sm text-gray-600">Dostava dostupna</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src="/whatsapp_image_2026-01-26_at_23.04.14.jpeg"
                alt="Premium Tracksuit Model"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
