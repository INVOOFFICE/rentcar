import { X } from 'lucide-react';

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const sections = [
  {
    title: "Limite d'âge, Conducteurs et Documents",
    content: "Le conducteur principal et tout conducteur additionnel mentionné sur le contrat de location sont les seuls autorisés à conduire la voiture de location. Ils doivent avoir plus de 21 ans et posséder un permis de conduire valide obtenu depuis au moins un an.\n\nAjouter un deuxième conducteur est gratuit.\n\nPour louer une voiture, vous devez présenter un permis de conduire valide et un passeport (les photocopies ne sont pas acceptées).",
  },
  {
    title: "Procédure de Réservation",
    content: "Réserver une voiture de location avec YACOUT TOURS à Marrakech ou partout au Maroc vous permet de louer une voiture et des services optionnels tels que la livraison et la restitution à une date et un lieu spécifiés pour une durée de location convenue.\n\nVous pouvez annuler votre réservation à tout moment jusqu'à 48 heures avant la date de prise en charge prévue en nous informant par e-mail ou WhatsApp.",
  },
  {
    title: "Prise en Charge et Retour du Véhicule",
    content: "YACOUT TOURS livrera et récupérera votre voiture de location à l'aéroport, aux Riads, aux hôtels ou à votre résidence gratuitement à Marrakech et avec des frais supplémentaires dans d'autres villes du Maroc.\n\nIl est possible de louer une voiture dans une ville et de la rendre dans une autre.",
  },
  {
    title: "Véhicule",
    content: "La voiture de location est fournie en parfait état de fonctionnement avec tout son équipement et les documents nécessaires pour conduire au Maroc. Vous devez rendre la voiture dans le même état que celui dans lequel elle vous a été donnée. Veuillez inspecter soigneusement la voiture de location et ses documents avant de partir.\n\nIl peut arriver que nous n'ayons pas de véhicule de la catégorie choisie disponible. Dans ce cas, nous essaierons de vous fournir un véhicule de catégorie similaire ou supérieure sans coût supplémentaire.",
  },
  {
    title: "Utilisation du Véhicule",
    content: "Vous devez utiliser la voiture de location à Marrakech et dans tout le Maroc de manière prudente, conformément à la loi et à des fins légales. Vous ne devez pas participer à des rallyes avec la voiture de location, conduire sur des pistes si le véhicule n'est pas un véhicule tout-terrain, respecter les lois et règlements du Maroc, verrouiller le véhicule et le laisser dans un endroit sûr lorsqu'il n'est pas utilisé, et vous assurer que toutes les fenêtres et les toits ouvrants sont correctement fermés. Si vous remarquez un défaut dans le véhicule, cessez de l'utiliser immédiatement (en veillant à votre sécurité) et informez-nous immédiatement.\n\nL'utilisation de la voiture de location en dehors du Maroc n'est pas autorisée.\n\nSi vous souhaitez prolonger la location, veuillez nous en informer dès que possible. Faites-le avant la date et l'heure de fin de votre contrat de location, au moins 24 heures à l'avance, et réglez le coût des jours supplémentaires de location à votre retour, tel que fixé par YACOUT TOURS.\n\nLe locataire est responsable du véhicule loué et de ses documents (papiers du véhicule) pendant toute la période de location. Le locataire est responsable des frais occasionnés par la perte de documents, d'accessoires ou de dommages au véhicule constatés en son absence.",
  },
  {
    title: "Comportement Inacceptable",
    content: "L'agence de location de voitures YACOUT TOURS peut refuser de vous louer une voiture si vous manifestez un comportement discourtois ou inacceptable (tel que conduire sous l'influence de l'alcool ou des drogues, ou se comporter de manière impolie envers un représentant de l'agence).",
  },
  {
    title: "Méthodes de Paiement",
    content: "Nous acceptons les cartes de crédit Visa et MasterCard. Vous pouvez également payer la location de la voiture en espèces ou par chèque émis par une banque marocaine.",
  },
  {
    title: "Prépaiements et Dépôts de Garantie",
    content: "Lors de la livraison de la voiture, l'agence de location effectuera une préautorisation en tant que dépôt de garantie, qui représente également le montant de la franchise. Votre carte de paiement émise à votre nom et avec des fonds disponibles suffisants sera utilisée à cet effet. (Exceptionnellement, YACOUT TOURS peut accepter l'utilisation d'une carte de paiement appartenant à un membre de votre famille).",
  },
  {
    title: "Accidents, Vols et Dommages",
    content: "En cas d'accident ou de dommage au véhicule de location, même s'il n'y a pas de tiers impliqué, vous devez immédiatement notifier la police et YACOUT TOURS location de voitures à Marrakech dans les 48 heures.\n\nSi vous êtes responsable du vol ou des dommages causés au véhicule, vous devez payer le montant de la franchise indiqué dans le contrat de location. Votre franchise ne sera pas appliquée si vous pouvez prouver que les dommages, le vol ou la perte ne sont pas dus à votre faute, violation délibérée, fraude ou négligence grave. Vous devez nous fournir un formulaire de constat amiable rempli, y compris les détails des autres parties impliquées, dans les 48 heures suivant l'accident. Vous ne serez pas tenu responsable de toute perte ou dommage attribuable à notre défaut d'entretien du véhicule.\n\nPour les dommages mineurs à l'un de nos véhicules de location, nous ne vous facturerons rien. Exemples de dommages mineurs incluent :\n\n- Petite bosse\n- Petit griffon\n- Taches sur les sièges",
  },
  {
    title: "Assurance et Franchise",
    content: "Les voitures de location YACOUT TOURS sont entièrement assurées avec un montant de franchise en fonction du type de véhicule :\n\n- 500 euros pour les voitures compactes\n- 1 000 euros pour les voitures intermédiaires et familiales\n- 2 000 euros pour les SUV\n- 2 500 euros pour les véhicules 4x4",
  },
];

export default function TermsModal({ open, onClose }: TermsModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-elevated overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 pb-4 border-b border-remons-border">
          <h2 className="font-poppins text-xl font-bold text-remons-dark">
            TERMS & CONDITIONS - YACOUT RENT CAR
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-remons-light-gray flex items-center justify-center hover:bg-remons-primary hover:text-white transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto p-6 space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-poppins text-base font-semibold text-remons-dark mb-2">
                {section.title}
              </h3>
              {section.content.split('\n').map((line, i) => (
                line.startsWith('- ') ? (
                  <li key={i} className="text-remons-gray text-sm font-inter leading-relaxed ml-4 list-disc">
                    {line.slice(2)}
                  </li>
                ) : (
                  <p key={i} className="text-remons-gray text-sm font-inter leading-relaxed mb-1">
                    {line}
                  </p>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
