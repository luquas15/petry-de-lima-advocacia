import { motion } from 'motion/react';
import PetryLogo from './PetryLogo';

const WHATSAPP_URL = 'https://wa.me/5551995553947';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-charcoal overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
        className="w-full h-full object-cover opacity-20 scale-105"
        alt="Escritório Minimalista"
        width="2000"
        height="1333"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-5xl">
      <motion.div
        className="mb-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <PetryLogo className="w-24 h-24" />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight"
        {...fadeUp(0.2)}
      >
        Petry de Lima Advocacia:<br />
        <span className="text-gold italic">Excelência Acadêmica e Olhar Humanizado</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto font-light tracking-wide"
        {...fadeUp(0.4)}
      >
        Soluções estratégicas em Direito de Família e Sucessões sob a liderança da Dra. Maria Helena Petry de Lima em Gravataí/RS.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row justify-center gap-6" {...fadeUp(0.6)}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-white px-12 py-5 rounded-sm text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-charcoal transition-all shadow-2xl no-underline">
          Agendar Consultoria Especializada
        </a>
        <a href="#atuacao" className="inline-block border border-white/20 text-white px-12 py-5 rounded-sm text-xs font-bold tracking-[0.3em] uppercase hover:bg-white/5 transition-all no-underline">
          Conhecer Atuação
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
