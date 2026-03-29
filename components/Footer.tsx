import { Instagram, Linkedin } from 'lucide-react';
import PetryLogo from './PetryLogo';

const Footer = () => (
  <footer className="bg-charcoal pt-20 pb-12 text-white/100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-12">
        <PetryLogo className="mx-auto mb-6 w-16 h-16" />
        <h3 className="text-white font-serif text-2xl tracking-[0.2em]">PETRY DE LIMA</h3>
        <p className="text-gold text-[9px] uppercase tracking-[0.6em] font-bold mt-2">Advocacia</p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12 text-[10px] font-bold uppercase tracking-widest">
        <a href="#home" className="hover:text-gold transition-colors no-underline">Início</a>
        <a href="#sobre" className="hover:text-gold transition-colors no-underline">A Doutora</a>
        <a href="#atuacao" className="hover:text-gold transition-colors no-underline">Atuação</a>
        <a href="#projeto" className="hover:text-gold transition-colors no-underline">Tem Família Aqui</a>
        <a href="#contato" className="hover:text-gold transition-colors no-underline">Contato</a>
      </div>

      <div className="flex justify-center gap-6 mb-12">
        <a href="https://instagram.com/temfamiliaaqui" target="_blank" rel="noopener noreferrer" aria-label="Instagram @temfamiliaaqui" className="p-3 bg-white/5 hover:bg-gold hover:text-white transition-all rounded-full">
          <Instagram size={18} />
        </a>
        <a href="https://www.linkedin.com/in/maria-helena-petry-de-lima-2454553a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Dra. Maria Helena Petry de Lima" className="p-3 bg-white/5 hover:bg-gold hover:text-white transition-all rounded-full">
          <Linkedin size={18} />
        </a>
      </div>

      <div className="w-24 h-px bg-white/10 mx-auto mb-10"></div>

      <p className="text-[10px] uppercase tracking-[0.2em] mb-4 text-white/20">contato@petrydelima.com.br</p>
      <p className="text-[9px] uppercase tracking-[0.1em] leading-relaxed max-w-sm mx-auto">
        © {new Date().getFullYear()} Petry de Lima Advocacia. OAB/RS 77.839. <br />
        Gravataí/RS. Excelência Jurídica e Atendimento Humanizado.
      </p>
    </div>
  </footer>
);

export default Footer;
