import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">
          <div className="flex items-center">
            <img
              src="/velori.png"
              alt="VELORI Logo"
              className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Početna
            </a>
            <a href="#products" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Proizvodi
            </a>
            <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              O nama
            </a>
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300 text-sm font-bold"
            >
              <Instagram size={16} className="shrink-0" />
              <span className="leading-none mt-0.5">Naruči odmah</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 py-8 space-y-6">
            <a
              href="#home"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Početna
            </a>
            <a
              href="#products"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proizvodi
            </a>
            <a
              href="#about"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              O nama
            </a>
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold active:scale-[0.95] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram size={20} className="shrink-0" />
              <span className="leading-none mt-1">Naruči odmah</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
