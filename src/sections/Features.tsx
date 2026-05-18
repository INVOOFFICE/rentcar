import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MousePointerClick, ShieldCheck, Headphones } from 'lucide-react';

const featuresList = [
  {
    icon: MousePointerClick,
    title: 'Réservation Express',
    desc: 'Réservez en 2 clics, récupérez votre véhicule immédiatement.',
  },
  {
    icon: ShieldCheck,
    title: 'Assurance Incluse',
    desc: 'Tous nos véhicules sont couverts par une assurance complète.',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    desc: 'Une équipe disponible à tout moment pour vous assister.',
  },
];

export default function Features() {
  const sectionRef = useScrollAnimation<HTMLElement>({ animation: 'fadeInUp' });
  const gridRef = useScrollAnimation<HTMLDivElement>({
    animation: 'fadeInUp',
    childSelector: '.feature-card',
    stagger: 0.1,
  });

  return (
    <section ref={sectionRef} className="bg-white py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {featuresList.map((f) => (
            <div
              key={f.title}
              className="feature-card bg-remons-light-gray rounded-2xl p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-remons-blue/10 flex items-center justify-center mb-5">
                <f.icon size={24} className="text-remons-blue" />
              </div>
              <h4 className="font-poppins text-lg font-semibold text-remons-dark mb-2">
                {f.title}
              </h4>
              <p className="text-remons-gray text-sm font-inter leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
