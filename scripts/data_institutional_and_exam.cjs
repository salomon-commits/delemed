// Données institutionnelles et Banque des 40 questions d'examen certifiant — Institut d'Excellence Yonah

const INSTITUTIONAL_DATA = {
  about: {
    title: "À propos de l'Institut d'Excellence Yonah",
    location: "Abidjan, Côte d'Ivoire (Plateau & Cocody)",
    mission: "Former l'élite des délégués médicaux, responsables grands comptes et cadres pharmaceutiques d'Afrique subsaharienne par une alliance unique entre rigueur scientifique médicale internationale, excellence éthique et immersion clinique réelle.",
    stats: [
      { label: "Taux d'insertion professionnelle sous 6 mois", value: "96.4%" },
      { label: "Modules certifiants & Spécialisations", value: "30 Modules + 8 Tracks" },
      { label: "Durée d'immersion clinique hospitalière", value: "4 semaines en CHU" },
      { label: "Laboratoires & Grossistes partenaires", value: "45+ Entreprises" }
    ],
    immersion: "Chaque lauréat Yonah effectue un stage clinique d'immersion hospitalière obligatoire de 4 semaines au sein des services de cardiologie, pédiatrie, réanimation et pharmacie hospitalière (CHU de Cocody, Treichville, Yopougon ou Bouaké) pour comprendre intimement le quotidien des soignants et la détresse des malades.",
    ethics: "Tolérance zéro contre la corruption. Les diplômés Yonah s'engagent par serment à promouvoir le Bon Usage du Médicament, à respecter le secret médical et à ne jamais monnayer d'actes de prescription.",
    accreditation: "Certificats professionnels vérifiables par empreinte cryptographique SHA-256 unique et registre numérique public décentralisé."
  },

  committee: [
    {
      name: "Pr. Augustin KONAN",
      title: "Président du Conseil Scientifique",
      role: "Professeur Titulaire de Pharmacologie Clinique, Faculté de Pharmacie d'Abidjan",
      bio: "Ancien doyen, expert international en pharmacocinétique et membre des comités d'experts de l'OMS."
    },
    {
      name: "Dr. Marie-Hélène BROU",
      title: "Vice-Présidente aux Affaires Pédagogiques",
      role: "Praticienne Hospitalière, Chef de Service de Cardiologie CHU de Treichville",
      bio: "Spécialiste de l'hypertension artérielle du sujet mélanoderme et des pathologies vasculaires en Afrique."
    },
    {
      name: "Dr. Yves-Alain DIOMANDÉ",
      title: "Directeur de la Déontologie & Régulation",
      role: "Pharmacien Inspecteur, Ancien Directeur de la Régulation Pharmaceutique (AIRP)",
      bio: "Expert des dossiers d'homologation CTD, de la pharmacovigilance et des inspections BPF/BPD."
    },
    {
      name: "Dr. Fatoumata BENGALY",
      title: "Directrice du Pôle Infectiologie & Santé Publique",
      role: "Infectiologue et Épidémiologiste, Consultante auprès du Fonds Mondial",
      bio: "Spécialiste des stratégies de déploiement des CTA antipaludiques et de l'antibiogouvernance hospitalière."
    },
    {
      name: "M. Christian AKLÉ",
      title: "Directeur de l'Insertion Professionnelle & Partenariats",
      role: "Ancien Directeur Général de Laboratoire Multinational pour l'Afrique de l'Ouest",
      bio: "Plus de 25 ans de direction commerciale, spécialiste du management des forces de vente et des relations avec les grossistes répartiteurs."
    }
  ]
};

const EXAM_QUESTION_BANK = [
  { id: 1, q: "Que décrit la pharmacocinétique par rapport à la pharmacodynamie ?", opts: ["Ce que le médicament fait au corps", "Ce que le corps fait au médicament (ADME)", "Le coût de production", "La couleur du comprimé"], c: 1, exp: "La pharmacocinétique étudie Absorption, Distribution, Métabolisme et Excrétion." },
  { id: 2, q: "Dans l'acronyme ADME, que représente la lettre M ?", opts: ["Mélange", "Métabolisme (transformation hépatique par les cytochromes P450)", "Multiplication", "Mise en réserve"], c: 1, exp: "Le métabolisme transforme la molécule pour faciliter son élimination." },
  { id: 3, q: "Combien de demi-vies (T1/2) sont nécessaires pour éliminer plus de 99% d'un médicament ?", opts: ["1 demi-vie", "3 demi-vies", "7 demi-vies", "20 demi-vies"], c: 2, exp: "À 7 demi-vies, il ne reste que 0.78% de la concentration initiale." },
  { id: 4, q: "Combien de demi-vies faut-il en moyenne pour atteindre l'état d'équilibre (Steady-State) ?", opts: ["2 demi-vies", "5 demi-vies", "10 demi-vies", "25 demi-vies"], c: 1, exp: "L'état d'équilibre plasmatique est atteint en environ 5 demi-vies." },
  { id: 5, q: "Quelle est la définition d'un antagoniste en pharmacodynamie ?", opts: ["Une molécule qui active le récepteur", "Une molécule qui se lie au récepteur sans l'activer et bloque l'agoniste", "Un antibiotique", "Un excipient"], c: 1, exp: "L'antagoniste bloque la liaison du médiateur sans déclencher d'effet propre." },
  { id: 6, q: "Quel groupe de la classification ATC correspond au système cardio-vasculaire ?", opts: ["Groupe A", "Groupe B", "Groupe C", "Groupe N"], c: 2, exp: "La lettre C désigne le système cardio-vasculaire." },
  { id: 7, q: "À quel groupe ATC appartiennent les anti-infectieux à usage systémique ?", opts: ["Groupe J", "Groupe D", "Groupe M", "Groupe V"], c: 0, exp: "J = Anti-infectieux à usage systémique." },
  { id: 8, q: "Quelle classe thérapeutique trouve-t-on dans le groupe ATC N ?", opts: ["Les diurétiques", "Les psychotropes et antalgiques du système nerveux", "Les crèmes solaires", "Les hormones"], c: 1, exp: "N = Système nerveux (antalgiques, antidépresseurs, anxiolytiques)." },
  { id: 9, q: "Pourquoi l'association d'un Anticoagulant et d'un AINS est-elle formellement contre-indiquée ?", opts: ["Risque d'hypoglycémie", "Risque d'hémorragie digestive majeure cataclysmique", "Risque de somnolence", "Aucun risque"], c: 1, exp: "Les AINS altèrent la muqueuse digestive et l'hémostase, potentialisant le saignement." },
  { id: 10, q: "Quel est le risque vital de l'association Amiodarone + Clarithromycine / Fluoroquinolone ?", opts: ["Torsades de pointes et mort subite par allongement de l'intervalle QT", "Hyperglycémie", "Chute de cheveux", "Toux sèche"], c: 0, exp: "Ces molécules allongent la repolarisation ventriculaire, provoquant des arythmies mortelles." },
  { id: 11, q: "L'association de certaines statines avec des inhibiteurs du CYP3A4 expose à quel risque ?", opts: ["Une rhabdomyolyse aiguë avec insuffisance rénale par myoglobine", "Une crampe bénigne", "Une fracture", "Une arthrose"], c: 0, exp: "L'accumulation toxique de la statine détruit les fibres musculaires." },
  { id: 12, q: "Pourquoi l'Oméprazole peut-il diminuer l'efficacité du Clopidogrel ?", opts: ["Il détruit le comprimé dans l'estomac", "Il inhibe le CYP2C19 indispensable à la transformation en métabolite actif", "Il accélère l'élimination", "C'est sans effet"], c: 1, exp: "Le clopidogrel est une prodrogue activée par le CYP2C19, enzyme inhibée par l'oméprazole." },
  { id: 13, q: "L'association Halopéridol + Métoclopramide majore quel risque vital ?", opts: ["Syndrome malin des neuroleptiques par double blocage dopaminergique D2", "Coma diabétique", "Infarctus", "Pancréatite"], c: 0, exp: "Le double blocage D2 central entraîne une hyperthermie maligne et une rigidité létale." },
  { id: 14, q: "Selon Rawlins & Thompson, qu'est-ce qu'un effet indésirable de Type A ?", opts: ["Un effet prévisible, dose-dépendant, lié au mécanisme connu (Augmented)", "Un effet rare et allergique", "Un effet différé", "Un échec"], c: 0, exp: "Type A = prévisible, fréquent, lié à la pharmacologie de la molécule." },
  { id: 15, q: "Qu'est-ce qu'un effet indésirable de Type B ?", opts: ["Une réaction bizarre, imprévisible, indépendante de la dose (immuno-allergique)", "Un effet attendu", "Un effet de fin de traitement", "Une baisse de prix"], c: 0, exp: "Type B (Bizarre) = réaction allergique ou idiosyncrasique imprévisible." },
  { id: 16, q: "Quel est le délai légal impératif pour notifier un Effet Indésirable Grave (EIG) ?", opts: ["1 mois", "24 heures ouvrées", "À la fin de l'année", "Aucun délai"], c: 1, exp: "24h ouvrées est la norme mondiale et réglementaire pour tout événement grave ou mortel." },
  { id: 17, q: "Dans la classification AWaRe de l'OMS, que représente le groupe 'Access' ?", opts: ["Antibiotiques de première intention largement disponibles pour les infections courantes", "Médicaments réservés", "Médicaments interdits", "Placebos"], c: 0, exp: "Access = première ligne d'accès universel à préserver." },
  { id: 18, q: "Dans la classification AWaRe, à quoi sert le groupe 'Reserve' ?", opts: ["Antibiotiques de dernier recours pour les pathogènes multirésistants prioritaires", "Médicaments périmés", "Produits de recherche", "Produits vétérinaires"], c: 0, exp: "Reserve préserve les molécules ultimes contre les souches pan-résistantes." },
  { id: 19, q: "Que signifie une p-value < 0.05 dans un essai clinique pivot ?", opts: ["Le médicament est inefficace", "Il y a moins de 5% de probabilité que la différence observée soit due au hasard", "5% de guérison", "L'étude est nulle"], c: 1, exp: "p < 0.05 est le seuil standard de significativité statistique EBM." },
  { id: 20, q: "Dans la matrice CAPB, que représente la lettre B ?", opts: ["Boîte de médicament", "Bénéfice concret pour le patient dans sa vie quotidienne", "Bilan comptable", "Baisse de prix"], c: 1, exp: "Le Bénéfice traduit la preuve clinique en soulagement tangible pour le malade." },
  { id: 21, q: "Dans la méthode de traitement des objections C.R.A.C., que signifie 'R' ?", opts: ["Réfuter", "Reformuler avec empathie l'inquiétude du praticien", "Raccrocher", "Rappeler le tarif"], c: 1, exp: "La reformulation empathique désamorce la tension et valide la compréhension." },
  { id: 22, q: "Quelle est la définition d'un médicament essentiel selon l'OMS ?", opts: ["Le médicament le plus cher", "Un médicament répondant aux besoins de santé prioritaires d'une population", "Un cosmétique", "Un produit réservé"], c: 1, exp: "Les médicaments essentiels répondent aux besoins prioritaires avec un rapport coût/efficacité optimal." },
  { id: 23, q: "Que caractérise un médicament ayant un Index Thérapeutique Étroit ?", opts: ["Une petite boîte", "La dose toxique est très proche de la dose thérapeutique efficace", "Il ne marche que chez l'enfant", "Aucun effet secondaire"], c: 1, exp: "Un index étroit (digoxine, warfarine) exige un monitoring biologique strict." },
  { id: 24, q: "Dans la CIM-11, où sont classées l'hypertension artérielle et l'insuffisance cardiaque ?", opts: ["Maladies du système circulatoire", "Maladies de la peau", "Troubles psychotiques", "Maladies digestives"], c: 0, exp: "HTA et cardiopathies appartiennent aux affections de l'appareil circulatoire." },
  { id: 25, q: "Quel effet indésirable de Type A est caractéristique des IEC à cause de la bradykinine ?", opts: ["Une toux sèche persistante", "Une perte de cheveux", "Une fracture", "Un sommeil profond"], c: 0, exp: "L'inhibition de la dégradation de la bradykinine provoque la toux sèche sous IEC." },
  { id: 26, q: "Quelle classe thérapeutique bloque sélectivement les récepteurs AT1 sans provoquer de toux ?", opts: ["Les ARA2 (Sartans)", "Les bêtabloquants", "Les macrolides", "Les sulfamides"], c: 0, exp: "Les antagonistes des récepteurs de l'angiotensine II (ARA2) n'agissent pas sur la bradykinine." },
  { id: 27, q: "Quelle est la caractéristique d'un essai clinique de Phase III ?", opts: ["Test sur 10 volontaires", "Essai contrôlé randomisé multicentrique sur des milliers de patients démontrant l'efficacité pivot", "Test in vitro", "Retrait du produit"], c: 1, exp: "La phase III fournit la preuve pivot indispensable à l'octroi de l'AMM." },
  { id: 28, q: "Qu'est-ce que l'Observance thérapeutique (Adhérence) ?", opts: ["La propreté de la boîte", "La régularité avec laquelle le patient suit les prescriptions (doses, horaires, durée)", "Le diplôme du médecin", "Le lieu d'achat"], c: 1, exp: "L'observance conditionne le succès réel de tout traitement au long cours." },
  { id: 29, q: "Dans la segmentation d'un secteur, quelle est la fréquence annuelle de visite d'un médecin Cible A ?", opts: ["1 fois par an", "Toutes les 4 à 6 semaines (6 à 8 visites/an)", "Tous les matins", "1 fois tous les 3 ans"], c: 1, exp: "Les cibles prioritaires A demandent des passages réguliers toutes les 4 à 6 semaines." },
  { id: 30, q: "Que signifie le secret médical pour le délégué médical en cabinet ?", opts: ["Rien du tout", "L'interdiction absolue de consulter, photographier ou divulguer les dossiers des malades", "Le droit de revendre les données", "Une clause facultative"], c: 1, exp: "Le secret médical protège l'intimité et la dignité des patients sans exception." },
  { id: 31, q: "Quel est le rôle du Key Account Manager (KAM) dans l'industrie pharmaceutique ?", opts: ["Distribuer des flyers dans la rue", "Gérer les relations stratégiques et le référencement auprès des grands comptes hospitaliers", "Remplacer le pharmacien", "Conduire les camions"], c: 1, exp: "Le KAM négocie les accords cadres avec les CHU, cliniques et groupements." },
  { id: 32, q: "Qu'est-ce que l'andragogie en pédagogie professionnelle ?", opts: ["La formation des enfants", "L'art et la science d'enseigner aux adultes par la résolution de cas concrets", "L'anatomie du bras", "Une plante médicinale"], c: 1, exp: "L'andragogie valorise l'expérience des apprenants adultes." },
  { id: 33, q: "Quelle est la première action en cas de rappel de lot urgent d'un produit injectable ?", opts: ["Attendre le mois suivant", "Informer les pharmacies hospitalières et bloquer immédiatement la dispensation des lots incriminés", "Cacher le produit", "Augmenter le prix"], c: 1, exp: "Le blocage immédiat protège les patients contre tout risque d'injection défectueuse." },
  { id: 34, q: "Quelle autorité publique régule l'homologation des médicaments en Côte d'Ivoire ?", opts: ["L'AIRP (Autorité Ivoirienne de Régulation Pharmaceutique)", "La FIFA", "Le Ministère du Tourisme", "La CNPS"], c: 0, exp: "L'AIRP est l'autorité souveraine ivoirienne de régulation." },
  { id: 35, q: "Que signifie la Couverture Maladie Universelle (CMU) pour la prescription médicale ?", opts: ["La suppression des médecins", "Un panier de soins et médicaments remboursables pour garantir l'accès financier des populations", "L'interdiction des médicaments", "Une taxe sur les hôpitaux"], c: 1, exp: "La CMU élargit l'accès aux médicaments essentiels remboursables." },
  { id: 36, q: "Pourquoi le délégué médical ne doit-il jamais dénigrer un concurrent ?", opts: ["Parce que la déloyauté décrédibilise l'ensemble de la profession et viole l'éthique", "Parce que c'est interdit le dimanche", "Aucune raison", "Pour faire plaisir"], c: 0, exp: "L'éthique et la confraternité garantissent le respect du corps soignant." },
  { id: 37, q: "Dans quelle rubrique du RCP trouve-t-on les contre-indications absolues ?", opts: ["Rubrique 4.1", "Rubrique 4.3", "Rubrique 5.2", "Rubrique 6.1"], c: 1, exp: "La rubrique 4.3 liste les interdictions formelles d'utilisation." },
  { id: 38, q: "Que faire si un médecin exige une commission financière pour prescrire vos produits ?", opts: ["Accepter immédiatement", "Refuser poliment mais fermement au nom de la déontologie et de la loi", "Négocier à moitié prix", "Lui promettre un voyage privé"], c: 1, exp: "La tolérance zéro anti-corruption est la règle intangible de l'Institut Yonah." },
  { id: 39, q: "Quelle voie d'administration a par définition une biodisponibilité de 100% ?", opts: ["Voie intraveineuse (IV)", "Voie orale", "Voie cutanée", "Voie rectale"], c: 0, exp: "La voie IV introduit 100% du principe actif directement dans la circulation générale." },
  { id: 40, q: "Quel est l'objectif suprême du délégué médical diplômé de l'Institut d'Excellence Yonah ?", opts: ["Être un vendeur de rue", "Être un partenaire scientifique respecté, cultivé et garant du bon usage pour sauver des vies", "Faire le plus de bruit possible", "Obtenir des cadeaux"], c: 1, exp: "L'expertise scientifique et l'intégrité fondent le respect durable du corps médical." }
];

module.exports = {
  INSTITUTIONAL_DATA,
  EXAM_QUESTION_BANK
};
