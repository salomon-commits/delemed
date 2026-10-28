// Fichier d'enrichissement massif des 38 modules et tracks de l'Institut d'Excellence YONAH
// Contient : Guide de terrain, Fiche réflexe médecin, Alertes de vigilance clinique et Script audio de synthèse

module.exports = {
  1: {
    fieldGuideTitle: "Pratique de terrain & Posture professionnelle",
    keyQuestions: [
      "« Docteur, quelle typologie de patients vous pose le plus de difficultés d'observance actuellement ? »",
      "« Dans quel contexte thérapeutique privilégiez-vous les formes à libération prolongée en consultation de routine ? »"
    ],
    objection: "« Les délégués viennent tous me raconter la même chose pour vendre leurs produits. »",
    rebuttal: "« Docteur, je comprends parfaitement votre saturation face aux discours commerciaux. Mon rôle d'ambassadeur scientifique Yonah n'est pas de vous vendre une boîte, mais de vous partager les données cliniques objectives et de vérifier ensemble le profil de patient chez qui notre molécule apporte un bénéfice prouvé. »",
    vigilanceAlerts: [
      "Interdiction formelle de solliciter ou d'accepter des listes de noms de patients.",
      "Ne jamais promettre d'effets secondaires 'inexistants' : la transparence sur la tolérance fonde la crédibilité."
    ],
    officineTip: "Toujours sonder la pharmacie la plus proche du cabinet pour savoir si la molécule est en stock avant de démarrer une campagne de prescription.",
    audioScript: "Bienvenue dans la synthèse audio du Module 1 de l'Institut d'Excellence Yonah. Le délégué médical moderne est un professionnel de santé assermenté. Il ne vend pas de médicament au patient : il assure la diffusion d'informations médicales objectives et rigoureuses auprès des praticiens. Ses trois piliers inviolables sont l'information scientifique conforme au RCP, la promotion du bon usage du médicament, et la pharmacovigilance active sous 24 heures en cas d'effet indésirable. L'éthique Yonah impose le respect absolu du temps de consultation médicale et le refus strict de toute dérive commerciale."
  },

  2: {
    fieldGuideTitle: "Circuit de distribution & Gestion de la disponibilité",
    keyQuestions: [
      "« Docteur, vos ordonnances de spécialités récentes sont-elles facilement délivrées par vos officines de quartier ? »",
      "« Avez-vous constaté des ruptures chez vos patients chroniques sous traitement au cours du dernier mois ? »"
    ],
    objection: "« Votre produit est très bien sur le papier, mais mes patients ne le trouvent jamais en pharmacie. »",
    rebuttal: "« Merci pour ce retour capital Docteur. Je note immédiatement les pharmacies de référence de vos patients et je contacte aujourd'hui même les grossistes répartiteurs comme Laborex et DPCI pour approvisionner d'urgence les dépôts officinaux de votre secteur. »",
    vigilanceAlerts: [
      "Une prescription sans produit disponible en pharmacie conduit au découragement du patient et à la rupture de soins.",
      "Vérifier scrupuleusement la chaîne de distribution agréée par l'AIRP pour écarter tout risque de circuit illicite."
    ],
    officineTip: "Établir un contact hebdomadaire avec le pharmacien titulaire et le responsable des achats pour surveiller les rotations de stock.",
    audioScript: "Synthèse audio du Module 2. Le circuit pharmaceutique légal garantit la qualité irréprochable du médicament, de l'usine certifiée aux Bonnes Pratiques de Fabrication jusqu'au patient. En Afrique de l'Ouest, les grossistes répartiteurs jouent un rôle stratégique dans l'approvisionnement quotidien des officines sous température contrôlée. Le délégué médical d'élite ne s'arrête pas à la prescription : il surveille activement la disponibilité réelle du produit en pharmacie pour garantir la continuité des soins et la sécurité sanitaire."
  },

  3: {
    fieldGuideTitle: "Choix galénique & Observance thérapeutique",
    keyQuestions: [
      "« Quelle est la principale cause d'abandon de traitement chez vos patients sous antibiothérapie orale ? »",
      "« Comment gérez-vous les troubles de déglutition chez vos patients âgés polymédiqués ? »"
    ],
    objection: "« Un comprimé reste un comprimé, la forme galénique n'a pas tant d'importance que la molécule elle-même. »",
    rebuttal: "« Docteur, la molécule guérit la maladie, mais c'est la galénique qui permet au malade de prendre réellement son traitement. Une forme orodispersible ou à libération prolongée une fois par jour multiplie par deux l'observance par rapport à trois prises quotidiennes fractionnées. »",
    vigilanceAlerts: [
      "Attention aux excipients à effet notoire : vérifier l'absence d'aspartame en cas de phénylcétonurie, et de sucre chez le patient diabétique.",
      "Ne jamais recommander d'écraser des comprimés à libération prolongée ou gastro-résistants."
    ],
    officineTip: "Sensibiliser les auxiliaires de pharmacie à bien expliquer la reconstitution des suspensions buvables pédiatriques avec de l'eau minérale propre.",
    audioScript: "Synthèse du Module 3 : Galénique et voies d'administration. Un médicament est l'alliance d'un principe actif et d'excipients savamment dosés. La voie orale est la plus simple et la plus fréquente, mais elle subit le premier passage hépatique. La voie intraveineuse offre 100% de biodisponibilité immédiate pour les urgences. Les formes modernes, comme les comprimés à libération prolongée ou orodispersibles, visent à améliorer l'observance et le confort du malade. Attention permanente aux excipients à effet notoire chez les populations à risque."
  },

  4: {
    fieldGuideTitle: "Essais cliniques & Argumentation sur le RCP",
    keyQuestions: [
      "« Sur quels critères d'efficacité clinique vous basez-vous en priorité pour adopter une nouvelle molécule de classe ? »",
      "« Les données de tolérance rénale ou hépatique publiées dans le RCP influencent-elles votre prescription de première intention ? »"
    ],
    objection: "« Cette molécule est trop récente, je préfère attendre quelques années d'expérience terrain. »",
    rebuttal: "« C'est une prudence tout à fait légitime Docteur. C'est précisément pourquoi notre dossier d'AMM repose sur trois essais cliniques de phase 3 randomisés en double aveugle sur plus de 4000 patients, avec un suivi rigoureux de pharmacovigilance post-AMM déjà effectif. »",
    vigilanceAlerts: [
      "Toute allégation promotionnelle doit être strictement étayée par le Résumé des Caractéristiques du Produit (RCP) validé.",
      "Ne jamais extrapoler les résultats d'un essai chez l'adulte vers la population pédiatrique sans indication mentionnée à l'AMM."
    ],
    officineTip: "Conserver une copie plastifiée des RCP des spécialités clés dans sa sacoche pour toute consultation rapide par le médecin.",
    audioScript: "Synthèse du Module 4 : Le cycle de vie du médicament. Du criblage moléculaire initial jusqu'à la mise sur le marché, le développement d'une nouvelle entité thérapeutique requiert 10 à 12 années d'études précliniques et cliniques en 4 phases. Le Résumé des Caractéristiques du Produit, ou RCP, constitue la bible médico-légale du médicament. Le délégué médical a pour devoir absolu de ne communiquer que des informations conformes à ce document officiel approuvé par les autorités réglementaires."
  },

  5: {
    fieldGuideTitle: "Anatomie & Physiologie en consultation",
    keyQuestions: [
      "« Quels sont les signes cliniques précoces de décompensation cardiaque que vous surveillez chez vos patients hypertendus ? »",
      "« Quelle proportion de vos patients sous traitement présente une fonction rénale limite nécessitant un suivi particulier ? »"
    ],
    objection: "« Mes patients ne comprennent rien au jargon médical, inutile de leur expliquer la physiologie. »",
    rebuttal: "« C'est vrai Docteur que les termes techniques effraient. En revanche, lorsqu'on illustre simplement le cœur comme une pompe et les artères comme des tuyaux sous pression, le patient comprend pourquoi il doit prendre son hypotenseur même quand il ne ressent aucun symptôme. »",
    vigilanceAlerts: [
      "L'insuffisance rénale réduit considérablement la filtration glomérulaire : surveiller la clairance pour toute molécule à élimination rénale.",
      "Le foie est l'usine métabolique centrale : toute cirrhose ou hépatite aiguë modifie la clairance métabolique des médicaments."
    ],
    officineTip: "Encourager les officines à disposer d'un pèse-personne et d'un tensiomètre calibré pour le dépistage précoce des usagers.",
    audioScript: "Synthèse du Module 5 : Anatomie et physiopathologie humaine. Le délégué médical doit posséder une maîtrise solide des grands systèmes physiologiques : cardio-vasculaire, respiratoire, digestif, rénal et nerveux. L'homéostasie est l'équilibre dynamique qui maintient la vie. Lorsque cet équilibre est rompu, la pathologie s'installe. Comprendre le trajet sanguin, la filtration glomérulaire rénale et le métabolisme hépatique permet d'expliquer scientifiquement la posologie et le mode d'action d'un médicament."
  },

  6: {
    fieldGuideTitle: "Diagnostic, CIM-11 & Démarche étiologique",
    keyQuestions: [
      "« Recourez-vous systématiquement aux tests de diagnostic rapide avant d'initier un traitement antipaludique ou antibiotique ? »",
      "« Quel est le délai moyen d'obtention de l'antibiogramme dans votre structure hospitalière ? »"
    ],
    objection: "« Je n'ai pas le temps de faire des examens complémentaires pour chaque malade fébrile, je traite à large spectre. »",
    rebuttal: "« La charge de travail est effectivement immense Docteur. Cependant, avec l'émergence des résistances bactériennes et des faux diagnostics de paludisme, un test rapide de 15 minutes permet d'éviter l'échec thérapeutique et de préserver les molécules de deuxième ligne. »",
    vigilanceAlerts: [
      "Un syndrome fébrile n'est pas synonyme systématique de paludisme : penser à la typhoïde, aux infections urinaires et méningées.",
      "La surconsommation d'antibiotiques sans preuve bactérienne accélère l'antibiorésistance communautaire."
    ],
    officineTip: "Proposer aux pharmaciens de former les équipes comptoir à l'orientation des cas suspects vers les laboratoires d'analyses médicales.",
    audioScript: "Synthèse du Module 6 : La maladie, son diagnostic et la CIM-11. Une pathologie se caractérise par une étiologie, des symptômes ressentis par le patient et des signes cliniques mesurés par le médecin. Le diagnostic de certitude s'appuie sur la biologie médicale, l'imagerie et les tests rapides. La classification internationale des maladies, ou CIM-11 de l'OMS, standardise les diagnostics à l'échelle planétaire, permettant un suivi épidémiologique rigoureux."
  },

  7: {
    fieldGuideTitle: "Pharmacocinétique ADME appliquée au terrain",
    keyQuestions: [
      "« Docteur, privilégiez-vous les molécules à demi-vie longue pour sécuriser les prises chez vos patients oublieux ? »",
      "« Comment ajustez-vous vos posologies chez les patients présentant un débit de filtration glomérulaire inférieur à 30 ml/minute ? »"
    ],
    objection: "« Deux prises ou une prise par jour, cela revient au même pour un patient discipliné. »",
    rebuttal: "« Les études d'observance montrent qu'au-delà d'une prise par jour, le taux d'oubli dépasse 45% à trois mois. Une demi-vie d'élimination de 24 à 36 heures garantit une couverture plasmatique stable même si le patient décale sa prise de quelques heures. »",
    vigilanceAlerts: [
      "Demi-vie courte = fluctuations plasmatiques et risque de sous-dosage en cas d'oubli.",
      "Forte liaison aux protéines plasmatiques : risque de toxicité aiguë par déplacement compétitif avec d'autres molécules (ex. AVK)."
    ],
    officineTip: "Rappeler au comptoir l'importance de préciser si la prise doit se faire pendant, avant ou en dehors des repas pour optimiser l'absorption digestive.",
    audioScript: "Synthèse du Module 7 : Pharmacocinétique fondamentale, le devenir du médicament dans l'organisme selon l'acronyme ADME : Absorption, Distribution, Métabolisme et Élimination. La biodisponibilité mesure la fraction de dose qui atteint la circulation générale. La demi-vie d'élimination détermine le rythme des prises. Les cytochromes hépatiques P450 jouent un rôle clé dans le métabolisme. Maîtriser ces paramètres permet au délégué d'expliquer pourquoi un schéma posologique est optimal."
  },

  8: {
    fieldGuideTitle: "Pharmacodynamie & Relation Dose-Effet",
    keyQuestions: [
      "« Quel est l'index thérapeutique de vos traitements chroniques actuels chez vos patients à haut risque d'accumulation ? »",
      "« Recherchez-vous un effet agoniste complet ou partiel pour limiter les phénomènes de désensibilisation des récepteurs ? »"
    ],
    objection: "« Pourquoi ce nouveau produit serait-il plus puissant que l'ancienne molécule ? »",
    rebuttal: "« Ce n'est pas seulement une question de puissance brute Docteur, mais d'affinité et de sélectivité récepteur : notre molécule cible spécifiquement les sous-récepteurs cibles avec 100 fois moins d'affinité pour les récepteurs secondaires, éliminant ainsi les effets indésirables hors-cible. »",
    vigilanceAlerts: [
      "Index thérapeutique étroit : tout écart de posologie ou interaction peut basculer de l'effet thérapeutique à une toxicité létale (ex. digoxine, lithium).",
      "Tolérance et tachyphylaxie : l'administration répétée peut entraîner une désensibilisation progressive des récepteurs."
    ],
    officineTip: "Mettre en garde les patients contre l'automédication avec double dose en pensant guérir deux fois plus vite.",
    audioScript: "Synthèse du Module 8 : Pharmacodynamie, ce que le médicament fait à l'organisme. L'interaction entre la substance active et sa cible biologique déclenche la réponse thérapeutique. Un agoniste stimule le récepteur, un antagoniste le bloque. L'index thérapeutique représente la marge de sécurité entre la dose efficace et la dose toxique. Plus cet index est large, plus le médicament est maniable et sûr d'emploi en pratique quotidienne."
  },

  9: {
    fieldGuideTitle: "Classification ATC de l'OMS & Dénominations",
    keyQuestions: [
      "« Dans la classe ATC C (système cardiovasculaire), quelle sous-famille chimique vous donne les meilleurs résultats en monothérapie ? »",
      "« Vos prescriptions sont-elles systématiquement rédigées en Dénomination Commune Internationale ou en noms de marque ? »"
    ],
    objection: "« Les codes ATC ne servent qu'aux statisticiens et aux pharmaciens hospitaliers. »",
    rebuttal: "« La classification ATC permet de comparer objectivement deux molécules de même niveau d'action pharmacologique, et de détecter instantanément les doublons de prescription ou les antagonismes thérapeutiques lors de l'analyse d'ordonnance. »",
    vigilanceAlerts: [
      "Confusion fréquente entre DCI à consonance proche (ex. Céfotaxime vs Céfépime) : toujours vérifier le nom complet et le dosage.",
      "Ne pas associer deux molécules appartenant au même sous-groupe pharmacologique sans justification médicale validée."
    ],
    officineTip: "Afficher le poster de l'arbre ATC de l'OMS dans l'espace de préparation pour faciliter la substitution légale en DCI.",
    audioScript: "Synthèse du Module 9 : La classification anatomique, thérapeutique et chimique ATC de l'Organisation Mondiale de la Santé. Elle structure l'arsenal thérapeutique en 14 groupes anatomiques principaux, puis en sous-groupes thérapeutiques et chimiques jusqu'à la substance active individuelle. La DCI, ou Dénomination Commune Internationale, désigne universellement le principe actif, facilitant la communication scientifique internationale et évitant les erreurs de dispensation."
  },

  10: {
    fieldGuideTitle: "Anti-infectieux & Lutte contre l'antibiorésistance",
    keyQuestions: [
      "« Quel est votre taux de succès thérapeutique en première ligne dans les pneumopathies communautaires de l'adulte ? »",
      "« Quels antipaludiques à base d'artémisinine privilégiez-vous face aux alertes de baisse de sensibilité en Afrique de l'Ouest ? »"
    ],
    objection: "« Si je ne prescris pas un antibiotique de dernière génération, le patient ira voir un autre médecin. »",
    rebuttal: "« C'est une pression sociale bien réelle Docteur. Néanmoins, en expliquant au patient qu'une molécule ciblée de première intention préserve ses défenses futures et guérit son infection sans détruire sa flore intestinale, vous renforcez son adhésion et protégez l'arsenal thérapeutique collectif. »",
    vigilanceAlerts: [
      "Les bêtalactamines sont la première cause de choc anaphylactique médicamenteux : interroger systématiquement sur les antécédents allergiques.",
      "Les fluoroquinolones exposent à des risques de tendinite et de rupture du tendon d'Achille : vigilance chez le sportif et le sujet âgé."
    ],
    officineTip: "Refuser fermement la vente d'antibiotiques sans ordonnance médicale et rappeler la durée complète de la cure.",
    audioScript: "Synthèse du Module 10 : Les anti-infectieux. Cette famille vitale regroupe les antibactériens, les antiviraux, les antifongiques et les antiparasitaires. L'antibiothérapie doit respecter le spectre d'action et la concentration minimale inhibitrice. L'émergence mondiale de l'antibiorésistance impose un usage raisonné et le respect des lignes thérapeutiques officielles. En infectiologie tropicale, les combinaisons thérapeutiques à base d'artémisinine demeurent la pierre angulaire contre le paludisme à Plasmodium falciparum."
  },

  11: {
    fieldGuideTitle: "Cardiologie & Métabolisme en consultation",
    keyQuestions: [
      "« Quel pourcentage de vos patients hypertendus atteint les cibles tensionnelles recommandées (inférieures à 130/80 mmHg) ? »",
      "« Quelle bithérapie fixe privilégiez-vous pour favoriser l'observance chez le patient diabétique de type 2 coronarien ? »"
    ],
    objection: "« Les statines font trop mal aux muscles, mes patients arrêtent systématiquement au bout de six mois. »",
    rebuttal: "« Les myalgies sont en effet le premier frein à l'observance sous statine. Notre molécule présente une métabolisation différente sans passage par le cytochrome 3A4, ce qui réduit significativement l'incidence des douleurs musculaires tout en maintenant une baisse prouvée de 45% du LDL-cholestérol. »",
    vigilanceAlerts: [
      "Les IEC et ARA II sont formellement contre-indiqués pendant les 2e et 3e trimestres de la grossesse (risque d'atteinte rénale fœtale).",
      "Surveiller régulièrement la kaliémie et la créatinine sous association diurétique épargneur de potassium et bloqueur du SRAA."
    ],
    officineTip: "Recommander la mesure de la pression artérielle au calme après 5 minutes de repos, sans caféine ni tabac dans les 30 minutes précédentes.",
    audioScript: "Synthèse du Module 11 : Cardiologie et métabolisme. Les maladies cardio-vasculaires représentent une cause majeure de mortalité prématurée en Afrique. L'hypertension artérielle, le diabète et les dyslipidémies forment un triptyque à haut risque. L'arsenal thérapeutique mobilise les IEC, les antagonistes des récepteurs de l'angiotensine II, les inhibiteurs calciques, les bêtabloquants et les statines. La bithérapie fixe en un comprimé unique par jour constitue une avancée majeure pour briser l'inertie thérapeutique."
  },

  12: {
    fieldGuideTitle: "Neurologie, Psychiatrie & Prise en charge de la douleur",
    keyQuestions: [
      "« Dans les douleurs chroniques neuropathiques, quel est votre protocole d'escalade selon les trois paliers de l'OMS ? »",
      "« Comment gérez-vous le sevrage progressif des anxiolytiques chez les patients traités depuis plus de 12 semaines ? »"
    ],
    objection: "« Le paracétamol est trop faible pour calmer les douleurs articulaires intenses de mes patients. »",
    rebuttal: "« Utilisé seul et sous-dosé, il peut montrer ses limites. En revanche, à dose pleine de 1 gramme toutes les 6 heures ou en association synergique avec un opioïde faible de palier 2, il permet un soulagement optimal tout en évitant les toxicités gastriques et rénales des anti-inflammatoires au long cours. »",
    vigilanceAlerts: [
      "Toxicité hépatique aiguë du paracétamol en cas de dépassement de la dose maximale quotidienne (4g/24h chez l'adulte sain, 3g chez l'adulte fragile).",
      "Dépendance physique et psychique aux benzodiazépines : prescription limitée à 4 semaines pour les hypnotiques et 12 semaines pour les anxiolytiques."
    ],
    officineTip: "Vérifier l'absence d'association involontaire de plusieurs spécialités commerciales contenant toutes du paracétamol caché.",
    audioScript: "Synthèse du Module 12 : Système nerveux et prise en charge de la douleur. L'Organisation Mondiale de la Santé classe les antalgiques en trois paliers : palier 1 pour les douleurs légères à modérées avec les non-opioïdes, palier 2 pour les opioïdes faibles comme le tramadol et la codéine, et palier 3 pour les opioïdes forts comme la morphine. En neuropsychiatrie, la prescription des psychotropes requiert une vigilance extrême sur la durée de traitement pour prévenir l'accoutumance et la dépendance."
  },

  13: {
    fieldGuideTitle: "Pneumologie & Gastro-entérologie de terrain",
    keyQuestions: [
      "« Quel est le taux de maîtrise de la technique d'inhalation chez vos patients asthmatiques ou BPCO ? »",
      "« Prescrivez-vous systématiquement un protecteur gastrique IPP lors d'une cure d'AINS chez le sujet de plus de 65 ans ? »"
    ],
    objection: "« Les aérosols coûtent trop cher, je préfère prescrire des comprimés oraux de salbutamol. »",
    rebuttal: "« La voie orale est certes économique Docteur, mais elle met 30 minutes à agir et expose à des tachycardies et tremblements systémiques majeurs. L'inhalateur délivre des microgrammes directement dans l'arbre bronchique en quelques secondes, avec une sécurité cardiaque incomparable. »",
    vigilanceAlerts: [
      "L'usage abusif d'IPP au long cours expose à des malabsorptions de vitamine B12, magnésium et calcium, ainsi qu'au risque d'infection à Clostridium difficile.",
      "Ne jamais traiter un asthme persistant uniquement par un bronchodilatateur de courte durée sans corticoïde inhalé de fond."
    ],
    officineTip: "Faire mimer au comptoir le geste d'inhalation : vider l'air, déclencher en début d'inspiration lente et profonde, retenir sa respiration 10 secondes.",
    audioScript: "Synthèse du Module 13 : Pneumologie et gastro-entérologie. En pneumologie, la corticothérapie inhalée et les bronchodilatateurs bêta-2 mimétiques constituent les piliers de la prise en charge de l'asthme et de la bronchopneumopathie chronique obstructive. L'éducation à la technique d'inhalation est décisive. En gastro-entérologie, les inhibiteurs de la pompe à protons réduisent l'acidité gastrique pour traiter l'ulcère gastro-duodénal et le reflux, mais nécessitent une réévaluation périodique."
  },

  14: {
    fieldGuideTitle: "Interactions médicamenteuses & Sécurisation",
    keyQuestions: [
      "« Quels outils digitaux ou tables d'interactions consultez-vous lors de la prescription d'une nouvelle thérapie chez le sujet polymédiqué ? »",
      "« Quelles précautions prenez-vous vis-à-vis des interactions pharmacocinétiques liées aux inducteurs ou inhibiteurs enzymatiques ? »"
    ],
    objection: "« Les logiciels d'aide à la prescription signalent trop d'alertes d'interactions mineures, je finis par toutes les ignorer. »",
    rebuttal: "« C'est le piège de la fatigue décisionnelle Docteur. C'est pourquoi nous mettons l'accent uniquement sur les 4 niveaux stricts de l'ANSM : la contre-indication absolue et l'association déconseillée, qui engagent directement la responsabilité médicolégale et la survie du patient. »",
    vigilanceAlerts: [
      "Inhibiteurs enzymatiques puissants (ex. jus de pamplemousse, clarithromycine, kétoconazole) : accumulation et surdosage des molécules substrats.",
      "Inducteurs enzymatiques (ex. rifampicine, carbamazépine, millepertuis) : baisse d'efficacité dramatique des contraceptifs oraux et antirétroviraux."
    ],
    officineTip: "Alerter immédiatement le prescripteur lorsque deux molécules à index thérapeutique étroit interagissent sur la même ordonnance.",
    audioScript: "Synthèse du Module 14 : Interactions médicamenteuses et contre-indications. Une interaction survient lorsqu'un médicament modifie l'efficacité ou la toxicité d'un autre. Elles se divisent en interactions pharmacodynamiques par synergie ou antagonisme, et interactions pharmacocinétiques par modification de l'absorption, de la distribution, du métabolisme hépatique par les cytochromes ou de l'excrétion rénale. Les quatre niveaux de contrainte vont de la simple précaution d'emploi à la contre-indication absolue."
  },

  15: {
    fieldGuideTitle: "Pharmacovigilance active & Signalement AIRP",
    keyQuestions: [
      "« Avez-vous déjà été confronté à un effet indésirable grave ou inattendu nécessitant une déclaration aux autorités sanitaires ? »",
      "« Quelle est la procédure de notification des effets indésirables en vigueur au sein de votre établissement ? »"
    ],
    objection: "« Remplir les fiches de notification prend trop de temps pour un résultat invisible. »",
    rebuttal: "« Docteur, en tant que délégué médical Yonah, je suis mandaté pour recueillir votre signalement et renseigner les éléments cliniques initiaux en moins de 5 minutes afin de transmettre le dossier sans délai au département de pharmacovigilance sous 24 heures. »",
    vigilanceAlerts: [
      "Tout effet indésirable grave (entraînant la mort, l'hospitalisation ou une invalidité) doit être notifié sous 24 heures ouvrées.",
      "Ne pas attendre d'avoir la certitude absolue de l'imputabilité pour signaler un cas douteux : le doute suffit pour déclencher l'alerte."
    ],
    officineTip: "Disposer de fiches de notification d'effets indésirables jaunes dans l'officine et sensibiliser les patients à déclarer toute réaction anormale.",
    audioScript: "Synthèse du Module 15 : Pharmacovigilance et iatrogénie. La sécurité des patients repose sur la surveillance continue des médicaments après leur commercialisation. La classification de Rawlins et Thompson distingue les effets indésirables de type A, prévisibles et dose-dépendants, des effets de type B, rares et imprévisibles comme les chocs anaphylactiques. Tout professionnel de santé et tout délégué médical ont l'obligation déontologique de notifier tout effet grave dans les 24 heures à l'autorité nationale."
  },

  16: {
    fieldGuideTitle: "L'Entretien Médical d'Élite en 5 Étapes",
    keyQuestions: [
      "« Comment se déroule habituellement la prise en charge initiale de vos patients coronariens stables ? »",
      "« Quels critères vous amènent à changer de palier thérapeutique lors d'un échec de monothérapie ? »"
    ],
    objection: "« Je n'ai que 2 minutes à vous accorder aujourd'hui. »",
    rebuttal: "« C'est parfait Docteur, je respecte scrupuleusement votre temps. En 90 secondes chrono, je souhaite simplement attirer votre attention sur un seul chiffre : la réduction de 30% des hospitalisations chez le patient âgé démontrée dans la dernière étude parue dans The Lancet. »",
    vigilanceAlerts: [
      "Respecter la règle d'or des 70/30 : le médecin doit parler 70% du temps pendant la phase de découverte pour exprimer ses vrais besoins.",
      "Ne jamais quitter un bureau sans avoir obtenu un accord précis sur une typologie de patient cible à tester."
    ],
    officineTip: "Ne jamais dénigrer un médecin devant ses confrères ou l'équipe officinale : la discrétion et le respect fondent la notoriété.",
    audioScript: "Synthèse du Module 16 : La visite médicale d'élite selon le modèle Yonah. L'entretien se structure en cinq étapes rigoureuses : l'accroche respectueuse en 30 secondes, le sondage approfondi où le praticien parle l'essentiel du temps, l'argumentation scientifique personnalisée selon la méthode C.A.P.B., le traitement des objections par la méthode C.R.A.C., et enfin la conclusion avec engagement éthique sur une typologie clinique précise."
  },

  17: {
    fieldGuideTitle: "Argumentation clinique avancée & Evidence-Based Medicine",
    keyQuestions: [
      "« Dans quelle mesure le critère de réduction de mortalité globale prime-t-il sur les critères de substitution biologique dans votre choix ? »",
      "« Que pensez-vous du Nombre de Sujets à Traiter (NNT) de notre étude pivot comparé aux standards actuels ? »"
    ],
    objection: "« Les études des laboratoires sont toutes biaisées et conçues pour flatter les résultats du sponsor. »",
    rebuttal: "« Vous avez raison d'exiger une rigueur totale Docteur. Cet essai a été conduit de manière indépendante, publié dans le New England Journal of Medicine avec comité de lecture par les pairs, en intention de traiter et avec un petit p inférieur à 0,001 sur le critère de jugement principal dur. »",
    vigilanceAlerts: [
      "Toujours distinguer la significativité statistique (valeur de p) de la pertinence clinique réelle (taille d'effet et NNT).",
      "Ne jamais brandir des résultats sur un critère intermédiaire (baisse de tension) comme preuve automatique de baisse de mortalité sans étude dédiée."
    ],
    officineTip: "Avoir sous la main la réimpression papier de l'article de référence pour la remettre en main propre au médecin prescripteur.",
    audioScript: "Synthèse du Module 17 : Argumentaire produit et Evidence-Based Medicine. Le délégué médical d'excellence maîtrise la lecture critique des publications scientifiques. La médecine fondée sur les preuves hiérarchise les données, depuis l'opinion d'expert jusqu'aux essais cliniques randomisés en double aveugle et aux méta-analyses. Comprendre le risque relatif, la réduction du risque absolu et le Nombre de Sujets à Traiter permet de construire une argumentation irréfutable."
  },

  18: {
    fieldGuideTitle: "Organisation sectorielle & Ciblage stratégique",
    keyQuestions: [
      "« Quelle est la répartition de votre patientèle entre médecine générale et consultations spécialisées ? »",
      "« Quels jours et créneaux horaires sont les plus adaptés pour échanger sereinement sans perturber vos consultations ? »"
    ],
    objection: "« Vous passez trop souvent, je n'ai pas de nouveautés à vous raconter tous les mois. »",
    rebuttal: "« Je comprends parfaitement Docteur. Si vous êtes d'accord, nous espacerons nos entrevues à un rythme trimestriel ciblé sur des cas cliniques concrets, ou uniquement lors de nouvelles alertes thérapeutiques majeures. »",
    vigilanceAlerts: [
      "Ne pas gaspiller son temps de tournée : classer son portefeuille de praticiens selon la méthode ABC (A : fort potentiel, B : moyen, C : suivi espacé).",
      "Optimiser la sectorisation géographique pour réduire les temps de transport dans les embouteillages des métropoles."
    ],
    officineTip: "Faire le tour des 3 officines attenantes à un cabinet médical dans la même demi-journée pour boucler la boucle d'information.",
    audioScript: "Synthèse du Module 18 : Gestion de secteur et ciblage. Le temps est la ressource la plus précieuse du délégué médical. Une sectorisation rigoureuse divise le territoire en zones homogènes et planifie des tournées cohérentes. La segmentation ABC hiérarchise les professionnels de santé selon leur potentiel de prescription et leur accessibilité. Le suivi précis de la fréquence de visite garantit une présence équilibrée et rentable."
  },

  19: {
    fieldGuideTitle: "Animation de réunions scientifiques & Relations KOL",
    keyQuestions: [
      "« Quel thème thérapeutique souhaiteriez-vous aborder lors de notre prochaine session de formation médicale continue entre confrères ? »",
      "« Seriez-vous disposé à partager votre retour d'expérience clinique lors d'un staff pluridisciplinaire hospitalier ? »"
    ],
    objection: "« Les staffs de laboratoires sont souvent des séances de publicité déguisée. »",
    rebuttal: "« L'Institut Yonah défend une posture scientifique stricte Docteur : notre réunion sera animée par un confrère universitaire indépendant autour d'un cas clinique réel d'échec thérapeutique, avec un temps de débat libre d'au moins 40 minutes. »",
    vigilanceAlerts: [
      "Ne jamais promettre de rémunération illégale ou de prise en charge de frais personnels non liés à l'événement scientifique.",
      "Veiller à l'équilibre du temps de parole pour ne pas laisser un seul participant monopoliser les échanges."
    ],
    officineTip: "Inviter les pharmaciens hospitaliers et chefs de service lors des staffs pour aligner la pratique de prescription et la délivrance.",
    audioScript: "Synthèse du Module 19 : Communication scientifique et animation de réunions. Les staffs hospitaliers, symposiums et tables rondes constituent des moments privilégiés d'échange confraternel. Le délégué médical y agit comme un facilitateur scientifique de haut niveau. Les Leaders d'Opinion, ou KOL, apportent leur caution clinique éclairée. Chaque événement doit respecter scrupuleusement la réglementation sur la formation médicale continue."
  },

  20: {
    fieldGuideTitle: "Pathologies majeures en Afrique de l'Ouest",
    keyQuestions: [
      "« Quelle est la prévalence des crises vaso-occlusives drépanocytaires chez les enfants suivis dans votre service pédiatrique ? »",
      "« Comment articulez-vous le traitement antirétroviral et la prophylaxie antituberculeuse chez vos patients co-infectés VIH-TB ? »"
    ],
    objection: "« Ces molécules modernes coûtent trop cher pour les familles vulnérables atteintes de maladies chroniques. »",
    rebuttal: "« C'est un défi de santé publique déchirant Docteur. C'est pourquoi nous collaborons avec les programmes nationaux et les mécanismes de gratuité ciblée de la CMU pour intégrer cette spécialité dans le panier de soins subventionnés de référence. »",
    vigilanceAlerts: [
      "Drépanocytose : toute fièvre chez un enfant drépanocytaire est une urgence vitale imposant une antibiothérapie immédiate.",
      "Co-infection VIH et tuberculose : attention aux interactions majeures entre la rifampicine et les inhibiteurs d'intégrase."
    ],
    officineTip: "Veiller au stockage permanent d'hydroxyurée et d'antalgiques majeurs pour les urgences drépanocytaires.",
    audioScript: "Synthèse du Module 20 : Pathologies prévalentes et enjeux régionaux en Afrique subsaharienne. Le délégué médical évolue au cœur des défis prioritaires : paludisme endémique, drépanocytose sous forme SS ou SC, tuberculose, VIH-sida et essor fulgurant des maladies non transmissibles. La maîtrise fine des protocoles nationaux et des recommandations de l'OMS est indispensable pour être un partenaire de confiance des autorités de santé."
  },

  21: {
    fieldGuideTitle: "Pharmaco-économie & Médico-économie appliquée",
    keyQuestions: [
      "« Quel est le coût global moyen d'une hospitalisation évitable pour décompensation cardiaque dans votre établissement ? »",
      "« La prise en compte du reste à charge pour le patient influence-t-elle l'observance sur les traitements à vie ? »"
    ],
    objection: "« Votre boîte de médicaments coûte 30% plus cher que le traitement historique disponible. »",
    rebuttal: "« C'est exact au niveau du prix facial de la boîte Docteur. En revanche, l'analyse médico-économique démontre qu'en évitant 4 hospitalisations pour 100 patients traités par an, notre molécule génère une économie globale de santé de plus de 450 000 Francs CFA par patient pour la collectivité et la famille. »",
    vigilanceAlerts: [
      "Ne jamais confondre le coût d'acquisition du médicament et le coût total de prise en charge de la maladie.",
      "Le QALY (Année de Vie Ajustée par la Qualité) évalue à la fois le gain de durée et le gain de confort de vie du malade."
    ],
    officineTip: "Expliquer aux patients affiliés à la CMU la part remboursée et le ticket modérateur résiduel pour éviter les refus au comptoir.",
    audioScript: "Synthèse du Module 21 : Pharmaco-économie et accès au marché. Les ressources de santé étant limitées, la médico-économie évalue le rapport entre le coût d'une innovation et son bénéfice clinique réel. Les études coût-efficacité, coût-utilité avec l'indicateur QALY, et le ratio différentiel coût-résultat permettent de justifier le prix et le remboursement des médicaments auprès des organismes payeurs."
  },

  22: {
    fieldGuideTitle: "Conformité éthique & Déontologie IFPMA",
    keyQuestions: [
      "« Votre établissement applique-t-il une charte interne régissant les relations avec les représentants pharmaceutiques ? »",
      "« Quelle est la position de votre collège médical concernant la transparence des liens d'intérêts ? »"
    ],
    objection: "« Le délégué du laboratoire concurrent m'offre des cadeaux pour équiper mon bureau de consultation. »",
    rebuttal: "« L'Institut d'Excellence Yonah et notre laboratoire souscrivent rigoureusement au code mondial de l'IFPMA et aux directives de l'AIRP. Nous ne fournissons aucun avantage matériel personnel : notre valeur ajoutée réside exclusivement dans la rigueur scientifique de nos données et le soutien à la formation médicale continue. »",
    vigilanceAlerts: [
      "Tolérance zéro pour les cadeaux, voyages d'agrément, dons en espèces ou avantages matériels indus.",
      "Tout soutien à une manifestation scientifique doit être modeste, direct, documenté et sans contrepartie de prescription."
    ],
    officineTip: "Refuser tout accord financier occulte de rétrocommission sur les volumes de vente en pharmacie.",
    audioScript: "Synthèse du Module 22 : Éthique, intégrité et conformité réglementaire. La crédibilité de l'industrie pharmaceutique repose sur la probité irréprochable de ses acteurs de terrain. Le code de déontologie de l'IFPMA interdit formellement tout cadeau personnel, incitation pécuniaire ou avantage disproportionné accordé aux prescripteurs. L'information médicale doit être loyale, objective, vérifiable et exempte de toute tromperie."
  },

  23: {
    fieldGuideTitle: "Outils digitaux, CRM & E-detailing",
    keyQuestions: [
      "« Appréciez-vous la consultation de courbes interactives sur tablette lors de nos échanges scientifiques ? »",
      "« Seriez-vous intéressé par la réception d'articles médicaux de synthèse au format PDF sécurisé par e-mail professionnel ? »"
    ],
    objection: "« Les délégués qui ont les yeux rivés sur leur écran d'iPad ne m'écoutent même plus. »",
    rebuttal: "« C'est une dérive que nous combattons formellement Docteur. Pour moi, la tablette n'est qu'un support visuel pour vous montrer une courbe d'essai clinique en 10 secondes : l'essentiel de notre échange reste un dialogue humain direct les yeux dans les yeux. »",
    vigilanceAlerts: [
      "Le CRM sert à qualifier le profil et les besoins scientifiques du médecin, jamais à enregistrer des données de santé privées de patients.",
      "Ne pas transformer l'entretien en une lecture passive de diapositives numériques."
    ],
    officineTip: "Utiliser les outils digitaux pour notifier les pharmaciens en temps réel des réassorts de lots chez les grossistes.",
    audioScript: "Synthèse du Module 23 : Outils numériques, CRM et pilotage de la visite. Le numérique révolutionne la pratique du délégué médical. Le CRM permet de tracer l'historique des visites, de planifier les objectifs d'entretien et de mesurer la progression sectorielle. L'e-detailing sur tablette enrichit la présentation avec des animations interactives sur le mécanisme d'action et les essais cliniques, tout en préservant la qualité de la relation humaine."
  },

  24: {
    fieldGuideTitle: "Veille bibliographique & Lecture critique IMRAD",
    keyQuestions: [
      "« Quelles revues médicales à comité de lecture consultez-vous pour actualiser vos conduites à tenir thérapeutiques ? »",
      "« Quelle importance accordez-vous à la méthode de randomisation et au calcul du nombre de sujets dans les études publiées ? »"
    ],
    objection: "« Je n'ai pas le temps de lire des articles scientifiques de 20 pages en anglais. »",
    rebuttal: "« C'est précisément l'une de mes missions Docteur : je réalise la synthèse méthodique de la structure IMRAD de l'article pour vous résumer en 3 minutes l'objectif, la méthodologie, les résultats clés et les limites cliniques de l'étude. »",
    vigilanceAlerts: [
      "Ne jamais citer un article de presse ou un résumé de congrès non publié avec relecture par les pairs comme preuve définitive.",
      "Rechercher systématiquement les conflits d'intérêts et les financements d'études en bas des publications médicales."
    ],
    officineTip: "Partager des fiches de lecture critique synthétiques avec les pharmaciens pour renforcer leur conseil au comptoir.",
    audioScript: "Synthèse du Module 24 : Veille scientifique et structure IMRAD. La formation continue du délégué médical passe par une veille scientifique permanente. La structure universelle des articles médicaux comprend l'Introduction, les Méthodes, les Résultats et la Discussion. Savoir analyser la randomisation, la puissance statistique et les biais méthodologiques permet de dialoguer d'égal à égal avec les spécialistes les plus exigeants."
  },

  25: {
    fieldGuideTitle: "Leadership & Évolution de carrière pharmaceutique",
    keyQuestions: [
      "« Quels sont les axes d'amélioration prioritaires que vous identifiez dans votre posture professionnelle ce trimestre ? »",
      "« Comment structurez-vous vos objectifs personnels pour évoluer vers des fonctions de superviseur ou de chef de produit ? »"
    ],
    objection: "« Pour réussir comme délégué, il suffit d'être un bon parleur et d'avoir du bagou. »",
    rebuttal: "« Le bagou superficiel s'épuise dès la troisième visite face à un professeur de médecine chevronné. Seuls la compétence scientifique indiscutable, la rigueur organisationnelle, l'écoute active et le leadership éthique bâtissent une réputation durable dans l'industrie de santé. »",
    vigilanceAlerts: [
      "Le succès dans ce métier est une course de fond : cultiver la résilience face aux refus et aux journées d'attente prolongée.",
      "Maintenir une curiosité intellectuelle constante sur les innovations biomédicales et biotechnologiques."
    ],
    officineTip: "Créer un réseau d'entraide et de partage de bonnes pratiques avec ses pairs pour valoriser l'excellence de la profession.",
    audioScript: "Synthèse du Module 25 : Leadership, gestion de carrière et développement personnel. Le délégué médical diplômé de l'Institut Yonah est un leader de terrain. La réussite professionnelle repose sur l'intelligence émotionnelle, la rigueur d'organisation, la résilience et une éthique sans faille. Ce socle ouvre des perspectives d'évolution vers les postes de superviseur régional, de chef de produit marketing ou de responsable des affaires médicales."
  },

  26: {
    fieldGuideTitle: "Mentorat & Transmission du savoir pharmaceutique",
    keyQuestions: [
      "« Comment structurez-vous l'accueil et le compagnonnage de terrain d'un nouveau délégué junior sur votre secteur ? »",
      "« Quels indicateurs de progression pédagogique utilisez-vous pour évaluer la maîtrise des entretiens de vos filleuls ? »"
    ],
    objection: "« Former les nouveaux arrivants ne fait que créer des concurrents qui prendront ma place. »",
    rebuttal: "« Dans la culture d'excellence Yonah, le mentorat grandit le mentor autant que le filleul. Transmettre son expertise et élever le niveau d'exigence de son équipe est la marque distinctive des futurs directeurs régionaux et leaders du secteur. »",
    vigilanceAlerts: [
      "Un bon mentor ne fait pas l'entretien à la place du junior lors des doubles visites : il observe en silence et débriefe avec bienveillance après.",
      "Bannir tout jugement cassant : valoriser les points forts et cibler deux axes de progrès concrets par session."
    ],
    officineTip: "Faire observer les dynamiques d'officine au stagiaire pour qu'il comprenne la réalité de la délivrance des ordonnances.",
    audioScript: "Synthèse du Module 26 : Formation, mentorat et transmission du savoir. L'excellence ne s'arrête pas à la performance individuelle : elle s'exprime dans la capacité à transmettre aux nouvelles générations de délégués. Le compagnonnage de terrain, les visites en duo et le débriefing constructif permettent aux juniors de franchir rapidement les paliers de compétence, renforçant la renommée collective de l'Institut Yonah."
  },

  27: {
    fieldGuideTitle: "Gestion de crise sanitaire & Rappels de lots",
    keyQuestions: [
      "« Quelle est la procédure de mise en quarantaine immédiate des spécialités faisant l'objet d'un rappel officiel dans votre clinique ? »",
      "« Avez-vous désigné un correspondant local de matériovigilance et de pharmacovigilance d'urgence ? »"
    ],
    objection: "« Les rappels de lots créent la panique chez les patients, il vaut mieux écouler discrètement les boîtes restantes. »",
    rebuttal: "« C'est une faute grave passible de poursuites pénales et d'une perte définitive de réputation Docteur. La transparence totale et le retrait immédiat des lots suspects protègent la vie des patients et démontrent la maturité éthique d'un laboratoire responsable. »",
    vigilanceAlerts: [
      "Un rappel de lot de classe 1 (risque létal ou préjudice grave) impose une notification et un retrait sous 24 heures sans exception.",
      "Isoler physiquement les stocks suspects dans un carton scellé portant la mention manuscrite QUARANTAINE - NE PAS DÉLIVRER."
    ],
    officineTip: "Assister les officines dans la collecte des formulaires de retour de lots pour accélérer les indemnisations par le grossiste.",
    audioScript: "Synthèse du Module 27 : Gestion de crise pharmaceutique et rappels de lots. En cas de suspicion de contamination, de défaut de qualité ou d'effet indésirable inattendu, une cellule de crise est immédiatement déclenchée. Le délégué médical est en première ligne pour relayer les consignes officielles des autorités sanitaires, sécuriser les stocks en officine et rassurer les praticiens avec des informations techniques vérifiées."
  },

  28: {
    fieldGuideTitle: "Marketing mix & Négociation officinale éthique",
    keyQuestions: [
      "« Quels sont les conditionnements et présentations galéniques les plus adaptés au pouvoir d'achat de votre patientèle locale ? »",
      "« Comment travaillez-vous la visibilité au comptoir des spécialités de conseil sans prescription médicale obligatoire ? »"
    ],
    objection: "« Votre laboratoire ne fait aucune publicité à la télévision, personne ne connaît votre marque au quartier. »",
    rebuttal: "« Pour les médicaments éthiques soumis à prescription médicale, la publicité grand public est formellement interdite par la loi. Notre réputation se construit là où elle compte le plus : auprès des médecins prescripteurs et des pharmaciens qui garantissent le conseil scientifique. »",
    vigilanceAlerts: [
      "Ne jamais proposer de conditions commerciales non conformes au cadre réglementaire de l'Autorité Ivoirienne de Régulation Pharmaceutique.",
      "Respecter l'indépendance de dispensation du pharmacien d'officine."
    ],
    officineTip: "Fournir des réglettes posologiques et des brochures d'éducation thérapeutique pour les patients souffrant de maladies chroniques.",
    audioScript: "Synthèse du Module 28 : Stratégie commerciale, mix-marketing et négociation officinale. Le marketing pharmaceutique s'exerce dans un cadre déontologique strict. Les 4P du mix (Produit, Prix, Distribution et Promotion) intègrent les spécificités du médicament éthique et des spécialités grand public. La négociation avec le pharmacien titulaire s'articule autour de la rentabilité de l'officine, de la régularité d'approvisionnement et du conseil au patient."
  },

  29: {
    fieldGuideTitle: "Réglementation régionale AIRP, UEMOA & CEDEAO",
    keyQuestions: [
      "« Dans quelle mesure l'harmonisation des procédures d'enregistrement UEMOA facilite-t-elle l'accès aux nouvelles molécules en Côte d'Ivoire ? »",
      "« Quelles sont les exigences spécifiques de l'AIRP en matière de visa de publicité médicale ? »"
    ],
    objection: "« Les réglementations locales sont trop lentes et compliquées, cela paralyse l'innovation thérapeutique. »",
    rebuttal: "« Les agences de régulation comme l'AIRP sont le bouclier indispensable contre les faux médicaments et les produits de qualité inférieure qui menacent nos populations. L'harmonisation régionale en cours accélère les autorisations pour les dossiers rigoureux tout en garantissant la sécurité sanitaire. »",
    vigilanceAlerts: [
      "Tout support promotionnel doit obligatoirement comporter le numéro d'enregistrement ou de visa de publicité validé par l'AIRP.",
      "Tolérance zéro pour les circuits de distribution informels ou non homologués par le ministère de la santé."
    ],
    officineTip: "Vérifier régulièrement les arrêtés de retraits et les alertes qualité publiées par l'AIRP sur son portail officiel.",
    audioScript: "Synthèse du Module 29 : Écosystème réglementaire en Afrique de l'Ouest. L'Autorité Ivoirienne de Régulation Pharmaceutique (AIRP) et les instances de l'UEMOA veillent à la conformité rigoureuse du marché du médicament. L'harmonisation des dossiers d'enregistrement au format CTD simplifie les démarches tout en élevant les standards de sécurité, d'efficacité et de qualité au bénéfice direct des citoyens."
  },

  30: {
    fieldGuideTitle: "Déontologie de certification & Engagement de l'apprenant",
    keyQuestions: [
      "« Êtes-vous prêt à vous engager sur l'honneur à respecter le protocole de surveillance anti-triche de l'examen final ? »",
      "« Comment comptez-vous incarner au quotidien les valeurs d'excellence et d'intégrité de l'Institut Yonah ? »"
    ],
    objection: "« Pourquoi imposer un seuil de 80% et une surveillance aussi stricte pour un examen de formation ? »",
    rebuttal: "« Parce qu'un délégué médical manipule des données dont dépend la vie des malades. Un seuil d'excellence à 80% garantit qu'aucun lauréat Yonah n'accède au terrain avec des lacunes critiques en pharmacologie ou en pharmacovigilance. C'est ce qui fait la valeur et le respect de votre certificat auprès des recruteurs. »",
    vigilanceAlerts: [
      "Toute tentative de fraude, de capture d'écran non autorisée ou de sortie d'onglet invalide définitivement la session d'examen.",
      "Le certificat porte un identifiant cryptographique infalsifiable vérifiable en ligne."
    ],
    officineTip: "Conserver son diplôme et son relevé de compétences dans son dossier professionnel pour toute opportunité de carrière.",
    audioScript: "Synthèse du Module 30 : Examen final surveillé et certification d'excellence. Vous touchez au terme d'un parcours exceptionnel de 30 modules fondamentaux. Le certificat de reconnaissance interne délivré par l'Institut d'Excellence Yonah sous la direction de Guede Camus Salomon atteste de votre compétence scientifique de très haut niveau, de votre sens aigu de la pharmacovigilance et de votre éthique irréprochable. Abordez l'examen final avec sérénité et concentration."
  },

  // Tracks de Spécialisation 101 à 108
  101: {
    fieldGuideTitle: "Vaccinologie de terrain & Chaîne de froid tropicale",
    keyQuestions: [
      "« Quel est le protocole de surveillance thermique de vos réfrigérateurs de stockage au dispensaire ? »",
      "« Comment répondez-vous aux réticences et à l'hésitation vaccinale des parents lors des séances du PEV ? »"
    ],
    objection: "« Les vaccins contiennent des adjuvants chimiques dangereux pour le cerveau des bébés. »",
    rebuttal: "« L'hydroxyde d'aluminium est utilisé depuis plus de 70 ans sur des centaines de millions d'enfants. Les études toxicologiques démontrent qu'un nourrisson ingère plus d'aluminium naturel dans le lait maternel que dans une dose vaccinale, et cet adjuvant est indispensable pour réveiller les défenses durables. »",
    vigilanceAlerts: [
      "Le gel est mortel pour les vaccins adsorbés : un vaccin qui a gelé forme un précipité irréversible et doit être détruit (Shake Test).",
      "Surveiller la pastille VVM : dès que le carré central devient sombre, le vaccin est périmé thermiquement."
    ],
    officineTip: "Fournir des accumulateurs de froid propres et des glacières isothermes homologuées pour le transport des vaccins.",
    audioScript: "Synthèse du Track 1 : Vaccins et immunologie appliquée. La vaccination est l'intervention de santé publique la plus efficace au monde. En milieu tropical, le maintien de la chaîne du froid entre plus 2 et plus 8 degrés Celsius est vital. Le test d'ébranlement de l'OMS permet de détecter toute congélation accidentelle. Le délégué spécialisé en vaccinologie maîtrise les protocoles du PEV élargi et les nouveaux vaccins antipaludiques comme le RTS,S et le R21."
  },

  102: {
    fieldGuideTitle: "Dispositifs médicaux & Diagnostic rapide (TDR)",
    keyQuestions: [
      "« Quelle est la sensibilité et la spécificité de vos tests rapides pour le diagnostic du paludisme et du VIH ? »",
      "« Comment assurez-vous l'étalonnage et le contrôle qualité régulier de vos lecteurs de glycémie capillaires ? »"
    ],
    objection: "« Les bandelettes réactives et les TDR ne sont pas assez fiables par rapport au microscope. »",
    rebuttal: "« Les tests de diagnostic rapide homologués par l'OMS présentent une sensibilité supérieure à 95% pour détecter la protéine HRP-2 de Plasmodium falciparum, avec l'avantage décisif de donner un résultat en 15 minutes au chevet du malade sans nécessiter de laboratoire d'analyses complexe. »",
    vigilanceAlerts: [
      "Les réactifs de TDR sont très sensibles à l'humidité : refermer immédiatement le sachet dessiccant après prélèvement.",
      "Ne jamais réutiliser une lancette ou une aiguille à usage unique pour les prélèvements capillaires."
    ],
    officineTip: "Former les patients diabétiques à l'utilisation correcte de leur glucomètre et à la tenue d'un carnet d'auto-surveillance.",
    audioScript: "Synthèse du Track 2 : Dispositifs médicaux et diagnostic rapide. Les dispositifs médicaux couvrent une gamme immense, des pansements aux équipements d'imagerie en passant par les implants et les tests de diagnostic rapide. La matériovigilance assure la traçabilité et le signalement de tout incident de fonctionnement. Les TDR transforment la prise en charge des fièvres en milieu tropical en confirmant l'étiologie avant toute délivrance d'antipaludique."
  },

  103: {
    fieldGuideTitle: "OTC, Conseil officinal & Dermocosmétique",
    keyQuestions: [
      "« Quelles questions de triage posez-vous systématiquement avant de délivrer un traitement d'automédication pour un trouble digestif ? »",
      "« Comment orientez-vous les patientes ayant une peau pigmentée fragilisée par des produits éclaircissants illicites ? »"
    ],
    objection: "« En pharmacie, les clients veulent juste acheter ce qu'ils demandent sans qu'on leur pose de questions. »",
    rebuttal: "« Le pharmacien et le conseiller comptoir ne sont pas de simples caissiers : ils sont le dernier rempart sanitaire. Poser 3 questions clés (Pour qui ? Depuis quand ? Autres traitements en cours ?) évite chaque jour des interactions fatales et des retards de diagnostic graves. »",
    vigilanceAlerts: [
      "Dépigmentation volontaire aux corticoïdes ou à l'hydroquinone : risque dramatique d'atrophie cutanée, de diabète induit et d'infections sévères.",
      "Attention aux associations cachées d'AINS et d'aspirine en vente libre dans les syndromes fébriles."
    ],
    officineTip: "Mettre en avant les crèmes émollientes réparatrices sans parfum et les protecteurs solaires à très haute protection SPF 50+.",
    audioScript: "Synthèse du Track 3 : Médicaments de prescription facultative, automédication responsable et dermocosmétique. Le conseil à l'officine exige une écoute active et un questionnement méthodique pour éliminer tout signe de gravité justifiant une consultation médicale d'urgence. En dermocosmétique tropicale, la prise en charge des peaux mélanodermes et la lutte contre les ravages de la dépigmentation volontaire constituent un enjeu sanitaire majeur."
  },

  104: {
    fieldGuideTitle: "Affaires médicales, MSL & Recherche clinique",
    keyQuestions: [
      "« Quel type d'études de vraie vie (Real-World Evidence) vous paraît le plus pertinent pour valider l'impact de nos molécules dans votre pratique ? »",
      "« Seriez-vous intéressé par une participation comme centre investigateur pour notre futur essai de phase IV post-AMM ? »"
    ],
    objection: "« Les laboratoires ne s'intéressent qu'aux essais conduits en Europe et aux États-Unis, jamais à nos populations africaines. »",
    rebuttal: "« C'est une critique tout à fait fondée que notre département des affaires médicales s'efforce de corriger : nous développons activement des programmes d'essais cliniques locaux conformes aux Bonnes Pratiques Cliniques pour générer des données pharmacocinétiques adaptées à notre profil épidémiologique et génétique. »",
    vigilanceAlerts: [
      "Le Medical Science Liaison (MSL) n'a aucun objectif commercial ou de vente : son rôle est 100% scientifique non promotionnel.",
      "Tout protocole d'essai clinique doit recevoir l'approbation préalable du Comité National d'Éthique de la Recherche (CNER)."
    ],
    officineTip: "Collaborer avec les pharmacies à usage intérieur (PUI) hospitalières pour le stockage sécurisé des médicaments expérimentaux sous scellés.",
    audioScript: "Synthèse du Track 4 : Affaires médicales, rôle du MSL et recherche clinique. Le Medical Science Liaison est un scientifique de haut niveau qui noue des partenariats intellectuels et scientifiques avec les sommités médicales. Son activité est strictement non promotionnelle. Il partage les données de recherche non publiées, répond aux demandes d'information médicale non sollicitées et soutient les études cliniques de vraie vie en Afrique."
  },

  105: {
    fieldGuideTitle: "Santé publique, Épidémies & Urgences sanitaires",
    keyQuestions: [
      "« Quels sont les circuits d'alerte rapide activés dans votre structure en cas de suspicion de cas de Dengue ou de Mpox ? »",
      "« Quel est l'état de votre stock stratégique de sels de réhydratation orale et de solutés de Ringer Lactate en prévision de la saison des pluies ? »"
    ],
    objection: "« Les épidémies relèvent uniquement de l'État et de l'INHP, les délégués médicaux n'ont rien à y faire. »",
    rebuttal: "« Face à une flambée de choléra ou de dengue, les équipes soignantes sont submergées. Le délégué médical expert en santé publique apporte un appui logistique inestimable en sécurisant les chaînes d'approvisionnement en solutés, en partageant les protocoles de prise en charge et en facilitant l'accès aux tests diagnostiques d'urgence. »",
    vigilanceAlerts: [
      "Dengue : contre-indication absolue de l'aspirine et des anti-inflammatoires non stéroïdiens (risque hémorragique fatal). Privilégier le paracétamol seul.",
      "Choléra : la déshydratation aiguë peut tuer un adulte en moins de 6 heures : démarrer immédiatement la réhydratation avant toute autre démarche."
    ],
    officineTip: "Maintenir un stock tampon de sels de réhydratation orale et de désinfectants chlorés à l'officine pendant les périodes épidémiques.",
    audioScript: "Synthèse du Track 5 : Santé publique, épidémiologie et gestion des urgences sanitaires. Les menaces épidémiques récurrentes en Afrique (dengue, fièvre typhoïde, choléra, mpox et méningite) exigent une réactivité exemplaire. La notification obligatoire, la surveillance sentinelle de l'INHP et le concept 'Une Seule Santé' (One Health) unissant santé humaine, animale et environnementale sont au cœur de la résilience sanitaire."
  },

  106: {
    fieldGuideTitle: "Populations spéciales : Pédiatrie, Gériatrie, Grossesse & Insuffisance rénale",
    keyQuestions: [
      "« Quelle formule d'estimation de la clairance de la créatinine utilisez-vous chez vos patients âgés dénutris (Cockcroft vs CKD-EPI) ? »",
      "« Comment sécurisez-vous la prescription médicamenteuse chez la femme enceinte au cours du premier trimestre d'organogenèse ? »"
    ],
    objection: "« Pour un enfant, il suffit de diviser par deux la dose de l'adulte et tout se passe bien. »",
    rebuttal: "« C'est une pratique dangereuse Docteur. L'enfant n'est pas un adulte en miniature : son immaturité enzymatique hépatique et sa fonction rénale en développement imposent un calcul posologique strict en milligrammes par kilogramme de poids corporel ou par mètre carré de surface corporelle. »",
    vigilanceAlerts: [
      "Tératogénicité médicamenteuse : molécules à proscrire formellement chez la femme enceinte (rétinoïdes, acide valproïque, méthotrexate, IEC/ARA II).",
      "Gériatrie : risque majeur de chutes, de confusion mentale et d'hémorragies par polymédication et déclin de la fonction rénale."
    ],
    officineTip: "Peser systématiquement l'enfant au comptoir avant toute délivrance d'un antibiotique ou d'un antipyrétique pédiatrique.",
    audioScript: "Synthèse du Track 6 : Populations spéciales et pharmacologie clinique adaptée. La prise en charge médicamenteuse des personnes âgées, des nouveau-nés, des femmes enceintes et des insuffisants rénaux ou hépatiques exige une adaptation rigoureuse des posologies. L'index d'immaturité néonatale, la clairance rénale calculée et le passage transplacentaire sont des paramètres que le délégué médical doit maîtriser sur le bout des doigts pour prévenir la iatrogénie."
  },

  107: {
    fieldGuideTitle: "Négociation complexe, Résilience & Gestion du stress",
    keyQuestions: [
      "« Comment préparez-vous mentalement vos journées de prospection après une série de refus d'accès en consultation ? »",
      "« Quelles techniques de respiration et de cadrage émotionnel mobilisez-vous lors des entretiens à fort enjeu relationnel ? »"
    ],
    objection: "« Le stress fait partie du métier, on ne peut rien y faire à part serrer les dents. »",
    rebuttal: "« Le stress chronique non régulé détruit l'empathie, la mémoire de travail et la santé physique du délégué. Les professionnels d'élite s'entraînent comme des athlètes : ils appliquent la cohérence cardiaque, la préparation mentale d'avant-visite et la dissociation émotionnelle pour rester calmes, bienveillants et ultra-performants en toutes circonstances. »",
    vigilanceAlerts: [
      "Ne jamais prendre un refus d'entrevue ou une saute d'humeur d'un praticien comme une attaque personnelle : le médecin est souvent sous pression vitale extrême.",
      "Préserver un équilibre de vie sain : sommeil régulier, hydratation et hygiène posturale au volant lors des longues tournées."
    ],
    officineTip: "Garder une attitude souriante et respectueuse avec le personnel d'accueil et les secrétaires médicales : elles sont les gardiennes du temple.",
    audioScript: "Synthèse du Track 7 : Compétences transversales, négociation à fort enjeu et maîtrise de soi. La performance du délégué médical sur le terrain ne repose pas uniquement sur son savoir scientifique, mais également sur son intelligence émotionnelle. La gestion du stress, la résilience face à la frustration des salles d'attente bondées et l'art de la négociation éthique constituent le bouclier psychologique indispensable du délégué d'élite."
  },

  108: {
    fieldGuideTitle: "Marchés publics, Appels d'offres & Hôpitaux",
    keyQuestions: [
      "« Quelle est la procédure de passation des commandes d'urgence au sein de votre pharmacie hospitalière (PUI) ? »",
      "« Quels critères de pondération technique figurent au cahier des charges de vos appels d'offres pour les solutés et génériques essentiels ? »"
    ],
    objection: "« Les marchés publics ne se gagnent qu'au prix le plus bas, la qualité scientifique n'a aucune importance dans les commissions d'attribution. »",
    rebuttal: "« C'est une idée reçue Docteur. Les commissions d'attribution hospitalières éliminent en amont les dossiers présentant des défauts de stabilité, des flacons non ergonomiques ou des certifications BPF insuffisantes. Un dossier technique irréprochable assorti d'une garantie de livraison sans faille est ce qui permet de remporter et de fidéliser un marché public hospitalier. »",
    vigilanceAlerts: [
      "Toute tentative de collusion ou de prise de contact non officielle durant la phase de dépouillement d'un appel d'offres entraîne l'exclusion définitive du laboratoire.",
      "Vérifier la validité des cautions bancaires et des autorisations de mise sur le marché avant tout dépôt de soumission."
    ],
    officineTip: "Conserver un calendrier précis des dates de clôture des marchés publics hospitaliers pour préparer les échantillons certifiés en amont.",
    audioScript: "Synthèse du Track 8 : Marchés publics, appels d'offres et approvisionnement hospitalier. L'hôpital public et les centres hospitaliers universitaires constituent des prescripteurs et acheteurs institutionnels majeurs. La soumission aux appels d'offres exige une rigueur administrative et médico-technique chirurgicale : respect du cahier des charges, conformité des certificats de libération de lots, pénalités de retard et traçabilité logistique sans faille."
  }
};
