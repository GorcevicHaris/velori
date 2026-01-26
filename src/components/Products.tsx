import { Instagram, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tamno siva',
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
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles size={20} className="text-blue-600" />
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
              Naša Kolekcija
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-950 mb-6">
            Ikonični stilovi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Svaki dizajn je pažljivo kreiran da pruži vrhunsku udobnost i sofisticiran stil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href="https://www.instagram.com/velori.wear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-4 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Instagram size={18} />
                    <span>Naruči odmah</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${product.color}`}></div>
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
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
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            Otkrijte svoj savršen stil iz naše pažljivo odabrane kolekcije
          </p>
          <a
            href="https://www.instagram.com/velori.wear/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
          >
            <Instagram size={20} />
            <span>Pogledaj celu kolekciju</span>
          </a>
        </div>
      </div>
    </section>
  );
}
