import { BookOpen, HeadsetIcon } from 'lucide-react';

const Media = () => (
  <section id="midia" className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/3 reveal">
          <h3 className="text-2xl font-serif text-charcoal mb-4 tracking-tight">
            Voz ativa na <br /><span className="text-gold">comunidade jurídica</span>
          </h3>
          <p className="text-slate-500 text-sm font-light">Artigos e análises publicados para informar e proteger os direitos do cidadão.</p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="https://www.girodegravatai.com.br/a-vulnerabilidade-social-diante-dos-golpes-digitais-o-avanco-do-golpe-do-falso-advogado-e-o-pedido-de-alerta-a-populacao/" target="_blank" rel="noopener noreferrer" className="p-8 bg-slate-50 border-l-4 border-gold flex flex-col gap-4 group hover:bg-slate-100 transition-all hover:shadow-lg no-underline reveal reveal-delay-1">
            <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Giro de Gravataí</span>
            <h4 className="font-bold text-charcoal group-hover:text-gold transition-colors">A vulnerabilidade social diante dos golpes digitais, o avanço do "golpe do falso advogado" e o pedido de alerta à população</h4>
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">Ler no Portal <BookOpen size={12} /></span>
          </a>
          <a href="https://www.youtube.com/watch?v=9FN00ieCBCg" target="_blank" rel="noopener noreferrer" className="p-8 bg-slate-50 border-l-4 border-gold flex flex-col gap-4 group hover:bg-slate-100 transition-all hover:shadow-lg no-underline reveal reveal-delay-2">
            <span className="text-[10px] font-bold text-gold uppercase tracking-widest">YouTube</span>
            <h4 className="font-bold text-charcoal group-hover:text-gold transition-colors">Podcast EP11 - Maria Helena Petry</h4>
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">Ouça agora <HeadsetIcon size={12} /></span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Media;
