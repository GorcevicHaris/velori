import { Instagram, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tamno plava',
    description: 'Vrhunska teget trenerka sa besprekornim krojem',
    image: '/whatsapp_image_2026-01-26_at_23.04.13.jpeg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Crna',
    description: 'Vanvremenska crna trenerka za svakodnevni luksuz',
    image: '/whatsapp_image_2026-01-26_at_23.04.14.jpeg',
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 3,
    name: 'Tamno siva',
    description: 'Sofisticirana siva za svestran stil',
    image: '/whatsapp_image_2026-01-26_at_23.04.15_(1).jpeg',
    color: 'from-slate-500 to-slate-700',
  },
  {
    id: 4,
    name: 'Svetlo siva',
    description: 'Moderna svetlo plava trenerka - limited izdanje',
    image: '/whatsapp_image_2026-01-26_at_23.04.15.jpeg',
    color: 'from-blue-400 to-blue-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 mb-4 md:mb-6">
            <Sparkles size={18} className="text-blue-600" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-600 uppercase">
              Naša Kolekcija
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 mb-6 tracking-tight">
            Ikonični stilovi
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Svaki dizajn je pažljivo kreiran da pruži vrhunsku udobnost i sofisticiran stil
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-x-4 bottom-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-20">
                  <a
                    href="https://www.instagram.com/velori.wear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-4 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-2xl text-sm"
                  >
                    <Instagram size={16} className="shrink-0" />
                    <span className="leading-none mt-0.5">Naruči odmah</span>
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              </div>

              <div className="space-y-2 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.color}`}></div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block p-1 rounded-[2rem] bg-gray-50 border border-gray-100 mb-8">
            <p className="text-gray-500 px-6 py-2 text-sm md:text-base font-medium">
              Otkrijte svoj savršen stil iz naše pažljivo odabrane kolekcije
            </p>
          </div>
          <br />
          <a
            href="https://www.instagram.com/velori.wear/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gray-950 text-white px-10 py-5 rounded-2xl hover:bg-blue-600 hover:shadow-2xl transition-all duration-300 font-bold text-lg active:scale-95"
          >
            <Instagram size={22} />
            <span>Pogledaj celu kolekciju</span>
          </a>
        </div>
      </div>
    </section>
  );
}
