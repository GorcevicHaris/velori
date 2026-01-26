import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/velori.png"
              alt="VELORI Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Početna
            </a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Proizvodi
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              O nama
            </a>
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              <Instagram size={18} />
              <span>Naruči odmah</span>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <a
              href="#home"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Početna
            </a>
            <a
              href="#products"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Proizvodi
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              O nama
            </a>
            <a
              href="https://www.instagram.com/velori.wear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium w-full justify-center"
            >
              <Instagram size={18} />
              <span>Naruči odmah</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
