// Étage 2 : Les 8 Tracks de Spécialisation — Institut d'Excellence Yonah
// Modules spécialisés avec fiches bilingues (🔬 Définition experte + 💡 En langage simple + 🎯 Exemple concret)

module.exports = [
  // ==========================================
  // TRACK 1 : VACCINS & IMMUNOLOGIE (V1 À V4)
  // ==========================================
  {
    id: 101,
    tier: "TRACKS",
    badge: "Track 1",
    title: "Track 1 : Vaccins & Immunologie appliquée (V1 à V4)",
    objective: "Maîtriser les bases de l'immunologie vaccinale, la chaîne de froid tropicale (+2°C/+8°C), le PEV élargi de l'OMS et le dialogue contre l'hésitation vaccinale.",
    sections: [
      {
        id: "t1-s1",
        title: "V1. Immunologie Fondamentale & Mécanismes d'Action Vaccinaux",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 65 : Immunité Humorale vs Cellulaire</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> L'immunité humorale repose sur la production d'immunoglobulines spécifiques (anticorps neutralisants) par les plasmocytes issus des lymphocytes B, ciblant les agents pathogènes extracellulaires. L'immunité cellulaire dépend des lymphocytes T cytotoxiques (CD8+) et T auxiliaires (CD4+), détruisant directement les cellules infectées par des virus ou des bactéries intracellulaires.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'immunité humorale tire des flèches à distance (les anticorps) pour intercepter l'ennemi dans le sang ; l'immunité cellulaire combat au corps-à-corps pour éliminer les cellules déjà envahies.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le vaccin contre le tétanos génère des anticorps neutralisants anti-toxine tétanique (immunité humorale durable).</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 66 : Adjuvants Immunologiques (ex. Sels d'Aluminium)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Substances formulées avec l'antigène vaccinal pour amplifier la réponse immunitaire innée locale par recrutement des cellules dendritiques présentatrices d'antigènes, permettant de réduire la dose d'antigène et d'induire une mémoire lymphocytaire prolongée.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le haut-parleur du vaccin : il réveille brutalement les sentinelles du système immunitaire pour qu'elles remarquent bien l'antigène et fabriquent une défense solide.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'hydroxyde d'aluminium utilisé depuis plus de 70 ans dans les vaccins pédiatriques combinés (DTC-HepB-Hib).</div>
          </div>
        `
      },
      {
        id: "t1-s2",
        title: "V2. Chaîne de Froid Tropicale & Logistique du Dernier Kilomètre",
        html: `
          <div class="box-callout box-warning">
            <div class="box-header">Règle d'or de la chaîne du froid : +2°C à +8°C</div>
            <p>Dans les climats tropicaux d'Afrique de l'Ouest où la température extérieure dépasse souvent 35°C avec 85% d'humidité, la conservation des vaccins thermosensibles exige une surveillance sans faille. <strong>Le gel est aussi destructeur que la chaleur</strong> pour les vaccins adsorbés sur aluminium.</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 67 : PVM (Pastille de Contrôle du Vaccin / VVM)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Étiquette thermosensible brevetée par l'OMS apposée sur le flacon de vaccin, dont la pastille centrale change progressivement de couleur sous l'effet cumulé du temps et de la température : dès que le carré central devient aussi sombre ou plus sombre que le cercle extérieur, le vaccin a perdu son titre protecteur et doit être détruit.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le voyant d'alerte sur le flacon : si le petit carré blanc devient gris foncé ou noir, le vaccin a eu chaud et ne doit jamais être injecté.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'inspection systématique de la VVM avant d'administrer une dose de vaccin fièvre jaune dans un dispensaire rural de Boundiali.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 68 : Test d'Ébranlement (Shake Test)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Protocole validé par l'OMS pour vérifier si un vaccin adsorbé sur sel d'aluminium a subi une congélation accidentelle : après agitation vigoureuse d'un flacon suspect et d'un témoin non congelé, la sédimentation rapide d'un précipité granuleux dense confirme la rupture de structure colloïdale et l'inactivation du vaccin.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le test de secouage : si le liquide devient trouble comme du lait caillé et retombe au fond trop vite, le vaccin a gelé dans le frigo et est bon pour la poubelle.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Vérification d'un lot de vaccin pentavalent après une panne de thermostat du réfrigérateur solaire au dispensaire.</div>
          </div>
        `
      },
      {
        id: "t1-s3",
        title: "V3. Le PEV Élargi et les Nouveaux Vaccins Antipaludiques (RTS,S & R21)",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 69 : Vaccin Antipaludique Pédiatrique (R21 / Matrix-M & RTS,S)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Vaccin sous-unitaire recombinant ciblant la protéine circumsporozoïtaire (CSP) de Plasmodium falciparum couplée à l'antigène de surface de l'hépatite B, induisant des anticorps neutralisant les sporozoïtes dès leur injection par l'anophèle avant l'invasion des hépatocytes.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le vaccin révolutionnaire contre le paludisme de l'enfant : il bloque le parasite dès la piqûre de moustique avant qu'il ne puisse atteindre le foie.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'introduction officielle du vaccin antipaludique dans le programme national de vaccination de routine pour les enfants de moins de 2 ans en Côte d'Ivoire.</div>
          </div>
        `
      },
      {
        id: "t1-case",
        title: "V.Cas. Cas pratique : Rétablir la confiance face aux rumeurs antivaccins",
        isCase: true,
        caseId: "ct1",
        caseContext: "Dans un quartier populaire, une fausse information circule sur WhatsApp affirmant que le vaccin contre le papillomavirus humain (HPV) rend les jeunes filles stériles. Des mères de famille refusent massivement la campagne scolaire.",
        caseProblem: "Comment le délégué spécialisé en vaccins outille-t-il les sages-femmes et médecins scolaires pour répondre avec impact ?",
        expertAnswer: "1. Écoute empathique : Ne pas infantiliser ni mépriser la peur des mères de famille. 2. Preuve clinique irréfutable : Rappeler que le vaccin HPV protège contre le cancer du col de l'utérus, premier cancer féminin mortel en Côte d'Ivoire. 3. Démonstration de sécurité : Fournir les données de plus de 15 ans de recul mondial sur des centaines de millions de doses sans aucun impact sur la fertilité, qui au contraire protège l'appareil reproducteur des lésions précancéreuses destructrices. 4. Mobilisation communautaire : S'appuyer sur les femmes leaders d'associations de mères et les sages-femmes respectées du quartier pour porter le message en langues locales.",
        keyTakeaways: "La communication vaccinale repose sur la clarté scientifique, l'écoute sans jugement et le relais de leaders communautaires de confiance."
      },
      {
        id: "t1-quiz",
        title: "V.Quiz. Mini-Quiz d'évaluation : Track Vaccins",
        isQuiz: true,
        quizModuleId: 101
      }
    ]
  },

  // ==========================================
  // TRACK 2 : DISPOSITIFS MÉDICAUX & DIAGNOSTIC (D1 À D4)
  // ==========================================
  {
    id: 102,
    tier: "TRACKS",
    badge: "Track 2",
    title: "Track 2 : Dispositifs médicaux & Diagnostic rapide (D1 à D4)",
    objective: "Maîtriser la classification réglementaire des DM (Classes I à III), les Tests de Diagnostic Rapide (TDR), le matériel de perfusion sécurisé et la matériovigilance.",
    sections: [
      {
        id: "t2-s1",
        title: "D1. Classification Réglementaire des Dispositifs Médicaux",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 70 : Dispositif Médical (DM)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Tout instrument, appareil, équipement, matière ou article utilisé seul ou en association chez l'être humain à des fins de diagnostic, prévention, contrôle ou traitement d'une pathologie, dont l'action principale voulue n'est pas obtenue par des moyens pharmacologiques, immunologiques ou métaboliques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Tout objet technique de santé qui soigne ou diagnostique par son action physique ou mécanique (thermomètre, seringue, pansement, stent, scanner) et non par une molécule chimique.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un cathéter intraveineux périphérique ou un lecteur glycémique avec ses bandelettes réactives.</div>
          </div>

          <table class="table-science">
            <thead>
              <tr><th>Classe de DM</th><th>Niveau de risque</th><th>Exemples courants</th><th>Contrôle réglementaire</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Classe I</strong></td><td>Risque faible</td><td>Compresses stériles, gants d'examen, lits d'hôpitaux, béquilles.</td><td>Auto-certification fabricant CE / Déclaration AIRP.</td></tr>
              <tr><td><strong>Classe IIa</strong></td><td>Risque modéré</td><td>Aiguilles d'injection, tubulures de perfusion, TDR urinaires.</td><td>Organisme notifié / Dossier technique d'homologation.</td></tr>
              <tr><td><strong>Classe IIb</strong></td><td>Risque élevé</td><td>Pousse-seringues électriques, préservatifs, machines de dialyse.</td><td>Examen CE de type et audit de production rigoureux.</td></tr>
              <tr><td><strong>Classe III</strong></td><td>Risque très élevé / Vital</td><td>Stents coronariens, valves cardiaques, prothèses de hanche.</td><td>Évaluation clinique approfondie et autorisation préalable.</td></tr>
            </tbody>
          </table>
        `
      },
      {
        id: "t2-s2",
        title: "D2. Tests de Diagnostic Rapide (TDR) & Diagnostic Point-of-Care",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 71 : TDR Paludisme (Immunochromatographie Ag Pf/Pan)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Dispositif de diagnostic in vitro sur membrane de nitrocellulose détectant par migration capillaire les antigènes parasitaires spécifiques circulants dans une goutte de sang capillaire : la protéine HRP-2 spécifique de Plasmodium falciparum et la pLDH commune aux autres espèces (Pan), avec lecture visuelle colorimétrique en 15 minutes.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le test minute sur le doigt : une goutte de sang, 3 gouttes de liquide révélateur, et en 15 minutes on sait avec certitude si le patient a le paludisme sans avoir besoin de microscope électrique.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La réalisation systématique d'un TDR devant toute fièvre en consultation de dispensaire avant de prescrire un antipaludique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 72 : Sensibilité (Se) vs Spécificité (Sp) d'un Test</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> La sensibilité mesure la capacité du test à être positif chez les sujets réellement malades (minimise les faux négatifs). La spécificité mesure la capacité du test à être négatif chez les sujets sains indemnes de la maladie (minimise les faux positifs).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La sensibilité ne rate aucun malade ; la spécificité n'accuse aucun innocent.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un TDR du paludisme homologué par l'OMS doit avoir une sensibilité ≥ 95% pour des densités parasitaires ≥ 100 parasites/μL.</div>
          </div>
        `
      },
      {
        id: "t2-case",
        title: "D.Cas. Cas pratique : Remplacement d'aiguilles simples par des dispositifs de sécurité",
        isCase: true,
        caseId: "ct2",
        caseContext: "Dans une grande polyclinique, deux infirmières ont été victimes d'Accidents d'Exposition au Sang (AES) lors du recapuchonnage d'aiguilles après prélèvement sur des patients potentiellement séropositifs.",
        caseProblem: "Comment le délégué spécialisé en DM démontre-t-il la valeur vitale de ses cathéters sécurisés autobloquants auprès de la surveillante générale et du médecin du travail ?",
        expertAnswer: "1. Rappel épidémiologique : le recapuchonnage des aiguilles est la première cause d'AES en milieu hospitalier. 2. Démonstration technique : présenter le mécanisme de sécurité passif où l'aiguille se rétracte automatiquement et de façon irréversible dans le corps de la seringue dès l'injection terminée, avec un clic audible de verrouillage. 3. Argument pharmaco-économique : le surcoût de quelques centimes par seringue est dérisoire comparé aux coûts d'un protocole d'urgence prophylactique anti-VIH (trithérapie de 28 jours), des arrêts de travail et de l'angoisse du personnel soignant.",
        keyTakeaways: "La sécurité des soignants est un impératif éthique et financier majeur pour les établissements de santé."
      },
      {
        id: "t2-quiz",
        title: "D.Quiz. Mini-Quiz d'évaluation : Track Dispositifs Médicaux",
        isQuiz: true,
        quizModuleId: 102
      }
    ]
  },

  // ==========================================
  // TRACK 3 : OTC, PARAPHARMACIE & DERMOCOSMÉTIQUE (O1 À O4)
  // ==========================================
  {
    id: 103,
    tier: "TRACKS",
    badge: "Track 3",
    title: "Track 3 : OTC, Parapharmacie & Dermocosmétique tropicale (O1 à O4)",
    objective: "Maîtriser le conseil officinal, la dermocosmétique des peaux noires et métissées, la lutte contre la dépigmentation artificielle et la micronutrition.",
    sections: [
      {
        id: "t3-s1",
        title: "O1. Médicaments OTC et Conseil au Comptoir Officinal",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 73 : Médicament OTC (Over-The-Counter / Automédication)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Spécialité pharmaceutique exonérée de la réglementation des substances vénéneuses pouvant être délivrée directement par le pharmacien d'officine sans ordonnance médicale obligatoire, pour le traitement de symptômes bénins et auto-limités d'évolution courte.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le médicament en vente libre au comptoir : pour soigner un petit mal de tête, une digestion difficile ou un rhume passager sans avoir besoin d'ordonnance.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Les antalgiques légers (paracétamol), pansements gastriques ou pastilles pour la gorge.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 74 : Drapeaux Rouges (Red Flags) en Officine</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Signes cliniques d'alerte ou symptômes de gravité identifiés lors de l'interrogatoire au comptoir qui excluent formellement l'automédication et imposent une réorientation médicale immédiate (ex. altération de l'état général, fièvre persistante > 48h, rectorragies, céphalée brutale 'en coup de tonnerre').</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les signaux d'alarme : les indices qui disent au pharmacien 'stop à l'automédication, ce patient doit voir un médecin sans attendre'.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un nourrisson fébrile avec refus de boire et léthargie qui doit être adressé d'urgence à la pédiatrie du CHU.</div>
          </div>
        `
      },
      {
        id: "t3-s2",
        title: "O2. Dermocosmétique des Peaux Noires & Dangers de la Dépigmentation Artificielle",
        html: `
          <div class="box-callout box-warning">
            <div class="box-header">Fléau de santé publique : La dépigmentation artificielle volontaire</div>
            <p>L'utilisation détournée de dermocorticoïdes très puissants (Clobétasol) et d'hydroquinone à fortes doses pour s'éclaircir la peau entraîne des ravages dermatologiques et systémiques majeurs : <strong>atrophie cutanée irréversible, vergetures géantes, ochronose, diabète cortico-induit et insuffisance surrénalienne aiguë</strong>.</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 75 : Phototype Cutané selon Fitzpatrick (Phototypes V & VI)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Classification dermatologique de la réponse de la peau au rayonnement ultraviolet : les phototypes V (peaux mates/métissées) et VI (peaux noires très pigmentées) possèdent une forte teneur en eumélanine photoprotectrice, mais sont hautement prédisposées aux dyschromies réactionnelles (hyperpigmentation post-inflammatoire) et aux chéloïdes.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La peau noire est naturellement protégée contre les coups de soleil par sa mélanine, mais la moindre bouton ou blessure laisse une tache sombre tenace.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Proposer un écran solaire invisible spécifique sans traces blanches et un soin anti-taches formulé pour peau mélanoderme.</div>
          </div>
        `
      },
      {
        id: "t3-case",
        title: "O.Cas. Cas pratique : Prise en charge d'une demande de corticoïde dépigmentant en officine",
        isCase: true,
        caseId: "ct3",
        caseContext: "Une jeune femme entre dans une pharmacie d'Abidjan et demande 3 tubes de crème de Clobétasol (dermocorticoïde d'activité très forte) sans ordonnance, en affirmant que c'est pour illuminer son teint avant son mariage.",
        caseProblem: "Que doit faire l'équipe officinale formée par le délégué médical spécialisé ?",
        expertAnswer: "1. Refus ferme et catégorique de délivrance : Le Clobétasol est une substance vénéneuse soumise à prescription stricte pour des dermatoses inflammatoires graves (psoriasis sévère). 2. Dialogue bienveillant d'éducation sanitaire : Expliquer avec des photos cliniques les dangers irréversibles de la cortisone sur la peau du visage (peau qui s'amincit comme du papier à cigarette, infections fongiques foudroyantes, pilosité anormale, acné cortisonique). 3. Conseil dermocosmétique d'alternative saine : Orienter la patiente vers une gamme dermocosmétique certifiée et sans danger pour peau noire (nettoyant doux, sérum à la vitamine C et niacinamide pour l'éclat du teint, émollient hydratant et protection solaire).",
        keyTakeaways: "Le conseil dermocosmétique en officine est une véritable mission de santé publique pour préserver la santé et la beauté naturelle de la peau."
      },
      {
        id: "t3-quiz",
        title: "O.Quiz. Mini-Quiz d'évaluation : Track OTC & Dermocosmétique",
        isQuiz: true,
        quizModuleId: 103
      }
    ]
  },

  // ==========================================
  // TRACK 4 : AFFAIRES MÉDICALES & MSL (M1 À M5)
  // ==========================================
  {
    id: 104,
    tier: "TRACKS",
    badge: "Track 4",
    title: "Track 4 : Affaires médicales, Recherche clinique & MSL (M1 à M5)",
    objective: "Comprendre le métier de Medical Science Liaison (MSL), la conformité non-promotionnelle, les Bonnes Pratiques Cliniques (BPC/GCP) et les études en vie réelle (RWE).",
    sections: [
      {
        id: "t4-s1",
        title: "M1. Le Rôle du Medical Science Liaison (MSL) et Déontologie Non-Promotionnelle",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 76 : Échange Scientifique Non-Promotionnel (Scientific Exchange)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Dialogue médical bilatéral objectif et transparent mené par un scientifique (MSL) en réponse à une demande non sollicitée d'un professionnel de santé, pouvant porter sur des données scientifiques en amont de l'AMM ou des mécanismes hors promotion commerciale sans aucune incitation à la prescription.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La discussion purement scientifique entre pairs : pas de plaquette de vente, pas de négociation commerciale, juste la science médicale et les publications de recherche.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Discuter avec un oncologue universitaire des résultats préliminaires d'un essai de phase II sur un nouvel anticorps conjugué.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 77 : Real-World Evidence (RWE / Données de Vie Réelle)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Preuves cliniques relatives à l'utilisation, aux bénéfices et aux risques d'une spécialité pharmaceutique dérivées de l'analyse de données de santé réelles (dossiers médicaux informatisés, registres hospitaliers de patients, bases de données d'assurance maladie), complétant les essais randomisés rigides.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Ce qui se passe quand le médicament est utilisé par des milliers de vrais malades dans la vraie vie, avec leurs autres maladies et leurs oublis quotidiens.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'analyse d'un registre de 5 000 patients hypertendus suivis dans les hôpitaux publics ivoiriens évaluant l'adhésion au traitement sur 2 ans.</div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // TRACK 5 : SANTÉ PUBLIQUE & ÉPIDÉMIES (S1 À S4)
  // ==========================================
  {
    id: 105,
    tier: "TRACKS",
    badge: "Track 5",
    title: "Track 5 : Santé publique, Épidémies & Urgence humanitaire (S1 à S4)",
    objective: "Comprendre les dynamiques épidémiques (paludisme, tuberculose, choléra, fièvres hémorragiques), le rôle du Fonds Mondial et des ONG et la logistique d'urgence.",
    sections: [
      {
        id: "t5-s1",
        title: "S1. Épidémiologie des Grandes Endémies et Bailleurs Internationaux",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 78 : Fonds Mondial (GFATM) & Programmes Nationaux de Santé</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Partenariat financier international mobilisant des milliards de dollars pour financer les programmes nationaux de lutte contre le Sida, la Tuberculose et le Paludisme, assurant la gratuité des traitements de première intention (ARV, antituberculeux, CTA et moustiquaires imprégnées) dans les pays éligibles.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le grand trésor financier mondial qui permet de soigner gratuitement les malades du sida, du palu et de la tuberculose dans nos dispensaires.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'approvisionnement gratuit en kits d'artésunate injectable pour les cas de neuropaludisme de l'enfant dans les hôpitaux publics de Côte d'Ivoire.</div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // TRACK 6 : POPULATIONS SPÉCIALES & RISQUES (P1 À P4)
  // ==========================================
  {
    id: 106,
    tier: "TRACKS",
    badge: "Track 6",
    title: "Track 6 : Populations spéciales & Situations à risque (P1 à P4)",
    objective: "Maîtriser les adaptations posologiques chez l'enfant, le sujet âgé polypathologique, la femme enceinte ou allaitante et les insuffisants rénaux et hépatiques.",
    sections: [
      {
        id: "t6-s1",
        title: "P1. Pédiatrie, Gériatrie, Grossesse & Allaitement",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 79 : Médicaments Tératogènes & Référence CRAT</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Substances capables d'induire des malformations anatomiques ou des anomalies fonctionnelles majeures chez l'embryon ou le fœtus lors de l'exposition in utero, particulièrement au 1er trimestre de grossesse (période d'embryogenèse). Le Centre de Référence sur les Agents Tératogènes (CRAT) constitue la référence scientifique internationale en langue française.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les médicaments dangereux qui peuvent déformer ou blesser le bébé dans le ventre de sa maman.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Les rétinoïdes oraux (isotrétinoïne contre l'acné) et le valproate de sodium formellement contre-indiqués chez la femme enceinte.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 80 : Clairance de la Créatinine (Formule de Cockcroft-Gault / CKD-EPI)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Estimation de la fonction rénale indispensable pour adapter la posologie des médicaments à élimination rénale prédominante afin d'éviter les surdosages toxiques chez les personnes âgées : Clairance = [(140 - âge) x Poids (kg) x k] / Créatininémie (μmol/L), avec k = 1.23 chez l'homme et 1.04 chez la femme.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La formule mathématique qui calcule l'état d'usure des reins pour ajuster les doses de médicaments sans intoxiquer le patient âgé.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Réduire de 50% la dose d'un antibiotique aminoside chez un patient de 78 ans dont la clairance est de 30 mL/min.</div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // TRACK 7 : COMPÉTENCES TRANSVERSALES (T1 À T4)
  // ==========================================
  {
    id: 107,
    tier: "TRACKS",
    badge: "Track 7",
    title: "Track 7 : Compétences transversales & Outils avancés (T1 à T4)",
    objective: "Maîtriser l'anglais médical pour multinationales, la négociation raisonnée de Harvard, l'analyse des données de ventes (IQVIA) et l'intelligence émotionnelle.",
    sections: [
      {
        id: "t7-s1",
        title: "T1. Anglais Médical & Négociation Raisonnée",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 81 : Medical Terminology & Clinical Trial Lexicon</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Lexique international standardisé en langue anglaise utilisé dans les abstracts des congrès biomédicaux (Primary Endpoint, Overall Survival, Progression-Free Survival, Hazard Ratio, Confidence Interval, Adverse Drug Reaction).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le vocabulaire anglais indispensable pour lire les découvertes médicales mondiales et dialoguer avec les directeurs internationaux des multinationales.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Présenter lors d'un kick-off régional un Hazard Ratio (HR = 0.75) montrant une baisse de 25% du risque de récidive.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 82 : Négociation Raisonnée (Méthode de Harvard / BATNA)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Stratégie de négociation collaborative développée par Fisher et Ury visant un accord 'gagnant-gagnant' durable, fondée sur la séparation des personnes et du problème, la focalisation sur les intérêts mutuels plutôt que sur les positions fermées, et la préparation d'une solution de rechange solide (BATNA / MESORE).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Négocier sans faire la guerre : trouver une solution où chacun gagne quelque chose sans que personne ne perde la face.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Négocier avec une clinique un partenariat de formation soignante plutôt qu'une baisse de prix agressive.</div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // TRACK 8 : MARCHÉS PUBLICS & ACCÈS AU MARCHÉ (A1 À A5)
  // ==========================================
  {
    id: 108,
    tier: "TRACKS",
    badge: "Track 8",
    title: "Track 8 : Marchés publics, Appels d'offres & Accès au marché (A1 à A5)",
    objective: "Maîtriser les circuits de la NPSP-CI, la réponse aux appels d'offres hospitaliers, le dossier technique CTD de l'AIRP et le panier de remboursement CMU.",
    sections: [
      {
        id: "t8-s1",
        title: "A1. Mécanismes des Marchés Publics Pharmaceutiques et NPSP-CI",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 83 : Appel d'Offres International (AOI) Pharmaceutique</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Procédure publique et concurrentielle lancée par l'État ou une centrale d'achats nationale (NPSP-CI) pour l'acquisition de médicaments essentiels par lots, soumise aux codes des marchés publics et examinée par une commission pluridisciplinaire (dossier administratif, conformité technique BPF/AMM, et offre financière compétitive).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le grand concours public officiel : les laboratoires déposent leurs dossiers sous pli fermé pour fournir les médicaments des hôpitaux publics au meilleur rapport qualité-prix.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'attribution du marché national de fourniture des perfusions de solutés glucosés et salés pour 2 ans en Côte d'Ivoire.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 84 : Dossier Technique d'Enregistrement au Format CTD (Common Technical Document)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Structure internationale harmonisée en 5 modules imposée par l'ICH et l'AIRP pour le dépôt des demandes d'AMM : Module 1 (Renseignements administratifs et légaux), Module 2 (Résumés et synthèses d'experts), Module 3 (Qualité physico-chimique et pharmaceutique / CMC), Module 4 (Rapports d'études non cliniques/toxicologiques), Module 5 (Rapports d'études cliniques d'efficacité et de sécurité).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le classeur officiel universel en 5 parties qui prouve scientifiquement la qualité, la pureté, la sécurité et l'efficacité d'un médicament avant qu'il ne soit autorisé.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La fourniture des données de stabilité en zone climatique IVb (30°C et 75% d'humidité relative) exigée par l'AIRP pour valider une durée de conservation de 3 ans en Afrique.</div>
          </div>
        `
      },
      {
        id: "t8-case",
        title: "A.Cas. Cas pratique : Montage d'un dossier d'appel d'offres hospitalier",
        isCase: true,
        caseId: "ct8",
        caseContext: "Le CHU de Cocody publie un appel d'offres restreint pour l'approvisionnement en anesthésiques locaux et solutés de réanimation pour un montant de 150 millions de FCFA.",
        caseProblem: "Quels sont les points de contrôle critiques à vérifier avant le dépôt sous scellé pour éviter l'élimination d'office ?",
        expertAnswer: "1. Conformité administrative éliminatoire : Vérifier la validité des attestations fiscales et sociales à jour, ainsi que la caution bancaire de soumission établie par une banque agréée. 2. Conformité technique : Joindre les copies certifiées des AMM délivrées par l'AIRP, les certificats BPF récents de l'usine de fabrication, les fiches techniques avec engagement sur une date de péremption restante ≥ 80% à la livraison. 3. Offre financière : Chiffrage rigoureux hors taxes et toutes taxes comprises en FCFA, avec engagement ferme de maintien des prix pendant 12 mois et planning de livraisons échelonnées sécurisées.",
        keyTakeaways: "Dans les marchés publics, la moindre omission de formalité administrative élimine le meilleur dossier technique. La rigueur documentaire est absolue."
      },
      {
        id: "t8-quiz",
        title: "A.Quiz. Mini-Quiz d'évaluation : Track Marchés Publics",
        isQuiz: true,
        quizModuleId: 108
      }
    ]
  }
];
