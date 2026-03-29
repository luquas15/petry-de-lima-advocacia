import { motion } from 'motion/react';
import { Instagram, ArrowRight } from 'lucide-react';
import PetryLogo from './PetryLogo';

const viewport = { once: true, margin: '-60px' };

const Project = () => (
  <section id="projeto" className="py-24 bg-charcoal text-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
      <PetryLogo className="w-[500px] h-[500px]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-inner">
          <Instagram size={14} /> @temfamiliaaqui
        </div>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
          Acreditamos que onde há amor e respeito, <br /><span className="text-gold italic">Tem Família Aqui.</span>
        </h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          O projeto <strong>@temfamiliaaqui</strong> é o nosso compromisso com a informação jurídica descomplicada e a advocacia humanizada, levando segurança e conhecimento para transformar realidades familiares.
        </p>
        <a href="https://instagram.com/temfamiliaaqui" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-gold text-gold px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all shadow-xl no-underline">
          Acompanhar no Instagram <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Project;
