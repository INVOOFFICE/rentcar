
import { ArrowUp } from 'lucide-react';
const socialLinks = [
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
  {
    name: 'YouTube',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z M9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02z',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-remons-secondary pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 mb-10 border-b border-white/10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="10" fill="#FF3B30"/>
              <g transform="translate(22,22) scale(1.5125) translate(-10,-10)">
                <path transform="translate(-84,-5319)" d="M89,5335 C88.448,5335 88,5334.552 88,5334 C88,5333.448 88.448,5333 89,5333 C89.552,5333 90,5333.448 90,5334 C90,5334.552 89.552,5335 89,5335 M99,5333 C99.552,5333 100,5333.448 100,5334 C100,5334.552 99.552,5335 99,5335 C98.448,5335 98,5334.552 98,5334 C98,5333.448 98.448,5333 99,5333 M90.602,5321 L97.398,5321 C97.896,5321 98.318,5321.366 98.388,5321.859 L99.694,5331 L88.306,5331 L89.612,5321.859 C89.682,5321.366 90.104,5321 90.602,5321 M104,5328 C104,5327.448 103.552,5327 103,5327 L101.143,5327 L100.245,5320.717 C100.105,5319.732 99.261,5319 98.265,5319 L89.735,5319 C88.739,5319 87.895,5319.732 87.755,5320.717 L86.857,5327 L85,5327 C84.448,5327 84,5327.448 84,5328 C84,5328.552 84.448,5329 85,5329 L86.571,5329 L86.286,5331 L86,5331 C84.895,5331 84,5331.895 84,5333 L84,5335 C84,5336.105 84.895,5337 86,5337 L86,5338 C86,5338.552 86.448,5339 87,5339 L89,5339 C89.552,5339 90,5338.552 90,5338 L90,5337 L98,5337 L98,5338 C98,5338.552 98.448,5339 99,5339 L101,5339 C101.552,5339 102,5338.552 102,5338 L102,5337 C103.105,5337 104,5336.105 104,5335 L104,5333 C104,5331.895 103.105,5331 102,5331 L101.714,5331 L101.429,5329 L103,5329 C103.552,5329 104,5328.552 104,5328" fill="#FFFFFF" fill-rule="evenodd"/>
              </g>
            </svg>
            <div className="leading-tight">
              <span className="font-poppins font-bold text-[18px] text-white tracking-tight block">REMONS</span>
              <span className="font-inter text-[10px] text-white/60 tracking-widest uppercase block -mt-0.5">car rental</span>
            </div>
          </a>

          {/* Tagline */}
          <p className="text-white/80 font-poppins text-lg font-semibold">
            Économisez Gros Avec Notre Location de Voitures
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-remons-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-inter">
            &copy; {new Date().getFullYear()} Remons.com — Tous droits réservés
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-remons-primary hover:text-white transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
