import { X } from 'lucide-react';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const sections = [
  {
    title: "RÉSUMÉ DES POINTS CLÉS",
    content: `Ce résumé fournit les points clés de notre avis de confidentialité, mais vous pouvez trouver plus de détails sur chacun de ces sujets en cliquant sur le lien suivant chaque point clé ou en utilisant notre table des matières ci-dessous pour trouver la section que vous recherchez.

Quelles informations personnelles traitons-nous ? Lorsque vous visitez, utilisez ou naviguez sur nos Services, nous pouvons traiter des informations personnelles en fonction de la manière dont vous interagissez avec nous et les Services, des choix que vous faites, ainsi que des produits et des fonctionnalités que vous utilisez.

Traitez-nous des informations personnelles sensibles ? Nous ne traitons pas d'informations personnelles sensibles.

Collectons-nous des informations auprès de tiers ? Nous ne collectons pas d'informations auprès de tiers.

Comment traitons-nous vos informations ? Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi.

Comment gardons-nous vos informations en sécurité ? Nous avons mis en place des processus et procédures organisationnels et techniques pour protéger vos informations personnelles.

Quels sont vos droits ? En fonction de votre localisation géographique, la loi sur la confidentialité applicable peut signifier que vous avez certains droits concernant vos informations personnelles.`,
  },
  {
    title: "1. QUELLES INFORMATIONS COLLECTONS-NOUS ?",
    content: `Informations personnelles que vous nous divulguez : Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous exprimez un intérêt à obtenir des informations sur nous ou nos produits et Services, lorsque vous participez à des activités sur les Services, ou autrement lorsque vous nous contactez.

Les informations personnelles que nous collectons peuvent inclure :
- noms
- numéros de téléphone
- adresses e-mail
- adresses de facturation
- numéros de carte de débit/crédit

Informations sensibles : Nous ne traitons pas d'informations sensibles.

Données de paiement : Nous pouvons collecter des données nécessaires pour traiter votre paiement. Toutes les données de paiement sont traitées et stockées par CMI.

Informations collectées automatiquement : Certaines informations — telles que votre adresse de protocole Internet (IP) et/ou les caractéristiques de votre navigateur et de votre appareil — sont collectées automatiquement lorsque vous visitez nos Services.`,
  },
  {
    title: "2. COMMENT TRAITONS-NOUS VOS INFORMATIONS ?",
    content: "Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, pour la sécurité et la prévention de la fraude, et pour nous conformer à la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement.",
  },
  {
    title: "3. QUAND ET AVEC QUI PARTAGEONS-NOUS VOS INFORMATIONS PERSONNELLES ?",
    content: "Nous pouvons partager des informations dans des situations spécifiques décrites dans cette section et/ou avec les tiers suivants. Nous pourrions avoir besoin de partager vos informations personnelles lors de transferts d'entreprise ou lorsque nous utilisons les API Google Maps Platform.",
  },
  {
    title: "4. UTILISONS-NOUS DES COOKIES ET D'AUTRES TECHNOLOGIES DE SUIVI ?",
    content: "Nous pouvons utiliser des cookies et d'autres technologies de suivi pour collecter et stocker vos informations. Nous permettons également à des tiers et à des prestataires de services d'utiliser des technologies de suivi en ligne sur nos Services pour l'analyse et la publicité. Nous pouvons partager vos informations avec Google Analytics pour suivre et analyser l'utilisation des Services.",
  },
  {
    title: "5. COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?",
    content: "Nous conservons vos informations aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cet avis de confidentialité, sauf si la loi exige une période de conservation plus longue. Lorsque nous n'avons plus besoin de traiter vos informations personnelles, nous supprimerons ou anonymiserons ces informations.",
  },
  {
    title: "6. COMMENT PROTÉGEONS-NOUS VOS INFORMATIONS ?",
    content: "Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées et raisonnables conçues pour protéger la sécurité de toute information personnelle que nous traitons. Cependant, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100 % sécurisée.",
  },
  {
    title: "7. COLLECTONS-NOUS DES INFORMATIONS CHEZ DES MINEURS ?",
    content: "Nous ne collectons ni ne commercialisons sciemment des données auprès des enfants de moins de 18 ans. Si nous découvrons que des informations personnelles d'utilisateurs de moins de 18 ans ont été collectées, nous désactiverons le compte et prendrons des mesures raisonnables pour supprimer rapidement ces données.",
  },
  {
    title: "8. QUELS SONT VOS DROITS EN MATIÈRE DE CONFIDENTIALITÉ ?",
    content: "Vous pouvez consulter, modifier ou supprimer votre compte à tout moment, en fonction de votre pays, province ou État de résidence. Vous avez le droit de retirer votre consentement à tout moment en nous contactant. Pour les cookies, la plupart des navigateurs Web sont configurés pour les accepter par défaut. Vous pouvez généralement choisir de configurer votre navigateur pour les supprimer et les rejeter.",
  },
  {
    title: "9. CONTRÔLES POUR LES FONCTIONS NE PAS SUIVRE",
    content: "À ce stade, aucun standard technologique uniforme pour la reconnaissance et la mise en œuvre des signaux DNT n'a été finalisé. En conséquence, nous ne répondons actuellement pas aux signaux DNT des navigateurs ou à tout autre mécanisme qui communique automatiquement votre choix de ne pas être suivi en ligne.",
  },
  {
    title: "10. LE PRÉSENT AVIS EST-IL MIS À JOUR ?",
    content: "Oui, nous mettrons à jour cet avis si nécessaire pour rester en conformité avec les lois en vigueur. La version mise à jour sera indiquée par une date de mise à jour 'Révisé' en haut de cet avis de confidentialité.",
  },
  {
    title: "11. COMMENT POUVEZ-VOUS NOUS CONTACTER AU SUJET DE CET AVIS ?",
    content: "Si vous avez des questions ou des commentaires sur le présent avis, vous pouvez nous contacter par courrier à l'adresse suivante : Yacout tours, 100 Rue Mohammed el Beqal, Marrakech 40000, Maroc — yacout.tours@gmail.com",
  },
  {
    title: "12. COMMENT POUVEZ-VOUS CONSULTER, METTRE À JOUR OU SUPPRIMER LES DONNÉES QUE NOUS RECUEILLONS AUPRÈS DE VOUS ?",
    content: "Vous pouvez avoir le droit de demander l'accès aux informations personnelles que nous collectons auprès de vous, des détails sur la manière dont nous les avons traitées, de corriger les inexactitudes ou de supprimer vos informations personnelles. Pour demander la révision, la mise à jour ou la suppression de vos informations personnelles, veuillez nous contacter à yacout.tours@gmail.com.",
  },
];

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-elevated overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 pb-4 border-b border-remons-border">
          <h2 className="font-poppins text-xl font-bold text-remons-dark">
            Politique de confidentialité - YACOUT RENT CAR
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
          <p className="text-remons-gray text-sm font-inter leading-relaxed">
            Dernière mise à jour le 26 juillet 2024
          </p>
          <p className="text-remons-gray text-sm font-inter leading-relaxed">
            Cet avis de confidentialité pour Yacout Rent Car ('nous', 'notre' ou 'nos'), décrit comment et pourquoi nous pourrions collecter, stocker, utiliser et/ou partager ('traiter') vos informations lorsque vous utilisez nos services ('Services'), comme lorsque vous visitez notre site web à https://yacout-tours.com, ou tout autre site web de notre société qui renvoie à cet avis de confidentialité.
          </p>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-poppins text-base font-semibold text-remons-dark mb-2">
                {section.title}
              </h3>
              {section.content.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (trimmed.startsWith('- ')) {
                  return (
                    <li key={i} className="text-remons-gray text-sm font-inter leading-relaxed ml-4 list-disc">
                      {trimmed.slice(2)}
                    </li>
                  );
                }
                if (!trimmed) return null;
                return (
                  <p key={i} className="text-remons-gray text-sm font-inter leading-relaxed mb-1">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
