import { Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-100 relative pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8 col-span-1 xs:col-span-2 md:col-span-1">
            <img
              src="/velori.png"
              alt="VELORI Logo"
              className="h-10 w-auto brightness-200 contrast-200"
            />
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Vrhunski streetwear kreiran za one koji zahtevaju izvrsnost. VELORI pruža udobnost i luksuz u svakom komadu.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/velori.wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-blue-600 text-white rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-xl"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Navigacija</h3>
            <ul className="space-y-4">
              {[
                { name: 'Početna', href: '#home' },
                { name: 'Kolekcija', href: '#products' },
                { name: 'O nama', href: '#about' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors flex items-center space-x-2 group text-sm font-semibold">
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Kolekcija</h3>
            <ul className="space-y-4">
              {['Classic Black', 'Premium Navy', 'Urban Grey', 'Steel Blue'].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Podrška</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/velori.wear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Instagram DM</p>
                  <p className="text-gray-300 font-bold group-hover:text-blue-400 transition-colors">@velori.wear</p>
                </a>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Email</p>
                  <p className="text-gray-300 font-bold">contact@velori.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-600 text-xs font-bold tracking-wider">
              © {new Date().getFullYear()} VELORI WEAR. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
