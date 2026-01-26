import { Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <img
              src="/velori.png"
              alt="VELORI Logo"
              className="h-8 w-auto"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Vrhunski streetwear kreiran za one koji zahtevaju izvrsnost. VELORI pruža udobnost i luksuz u svakom komadu.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/velori.wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Navigacija</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group">
                  <span>Početna</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group">
                  <span>Kolekcija</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group">
                  <span>O nama</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/velori.wear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 group"
                >
                  <span>Prodavnica</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Kolekcija</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Tamno Plava</span>
              </li>
              <li>
                <span className="text-gray-400">Crna</span>
              </li>
              <li>
                <span className="text-gray-400">Tamno Siva</span>
              </li>
              <li>
                <span className="text-gray-400">Steel Blue</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Kontakt</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                <p className="text-gray-300 font-medium">
                  contact@velori.com
                </p>
                <p className="text-xs text-gray-600 italic">
                  Zamenite sa svojom Gmail adresom
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-widest">Instagram</p>
                <a
                  href="https://www.instagram.com/velori.wear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors font-medium inline-flex items-center space-x-2 group"
                >
                  <Instagram size={16} />
                  <span>@velori.wear</span>
                </a>
                <p className="text-xs text-gray-600">
                  Pišite nam za porudžbine
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VELORI. Sva prava zadržana.
            </p>
            <p className="text-gray-500 text-sm">
              Vrhunski streetwear za modernog pojedinca
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privatnost</a>
              <a href="#" className="hover:text-white transition-colors">Uslovi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
