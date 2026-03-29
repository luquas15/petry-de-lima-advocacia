import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Media from './components/Media';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const WHATSAPP_URL = 'https://wa.me/5551995553947';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white scroll-smooth bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Media />
      <Project />
      <Contact />
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consultoria via WhatsApp"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 group no-underline"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100">
          Agendar Consultoria
        </span>
      </a>
    </div>
  );
}
