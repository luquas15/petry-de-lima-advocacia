import { motion } from 'motion/react';
import { BookOpen, HeadsetIcon } from 'lucide-react';

const viewport = { once: true, margin: '-60px' };

const Media = () => (
  <section id="midia" className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl font-serif text-charcoal mb-4 tracking-tight">
            Voz ativa na <br /><span className="text-gold">comunidade jurídica</span>
          </h3>
          <p className="text-slate-500 text-sm font-light">Artigos e análises publicados para informar e proteger os direitos do cidadão.</p>
        </motion.div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.a
            href="https://www.girodegravatai.com.br/a-vulnerabilidade-social-diante-dos-golpes-digitais-o-avanco-do-golpe-do-falso-advogado-e-o-pedido-de-alerta-a-populacao/"
            target="_blank" rel="noopener noreferrer"
            className="p-8 bg-slate-50 border-l-4 border-gold flex flex-col gap-4 group hover:bg-slate-100 transition-all hover:shadow-lg no-underline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Giro de Gravataí</span>
            <h4 className="font-bold text-charcoal group-hover:text-gold transition-colors">A vulnerabilidade social diante dos golpes digitais, o avanço do "golpe do falso advogado" e o pedido de alerta à população</h4>
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">Ler no Portal <BookOpen size={12} /></span>
          </motion.a>

          <motion.a
            href="https://www.youtube.com/watch?v=9FN00ieCBCg"
            target="_blank" rel="noopener noreferrer"
            className="p-8 bg-slate-50 border-l-4 border-gold flex flex-col gap-4 group hover:bg-slate-100 transition-all hover:shadow-lg no-underline"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-[10px] font-bold text-gold uppercase tracking-widest">YouTube</span>
            <h4 className="font-bold text-charcoal group-hover:text-gold transition-colors">Podcast EP11 - Maria Helena Petry</h4>
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">Ouça agora <HeadsetIcon size={12} /></span>
          </motion.a>
        </div>
      </div>
    </div>
  </section>
);

export default Media;
