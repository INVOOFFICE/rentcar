import { useState, useEffect } from 'react';
import { Phone, Search, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'À Propos', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Voitures', href: '#cars' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white border-b border-remons-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="10" fill="#FF3B30"/>
              <g transform="translate(22,22) scale(1.5125) translate(-10,-10)">
                <path transform="translate(-84,-5319)" d="M89,5335 C88.448,5335 88,5334.552 88,5334 C88,5333.448 88.448,5333 89,5333 C89.552,5333 90,5333.448 90,5334 C90,5334.552 89.552,5335 89,5335 M99,5333 C99.552,5333 100,5333.448 100,5334 C100,5334.552 99.552,5335 99,5335 C98.448,5335 98,5334.552 98,5334 C98,5333.448 98.448,5333 99,5333 M90.602,5321 L97.398,5321 C97.896,5321 98.318,5321.366 98.388,5321.859 L99.694,5331 L88.306,5331 L89.612,5321.859 C89.682,5321.366 90.104,5321 90.602,5321 M104,5328 C104,5327.448 103.552,5327 103,5327 L101.143,5327 L100.245,5320.717 C100.105,5319.732 99.261,5319 98.265,5319 L89.735,5319 C88.739,5319 87.895,5319.732 87.755,5320.717 L86.857,5327 L85,5327 C84.448,5327 84,5327.448 84,5328 C84,5328.552 84.448,5329 85,5329 L86.571,5329 L86.286,5331 L86,5331 C84.895,5331 84,5331.895 84,5333 L84,5335 C84,5336.105 84.895,5337 86,5337 L86,5338 C86,5338.552 86.448,5339 87,5339 L89,5339 C89.552,5339 90,5338.552 90,5338 L90,5337 L98,5337 L98,5338 C98,5338.552 98.448,5339 99,5339 L101,5339 C101.552,5339 102,5338.552 102,5338 L102,5337 C103.105,5337 104,5336.105 104,5335 L104,5333 C104,5331.895 103.105,5331 102,5331 L101.714,5331 L101.429,5329 L103,5329 C103.552,5329 104,5328.552 104,5328" fill="#FFFFFF" fill-rule="evenodd"/>
              </g>
            </svg>
            <div className="leading-tight">
              <span className="font-poppins font-bold text-[18px] text-remons-dark tracking-tight block">REMONS</span>
              <span className="font-inter text-[10px] text-remons-gray tracking-widest uppercase block -mt-0.5">car rental</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = sectionId ? activeSection === sectionId : activeSection === '';
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    font-poppins text-[15px] font-medium transition-colors relative
                    ${isActive ? 'text-remons-primary' : 'text-remons-dark hover:text-remons-primary'}
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-remons-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-remons-primary flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-remons-gray font-inter">Appelez à tout moment</p>
                <p className="text-[15px] font-poppins font-semibold text-remons-dark">+92 (8800) - 9850</p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-10 bg-remons-border" />

            {/* Search */}
            <button className="p-2 hover:text-remons-primary transition-colors" aria-label="Rechercher">
              <Search size={20} />
            </button>

            {/* CTA Button */}
            <a
              href="#cars"
              className="bg-remons-primary text-white font-poppins text-sm font-semibold px-6 py-3 rounded-full hover:bg-remons-primary-dark hover:-translate-y-0.5 hover:shadow-button transition-all duration-300"
            >
              Trouver une Voiture
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-remons-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-poppins text-base font-medium text-remons-dark hover:text-remons-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cars"
              className="block bg-remons-primary text-white font-poppins text-sm font-semibold px-6 py-3 rounded-full text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trouver une Voiture
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
