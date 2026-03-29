import { Linkedin } from 'lucide-react';

const About = () => (
  <section id="sobre" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/2 relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
          <div className="relative overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="/IMG_1061.jpg"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              alt="Dra. Maria Helena Petry de Lima - Sócia Fundadora"
            />
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <div className="absolute bottom-6 right-6 bg-charcoal text-white p-6 rounded-sm shadow-xl border-l-4 border-gold">
            <p className="text-gold font-bold text-xs tracking-widest uppercase mb-1">Inscrição Profissional</p>
            <p className="text-lg font-serif">OAB/RS 77.839</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Sócia-Fundadora</span>
          <h2 className="text-5xl font-serif text-charcoal mb-8">Dra. Maria Helena <br />Petry de Lima</h2>
          <div className="w-16 h-0.5 bg-gold mb-8"></div>
          <p className="text-slate-600 font-light leading-relaxed mb-8 text-lg">
            Com mais de 15 anos de trajetória jurídica, a Dra. Maria Helena une a prática jurídica à docência. É <strong>Coordenadora do Curso de Direito da CNEC Gravataí</strong>, Pós-graduada pela FMP e Ex-Presidente da Comissão de Direito de Família da OAB Gravataí. Uma autoridade que forma novos advogados e protege o patrimônio e a harmonia das famílias.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a href="https://www.linkedin.com/in/maria-helena-petry-de-lima-2454553a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors no-underline">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
