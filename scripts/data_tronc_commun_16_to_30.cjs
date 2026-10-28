// Modules 16 à 30 du Tronc Commun — Institut d'Excellence Yonah
// Intégration exhaustive des fiches bilingues (🔬 Définition experte + 💡 En langage simple + 🎯 Exemple concret)

module.exports = [
  {
    id: 16,
    tier: "INTERMEDIAIRE",
    badge: "Module 16",
    title: "Module 16 : La visite médicale : structure, techniques et communication",
    objective: "Maîtriser le modèle Yonah en 5 étapes, la règle des 70/30 d'écoute active, la matrice CAPB et le traitement d'objections CRAC.",
    sections: [
      {
        id: "m16-s1",
        title: "16.1 Le Modèle Yonah de l'Entretien Médical en 5 Étapes",
        html: `
          <div class="box-callout box-key">
            <div class="box-header">L'architecture de l'excellence en visite médicale</div>
            <p>1. <strong>Cadrage & Accroche (30s) :</strong> Salutation déférente, remerciement, annonce du sujet et accord sur le temps alloué (5-7 min).<br>
            2. <strong>Diagnostic & Sondage (2-3 min) :</strong> Questions ouvertes ciblées sur la typologie de patients du praticien (Le médecin parle 70% du temps).<br>
            3. <strong>Argumentation C.A.P.B. (2 min) :</strong> Présentation ciblée de la preuve scientifique répondant précisément au besoin exprimé.<br>
            4. <strong>Traitement des Objections C.R.A.C. (1-2 min) :</strong> Clarifier, Reformuler, Argumenter par l'EBM, Conclure.<br>
            5. <strong>Conclusion & Engagement Éthique (30s) :</strong> Accord clair sur la prochaine typologie de patient chez qui évaluer la molécule.</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 41 : Matrice C.A.P.B. (Preuve & Bénéfice)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Technique structurée d'argumentation clinique articulant Caractéristique pharmacologique (propriété physico-chimique intrinsèque), Avantage concurrentiel (différenciation thérapeutique), Preuve clinique (essai clinique de phase III publié) et Bénéfice patient (impact direct sur la survie, le confort ou l'observance).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Ne jamais réciter la fiche technique dans le vide : relier chaque propriété chimique à un soulagement concret dans la vie quotidienne du malade.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> "Grâce à sa forme orodispersible (C), elle fond sous la langue en 5 secondes sans eau (A), comme démontré dans l'essai CLIN-04 (P), ce qui permet à votre patient migraineux de prendre son traitement immédiatement dans un embouteillage à Abidjan (B)."</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 42 : Méthode C.R.A.C. de Traitement des Objections</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Protocole relationnel en 4 temps pour traiter les réserves d'un clinicien : Clarifier (interroger pour cerner le doute exact), Reformuler avec empathie (valider la légitimité de l'inquiétude), Argumenter par les données probantes (EBM) et Conclure (vérifier la levée de l'objection).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Ne jamais couper la parole ni contredire brutalement un médecin : écouter, montrer qu'on a compris sa crainte, lui apporter la preuve scientifique qui rassure, et lui demander s'il est satisfait.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Face à un praticien qui craint un coût trop élevé : reformuler sur la prévention des hospitalisations coûteuses évitées par la molécule.</div>
          </div>
        `
      },
      {
        id: "m16-case",
        title: "16.8 Cas pratique : Face à un praticien réfractaire par habitude",
        isCase: true,
        caseId: "c16",
        caseContext: "Le Dr N'Dri, 28 ans d'exercice : 'Je prescris la même molécule historique depuis deux décennies. Mes malades ne s'en plaignent pas, je ne vois pas pourquoi je changerais pour votre nouveau produit.'",
        caseProblem: "Comment le délégué Yonah applique-t-il la méthode CRAC sans heurter l'ego du médecin ?",
        expertAnswer: "Le délégué sourit avec déférence : 1) Clarifier/Reformuler : 'Docteur, je comprends parfaitement et je respecte votre longue expérience clinique avec cette molécule de référence qui a rendu d'immenses services.' 2) Sonde : 'Cependant, parmi vos patients diabétiques coronariens, observez-vous parfois des épisodes d'hypoglycémies nocturnes angoissantes sous ce traitement ?' 3) Argumenter : 'Notre molécule offre le même contrôle glycémique mais avec un mécanisme glucose-dépendant qui divise par 4 le risque d'hypoglycémie sévère.' 4) Conclure : 'Accepteriez-vous de l'envisager spécifiquement chez votre prochain patient âgé vivant seul et à risque de chute ?'",
        keyTakeaways: "On ne combat jamais l'expérience d'un médecin : on la valorise et on se positionne sur ses angles morts ou les patients en échec."
      },
      {
        id: "m16-quiz",
        title: "16.9 Mini-Quiz d'évaluation : Module 16",
        isQuiz: true,
        quizModuleId: 16
      }
    ]
  },

  {
    id: 17,
    tier: "AVANCE",
    badge: "Module 17",
    title: "Module 17 : Argumentaire produit avancé, EBM et Elevator Pitch médical",
    objective: "Maîtriser la médecine fondée sur les preuves (EBM), le calcul du RRA et NNT, et structurer un Elevator Pitch médical percutant en 60 secondes.",
    sections: [
      {
        id: "m17-s1",
        title: "17.1 Biomarqueurs, EBM et Traduction Clinique des Statistiques",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 43 : NNT (Number Needed to Treat / Nombre de Sujets à Traiter)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Indicateur épidémiologique et pharmaco-statistique représentant le nombre de patients qu'il est nécessaire de traiter par la nouvelle molécule pendant une durée déterminée pour éviter un événement clinique indésirable majeur supplémentaire (décès, infarctus, AVC) par rapport au traitement de référence. NNT = 1 / RRA (Réduction du Risque Absolu).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Combien de personnes je dois soigner pour sauver avec certitude une vie humaine. Plus le chiffre est petit, plus le médicament est puissant et héroïque.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un NNT de 18 sur 3 ans signifie qu'en traitant 18 patients coronariens par cette statine, on évite mathématiquement un infarctus du myocarde.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 44 : Elevator Pitch Médical en 60 Secondes</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Synthèse verbale ultra-structurée et dense délivrée en exactement une minute, articulée en 4 temps : Enjeu de santé publique (15s), Mécanisme d'action différentiel (15s), Preuve EBM sur critère dur de morbi-mortalité (15s), et Proposition d'un profil patient cible précis (15s).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le discours d'impact minute : convaincre avec élégance et rigueur un médecin qui marche dans un couloir d'hôpital entre deux blocs opératoires.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Pitcher un anticoagulant oral direct à un chef de service de cardiologie pressé au CHU de Bouaké.</div>
          </div>
        `
      },
      {
        id: "m17-case",
        title: "17.7 Cas pratique : Pitcher un nouvel antidiabétique cardioprotecteur en 60 secondes",
        isCase: true,
        caseId: "c17",
        caseContext: "Le Pr Touré, chef du service de diabétologie, quitte sa consultation et se dirige vers l'ascenseur. Il vous dit : 'J'ai une minute top chrono.'",
        caseProblem: "Formulez le pitch parfait selon les standards d'excellence Yonah.",
        expertAnswer: "1. Accroche (0-15s) : 'Bonjour Professeur Touré. En Côte d'Ivoire, plus de 60% des décès chez vos patients diabétiques de type 2 sont d'origine cardiovasculaire ou rénale.' 2. Mécanisme (15-30s) : 'Notre inhibiteur de SGLT2 induit une déplétion hydrosodée sélective et une baisse de pression intraglomérulaire, totalement indépendante de la sécrétion d'insuline.' 3. Preuve EBM (30-45s) : 'L'essai pivot multicentrique sur 7 000 patients démontre une réduction de 38% de la mortalité cardiovasculaire avec un NNT remarquable de 39.' 4. Engagement (45-60s) : 'Puis-je vous déposer le protocole complet pour que vous l'évaluiez sur votre prochain patient diabétique à fraction d'éjection altérée ?'",
        keyTakeaways: "La concision clinique associée à un chiffre EBM percutant capte instantanément l'esprit des plus grands professeurs."
      },
      {
        id: "m17-quiz",
        title: "17.8 Mini-Quiz d'évaluation : Module 17",
        isQuiz: true,
        quizModuleId: 17
      }
    ]
  },

  {
    id: 18,
    tier: "AVANCE",
    badge: "Module 18",
    title: "Module 18 : Gestion de territoire, ciblage et planification stratégique",
    objective: "Maîtriser la segmentation des prescripteurs (A, B, C), l'optimisation des tournées géographiques étanches et le retour sur investissement temps.",
    sections: [
      {
        id: "m18-s1",
        title: "18.1 Segmentation de Portefeuille et Tournées en Marguerite",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 45 : Segmentation Prescripteurs (Loi de Pareto 80/20)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Classification analytique des professionnels de santé d'un secteur selon leur potentiel de prescription dans la pathologie cible et leur accessibilité relationnelle : Cible A (Fort potentiel, 20% des praticiens générant 80% du volume, visite toutes les 4-6 semaines), Cible B (Potentiel moyen, visite trimestrielle), Cible C (Faible potentiel, visite semestrielle ou collective).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Concentrer son énergie et son temps sur les médecins qui soignent le plus grand nombre de patients concernés par nos molécules.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Identifier les 25 cardiologues et internistes clés d'Abidjan Sud et programmer 8 visites régulières par an.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 46 : Organisation de Tournée par Grappes Géographiques</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Stratégie de découpage logistique consistant à sanctuariser des micro-zones géographiques étanches par journée pour éliminer les temps improductifs de déplacement et maximiser le temps de contact utile face aux soignants.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Ne jamais traverser toute la ville pour un seul rendez-vous : consacrer son lundi matin à Cocody, son mardi à Treichville et son mercredi à Yopougon.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Dans les embouteillages légendaires d'Abidjan, regrouper les visites des cliniques des Deux-Plateaux sur une même matinée fait gagner 3 heures de travail par jour.</div>
          </div>
        `
      },
      {
        id: "m18-case",
        title: "18.7 Cas pratique : Restructuration d'un secteur en perte de vitesse",
        isCase: true,
        caseId: "c18",
        caseContext: "Le délégué médical Yao passe 4 heures par jour au volant de sa voiture entre Abobo, Marcory et Yopougon, et ne réalise que 4 visites quotidiennes avec des ventes stagnantes.",
        caseProblem: "Comment restructurer son planning hebdomadaire selon la méthode Yonah ?",
        expertAnswer: "1. Réaliser une cartographie immédiate de son fichier sur Google Maps ou CRM. 2. Découper le secteur en 5 zones géographiques étanches : Lundi = Zone Nord (Abobo/Anyama), Mardi = Zone Est (Cocody/Riviera), Mercredi = Zone Centre (Plateau/Adjamé), Jeudi = Zone Sud (Treichville/Marcory/Koumassi), Vendredi = Zone Ouest (Yopougon). 3. Programmer les visites hospitalières à 7h30 lors de la relève matinale des staffs, les cabinets de ville entre 10h et 13h, et les officines de proximité entre 14h et 17h. Résultat attendu : passage immédiat de 4 à 8 visites qualitatives par jour sans stress d'embouteillage.",
        keyTakeaways: "Le premier gaspillage du délégué médical est le kilométrage anarchique. La rigueur géographique est la mère de la rentabilité."
      },
      {
        id: "m18-quiz",
        title: "18.8 Mini-Quiz d'évaluation : Module 18",
        isQuiz: true,
        quizModuleId: 18
      }
    ]
  },

  {
    id: 19,
    tier: "AVANCE",
    badge: "Module 19",
    title: "Module 19 : Communication scientifique avancée & Gestion des KOL",
    objective: "Maîtriser la relation d'égal à égal avec les Key Opinion Leaders (KOL), l'animation de staffs hospitaliers et la participation aux congrès médicaux.",
    sections: [
      {
        id: "m19-s1",
        title: "19.1 Identification, Cartographie et Partenariat avec les KOL",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 47 : KOL (Key Opinion Leader / Leader d'Opinion Médical)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Médecin, universitaire ou chercheur hospitalier doté d'une autorité scientifique reconnue par ses pairs, siégeant dans les comités de consensus, publiant dans des revues internationales et influençant profondément les pratiques prescriptives régionales et nationales.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le professeur écouté et respecté par tous les autres médecins du pays : quand il valide un traitement, ses confrères l'adoptent avec confiance.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le président de la Société Ivoirienne de Cardiologie (SICARD) intervenant lors d'un symposium national.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 48 : Staff Hospitalier & Réunion de Concertation Pluridisciplinaire (RCP)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Réunion clinique matinale périodique rassemblant l'ensemble de l'équipe médicale d'un service hospitalier (chefs de clinique, assistants, internes) pour discuter des dossiers thérapeutiques complexes et des actualités scientifiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La grand-messe du matin à l'hôpital : tous les docteurs du service sont réunis pour analyser les cas difficiles.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Animer un exposé scientifique de 15 minutes sur les résistances bactériennes devant 20 médecins lors du staff de réanimation du CHU de Treichville.</div>
          </div>
        `
      },
      {
        id: "m19-case",
        title: "19.7 Cas pratique : Présentation devant un staff hospitalier critique",
        isCase: true,
        caseId: "c19",
        caseContext: "Lors d'une présentation de staff au service de néphrologie, un maître-assistant conteste la méthodologie d'une étude en affirmant : 'Votre critère composite mélange des événements trop hétérogènes.'",
        caseProblem: "Comment le délégué médical répond-il avec élégance et précision scientifique ?",
        expertAnswer: "Garder son calme et valoriser la remarque : 'C'est une excellente observation méthodologique, Docteur. Les investigateurs de l'essai ont justement publié une analyse en sous-groupes examinant chaque composante du critère de façon indépendante. Vous constaterez sur cette courbe que la réduction du doublement de la créatininémie et de la mise en dialyse reste hautement significative avec un p < 0.001, ce qui confirme que le bénéfice néphroprotecteur n'est pas dilué par les critères secondaires.'",
        keyTakeaways: "La compétence scientifique solide désamorce instantanément la contestation professorale."
      },
      {
        id: "m19-quiz",
        title: "19.8 Mini-Quiz d'évaluation : Module 19",
        isQuiz: true,
        quizModuleId: 19
      }
    ]
  },

  {
    id: 20,
    tier: "AVANCE",
    badge: "Module 20",
    title: "Module 20 : Pathologies complexes : Drépanocytose, Cancers & Insuffisance Cardiaque",
    objective: "Approfondir les pathologies majeures du continent africain : drépanocytose, insuffisance cardiaque à fraction d'éjection réduite et oncologie moderne.",
    sections: [
      {
        id: "m20-s1",
        title: "20.1 Drépanocytose et Thérapies Ciblées en Afrique",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 49 : Drépanocytose (Anémie Falciforme)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Hémoglobinopathie génétique autosomique récessive caractérisée par une mutation ponctuelle du gène de la bêta-globine (HbS), entraînant la polymérisation de l'hémoglobine en milieu désoxygéné, la falciformation des hématies, des crises vaso-occlusives douloureuses et une anémie hémolytique chronique sévère.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La maladie génétique des globules rouges en forme de faucille qui se bloquent dans les petits vaisseaux et provoquent des crises de douleur atroces.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'utilisation de l'hydroxycarbamide (hydroxyurée) pour stimuler la synthèse d'hémoglobine fœtale (HbF) et réduire de moitié les crises vaso-occlusives chez l'enfant drépanocytaire en Côte d'Ivoire.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 50 : Inhibiteurs de Points de Contrôle Immunitaire (Anti-PD-1 / Anti-PD-L1)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Anticorps monoclonaux thérapeutiques en oncologie bloquant la voie inhibitrice PD-1/PD-L1 détournée par les cellules cancéreuses pour échapper à la immunosurveillance, restaurant ainsi la capacité cytotoxique des lymphocytes T contre la tumeur.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le médicament qui retire le masque d'invisibilité des cellules cancéreuses pour que le système immunitaire du patient puisse les détruire lui-même.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Traitement du mélanome métastatique ou du cancer du poumon non à petites cellules par le Pembrolizumab.</div>
          </div>
        `
      },
      {
        id: "m20-case",
        title: "20.7 Cas pratique : Prise en charge d'un patient drépanocytaire en crise",
        isCase: true,
        caseId: "c20",
        caseContext: "Un jeune drépanocytaire SS de 19 ans se présente aux urgences du CHU de Yopougon en état de crise hyperalgique osseuse avec fièvre à 38.5°C.",
        caseProblem: "Quels sont les piliers thérapeutiques indispensables que le délégué médical doit connaître pour son échange avec les urgentistes ?",
        expertAnswer: "1. Hyperhydratation intraveineuse urgente (soluté hypotonique ou glucosé) pour diminuer l'hyperviscosité sanguine. 2. Antalgie majeure de palier 3 par titration intraveineuse de morphine selon échelle visuelle analogique (EVA). 3. Oxygénothérapie si la saturation en O2 est inférieure à 95% pour freiner la falciformation. 4. Bilan infectieux d'urgence avec hémocultures et antibiothérapie probabiliste couvrant les germes encapsulés (Pneumocoque, Salmonelle) en raison de l'asplénie fonctionnelle.",
        keyTakeaways: "La parfaite maîtrise des urgences hématologiques locales confère au délégué une légitimité médicale indiscutable."
      },
      {
        id: "m20-quiz",
        title: "20.8 Mini-Quiz d'évaluation : Module 20",
        isQuiz: true,
        quizModuleId: 20
      }
    ]
  },

  {
    id: 21,
    tier: "AVANCE",
    badge: "Module 21",
    title: "Module 21 : Pharmaco-économie, QALY et évaluation médico-économique",
    objective: "Comprendre les études médico-économiques, les années de vie ajustées par la qualité (QALY), le coût par événement évité et l'inscription sur les listes de remboursement.",
    sections: [
      {
        id: "m21-s1",
        title: "21.1 Les 4 Types d'Études Médico-Économiques et le Concept de QALY",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 51 : QALY (Quality-Adjusted Life Year / Année de Vie Pondérée par la Qualité)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Unité composite de mesure du résultat en santé combinant à la fois le gain d'espérance de vie quantitative et la qualité de vie ressentie par le patient sur une échelle de 0 (décès) à 1 (santé parfaite).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Pas seulement vivre plus vieux, mais vivre ces années supplémentaires en bonne santé et autonome. 1 QALY = une année complète de vie en pleine forme.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Une thérapie qui permet à un patient souffrant d'insuffisance rénale terminale de vivre 5 ans supplémentaires avec une qualité de vie de 0.8 apporte 4 QALYs.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 52 : Ratio Coût-Efficacité Différentiel (RCED / ICER)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Rapport mathématique entre la différence de coût global de deux stratégies thérapeutiques et la différence d'efficacité clinique mesurée (ex. coût par QALY gagné ou coût par décès évité) : (Coût A - Coût B) / (Efficacité A - Efficacité B).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Combien d'argent supplémentaire l'assurance maladie doit dépenser pour gagner une année de vie en bonne santé avec le nouveau médicament par rapport à l'ancien.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Démontrer à la CNAM qu'un investissement de 50 000 FCFA par an dans une bithérapie fixe évite un AVC dont la prise en charge d'urgence coûte 3 000 000 FCFA.</div>
          </div>
        `
      },
      {
        id: "m21-case",
        title: "21.7 Cas pratique : Défendre le coût d'un AOD face à un directeur d'établissement",
        isCase: true,
        caseId: "c21",
        caseContext: "Le directeur financier d'une clinique privée refuse de référencer un Anticoagulant Oral Direct (AOD) au motif que la boîte coûte 10 fois plus cher que le vieux Sintrom (AVK).",
        caseProblem: "Comment le délégué médical démontre-t-il l'économie réelle globale pour l'établissement ?",
        expertAnswer: "Le délégué présente une analyse pharmaco-économique globale : 'Monsieur le Directeur, le coût du Sintrom semble faible à l'achat, mais si vous ajoutez le coût des prises de sang mensuelles d'INR au laboratoire, le temps infirmier et médical d'ajustement des doses, et surtout le risque multiplié par deux d'hémorragie cérébrale iatrogène nécessitant des semaines de soins intensifs en réanimation, l'AOD s'avère hautement coût-efficace. Il permet un séjour d'hospitalisation plus court et élimine les réadmissions pour surdosage.'",
        keyTakeaways: "Le coût réel d'un médicament n'est jamais le prix de sa boîte, mais le coût de la prise en charge globale de la maladie."
      },
      {
        id: "m21-quiz",
        title: "21.8 Mini-Quiz d'évaluation : Module 21",
        isQuiz: true,
        quizModuleId: 21
      }
    ]
  },

  {
    id: 22,
    tier: "AVANCE",
    badge: "Module 22",
    title: "Module 22 : Éthique, intégrité professionnelle & Situations complexes",
    objective: "Savoir refuser avec élégance et fermeté les sollicitations illicites, protéger les données sensibles et incarner la tolérance zéro anti-corruption.",
    sections: [
      {
        id: "m22-s1",
        title: "22.1 Les Fondations de l'Intégrité Professionnelle Yonah",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 53 : Dispositif Anti-Cadeaux et Conformité (Compliance)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Ensemble des lois nationales et réglementations internationales de gouvernance d'entreprise interdisant formellement l'octroi d'avantages financiers, en nature, cadeaux ou voyages touristiques aux professionnels de santé dans le but d'influencer directement ou indirectement la prescription ou la dispensation de médicaments.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La règle de tolérance zéro : la science et la santé du malade ne s'achètent pas et ne se négocient pas avec des cadeaux ou des billets de banque.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Refuser de financer le voyage de vacances privé d'un prescripteur tout en proposant la prise en charge transparente d'une inscription officielle à un congrès médical accrédité.</div>
          </div>
        `
      },
      {
        id: "m22-case",
        title: "22.7 Cas pratique : Refuser une demande d'enveloppe financière par un praticien",
        isCase: true,
        caseId: "c22",
        caseContext: "Un médecin hospitalier influent vous convoque dans son bureau et déclare sans détour : 'Si votre laboratoire veut que je prescrive 200 boîtes de votre antibiotique ce mois-ci, il me faut une commission de 15% en liquide sous enveloppe pour mes œuvres sociales.'",
        caseProblem: "Comment le délégué diplômé de Yonah réagit-il avec sang-froid, fermeté et diplomatie ?",
        expertAnswer: "Le délégué garde un calme olympien et répond avec courtoisie : 'Docteur, je vous remercie pour votre franchise. Cependant, en tant que diplômé de l'Institut d'Excellence Yonah et représentant d'un laboratoire certifié, notre charte éthique et la loi ivoirienne de santé publique nous interdisent formellement toute transaction financière liée à la prescription médicale. Notre relation avec vous repose exclusivement sur la valeur clinique de nos molécules et leur bénéfice pour vos malades. Si les données de guérison de nos antibiotiques vous convainquent pour sauver vos patients hospitalisés, nous serons très honorés de votre confiance scientifique. Si vous souhaitez mener une étude clinique observationnelle déclarée ou participer à un symposium académique, nous pourrons soumettre ce projet scientifique au comité de conformité de notre direction médicale.'",
        keyTakeaways: "Le délégué médical intègre ne négocie jamais sa réputation : un refus courageux et digne force le respect définitif des praticiens."
      },
      {
        id: "m22-quiz",
        title: "22.8 Mini-Quiz d'évaluation : Module 22",
        isQuiz: true,
        quizModuleId: 22
      }
    ]
  },

  {
    id: 23,
    tier: "AVANCE",
    badge: "Module 23",
    title: "Module 23 : Outils numériques, CRM et pilotage par les données",
    objective: "Maîtriser les logiciels CRM de référence (Veeva CRM, Salesforce Health Cloud), l'analyse des KPI d'activité et la veille de terrain.",
    sections: [
      {
        id: "m23-s1",
        title: "23.1 CRM Pharmaceutique et Indicateurs de Performance (KPI)",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 54 : CRM Pharmaceutique (ex. Veeva CRM)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Plateforme progicielle intégrée de gestion de la relation client spécialisée dans l'industrie des sciences de la vie, permettant le profilage des prescripteurs, le suivi des fréquences de visite, la traçabilité des matériels remis, la saisie des feedbacks qualitatifs et la synchronisation réglementaire en temps réel.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le carnet de bord numérique intelligent : il garde la mémoire de chaque médecin rencontré, de ses préférences et de ses questions pour personnaliser chaque nouvelle visite.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Enregistrer immédiatement après la visite que le Dr Koné a posé une question pointue sur l'interaction avec le kétoconazole, afin de lui apporter la réponse clinique dès le prochain passage.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 55 : Taux de Couverture et Fréquence de Visite</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> KPI fondamentaux d'efficacité commerciale : le taux de couverture mesure le pourcentage de médecins de la cible ayant été visités au moins une fois sur la période, tandis que la fréquence mesure le nombre moyen de contacts utiles délivrés par prescripteur ciblé.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Avoir vu tout le monde (couverture) et avoir revu les personnes les plus importantes assez souvent pour qu'elles s'en souviennent (fréquence).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Atteindre 95% de couverture sur la cible A avec une fréquence moyenne de 1.5 visite par mois.</div>
          </div>
        `
      },
      {
        id: "m23-case",
        title: "23.8 Cas pratique : Diagnostic d'une sous-performance sur tableau de bord CRM",
        isCase: true,
        caseId: "c23",
        caseContext: "Le rapport mensuel CRM montre que le délégué a effectué 120 visites (chiffre excellent), mais que les ventes de son antibiotique phare baissent de 15% sur son secteur.",
        caseProblem: "Où se situe l'anomalie cachée dans les données CRM ?",
        expertAnswer: "L'analyse fine des données révèle : 1. 70% des visites ont été réalisées auprès de médecins généralistes Cible C ou hors cible (faible potentiel de prescription pour cette molécule hospitalière de réserve). 2. La durée moyenne d'entretien saisie est inférieure à 90 secondes (visite éclair dans le couloir sans engagement clinique réel). 3. Les cibles A prioritaires (les chefs de service de pneumologie et pédiatrie des CHU) n'ont été visitées qu'une seule fois en 3 mois. Plan correctif : Réaligner immédiatement les priorités sur 30 cibles A hospitalières avec des créneaux de visite qualitatifs préparés.",
        keyTakeaways: "Le volume d'activité brut ne sert à rien s'il n'est pas dirigé avec précision chirurgicale sur les cibles à fort impact."
      },
      {
        id: "m23-quiz",
        title: "23.9 Mini-Quiz d'évaluation : Module 23",
        isQuiz: true,
        quizModuleId: 23
      }
    ]
  },

  {
    id: 24,
    tier: "AVANCE",
    badge: "Module 24",
    title: "Module 24 : Veille scientifique, structure IMRAD et esprit critique",
    objective: "Savoir lire et décrypter un article médical international (structure IMRAD, PubMed, revues Cochrane), identifier les biais et animer une veille active.",
    sections: [
      {
        id: "m24-s1",
        title: "24.1 Structure IMRAD et Hiérarchie des Niveaux de Preuve",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 56 : Structure IMRAD d'une Publication Médicale</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Format normatif international de rédaction d'un article biomédical comprenant 4 sections séquentielles : Introduction (état de l'art et hypothèse), Méthodes (population, randomisation, critères de jugement), Résultats (données chiffrées, tables de survie, p-value), et Discussion (confrontation avec la littérature, limites et perspectives).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le plan universel d'un article de recherche scientifique : Pourquoi on cherche, comment on teste, ce qu'on a trouvé, et ce que ça change pour les malades.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Décortiquer un article du New England Journal of Medicine (NEJM) pour retrouver la p-value et l'intervalle de confiance à 95% d'un critère clinique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 57 : Méta-Analyse et Revue Systématique (Cochrane)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Démarche méthodologique quantitative regroupant et combinant statistiquement les résultats de l'ensemble des essais cliniques randomisés disponibles sur une même question thérapeutique, constituant le plus haut niveau de preuve scientifique (Niveau 1a).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le bilan suprême : au lieu de faire confiance à une seule étude de 200 patients, on met en commun 15 études internationales réunissant 20 000 patients pour obtenir la vérité définitive.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La méta-analyse Cochrane démontrant la supériorité absolue des combinaisons à base d'artémisinine (CTA) sur les monothérapies dans le paludisme.</div>
          </div>
        `
      },
      {
        id: "m24-case",
        title: "24.7 Cas pratique : Déceler un biais de confusion dans une publication concurrente",
        isCase: true,
        caseId: "c24",
        caseContext: "Un concurrent diffuse une brochure affirmant que sa molécule réduit de 40% la mortalité par rapport à la vôtre, sur la base d'une étude observationnelle rétrospective non randomisée menée sur 100 patients.",
        caseProblem: "Comment le délégué Yonah analyse-t-il cette allégation avec ses médecins ?",
        expertAnswer: "Le délégué examine la section 'Méthodes' de l'article : 1. L'étude n'est pas un essai contrôlé randomisé en double aveugle mais une cohorte rétrospective sans ajustement statistique sur les comorbidités. 2. Les patients du bras concurrent étaient en moyenne 15 ans plus jeunes et sans antécédents cardiaques (biais de sélection flagrant). 3. L'intervalle de confiance est très large et croise 1, ce qui traduit une absence de significativité statistique robuste. Le délégué explique avec pédagogie au médecin la différence entre une simple corrélation observationnelle biaisée et une véritable démonstration de causalité issue d'un essai de phase III randomisé.",
        keyTakeaways: "La lecture critique des publications scientifiques protège le médecin contre les manipulations marketing abusives."
      },
      {
        id: "m24-quiz",
        title: "24.8 Mini-Quiz d'évaluation : Module 24",
        isQuiz: true,
        quizModuleId: 24
      }
    ]
  },

  {
    id: 25,
    tier: "EXPERT",
    badge: "Module 25",
    title: "Module 25 : Leadership, gestion de carrière & Passerelles d'évolution",
    objective: "Bâtir son réseau professionnel d'influence, cultiver son personal branding d'excellence et réussir sa transition vers les postes de KAM, Chef des ventes ou MSL.",
    sections: [
      {
        id: "m25-s1",
        title: "25.1 Les Échelons d'Évolution de Carrière dans l'Industrie",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 58 : Key Account Manager (KAM / Responsable Grands Comptes)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Cadre stratégique assurant la gestion globale, la négociation institutionnelle et le référencement des spécialités du laboratoire auprès des grands comptes décisionnaires (directions de CHU, groupements d'officines, ministères de la santé, centrales d'achat publiques comme la NPSP-CI).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le négociateur à haut niveau : il ne fait pas de visite cabinet par cabinet, il négocie des accords cadres pour faire entrer le médicament dans tous les hôpitaux du pays.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Défendre le dossier d'un traitement oncologique innovant auprès de la commission du médicament d'un grand pôle hospitalier.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 59 : MSL (Medical Science Liaison / Conseiller Scientifique Régional)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Expert scientifique de haut niveau (généralement docteur en pharmacie, médecine ou sciences) rattaché à la direction des affaires médicales, assurant des échanges scientifiques non promotionnels avec les leaders d'opinion (KOL) et soutenant la recherche clinique sans aucun objectif commercial chiffré.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'ambassadeur de la science pure : il ne vend rien, il discute d'égal à égal avec les plus grands professeurs de médecine sur les découvertes de demain.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Présenter les données préliminaires d'une thérapie génique aux chefs de service d'hématologie d'Afrique de l'Ouest.</div>
          </div>
        `
      },
      {
        id: "m25-case",
        title: "25.6 Cas pratique : Réussir son premier entretien d'embauche de KAM",
        isCase: true,
        caseId: "c25",
        caseContext: "Diplômé de Yonah avec 4 ans d'expérience terrain exceptionnelle, vous postulez au poste de Key Account Manager Afrique de l'Ouest d'un laboratoire pharmaceutique mondial.",
        caseProblem: "Que devez-vous présenter devant le Directeur Général pour faire la différence face aux autres candidats ?",
        expertAnswer: "Ne pas se présenter comme un simple super-vendeur mais comme un partenaire stratégique et analytique. Présenter : 1. Une cartographie claire de l'écosystème hospitalier ivoirien et régional (circuits décisionnels des comités de référencement, pharmaciens chefs, directeurs généraux de CHU). 2. Une maîtrise démontrée des dossiers d'appels d'offres de la NPSP-CI et des budgets hospitaliers. 3. Une approche partenariale médico-économique fondée sur des programmes de formation médicale continue (FMC) et l'amélioration du parcours de soins du patient. 4. La culture d'intégrité indiscutable acquise à l'Institut Yonah.",
        keyTakeaways: "Le passage au statut de cadre dirigeant exige l'abandon du discours produit au profit d'une vision stratégique globale du système de santé."
      },
      {
        id: "m25-quiz",
        title: "25.7 Mini-Quiz d'évaluation : Module 25",
        isQuiz: true,
        quizModuleId: 25
      }
    ]
  },

  {
    id: 26,
    tier: "EXPERT",
    badge: "Module 26",
    title: "Module 26 : Formation et mentorat : transmettre son savoir avec excellence",
    objective: "Maîtriser les principes d'andragogie (pédagogie des adultes), le coaching terrain en double visite et la transmission des standards de déontologie.",
    sections: [
      {
        id: "m26-s1",
        title: "26.1 Principes d'Andragogie et Coaching en Double Visite",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 60 : Andragogie (Pédagogie des Adultes)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Théorie et pratique de l'éducation des adultes théorisée par Malcolm Knowles, fondée sur l'autonomie de l'apprenant, la valorisation de son capital d'expérience vécue, l'orientation vers la résolution de cas concrets immédiats et la motivation intrinsèque.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'art de former des adultes : pas de cours magistral ennuyeux comme à l'école primaire, mais des cas réels, du partage d'expérience et des exercices pratiques.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Former une équipe de jeunes délégués par des jeux de rôle filmés et débriefés avec bienveillance.</div>
          </div>
        `
      },
      {
        id: "m26-case",
        title: "26.6 Cas pratique : Accompagner un jeune délégué tétanisé avant une visite",
        isCase: true,
        caseId: "c26",
        caseContext: "En tant que délégué senior et tuteur, vous accompagnez un jeune délégué qui a les mains tremblantes dans la salle d'attente d'un chef de clinique réputé pour sa sévérité.",
        caseProblem: "Comment le mentor rétablit-il la confiance de son jeune confrère en 3 minutes ?",
        expertAnswer: "1. Exercice de cohérence cardiaque : faire ralentir le rythme respiratoire (inspiration 4s, expiration 6s). 2. Récadrage cognitif : lui rappeler qu'il est porteur d'une information scientifique officielle utile pour les patients de ce médecin, pas un intrus qui mendie une faveur. 3. Sécurisation : convenir qu'il mènera les 2 premières minutes (cadrage et sondage) et qu'en cas de blocage technique sur une question complexe imprévue, le tuteur interviendra naturellement en relais avec bienveillance. 4. Après la visite, procéder à un débriefing constructif en commençant toujours par 2 points forts réussis avant d'aborder un axe d'amélioration.",
        keyTakeaways: "Le rôle du mentor d'excellence n'est pas de briller à la place du junior, mais de révéler son potentiel en le sécurisant."
      },
      {
        id: "m26-quiz",
        title: "26.7 Mini-Quiz d'évaluation : Module 26",
        isQuiz: true,
        quizModuleId: 26
      }
    ]
  },

  {
    id: 27,
    tier: "EXPERT",
    badge: "Module 27",
    title: "Module 27 : Gestion de crise pharmaceutique & Situations d'urgence",
    objective: "Savoir piloter un rappel de lot urgent, réagir face à un défaut de qualité critique, des ruptures d'approvisionnement ou une crise médiatique.",
    sections: [
      {
        id: "m27-s1",
        title: "27.1 Procédure de Rappel de Lot et Communication de Crise",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 61 : Rappel de Lot Urgent (Classes I, II, III)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Procédure réglementaire déclenchée d'urgence par le fabricant ou l'autorité de santé pour retirer du circuit de distribution un lot spécifique présentant un risque pour la santé publique : Classe I (risque létal ou préjudice grave immédiat : contamination microbienne d'un soluté stérile), Classe II (risque temporaire ou réversible), Classe III (défaut de qualité sans risque direct pour le patient : erreur mineure d'étiquetage).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'ordre d'évacuation immédiat d'une série de boîtes défectueuses pour qu'aucun patient ne soit mis en danger.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Bloquer en moins de 4 heures tous les flacons d'un anesthésique injectable suspecté de contamination chez les grossistes répartiteurs et cliniques d'Abidjan.</div>
          </div>
        `
      },
      {
        id: "m27-case",
        title: "27.6 Cas pratique : Piloter un rappel de lot de classe I sur votre secteur",
        isCase: true,
        caseId: "c27",
        caseContext: "À 8h du matin, un message d'urgence du directeur des affaires pharmaceutiques signale un rappel mondial de classe I sur un lot d'héparine injectable suite à un risque de contamination bactérienne.",
        caseProblem: "Quel est le plan de déploiement de crise du délégué sur son secteur ?",
        expertAnswer: "1. Suspendre immédiatement toutes les visites promotionnelles habituelles. 2. Contacter en priorité absolue les pharmaciens hospitaliers et chefs de service de réanimation et chirurgie de son secteur pour leur faire sécuriser et isoler physiquement toutes les boîtes portant le numéro de lot concerné sous scellé 'Quarantaine - Rappel de lot'. 3. Fournir la note officielle de l'AIRP et proposer immédiatement la molécule de substitution agréée pour ne pas interrompre les soins vitaux des patients opérés. 4. Établir un compte-rendu quotidien précis du nombre de boîtes sécurisées transmises à la direction de la pharmacovigilance.",
        keyTakeaways: "En période de crise sanitaire, la loyauté envers la santé publique et le sang-froid opérationnel forgent la réputation d'acier d'un professionnel."
      },
      {
        id: "m27-quiz",
        title: "27.7 Mini-Quiz d'évaluation : Module 27",
        isQuiz: true,
        quizModuleId: 27
      }
    ]
  },

  {
    id: 28,
    tier: "EXPERT",
    badge: "Module 28",
    title: "Module 28 : Stratégie commerciale, mix-marketing et plan de lancement",
    objective: "Comprendre le business model de l'industrie pharmaceutique, la structure d'un compte de résultat de produit et la gestion d'un lancement à M-12, M0 et M+6.",
    sections: [
      {
        id: "m28-s1",
        title: "28.1 Le Cycle de Lancement d'une Spécialité Pharmaceutique",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 62 : Plan de Lancement Pharmaceutique (M-12 à M+6)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Stratégie pluridisciplinaire coordonnée préparant l'entrée sur le marché d'une nouvelle molécule : Phase pré-lancement (M-12 à M0 : études épidémiologiques, symposia de sensibilisation à la pathologie, identification des KOL, sécurisation des stocks importés) -> Lancement opérationnel (M0 : formation certifiante de la force de vente, campagne de visite Cible A) -> Phase de consolidation (M+1 à M+6 : suivi des taux d'essai et de ré-achat, retours de pharmacovigilance).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le plan de vol d'un avion : on prépare la piste un an à l'avance, on décolle avec puissance le jour J et on ajuste la trajectoire en plein vol.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Lancement réussi d'une nouvelle thérapie ciblée contre l'asthme sévère dans les cliniques pneumologiques de Côte d'Ivoire.</div>
          </div>
        `
      },
      {
        id: "m28-case",
        title: "28.7 Cas pratique : Élaborer le plan de lancement d'un antipaludique pédiatrique",
        isCase: true,
        caseId: "c28",
        caseContext: "Le laboratoire vous confie la coordination terrain du lancement d'une nouvelle forme pédiatrique dispersible d'un CTA antipaludique sur la zone Côte d'Ivoire.",
        caseProblem: "Quels sont les 3 leviers prioritaires à synchroniser pour garantir le succès sanitaire et commercial ?",
        expertAnswer: "1. Le levier logistique : s'assurer 3 semaines avant le lancement officiel que les grossistes (COPHARMED, LABOREX, DPCI, TEDIS) ont réceptionné les stocks tampon et que les officines des grands carrefours sont livrées. 2. Le levier KOL / Société savante : organiser un atelier scientifique de consensus avec l'Association des Pédiatres de Côte d'Ivoire sur l'observance du traitement chez le nourrisson. 3. Le levier formation terrain : outiller les délégués médicaux avec des simulateurs d'inhalation et des réglettes de calcul posologique au kilogramme de poids pour les infirmiers et médecins de PMI.",
        keyTakeaways: "Un lancement pharmaceutique d'élite combine rigueur logistique absolue, caution scientifique académique et outillage pratique du soignant."
      },
      {
        id: "m28-quiz",
        title: "28.8 Mini-Quiz d'évaluation : Module 28",
        isQuiz: true,
        quizModuleId: 28
      }
    ]
  },

  {
    id: 29,
    tier: "EXPERT",
    badge: "Module 29",
    title: "Module 29 : Écosystème régional Afrique de l'Ouest & Côte d'Ivoire",
    objective: "Maîtriser les spécificités de l'AIRP, le fonctionnement des pôles hospitaliers universitaires (Cocody, Treichville, Yopougon, Bouaké), la CNAM/CMU et le réseau des grossistes et officines.",
    sections: [
      {
        id: "m29-s1",
        title: "29.1 L'AIRP, la CMU et l'Architecture Sanitaire Ivoirienne",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 63 : AIRP (Autorité Ivoirienne de Régulation Pharmaceutique)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Établissement public national autonome chargé de la régulation du secteur pharmaceutique en Côte d'Ivoire, compétent pour l'homologation des médicaments (octroi, renouvellement et suspension d'AMM), l'inspection des établissements pharmaceutiques, le contrôle qualité au Laboratoire National de Santé Publique (LNSP) et la pharmacovigilance.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le gendarme officiel du médicament en Côte d'Ivoire : aucun produit ne peut entrer ou être vendu sans son autorisation écrite.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le dépôt d'un dossier de visa au format CTD auprès de la direction de l'enregistrement de l'AIRP à Abidjan.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 64 : NPSP-CI (Nouvelle Pharmacie de la Santé Publique)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Centrale d'achat pharmaceutique publique de Côte d'Ivoire assurant l'acquisition par appels d'offres internationaux, le stockage et la distribution des médicaments essentiels, intrants stratégiques (paludisme, tuberculose, VIH) et vaccins vers l'ensemble des établissements sanitaires publics du pays.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le grand réservoir de médicaments de l'État : il achète en gros pour ravitailler tous les hôpitaux publics et dispensaires nationaux.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'approvisionnement régulier en artésunate injectable de tous les CHU et hôpitaux généraux ivoiriens.</div>
          </div>
        `
      },
      {
        id: "m29-case",
        title: "29.6 Cas pratique : Organisation d'une tournée de 5 jours à l'intérieur du pays (Bouaké / Yamoussoukro)",
        isCase: true,
        caseId: "c29",
        caseContext: "Vous devez piloter une tournée stratégique de 5 jours hors d'Abidjan pour visiter 25 médecins spécialistes et 15 officines de référence à Yamoussoukro et Bouaké.",
        caseProblem: "Comment planifier cette mission pour rentabiliser chaque heure et chaque kilomètre ?",
        expertAnswer: "1. Préparation (J-7) : Confirmer les rendez-vous clés avec les chefs de service du CHU de Bouaké et de l'Hôpital Militaire. Contacter les agences locales des grossistes répartiteurs pour vérifier la disponibilité en stock des molécules cibles. 2. Logistique : Planifier le départ le lundi à l'aube sur l'autoroute du Nord pour arriver à Yamoussoukro à 8h30 (visites CHR et cliniques jusqu'à 14h, officines de garde l'après-midi). 3. Mardi/Mercredi : Bouaké (CHU le matin lors des staffs de pédiatrie et cardiologie, entretiens privés l'après-midi). 4. Jeudi : Débriefing avec les officines et pharmaciens hospitaliers pour enregistrer les commandes de réassort. 5. Vendredi : Route de retour avec arrêts programmés à Tiassalé et Dabou. 6. Soir : Saisie intégrale du reporting CRM.",
        keyTakeaways: "Les tournées à l'intérieur du pays forgent la réputation de résilience et d'autonomie des délégués d'élite."
      },
      {
        id: "m29-quiz",
        title: "29.7 Mini-Quiz d'évaluation : Module 29",
        isQuiz: true,
        quizModuleId: 29
      }
    ]
  },

  {
    id: 30,
    tier: "EXPERT",
    badge: "Module 30",
    title: "Module 30 : Évaluation finale & Certification d'Excellence Yonah",
    objective: "Passer l'Examen Certifiant National (40 questions, 60 minutes) sous protocole de surveillance anti-triche renforcé et obtenir son certificat officiel infalsifiable.",
    sections: [
      {
        id: "m30-integrity",
        title: "30.1 Protocole de Surveillance Anti-Triche & Contrat d'Excellence",
        isExamContract: true,
        html: `
          <div class="box-callout box-key">
            <div class="box-header">Protocole officiel de surveillance anti-triche — Institut d'Excellence YONAH</div>
            <p>Cet examen final valide l'obtention du <strong>Certificat de Reconnaissance Interne délivré par l'Institut d'Excellence YONAH</strong>, initiative fondée par <strong>Guede Camus SALOMON</strong>. Pour garantir sa valeur indiscutable et sanctionner une réelle maîtrise opérationnelle, l'épreuve est soumise aux règles d'intégrité suivantes :</p>
          </div>

          <div class="def-card" style="border-left-color: var(--yonah-navy); margin: 1rem 0;">
            <div class="def-card-title">📌 Statut officiel du Certificat YONAH</div>
            <div class="def-row">
              Ce certificat est un <strong>certificat de reconnaissance interne</strong> délivré par l'Institut d'Excellence YONAH. Il atteste que l'apprenant a suivi avec assiduité l'intégralité du cursus (30 modules fondamentaux et tracks de spécialisation) et validé l'examen final à plus de 80%. Il ne s'agit pas d'un diplôme d'État ni d'une accréditation ministérielle externe. Sa valeur repose sur la qualité scientifique validée en interne, l'exigence de son évaluation et la réputation d'excellence de ses diplômés.
            </div>
          </div>

          <ol style="margin-left:1.5rem; line-height:1.8; margin-bottom:1.5rem;">
            <li><strong>Mode plein écran recommandé :</strong> Restez concentré sur l'épreuve.</li>
            <li><strong>Détection de sortie d'onglet (3 avertissements) :</strong> Tout changement d'écran ou perte de focus de fenêtre est horodaté et comptabilisé. À la 3e violation, la session d'examen est <strong>automatiquement invalidée</strong>.</li>
            <li><strong>Verrouillage du presse-papier :</strong> Les fonctions de copier, coller, couper et raccourcis de développement sont désactivées.</li>
            <li><strong>Chronomètre strict de 60 minutes :</strong> 40 questions aléatoires couvrant l'ensemble des modules. Décompte en direct avec auto-soumission.</li>
            <li><strong>Seuil de réussite d'excellence :</strong> Minimum de <strong>80% (32/40)</strong> exigé pour l'admission.</li>
            <li><strong>Identifiant cryptographique SHA-256 :</strong> Format officiel <code>YONAH-DM-2025-XXXXXX</code> avec QR code vectoriel vérifiable localement.</li>
          </ol>
          <div id="contractActionBox" style="margin-top:2rem;"></div>
        `
      },
      {
        id: "m30-exam",
        title: "30.2 Examen Certifiant Final (40 questions chronométrées)",
        isFinalExamSession: true,
        html: `<div id="examSessionMount"></div>`
      },
      {
        id: "m30-cert",
        title: "30.3 Mon Certificat Officiel Yonah (Vérifiable)",
        isCertificateView: true,
        html: `<div id="certificateViewMount"></div>`
      }
    ]
  }
];
