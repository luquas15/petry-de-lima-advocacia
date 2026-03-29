import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import PetryLogo from './PetryLogo';

const WHATSAPP_URL = 'https://wa.me/5551995553947';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Dra. Maria Helena', href: '#sobre' },
  { name: 'Atuação', href: '#atuacao' },
  { name: 'Tem Família Aqui', href: '#projeto' },
  { name: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-2xl py-2' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-3 group cursor-pointer no-underline">
            <PetryLogo className="w-12 h-12 transition-transform duration-700 group-hover:rotate-90" color="#c5a059" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-[0.1em] text-white">PETRY DE LIMA</span>
              <span className="text-[9px] tracking-[0.4em] font-medium uppercase text-gold">Advocacia</span>
            </div>
          </a>

          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/100 hover:text-gold transition-colors no-underline">
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-gold text-white px-6 py-2.5 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all no-underline">
              Consultoria
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-4 text-xs font-bold uppercase tracking-widest text-white/100 hover:text-gold border-b border-white/5 last:border-0 no-underline">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
