import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'remons-pwa-dismissed';

export default function PwaInstallBanner() {
  const [prompt, setPrompt] = useState<Event | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (dismissed || isStandalone) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!prompt) return;
    (prompt as any).prompt();
    const result = await (prompt as any).userChoice;
    if (result.outcome === 'accepted') {
      setShow(false);
    }
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 pb-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mx-auto max-w-md rounded-2xl bg-white/95 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-4 flex items-center gap-3">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="shrink-0">
          <rect width="44" height="44" rx="10" fill="#FF3B30"/>
          <g transform="translate(22,22) scale(1.5125) translate(-10,-10)">
            <path transform="translate(-84,-5319)" d="M89,5335 C88.448,5335 88,5334.552 88,5334 C88,5333.448 88.448,5333 89,5333 C89.552,5333 90,5333.448 90,5334 C90,5334.552 89.552,5335 89,5335 M99,5333 C99.552,5333 100,5333.448 100,5334 C100,5334.552 99.552,5335 99,5335 C98.448,5335 98,5334.552 98,5334 C98,5333.448 98.448,5333 99,5333 M90.602,5321 L97.398,5321 C97.896,5321 98.318,5321.366 98.388,5321.859 L99.694,5331 L88.306,5331 L89.612,5321.859 C89.682,5321.366 90.104,5321 90.602,5321 M104,5328 C104,5327.448 103.552,5327 103,5327 L101.143,5327 L100.245,5320.717 C100.105,5319.732 99.261,5319 98.265,5319 L89.735,5319 C88.739,5319 87.895,5319.732 87.755,5320.717 L86.857,5327 L85,5327 C84.448,5327 84,5327.448 84,5328 C84,5328.552 84.448,5329 85,5329 L86.571,5329 L86.286,5331 L86,5331 C84.895,5331 84,5331.895 84,5333 L84,5335 C84,5336.105 84.895,5337 86,5337 L86,5338 C86,5338.552 86.448,5339 87,5339 L89,5339 C89.552,5339 90,5338.552 90,5338 L90,5337 L98,5337 L98,5338 C98,5338.552 98.448,5339 99,5339 L101,5339 C101.552,5339 102,5338.552 102,5338 L102,5337 C103.105,5337 104,5336.105 104,5335 L104,5333 C104,5331.895 103.105,5331 102,5331 L101.714,5331 L101.429,5329 L103,5329 C103.552,5329 104,5328.552 104,5328" fill="#FFFFFF" fill-rule="evenodd"/>
          </g>
        </svg>
        <div className="flex-1 min-w-0">
          <p className="font-poppins font-semibold text-sm text-gray-900">Installer Remons</p>
          <p className="font-inter text-xs text-gray-500 truncate">Ajoutez à votre écran d'accueil</p>
        </div>
        <button
          onClick={handleInstall}
          className="shrink-0 bg-remons-primary hover:bg-[#E6352A] text-white text-sm font-semibold font-poppins px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95"
        >
          Installer
        </button>
        <button
          onClick={handleDismiss}
          className="shrink-0 p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
