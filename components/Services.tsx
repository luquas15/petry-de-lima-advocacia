import { Users, ScrollText, Scale, ShieldCheck } from 'lucide-react';

const areas = [
  { title: "Direito de Família", desc: "Divórcio, Guarda, Pensão, Reconhecimento de União Estável e Adoção.", icon: <Users size={28} /> },
  { title: "Sucessões", desc: "Inventários Judiciais e Extrajudiciais, Testamentos e Planejamento Sucessório.", icon: <ScrollText size={28} /> },
  { title: "Direito Civil", desc: "Contratos, Responsabilidade Civil, Indenizações e Consultoria Preventiva.", icon: <Scale size={28} /> },
  { title: "Trabalhista & Previdenciário", desc: "Consultoria estratégica, defesa de direitos e benefícios do INSS.", icon: <ShieldCheck size={28} /> },
];

const Services = () => (
  <section id="atuacao" className="py-24 bg-[#f9f9f9]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 reveal">
        <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Nossa Expertise</span>
        <h2 className="text-4xl font-serif text-charcoal">Áreas de Atuação</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map((area, idx) => (
          <div key={idx} className={`bg-white p-10 border border-slate-100 hover:border-gold/50 transition-all duration-500 group relative reveal reveal-delay-${idx + 1}`}>
            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{area.icon}</div>
            <h3 className="text-lg font-bold text-charcoal mb-4 uppercase tracking-tighter">{area.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
