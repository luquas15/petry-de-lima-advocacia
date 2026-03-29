const PetryLogo = ({ className = "w-10 h-10", color = "#c5a059" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Petry de Lima Advocacia" role="img">
    <circle cx="50" cy="30" r="22" stroke={color} strokeWidth="2" />
    <circle cx="50" cy="70" r="22" stroke={color} strokeWidth="2" />
    <circle cx="30" cy="50" r="22" stroke={color} strokeWidth="2" />
    <circle cx="70" cy="50" r="22" stroke={color} strokeWidth="2" />
    <path d="M50 42L57 46V54L50 58L43 54V46L50 42Z" fill={color} />
  </svg>
);

export default PetryLogo;
