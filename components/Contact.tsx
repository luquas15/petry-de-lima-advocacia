import { Phone, MapPin } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551995553947';
const PHONE_DISPLAY = '(51) 99555-3947';
const MAPS_URL = 'https://www.google.com/maps/search/Gravatai+RS+Centro';

const Contact = () => (
  <section id="contato" className="py-24 bg-[#fafafa]">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block reveal">Fale Conosco</span>
      <h2 className="text-4xl font-serif text-charcoal mb-8 reveal reveal-delay-1">Inicie seu Atendimento</h2>
      <p className="text-slate-500 mb-12 font-light reveal reveal-delay-2">Atendimento personalizado com hora marcada em Gravataí ou via consultoria digital para todo o Brasil.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-white p-10 shadow-sm border border-transparent hover:border-gold transition-all group no-underline reveal reveal-delay-1">
          <Phone className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">WhatsApp Oficial</p>
          <p className="text-charcoal font-bold text-xl tracking-tight">{PHONE_DISPLAY}</p>
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="bg-white p-10 shadow-sm border border-transparent hover:border-gold transition-all group no-underline reveal reveal-delay-2">
          <MapPin className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Localização</p>
          <p className="text-charcoal font-bold text-xl tracking-tight">Gravataí, RS - Centro</p>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
