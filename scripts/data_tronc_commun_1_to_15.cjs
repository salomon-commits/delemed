// Modules 1 à 15 du Tronc Commun — Institut d'Excellence Yonah
// Intégration exhaustive des fiches bilingues (🔬 Définition experte + 💡 En langage simple + 🎯 Exemple concret)

module.exports = [
  {
    id: 1,
    tier: "DEBUTANT",
    badge: "Module 1",
    title: "Module 1 : Le métier de délégué médical : découverte et vocation",
    objective: "Comprendre le statut de délégué médical, ses 3 missions piliers (information, bon usage, pharmacovigilance), son périmètre déontologique et une journée type sur le terrain ouest-africain.",
    sections: [
      {
        id: "m1-s1",
        title: "1.1 Qu'est-ce qu'un délégué médical ? Définition, rôle et statut",
        html: `
          <div class="box-callout box-key">
            <div class="box-header">Statut et mission institutionnelle</div>
            <p>Le <strong>délégué médical</strong> (ou représentant médical) est un <em>professionnel assermenté de l'information promotionnelle et scientifique</em>. Il constitue le trait d'union scientifique incontournable entre les équipes de recherche & développement des laboratoires pharmaceutiques et les praticiens de terrain (médecins, pharmaciens, chirurgiens-dentistes, sages-femmes).</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 1 : Délégué Médical (Représentant Médical)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Professionnel de santé ou scientifique diplômé mandaté par un laboratoire pour assurer la promotion éthique et la diffusion d'informations médicales objectives sur des spécialités pharmaceutiques, conformément à l'Autorisation de Mise sur le Marché (AMM) et aux Bonnes Pratiques de Promotion Médicale.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> C'est le messager de confiance du médicament : il explique aux médecins à quoi sert le produit, chez quel patient le donner, comment l'utiliser en sécurité et à quel moment l'éviter.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> À Abidjan, un délégué visite un cardiologue au CHU de Treichville pour lui présenter les données cliniques de tolérance d'une nouvelle bithérapie antihypertensive chez le patient âgé.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 2 : Bon Usage du Médicament (BUM)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Utilisation rationnelle du médicament conforme aux données de la science, au Résumé des Caractéristiques du Produit (RCP) et aux recommandations de santé publique, visant à maximiser le bénéfice thérapeutique tout en minimisant les risques iatrogènes.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Donner le bon médicament, à la bonne personne, à la bonne dose, par la bonne voie et pour la bonne durée.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Rappeler qu'un antibiotique pour une sinusite aiguë doit être suivi durant 7 jours stricts sans interruption prématurée dès la disparition de la fièvre.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 3 : Pharmacovigilance Active</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Ensemble des procédures de surveillance continue, d'évaluation, de compréhension et de prévention du risque d'effets indésirables ou de tout autre problème lié à l'utilisation des médicaments après leur mise sur le marché.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le rôle de vigie sanitaire : si un médecin signale un effet inattendu ou grave chez un patient, le délégué le transmet immédiatement au laboratoire pour protéger les autres malades.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Une remontée de cas de rash cutané sévère après ingestion d'un antipaludique transmise sous 24 heures au responsable de pharmacovigilance en Côte d'Ivoire.</div>
          </div>
        `
      },
      {
        id: "m1-s2",
        title: "1.2 Déontologie, cadre légal et ce que le délégué ne fait jamais",
        html: `
          <p>Le délégué médical d'excellence de l'Institut Yonah est un modèle d'intégrité. Il est tenu au strict respect de la déontologie pharmaceutique internationale et des textes de l'<strong>AIRP</strong> (Autorité Ivoirienne de Régulation Pharmaceutique).</p>
          
          <div class="box-callout box-warning">
            <div class="box-header">Les interdits absolus de la profession</div>
            <ul style="margin-left: 1.25rem; line-height: 1.7;">
              <li><strong>Jamais de vente directe de boîtes :</strong> Le délégué ne vend rien au patient et n'encaisse aucun argent. Le circuit de dispensation appartient exclusivement aux officines et pharmacies hospitalières.</li>
              <li><strong>Jamais de marchandage de prescription :</strong> Interdiction totale de proposer des espèces, enveloppes, cadeaux de valeur ou avantages matériels en échange d'un quota d'ordonnances.</li>
              <li><strong>Jamais de promotion hors-AMM (Off-label) :</strong> Il est pénalement interdit de promouvoir des indications thérapeutiques non validées par les autorités sanitaires.</li>
              <li><strong>Jamais de dénigrement des confrères et concurrents :</strong> Le débat se fait uniquement sur la base de données cliniques publiées et vérifiables (Evidence-Based Medicine).</li>
            </ul>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 4 : Promotion Hors-AMM (Off-Label)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Allégation ou incitation commerciale relative à des indications, posologies, populations cibles ou voies d'administration non mentionnées dans l'AMM légale délivrée par l'autorité réglementaire.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Vendre une voiture en affirmant qu'elle peut naviguer comme un bateau : c'est vanter un usage que les scientifiques et l'État n'ont jamais validé.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Promouvoir un antidiabétique injectable injectable chez une adolescente non diabétique uniquement dans un but de perte de poids esthétique sans AMM obésité.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 5 : Secret Médical Partagé</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Obligation légale et morale de confidentialité interdisant à toute personne en contact avec l'environnement médical de consulter, divulguer ou exploiter des données d'identification ou des diagnostics de patients.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Ce qui est vu ou entendu dans un cabinet médical (dossiers sur le bureau, confidences) reste un secret absolu et inviolable.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Détourner immédiatement le regard et ne jamais lire les fiches patients étalées sur la table du médecin lors d'un entretien.</div>
          </div>
        `
      },
      {
        id: "m1-case",
        title: "1.8 Cas pratique : Première journée d'un délégué médical sur son secteur",
        isCase: true,
        caseId: "c1",
        caseContext: "M. Kouamé, jeune lauréat Yonah, commence son activité de délégué à Cocody et Plateau. Il dispose de sa sacoche, de fiches produits validées et d'une liste de 10 médecins sans rendez-vous. Il constate qu'à la clinique Sainte-Anne, la salle d'attente est bondée de 15 patients en détresse.",
        caseProblem: "Que doit faire Kouamé pour établir un contact professionnel durable sans compromettre l'éthique ni bloquer le travail de consultation du médecin ?",
        expertAnswer: "1) Se présenter à la secrétaire médicale avec courtoisie et déférence, en précisant qu'il est délégué médical Yonah pour le laboratoire X. 2) Expliquer qu'il ne souhaite en aucun cas retarder la prise en charge des patients souffrants et demander quel créneau est le plus opportun (fin de consultation de midi ou 17h30). 3) Laisser une carte de visite professionnelle et un mot manuscrit respectueux pour le praticien. 4) Exploiter le créneau libre pour visiter 2 officines de proximité afin de vérifier la disponibilité en stock des molécules du laboratoire.",
        keyTakeaways: "Le respect absolu du temps de consultation et la bienveillance envers l'équipe d'accueil sont les piliers indétrônables de la réputation d'un délégué."
      },
      {
        id: "m1-quiz",
        title: "1.9 Mini-Quiz d'évaluation : Module 1",
        isQuiz: true,
        quizModuleId: 1
      }
    ]
  },

  {
    id: 2,
    tier: "DEBUTANT",
    badge: "Module 2",
    title: "Module 2 : Le système de santé et le circuit du médicament",
    objective: "Maîtriser les circuits de fabrication, importation, distribution en gros et dispensation au détail, ainsi que les modèles de financement de la santé.",
    sections: [
      {
        id: "m2-s1",
        title: "2.1 Les grands systèmes de santé et la couverture maladie",
        html: `
          <p>Un système de santé regroupe l'ensemble des organisations, institutions et ressources consacrées à l'amélioration, au rétablissement et au maintien de la santé des populations.</p>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 6 : Couverture Maladie Universelle (CMU)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Dispositif national de protection sociale garantissant à l'ensemble de la population d'un pays l'accès à un panier de soins de santé essentiels et à des médicaments de qualité sans subir de ruine financière.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Une assurance collective où chacun cotise selon ses moyens pour que tout citoyen puisse se soigner et acheter ses ordonnances à coût réduit.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> En Côte d'Ivoire, la CNAM gère la CMU qui prend en charge 70% du tarif de référence des médicaments traceurs conventionnés.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 7 : Grossiste-Répartiteur Pharmaceutique</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Entreprise commerciale pharmaceutique agréée assurant l'achat, le stockage sécurisé sous température contrôlée et la distribution logistique quotidienne d'un assortiment complet de médicaments auprès des officines et établissements de santé.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le grand magasin central qui approvisionne chaque jour les pharmacies de quartier pour qu'aucun médicament ne manque.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Les acteurs majeurs du marché ivoirien : COPHARMED, LABOREX-CI, DPCI et TEDIS PHARMA.</div>
          </div>
        `
      },
      {
        id: "m2-s2",
        title: "2.2 Du laboratoire à l'officine : La chaîne logistique et Bonnes Pratiques",
        html: `
          <div class="box-callout box-key">
            <div class="box-header">La chaîne de distribution du médicament</div>
            <p>1. <strong>Fabricant certifié BPF</strong> (Bonnes Pratiques de Fabrication) -> 2. <strong>Laboratoire / Agence d'importation</strong> -> 3. <strong>Dépôt central sous douane</strong> -> 4. <strong>Grossiste répartiteur</strong> -> 5. <strong>Pharmacie d'officine / PUI hospitalière</strong> -> 6. <strong>Patient</strong>.</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 8 : Bonnes Pratiques de Distribution (BPD)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Référentiel normatif international imposant des standards rigoureux de traçabilité, de propreté et de maintien de la chaîne du froid lors du transport et de l'entreposage des spécialités pharmaceutiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les règles obligatoires pour s'assurer que le médicament ne prend pas un coup de chaud ou d'humidité dans le camion de livraison.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Vérification des pastilles thermo-sensibles d'un carton d'insulines livré à une pharmacie de Korhogo en pleine saison sèche.</div>
          </div>
        `
      },
      {
        id: "m2-case",
        title: "2.8 Cas pratique : Alerte de rupture de stock chez un grossiste répartiteur",
        isCase: true,
        caseId: "c2",
        caseContext: "Le Dr Bamba, cardiologue influent à Yopougon, appelle furieux le délégué médical : ses trois derniers patients n'ont pas trouvé leur traitement antihypertenseur d'urgence dans les 4 pharmacies entourant sa clinique.",
        caseProblem: "Comment le délégué doit-il intervenir méthodiquement pour rétablir la situation sans accuser autrui ?",
        expertAnswer: "1) Remercier le praticien pour l'alerte et noter les 4 officines concernées. 2) Se rendre immédiatement auprès du service approvisionnement des 2 grossistes locaux (ex. LABOREX et DPCI) pour vérifier l'état du stock central (rupture réelle usine ou rupture de réassort ponctuelle). 3) Si le stock est disponible chez un répartiteur, solliciter un dépannage express d'urgence pour les 4 officines ciblées. 4) Rappeler le Dr Bamba dans les 2 heures pour lui confirmer que les boîtes sont arrivées sur les rayons des pharmacies partenaires.",
        keyTakeaways: "Le délégué ne se contente pas de faire prescrire : il sécurise l'accessibilité physique du médicament pour le patient."
      },
      {
        id: "m2-quiz",
        title: "2.9 Mini-Quiz d'évaluation : Module 2",
        isQuiz: true,
        quizModuleId: 2
      }
    ]
  },

  {
    id: 3,
    tier: "DEBUTANT",
    badge: "Module 3",
    title: "Module 3 : Le médicament : formes galéniques, origines et voies d'administration",
    objective: "Comprendre les composants d'un médicament (PA et excipients), les différentes origines de synthèse ou biotechnologie, les voies d'administration et leurs implications cliniques.",
    sections: [
      {
        id: "m3-s1",
        title: "3.1 Principe Actif, Excipients et Formes Galéniques",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 9 : Principe Actif (Substance Active)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Molécule d'origine chimique, biologique, végétale ou minérale dotée d'une activité pharmacologique spécifique responsable de l'effet thérapeutique ou préventif du médicament.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> C'est le soldat qui combat la maladie dans le comprimé (par exemple le paracétamol dans une boîte de comprimés).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'artéméther est le principe actif antiparasitaire qui détruit les formes sanguines de Plasmodium falciparum.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 10 : Excipient à Effet Notoire (EEN)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Substance auxiliaire dépourvue d'effet thérapeutique mais dont la présence peut induire une réaction indésirable ou être contre-indiquée chez des populations hypersensibles (lactose, aspartame, gluten, alcool benzylique).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les ingrédients secondaires (goût, conservation, couleur) qui peuvent parfois provoquer une allergie ou une intolérance chez certains patients.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le sirop contre la toux contenant du sorbitol ou du saccharose, déconseillé ou à surveiller chez le patient diabétique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 11 : Galénique (Formulation)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Art et science pharmaceutique de mise en forme des substances actives et adjuvants pour créer une forme d'administration assurant stabilité, précision du dosage et biodisponibilité optimale.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'emballage intelligent du principe actif : en gélule, en comprimé effervescent, en spray ou en sirop pour qu'il s'avale facilement et agisse au bon endroit.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un comprimé à libération prolongée (LP) qui diffuse son principe actif sur 24 heures pour éviter au patient hypertendu de prendre 3 prises par jour.</div>
          </div>
        `
      },
      {
        id: "m3-s2",
        title: "3.2 Comparatif des Voies d'administration",
        html: `
          <table class="table-science">
            <thead>
              <tr><th>Voie d'administration</th><th>Avantages majeurs</th><th>Inconvénients & Limites</th><th>Exemples cliniques</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Orale (Per os)</strong></td>
                <td>Non invasive, économique, autonome pour le patient.</td>
                <td>Premier passage hépatique, dégradation gastrique, début d'action différé (30-60 min).</td>
                <td>Comprimés d'antalgiques, gélules d'antibiotiques.</td>
              </tr>
              <tr>
                <td><strong>Intraveineuse (IV)</strong></td>
                <td>Biodisponibilité 100%, action foudroyante, contrôle posologique instantané.</td>
                <td>Invasive, risque infectieux/sepsis, irréversible, nécessite matériel et personnel formé.</td>
                <td>Artésunate injectable dans le paludisme grave, perfusion d'antibiotiques hospitaliers.</td>
              </tr>
              <tr>
                <td><strong>Inhalée</strong></td>
                <td>Action pulmonaire locale rapide, faible passage dans le sang (effets indésirables réduits).</td>
                <td>Nécessite une synchronisation main-poumon ou une chambre d'inhalation.</td>
                <td>Aérosols doseurs de Salbutamol dans la crise d'asthme.</td>
              </tr>
              <tr>
                <td><strong>Sublinguale</strong></td>
                <td>Absorption vasculaire ultra-rapide par le plexus veineux sous la langue, court-circuite le foie.</td>
                <td>Goût parfois désagréable, surface d'absorption limitée aux petites doses.</td>
                <td>Dérivés nitrés dans l'angine de poitrine (crise d'angor).</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "m3-case",
        title: "3.8 Cas pratique : Adaptation galénique en pédiatrie",
        isCase: true,
        caseId: "c3",
        caseContext: "Dans un centre de santé urbain, une mère tente de donner un demi-comprimé d'antibiotique écrasé dans de l'eau à son enfant de 14 mois. L'enfant s'étouffe, recrache et refuse catégoriquement la mixture amère.",
        caseProblem: "Que proposez-vous lors de votre staff médical au pédiatre ?",
        expertAnswer: "Expliquer l'intérêt de la forme suspension buvable pédiatrique en flacon avec pipette graduée en kilogrammes de poids corporel. La molécule y est enrobée pour masquer l'amertume et aromatisée. L'administration à la commissure des lèvres évite les fausses routes et garantit l'administration intégrale de la dose thérapeutique prescrite.",
        keyTakeaways: "Le choix de la bonne forme galénique conditionne directement l'observance et le succès thérapeutique chez l'enfant."
      },
      {
        id: "m3-quiz",
        title: "3.9 Mini-Quiz d'évaluation : Module 3",
        isQuiz: true,
        quizModuleId: 3
      }
    ]
  },

  {
    id: 4,
    tier: "DEBUTANT",
    badge: "Module 4",
    title: "Module 4 : Le cycle de vie du médicament : de la recherche au RCP",
    objective: "Comprendre les 4 phases des essais cliniques, les critères d'AMM, et savoir décrypter un Résumé des Caractéristiques du Produit (RCP).",
    sections: [
      {
        id: "m4-s1",
        title: "4.1 Les 4 Phases des Essais Cliniques de Développement",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 12 : Essai Contrôlé Randomisé (ECR) en Double Insu</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Étude expérimentale comparative où les patients sont attribués par tirage au sort (randomisation) soit au bras traitement expérimental soit au bras témoin (placebo ou référence), sans que ni le patient ni le médecin évaluateur ne connaissent l'attribution (double insu).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le test suprême d'objectivité : personne ne sait qui reçoit le vrai médicament pour éliminer toute influence psychologique.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'essai pivot de phase III démontrant la supériorité d'une nouvelle trithérapie antirétrovirale face au traitement standard.</div>
          </div>

          <table class="table-science">
            <thead>
              <tr><th>Phase</th><th>Population testée</th><th>Objectif principal</th><th>Taille de cohorte</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Phase I</strong></td><td>Volontaires sains (ou malades en cancérologie)</td><td>Tolérance, toxicité, pharmacocinétique initiale.</td><td>20 à 80 sujets</td></tr>
              <tr><td><strong>Phase II</strong></td><td>Patients malades ciblés</td><td>Efficacité préliminaire, détermination de la dose optimale.</td><td>100 à 300 patients</td></tr>
              <tr><td><strong>Phase III</strong></td><td>Grande cohorte de patients multicentrique</td><td>Démonstration formelle de supériorité/non-infériorité vs comparateur.</td><td>1 000 à 5 000+ patients</td></tr>
              <tr><td><strong>Phase IV</strong></td><td>Population réelle post-AMM</td><td>Surveillance à long terme en vie réelle (pharmacovigilance, RWE).</td><td>Dizaines de milliers</td></tr>
            </tbody>
          </table>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 13 : Résumé des Caractéristiques du Produit (RCP)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Document médico-légal officiel validé par l'autorité de réglementation pharmaceutique lors de l'octroi de l'AMM, décrivant de manière exhaustive et scientifiquement prouvée les indications, contre-indications, posologies et profils d'effets secondaires de la molécule.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La carte d'identité juridique et médicale officielle du médicament : tout ce que le délégué dit au médecin doit être conforme au mot près à ce document.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La rubrique 4.3 du RCP d'un AINS qui liste formellement l'ulcère gastrique évolutif et le 3e trimestre de grossesse comme contre-indications absolues.</div>
          </div>
        `
      },
      {
        id: "m4-case",
        title: "4.8 Cas pratique : Interprétation d'un RCP face à une demande hors-AMM",
        isCase: true,
        caseId: "c4",
        caseContext: "Un médecin ORL demande au délégué médical si son collyre oculaire antibiotique peut être instillé dans l'oreille pour soigner une otite externe chez un adolescent.",
        caseProblem: "Que doit répondre le délégué médical en s'appuyant sur le RCP ?",
        expertAnswer: "Le délégué consulte mentalement le RCP : la rubrique 4.1 n'indique que les affections ophtalmiques. Il répond avec respect : 'Docteur, le RCP validé de notre spécialité ne mentionne aucune indication auriculaire. De plus, les excipients et le pH de cette solution ophtalmique n'ont pas été formulés pour la sphère tympanique, notamment en cas de tympan perforé où un risque d'ototoxicité existe. Notre laboratoire ne peut donc recommander cet usage hors-AMM et préconise l'utilisation d'une goutte auriculaire spécifiquement enregistrée pour cette indication.'",
        keyTakeaways: "Le délégué ne transige jamais avec le périmètre légal du RCP : il protège le médecin de la faute médico-légale."
      },
      {
        id: "m4-quiz",
        title: "4.9 Mini-Quiz d'évaluation : Module 4",
        isQuiz: true,
        quizModuleId: 4
      }
    ]
  },

  {
    id: 5,
    tier: "DEBUTANT",
    badge: "Module 5",
    title: "Module 5 : Le corps humain : anatomie et physiologie pour le délégué",
    objective: "Acquérir les bases indispensables de physiologie cardiovasculaire, rénale, hépatique, respiratoire et du système nerveux autonome pour dialoguer d'égal à égal avec les médecins.",
    sections: [
      {
        id: "m5-s1",
        title: "5.1 Les Grands Systèmes Organiques et Cibles Thérapeutiques",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 14 : Filtration Glomérulaire (DFG)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Volume de liquide filtré par les glomérules rénaux par unité de temps (normalement ≥ 90 mL/min/1.73m²), constituant le marqueur physiologique fondamental de la fonction d'épuration rénale.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le débit de nettoyage des reins : plus ce chiffre baisse en dessous de 60, plus les reins peinent à éliminer les toxines et les médicaments.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un patient diabétique dont le DFG est tombé à 35 mL/min nécessite une baisse de posologie de la metformine pour prévenir une acidose lactique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 15 : Système Nerveux Végétatif (Autonome)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Partie du système nerveux régulant les fonctions viscérales involontaires (rythme cardiaque, bronchomotricité, sécrétions, digestion), subdivisée en système sympathique (adrénergique) et système parasympathique (cholinergique).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le pilote automatique du corps : le sympathique accélère le cœur et prépare à l'action ; le parasympathique ralentit et favorise le repos et la digestion.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Les bêtabloquants freinent le système sympathique pour soulager un cœur hypertendu ou fatigué.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 16 : Effet de Premier Passage Hépatique</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Métabolisation présystémique précoce d'une molécule par les enzymes des hépatocytes lors de son transit initial entre l'absorption intestinale et la circulation générale via la veine porte.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le péage obligatoire du foie : avant de circuler dans tout le corps, le médicament avalé passe par le foie qui en détruit parfois une grande partie.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La trinitrine orale est détruite à plus de 90% par le foie ; c'est pourquoi on la donne sous la langue pour qu'elle passe directement dans le sang.</div>
          </div>
        `
      },
      {
        id: "m5-case",
        title: "5.4 Cas pratique : Comprendre l'impact d'une cirrhose sur la posologie",
        isCase: true,
        caseId: "c5",
        caseContext: "Un médecin de médecine interne hésite à prescrire un sédatif métabolisé par le foie chez un patient ayant une cirrhose post-hépatite B avec ascite.",
        caseProblem: "Comment le délégué explique-t-il la modification pharmacocinétique induite par l'atteinte hépatique ?",
        expertAnswer: "Le délégué rappelle que chez le cirrhotique : 1) Le nombre d'hépatocytes fonctionnels est drastiquement réduit, ce qui effondre l'activité des cytochromes P450 et allonge considérablement la demi-vie d'élimination. 2) La synthèse d'albumine est effondrée, ce qui augmente la fraction libre active toxique du médicament dans le sang. 3) Il convient d'alerter sur le risque d'encéphalopathie hépatique et de suggérer une molécule à élimination rénale prédominante ou une réduction posologique drastique.",
        keyTakeaways: "Le bon délégué maîtrise la physiopathologie pour guider la prescription chez les patients fragilisés."
      },
      {
        id: "m5-quiz",
        title: "5.5 Mini-Quiz d'évaluation : Module 5",
        isQuiz: true,
        quizModuleId: 5
      }
    ]
  },

  {
    id: 6,
    tier: "DEBUTANT",
    badge: "Module 6",
    title: "Module 6 : La maladie : causes, diagnostic et classification CIM-11",
    objective: "Comprendre les processus pathologiques (infectieux, métaboliques, dégénératifs), les signes cliniques, le raisonnement diagnostique et la CIM-11 de l'OMS.",
    sections: [
      {
        id: "m6-s1",
        title: "6.1 Processus morbides et classification internationale CIM-11",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 17 : CIM-11 (Classification Internationale des Maladies)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Onzième révision du standard mondial de l'Organisation Mondiale de la Santé codifiant de manière systématique l'ensemble des pathologies, traumatismes et motifs de recours aux soins pour des fins épidémiologiques et statistiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le dictionnaire mondial officiel où chaque maladie possède un code unique compris par tous les médecins de la planète.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le codage du paludisme à Plasmodium falciparum non compliqué permettant aux ministères de la santé de suivre l'incidence épidémique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 18 : Comorbidité et Polypathologie</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Coexistence chez un même individu d'un ou plusieurs troubles ou pathologies chroniques venant s'ajouter à une pathologie initiale, modifiant le pronostic et complexifiant la prise en charge thérapeutique.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Avoir plusieurs maladies chroniques en même temps (par exemple être hypertendu ET diabétique ET avoir du cholestérol).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Un patient de 60 ans combinant diabète de type 2, HTA de grade 2 et néphropathie débutante, cas classique en consultation de cardiologie à Abidjan.</div>
          </div>
        `
      },
      {
        id: "m6-case",
        title: "6.6 Cas pratique : Analyse d'une ordonnance complexe de polypathologique",
        isCase: true,
        caseId: "c6",
        caseContext: "Une ordonnance présentée en officine comprend : Amlodipine 10mg (1x/j), Ramipril 5mg (1x/j), Metformine 1000mg (2x/j), Atorvastatine 20mg (1x/j au coucher), et Acide Acétylsalicylique 100mg (1x/j midi).",
        caseProblem: "Quel est le diagnostic physiopathologique sous-jacent complet de ce patient ?",
        expertAnswer: "Il s'agit d'un patient présentant un syndrome métabolique complet à très haut risque cardiovasculaire : diabète de type 2 (metformine), hypertension artérielle sévère nécessitant une bithérapie anticalcique + IEC (amlodipine + ramipril), dyslipidémie athérogène (atorvastatine) et prévention secondaire ou primaire renforcée des accidents thrombotiques (aspirine à faible dose).",
        keyTakeaways: "Savoir lire entre les lignes d'une ordonnance permet d'identifier immédiatement le profil clinique du patient."
      },
      {
        id: "m6-quiz",
        title: "6.7 Mini-Quiz d'évaluation : Module 6",
        isQuiz: true,
        quizModuleId: 6
      }
    ]
  },

  {
    id: 7,
    tier: "DEBUTANT",
    badge: "Module 7",
    title: "Module 7 : Pharmacologie I : Pharmacocinétique (Modèle ADME)",
    objective: "Maîtriser les 4 phases de l'ADME, la biodisponibilité, le volume de distribution, la clairance, la demi-vie T1/2 et utiliser le calculateur cinétique.",
    sections: [
      {
        id: "m7-s1",
        title: "7.1 Les 4 étapes fondamentales de la pharmacocinétique",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 19 : Pharmacocinétique (Ce que le corps fait au médicament)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Étude quantitative en fonction du temps du devenir d'un xénobiotique dans l'organisme, englobant les processus d'Absorption, Distribution, Métabolisme et Élimination (ADME).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le voyage du médicament dans notre corps : comment il entre, où il va, comment il est transformé et comment il en sort.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Mesurer à quelle heure le paracétamol atteint sa concentration maximale dans le sang après ingestion d'un sachet.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 20 : Biodisponibilité (F)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Fraction de la dose administrée de principe actif qui atteint la circulation sanguine générale sous forme inchangée, ainsi que la vitesse à laquelle ce processus s'effectue.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le pourcentage réel de médicament qui arrive vivant et intact dans le sang. Par intraveineuse, il est toujours de 100%.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Une molécule orale avec une biodisponibilité de 50% signifie que sur 100 mg avalés, seuls 50 mg atteindront la circulation générale.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 21 : Demi-vie d'élimination (T1/2)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Temps nécessaire pour que la concentration plasmatique d'un principe actif diminue de moitié lors de la phase d'élimination terminale de l'organisme.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le temps que met le corps pour nettoyer la moitié de la quantité de médicament présente dans le sang.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Une molécule avec une demi-vie de 24h permet une prise unique par jour, évitant les oublis de prises chez les hypertendus.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 22 : État d'Équilibre (Steady-State)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Situation pharmacocinétique stationnaire atteinte lors d'administrations répétées à intervalles réguliers, où la vitesse d'élimination égale la vitesse d'administration (environ 5 demi-vies).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le plateau thérapeutique : quand le niveau de médicament dans le sang reste stable et efficace nuit et jour.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Pour un antidépresseur ayant une T1/2 de 24h, il faut 5 jours complets (5 x 24h) pour que sa concentration sanguine se stabilise au niveau cible.</div>
          </div>
        `
      },
      {
        id: "m7-tool",
        title: "7.2 Simulateur Clinique de Demi-vie et d'Élimination",
        isAdmeTool: true,
        html: `
          <div class="tool-widget">
            <h4 style="color:var(--yonah-navy); margin-bottom:0.75rem; font-size:1.15rem; font-weight:800;">
              Calculateur Clinique de Demi-vie T1/2 & État d'Équilibre
            </h4>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">
              Saisissez la demi-vie d'élimination de votre molécule pour simuler instantanément le temps requis pour atteindre le plateau thérapeutique (Steady-State) et l'élimination totale (>99%).
            </p>
            <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap; margin-bottom:1rem;">
              <label style="font-weight:700; font-size:0.95rem;">Demi-vie T1/2 (en heures) :</label>
              <input type="number" id="calcT12Input" value="12" min="1" max="200" style="padding:0.5rem 0.75rem; width:100px; border-radius:var(--radius-sm); border:1px solid var(--border); font-weight:800; text-align:center;">
              <button class="btn-nav-touch primary" onclick="app.runAdmeCalc()">Calculer les paramètres</button>
            </div>
            <div id="admeCalcResult" style="background:var(--surface-subtle); padding:1rem; border-radius:var(--radius-md); border-left:4px solid var(--yonah-gold); font-size:0.92rem; line-height:1.6;">
              Cliquez sur "Calculer" pour afficher l'analyse cinétique.
            </div>
          </div>
        `
      },
      {
        id: "m7-case",
        title: "7.5 Cas pratique : Argumenter sur une T1/2 longue face à un médecin pressé",
        isCase: true,
        caseId: "c7",
        caseContext: "Le Dr Traoré, cardiologue réputé, vous accorde 90 secondes entre deux patients. Il utilise un antihypertenseur historique à prendre 2 fois par jour.",
        caseProblem: "Comment lui démontrer le gain clinique de votre molécule à demi-vie de 32 heures ?",
        expertAnswer: "Docteur, grâce à sa demi-vie de 32 heures et sa haute affinité pour les récepteurs AT1, une seule prise matinale assure une couverture constante sur 24 heures et pardonne même un décalage ou un oubli de prise de quelques heures sans pic d'hypertension de rebond. Surtout, elle protège vos patients à 6h du matin lors du pic tensionnel matinal où surviennent 70% des accidents vasculaires cérébraux.",
        keyTakeaways: "La pharmacocinétique prend tout son sens quand on la traduit en bénéfice de survie et de protection pour le patient."
      },
      {
        id: "m7-quiz",
        title: "7.6 Mini-Quiz d'évaluation : Module 7",
        isQuiz: true,
        quizModuleId: 7
      }
    ]
  },

  {
    id: 8,
    tier: "DEBUTANT",
    badge: "Module 8",
    title: "Module 8 : Pharmacologie II : Pharmacodynamie & Mécanismes d'action",
    objective: "Comprendre les récepteurs, agonistes, antagonistes, l'index thérapeutique, la tolérance et la relation dose-effet.",
    sections: [
      {
        id: "m8-s1",
        title: "8.1 Récepteurs, Agonistes, Antagonistes et Index Thérapeutique",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 23 : Pharmacodynamie (Ce que le médicament fait au corps)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Étude des effets biochimiques, cellulaires et physiologiques des médicaments et de leurs mécanismes d'action moléculaires sur des cibles biologiques spécifiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Comment le médicament agit concrètement sur nos cellules pour faire baisser la fièvre, calmer la douleur ou détruire un parasite.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'ibuprofène qui bloque les enzymes COX pour arrêter la fabrication des prostaglandines responsables de l'inflammation.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 24 : Agoniste vs Antagoniste</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Un agoniste est une molécule qui se lie à un récepteur membranaire ou intracellulaire et déclenche une réponse biologique active (clé qui tourne et ouvre la porte). Un antagoniste se fixe sur le récepteur sans l'activer, empêchant physiquement la liaison du médiateur endogène (clé engagée qui bloque la serrure).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'agoniste appuie sur l'interrupteur pour allumer la lumière ; l'antagoniste colle un morceau d'adhésif sur l'interrupteur pour empêcher qu'on l'allume.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Le salbutamol est un agoniste bêta-2 qui dilate les bronches ; l'aténolol est un antagoniste bêta-1 qui freine le cœur.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 25 : Index Thérapeutique Étroit (Marge de Sécurité)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Rapport entre la dose toxique médiane (DT50) et la dose efficace médiane (DE50). Lorsque ce rapport est faible (< 2), de faibles variations de concentration plasmatique peuvent conduire à un échec thérapeutique ou à une toxicité grave.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Un médicament sur le fil du rasoir : un comprimé guérit, mais deux comprimés peuvent empoisonner gravement le malade.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La digoxine, la théophylline, la warfarine (AVK) et le lithium qui nécessitent des prises de sang régulières pour surveiller leur taux sanguin.</div>
          </div>
        `
      },
      {
        id: "m8-case",
        title: "8.7 Cas pratique : Expliquer la sélectivité bêta-1 d'un bêtabloquant",
        isCase: true,
        caseId: "c8",
        caseContext: "Un médecin de famille traite un patient hypertendu qui a également des antécédents d'asthme léger d'effort.",
        caseProblem: "Pourquoi le délégué doit-il souligner la cardiosélectivité bêta-1 de sa molécule ?",
        expertAnswer: "La cardiosélectivité bêta-1 signifie que la molécule se lie préférentiellement aux récepteurs bêta-1 du cœur pour diminuer le travail cardiaque, tout en épargnant les récepteurs bêta-2 situés dans le muscle lisse bronchique. Les vieux bêtabloquants non sélectifs bloquaient aussi les bêta-2, provoquant des bronchospasmes étouffants parfois mortels chez les personnes prédisposées. La sélectivité est la garantie de la sécurité pulmonaire du patient.",
        keyTakeaways: "La sélectivité pharmacodynamique est l'argument reine de la sécurité d'emploi."
      },
      {
        id: "m8-quiz",
        title: "8.8 Mini-Quiz d'évaluation : Module 8",
        isQuiz: true,
        quizModuleId: 8
      }
    ]
  },

  {
    id: 9,
    tier: "INTERMEDIAIRE",
    badge: "Module 9",
    title: "Module 9 : La classification ATC et les 14 groupes anatomiques de l'OMS",
    objective: "Maîtriser la codification universelle ATC à 5 niveaux et parcourir les 14 grands groupes de A à V.",
    sections: [
      {
        id: "m9-s1",
        title: "9.1 Structure de la classification ATC et Panorama des 14 Groupes",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 26 : Système ATC (Anatomique, Thérapeutique et Chimique)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Système universel de codification des substances pharmaceutiques géré par le centre collaborateur de l'OMS à Oslo, subdivisant les médicaments en 5 niveaux selon l'organe cible, le groupe thérapeutique, le sous-groupe chimique et la substance individuelle.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le code-barres scientifique mondial qui classe chaque médicament dans le bon tiroir du corps humain.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> C09CA01 = Losartan (C pour Cardiovasculaire, 09 pour Rénine-Angiotensine, C pour Antagonistes Angiotensine II purs, A pour monothérapie, 01 pour losartan).</div>
          </div>

          <table class="table-science">
            <thead>
              <tr><th>Code</th><th>Groupe Anatomique</th><th>Exemples majeurs de classes thérapeutiques</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>A</strong></td><td>Appareil digestif et métabolisme</td><td>IPP (Oméprazole), antidiabétiques oraux (Metformine), antispasmodiques.</td></tr>
              <tr><td><strong>B</strong></td><td>Sang et organes hématopoïétiques</td><td>Anticoagulants (Héparine, AOD, AVK), antiagrégants plaquettaires, fer.</td></tr>
              <tr><td><strong>C</strong></td><td>Système cardio-vasculaire</td><td>Antihypertenseurs (IEC, ARA2, diurétiques), statines hypolipémiantes.</td></tr>
              <tr><td><strong>D</strong></td><td>Dermatologie</td><td>Antifongiques locaux, dermocorticoïdes, émollients, cicatrisants.</td></tr>
              <tr><td><strong>G</strong></td><td>Système génito-urinaire et hormones sexuelles</td><td>Antiseptiques urinaires, contraceptifs oraux, traitements de la ménopause.</td></tr>
              <tr><td><strong>H</strong></td><td>Hormones systémiques (hors sexuelles)</td><td>Corticoïdes par voie générale, hormones thyroïdiennes (Lévothyroxine).</td></tr>
              <tr><td><strong>J</strong></td><td>Anti-infectieux à usage systémique</td><td>Antibiotiques (Pénicillines, Céphalosporines), antiviraux, vaccins.</td></tr>
              <tr><td><strong>L</strong></td><td>Antinéoplasiques et immunomodulateurs</td><td>Chimiothérapies anticancéreuses, thérapies ciblées, immunothérapies anti-PD-1.</td></tr>
              <tr><td><strong>M</strong></td><td>Système musculo-squelettique</td><td>AINS (Ibuprofène, Diclofénac), anti-goutteux, myorelaxants.</td></tr>
              <tr><td><strong>N</strong></td><td>Système nerveux</td><td>Antalgiques (Paracétamol, Tramadol), antidépresseurs, anxiolytiques, antiépileptiques.</td></tr>
              <tr><td><strong>P</strong></td><td>Produits antiparasitaires, insecticides</td><td>Antipaludiques (CTA : Artéméther-Luméfantrine), anthelminthiques.</td></tr>
              <tr><td><strong>R</strong></td><td>Appareil respiratoire</td><td>Bronchodilatateurs (Salbutamol), corticoïdes inhalés, antihistaminiques.</td></tr>
              <tr><td><strong>S</strong></td><td>Organes sensoriels</td><td>Collyres antibiotiques et anti-glaucomateux, gouttes auriculaires.</td></tr>
              <tr><td><strong>V</strong></td><td>Divers (Varia)</td><td>Produits de contraste radiologiques, antidotes, solvants de perfusion.</td></tr>
            </tbody>
          </table>
        `
      },
      {
        id: "m9-case",
        title: "9.4 Cas pratique : Retrouver l'arborescence ATC d'une spécialité",
        isCase: true,
        caseId: "c9",
        caseContext: "Le pharmacien chef d'une clinique privée vous demande d'intégrer dans son logiciel de gestion le code ATC exact de votre nouvel antidiabétique oral inhibiteur du SGLT2 (Dapagliflozine).",
        caseProblem: "Comment décomposer ce code avec rigueur scientifique ?",
        expertAnswer: "Code A10BK01 : A (Appareil digestif et métabolisme) -> A10 (Médicaments utilisés dans le diabète) -> A10B (Antidiabétiques oraux à l'exclusion des insulines) -> A10BK (Inhibiteurs du co-transporteur sodium-glucose de type 2 / SGLT2) -> A10BK01 (Dapagliflozine). Cette précision rassure le pharmacien sur la bonne imputation comptable et pharmacologique.",
        keyTakeaways: "La maîtrise du système ATC prouve votre niveau de culture pharmaceutique avancée."
      },
      {
        id: "m9-quiz",
        title: "9.5 Mini-Quiz d'évaluation : Module 9",
        isQuiz: true,
        quizModuleId: 9
      }
    ]
  },

  {
    id: 10,
    tier: "INTERMEDIAIRE",
    badge: "Module 10",
    title: "Module 10 : Classes thérapeutiques I : Anti-infectieux & Antipaludéens",
    objective: "Maîtriser les grandes familles d'antibiotiques, la classification AWaRe de l'OMS, les CTA antipaludiques et la lutte contre l'antibiorésistance.",
    sections: [
      {
        id: "m10-s1",
        title: "10.1 Familles d'Antibiotiques et Stratégie AWaRe de l'OMS",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 27 : Classification AWaRe de l'OMS</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Outil de politique sanitaire de l'OMS catégorisant les antibiotiques en 3 groupes : Access (première ligne à large disponibilité), Watch (deuxième ligne à surveiller avec risque de résistance élevé) et Reserve (dernier recours absolu à préserver pour les pathogènes multirésistants).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le feu tricolore des antibiotiques : Vert (Access) pour les infections courantes ; Orange (Watch) à surveiller de près ; Rouge (Reserve) gardé sous clé pour les urgences extrêmes.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'amoxicilline est dans le groupe Access ; la ceftriaxone et les fluoroquinolones sont dans Watch ; la colistine est dans Reserve.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 28 : CTA (Combinaison Thérapeutique à base d'Artémisinine)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Association fixe synergique d'un dérivé semi-synthétique d'artémisinine à élimination rapide mais puissante (Artéméther ou Artésunate) et d'une molécule partenaire à élimination plus lente (Luméfantrine ou Amodiaquine), standard universel de traitement du paludisme non compliqué.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'association coup de poing anti-palu : le premier médicament détruit 99% des parasites en 24h, et le second élimine les survivants sur plusieurs jours pour éviter toute rechute.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Coartem (Artéméther + Luméfantrine) administré en 6 prises réparties sur 3 jours avec un repas lipidique.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 29 : Antibiorésistance et BMR</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Capacité acquise par une souche bactérienne de survivre et proliférer en présence d'une concentration d'antibiotique habituellement inhibitrice, notamment par production de bêta-lactamases à spectre étendu (BLSE) ou mutation des cibles ribosomiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les bactéries apprennent à résister aux antibiotiques si on les utilise pour des virus ou si le patient ne finit pas sa boîte.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Une infection urinaire nosocomiale à E. coli BLSE résistante à toutes les céphalosporines de 3e génération au CHU de Cocody.</div>
          </div>
        `
      },
      {
        id: "m10-case",
        title: "10.7 Cas pratique : Sensibilisation d'un médecin au bon usage des fluoroquinolones",
        isCase: true,
        caseId: "c10",
        caseContext: "Un médecin généraliste prescrit systématiquement de la ciprofloxacine pour de simples épisodes de toux fébrile ou de gastro-entérite bénigne.",
        caseProblem: "Comment le délégué médical engage-t-il un dialogue constructif sur l'antibiogouvernance ?",
        expertAnswer: "Le délégué rappelle avec tact les alertes récentes de l'OMS et des sociétés savantes : les fluoroquinolones appartiennent au groupe 'Watch' et sont associées à des risques d'effets indésirables durables (tendinopathies achilléennes, allongement de l'intervalle QT, sélection rapide de mutants résistants). Il valorise l'utilisation de tests de diagnostic rapide (TDR) et encourage la réservation des fluoroquinolones aux infections urinaires fébriles ou salmonelloses documentées.",
        keyTakeaways: "Le délégué médical responsable est un ambassadeur de la préservation du capital antibiotique mondial."
      },
      {
        id: "m10-quiz",
        title: "10.8 Mini-Quiz d'évaluation : Module 10",
        isQuiz: true,
        quizModuleId: 10
      }
    ]
  },

  {
    id: 11,
    tier: "INTERMEDIAIRE",
    badge: "Module 11",
    title: "Module 11 : Classes thérapeutiques II : Cardio-vasculaires et Métaboliques",
    objective: "Maîtriser les spécificités de l'hypertension en Afrique subsaharienne, les IEC/ARA2, les anticalciques, les statines, les anticoagulants (AOD vs AVK) et les nouveaux antidiabétiques.",
    sections: [
      {
        id: "m11-s1",
        title: "11.1 Hypertension chez le sujet d'Afrique subsaharienne & Bithérapies fixes",
        html: `
          <div class="box-callout box-key">
            <div class="box-header">Particularité hémodynamique et génétique</div>
            <p>Chez les populations mélanodermes d'Afrique subsaharienne, l'hypertension artérielle se caractérise fréquemment par un profil à <strong>basse rénine</strong> avec <em>sensibilité sodée accrue</em>. Les monothérapies par IEC ou bêtabloquants sont souvent moins efficaces en première ligne que les <strong>inhibiteurs calciques</strong> (Amlodipine) et les <strong>diurétiques thiazidiques</strong>, justifiant d'emblée une <strong>bithérapie fixe synergique</strong>.</p>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 30 : Bithérapie Fixe (Single-Pill Combination)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Spécialité pharmaceutique associant dans un même comprimé deux principes actifs à mécanismes d'action complémentaires (ex. un inhibiteur calcique et un ARA2 ou diurétique), permettant une synergie pharmacologique et un contrôle tensionnel accéléré.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Deux médicaments réunis en une seule gélule : plus efficace, moins d'effets secondaires et le patient n'a qu'un seul comprimé à avaler le matin.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'association Amlodipine + Valsartan en un comprimé unique quotidien.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 31 : Anticoagulants Oraux Directs (AOD)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Nouvelle classe d'anticoagulants inhibant sélectivement et directement le facteur Xa (Rivaroxaban, Apixaban) ou la thrombine (Dabigatran), ne nécessitant pas de surveillance biologique de routine par l'INR contrairement aux antivitamines K (AVK).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les anticoagulants modernes qui fluidifient le sang à dose fixe sans obliger le patient à faire des prises de sang chaque semaine.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Prévention de l'AVC chez un patient en fibrillation auriculaire sous Rivaroxaban 20mg.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 32 : Inhibiteurs de la SGLT2 (Gliflozines)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Classe d'antidiabétiques inhibant le cotransporteur rénal sodium-glucose de type 2 au niveau du tubule contourné proximal, induisant une glycosurie protectrice avec bénéfice majeur prouvé sur la réduction de l'insuffisance cardiaque et la progression de la maladie rénale chronique.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le médicament qui évacue le sucre excédentaire par les urines et soulage considérablement le cœur et les reins.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La Dapagliflozine ou l'Empagliflozine prescrite chez le patient diabétique avec antécédents d'infarctus.</div>
          </div>
        `
      },
      {
        id: "m11-case",
        title: "11.8 Cas pratique : Argumenter le passage d'une monothérapie à une bithérapie fixe",
        isCase: true,
        caseId: "c11",
        caseContext: "Le Dr Kassi, cardiologue à Abidjan, a un patient de 52 ans dont la tension reste à 155/95 mmHg sous Amlodipine 10mg seule, avec apparition d'œdèmes gênants aux deux chevilles.",
        caseProblem: "Quelle solution thérapeutique proposer sur le plan pharmacodynamique ?",
        expertAnswer: "Le délégué propose d'associer un ARA2 (ou de basculer vers une bithérapie fixe Amlodipine 5mg + Valsartan 80mg ou 160mg). Sur le plan pharmacodynamique, l'Amlodipine dilate préférentiellement les artérioles précapillaires (créant une hyperpression capillaire et des œdèmes), tandis que l'ARA2 dilate les veinules postcapillaires, annulant l'hyperpression et résolvant l'œdème de cheville, tout en potentialisant la baisse de tension.",
        keyTakeaways: "La complémentarité pharmacologique annule les effets secondaires et double l'efficacité clinique."
      },
      {
        id: "m11-quiz",
        title: "11.9 Mini-Quiz d'évaluation : Module 11",
        isQuiz: true,
        quizModuleId: 11
      }
    ]
  },

  {
    id: 12,
    tier: "INTERMEDIAIRE",
    badge: "Module 12",
    title: "Module 12 : Classes thérapeutiques III : Système nerveux et Antalgiques",
    objective: "Maîtriser les 3 paliers antalgiques de l'OMS, la crise des opioïdes, les antidépresseurs ISRS, les anxiolytiques et les règles de sevrage.",
    sections: [
      {
        id: "m12-s1",
        title: "12.1 Les 3 Paliers Antalgiques de l'OMS et Psychotropes",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 33 : Paliers Antalgiques de l'OMS</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Échelle thérapeutique standardisée en 3 échelons pour la prise en charge de la douleur : Palier 1 (douleur légère : Paracétamol, AINS), Palier 2 (douleur modérée : opioïdes faibles comme Tramadol ou Codéine), Palier 3 (douleur intense : opioïdes forts comme Morphine, Fentanyl, Oxycodone).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'escalier anti-douleur : on monte les marches au fur et à mesure que l'intensité de la douleur augmente.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Soulager une crise douloureuse vaso-occlusive chez un drépanocytaire hospitalisé au CHU à l'aide d'un protocole morphine de palier 3.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 34 : Dépendance et Accoutumance aux Benzodiazépines</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> État psychique et physique résultant de l'interaction répétée avec un agoniste GABA-A, caractérisé par une tolérance pharmacologique (nécessité d'augmenter les doses) et un syndrome de sevrage aigu à l'arrêt brutal. Durée maximale légale de prescription : 12 semaines pour les anxiolytiques, 4 semaines pour les hypnotiques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le piège des somnifères et calmants : le corps s'habitue, ne peut plus dormir sans eux et tremble si on arrête brutalement.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Alerter un prescripteur sur la nécessité d'un plan de réduction progressive par paliers de 25% toutes les deux semaines.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 35 : ISRS (Inhibiteurs Sélectifs de la Recapture de la Sérotonine)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Classe d'antidépresseurs de première intention bloquant spécifiquement le transporteur présynaptique de la sérotonine (SERT), augmentant la disponibilité synaptique du neurotransmetteur sans les effets anticholinergiques des anciens tricycliques.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Les antidépresseurs modernes (Sertraline, Escitalopram) qui restaurent l'équilibre de l'humeur en 2 à 4 semaines avec une excellente tolérance.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Traitement d'un épisode dépressif majeur chez un cadre surmené.</div>
          </div>
        `
      },
      {
        id: "m12-case",
        title: "12.8 Cas pratique : Gestion du mésusage de Tramadol en officine",
        isCase: true,
        caseId: "c12",
        caseContext: "Le titulaire d'une pharmacie partenaire constate que plusieurs jeunes clients reviennent chaque semaine sans ordonnance valide pour acheter des boîtes de Tramadol 50mg ou 100mg sous prétexte de courbatures chroniques.",
        caseProblem: "Que doit recommander le délégué médical lors de sa réunion de formation avec l'équipe officinale ?",
        expertAnswer: "Le délégué rappelle que le Tramadol est un opioïde de palier 2 couplé à une activité sérotoninergique, soumis à prescription médicale obligatoire stricte. Il présente un risque majeur de dépendance psychique sévère, de crises convulsives à fortes doses et de syndrome de sevrage pénible. Il conseille de refuser fermement toute délivrance sans ordonnance, d'orienter ces personnes vers un centre de prise en charge des addictions, et de sensibiliser les comptoirs au respect de la législation des substances vénéneuses.",
        keyTakeaways: "La responsabilité de santé publique du délégué médical prime sur tout volume de vente."
      },
      {
        id: "m12-quiz",
        title: "12.9 Mini-Quiz d'évaluation : Module 12",
        isQuiz: true,
        quizModuleId: 12
      }
    ]
  },

  {
    id: 13,
    tier: "INTERMEDIAIRE",
    badge: "Module 13",
    title: "Module 13 : Classes thérapeutiques IV : Respiratoire, Digestif & Anti-inflammatoires",
    objective: "Maîtriser les traitements de l'asthme et de la BPCO (crise vs fond), les IPP et la gastroprotection, les corticoïdes et les AINS.",
    sections: [
      {
        id: "m13-s1",
        title: "13.1 Médicaments Respiratoires, IPP et Anti-inflammatoires",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 36 : Traitement de Crise vs Traitement de Fond de l'Asthme</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Le traitement de crise repose sur les bêta-2 agonistes de courte durée d'action (SABA : Salbutamol) qui lèvent le bronchospasme immédiat. Le traitement de fond repose sur les corticoïdes inhalés (CSI : Béclométasone, Fluticasone) qui éteignent l'inflammation bronchique chronique sous-jacente.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le Salbutamol est l'extincteur d'incendie (on l'utilise quand ça brûle) ; le corticoïde inhalé est le système anti-feu préventif (on le prend tous les jours pour empêcher le feu de démarrer).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Expliquer à un patient asthmatique de ne pas cesser son spray de fond quotidien sous prétexte qu'il respire bien.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 37 : Inhibiteurs de la Pompe à Protons (IPP)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Prodrogues bloquant de manière covalente et irréversible l'enzyme H+/K+-ATPase des cellules pariétales gastriques, assurant une suppression puissante et prolongée de la sécrétion acide gastrique dans le reflux gastro-œsophagien (RGO) et l'ulcère gastroduodénal.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le verrou qui coupe le robinet d'acide de l'estomac pour laisser les brûlures et les plaies cicatriser en paix.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Co-prescription d'Oméprazole chez un patient de 70 ans prenant des AINS pour soulager une crise d'arthrose.</div>
          </div>
        `
      },
      {
        id: "m13-case",
        title: "13.7 Cas pratique : Démonstration de la technique d'inhalation",
        isCase: true,
        caseId: "c13",
        caseContext: "Un pneumologue déplore que 60% de ses patients asthmatiques n'ont aucun bénéfice de leur traitement car ils déclenchent l'aérosol dans leur bouche fermée ou avalent la poudre sans inspirer.",
        caseProblem: "Comment le délégué médical apporte-t-il une solution pédagogique immédiate en cabinet ?",
        expertAnswer: "Le délégué met à disposition du médecin un dispositif factice d'entraînement (spray de démonstration sans principe actif avec chambre d'inhalation) et des fiches d'éducation thérapeutique en 4 étapes simples : 1. Expirer à fond, 2. Enclencher l'aérosol au tout début d'une inspiration lente et profonde, 3. Bloquer sa respiration pendant 10 secondes (apnée), 4. Rincer la bouche à l'eau pour éviter la candidose buccale.",
        keyTakeaways: "Le rôle du délégué médical d'excellence est de garantir l'efficacité pratique du traitement dans la vraie vie du patient."
      },
      {
        id: "m13-quiz",
        title: "13.8 Mini-Quiz d'évaluation : Module 13",
        isQuiz: true,
        quizModuleId: 13
      }
    ]
  },

  {
    id: 14,
    tier: "INTERMEDIAIRE",
    badge: "Module 14",
    title: "Module 14 : Interactions médicamenteuses et contre-indications vitales",
    objective: "Maîtriser les mécanismes enzymatiques (cytochromes P450), les 5 interactions vitales absolues et la prévention de l'iatrogénie grave.",
    sections: [
      {
        id: "m14-s1",
        title: "14.1 Cytochromes P450 et Top 5 des Interactions Mortelles",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 38 : Induction vs Inhibition Enzymatique (CYP450)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Un inhibiteur enzymatique (ex. Kétoconazole, Clarithromycine sur le CYP3A4) ralentit la dégradation des molécules partenaires, provoquant leur surdosage toxique. Un inducteur enzymatique (ex. Rifampicine, Millepertuis) accélère la clairance hépatique, provoquant un échec thérapeutique par sous-dosage.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> L'inhibiteur paralyse l'éboueur du foie (les déchets s'accumulent et intoxiquent) ; l'inducteur survolte l'éboueur (le médicament est jeté à la poubelle avant d'avoir pu soigner).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> La rifampicine (antituberculeux) qui annule l'efficacité des pilules contraceptives par induction massive du CYP3A4, provoquant des grossesses non désirées.</div>
          </div>

          <div class="box-callout box-warning">
            <div class="box-header">Le Top 5 des interactions critiques mortelles à connaître par cœur</div>
            <ol style="margin-left:1.5rem; line-height:1.7;">
              <li><strong>Anticoagulant (AVK ou AOD) + AINS / Aspirine à forte dose :</strong> Risque d'hémorragie digestive cataclysmique par addition de la lésion ulcéreuse gastrique et de l'inhibition de l'hémostase.</li>
              <li><strong>Amiodarone + Macrolides / Fluoroquinolones :</strong> Synergie d'allongement de l'intervalle QT à l'électrocardiogramme -> Risque de torsades de pointes et de mort subite.</li>
              <li><strong>Statines + Fibrates ou Clarithromycine :</strong> Blocage de la clairance de la statine -> Rhabdomyolyse aiguë avec blocage rénal par la myoglobine.</li>
              <li><strong>Clopidogrel + Oméprazole :</strong> L'oméprazole inhibe le CYP2C19 nécessaire à la transformation du clopidogrel en son métabolite actif -> Perte de protection antiagrégante et thrombose de stent coronarien.</li>
              <li><strong>Neuroleptiques (ex. Halopéridol) + Métoclopramide :</strong> Addition du blocage des récepteurs dopaminergiques D2 -> Syndrome extrapyramidal sévère et syndrome malin des neuroleptiques létal.</li>
            </ol>
          </div>
        `
      },
      {
        id: "m14-case",
        title: "14.6 Cas pratique : Détection d'une interaction mortelle à l'officine",
        isCase: true,
        caseId: "c14",
        caseContext: "Un patient de 65 ans sous traitement par Sintrom (Acénocoumarol - AVK) pour une valve mécanique se plaint d'un lumbago aigu. Un médecin remplaçant lui a prescrit du Kétoprofène 100mg (AINS) 3 fois par jour sans vérifier son carnet d'anticoagulation.",
        caseProblem: "Que doit faire l'équipe officinale alertée par le délégué médical ?",
        expertAnswer: "Bloquer immédiatement la délivrance du kétoprofène. Contacter en urgence le prescripteur pour lui rappeler l'interdiction absolue de l'association AINS + AVK en raison du risque vital d'hémorragie digestive majeure. Proposer une alternative antalgique sûre : paracétamol à 1g par prise (max 3g/j en raison d'une possible potentialisation mineure de l'INR) associée à des mesures physiques (chaleur locale, repos) ou un opioïde de palier 2 sans AINS.",
        keyTakeaways: "Le délégué médical d'excellence participe à la sécurité de dispensation en formant les pharmaciens sur les interactions vitales."
      },
      {
        id: "m14-quiz",
        title: "14.7 Mini-Quiz d'évaluation : Module 14",
        isQuiz: true,
        quizModuleId: 14
      }
    ]
  },

  {
    id: 15,
    tier: "INTERMEDIAIRE",
    badge: "Module 15",
    title: "Module 15 : Effets indésirables et Pharmacovigilance opérationnelle",
    objective: "Maîtriser la classification de Rawlins & Thompson (Types A à F), l'analyse d'imputabilité, la fiche CIOMS et la notification sous 24h.",
    sections: [
      {
        id: "m15-s1",
        title: "15.1 Typologie de Rawlins & Thompson et Procédure de Notification",
        html: `
          <div class="def-card">
            <div class="def-card-title">📌 Notion 39 : Classification des Effets Indésirables (Rawlins & Thompson)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Typologie internationale classant les effets médicamenteux indésirables : Type A (Augmented : dose-dépendant, fréquent, prévisible), Type B (Bizarre : immuno-allergique, imprévisible, indépendant de la dose), Type C (Chronic : cumulatif), Type D (Delayed : différé/tératogène), Type E (End of treatment : sevrage), Type F (Failure : échec inattendu).</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> Le système de tri des effets secondaires : soit c'est la molécule qui tape trop fort (Type A), soit c'est une allergie imprévisible du patient (Type B).</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> L'hypoglycémie sous insuline est de Type A ; le syndrome de Stevens-Johnson (décollement de la peau) sous sulfamides est de Type B.</div>
          </div>

          <div class="def-card">
            <div class="def-card-title">📌 Notion 40 : Fiche de Notification CIOMS (4 Éléments Clés)</div>
            <div class="def-row"><span class="def-label expert">🔬 Définition experte :</span> Formulaire international validé pour la déclaration réglementaire d'un effet indésirable grave, requérant 4 données obligatoires pour être recevable : un notificateur identifiable, un patient identifiable, un médicament suspect identifié (avec numéro de lot si possible) et la description précise de l'effet clinique constaté.</div>
            <div class="def-row"><span class="def-label simple">💡 En langage simple :</span> La fiche d'alerte officielle : qui prévient, pour qui, quel médicament et ce qui s'est passé.</div>
            <div class="def-row"><span class="def-label example">🎯 Exemple concret :</span> Déclaration d'un cas d'hépatite aiguë sous antibiotique transmise en moins de 24 heures à l'AIRP par le délégué médical.</div>
          </div>
        `
      },
      {
        id: "m15-case",
        title: "15.7 Cas pratique : Réception d'un signalement d'effet indésirable grave en clinique",
        isCase: true,
        caseId: "c15",
        caseContext: "Lors d'une visite au service de réanimation du CHU, le chef de clinique signale au délégué qu'un patient a fait un bronchospasme asphyxique 10 minutes après l'injection IV d'un antibiotique du laboratoire (lot AB459).",
        caseProblem: "Quelle est la procédure chronométrée exacte que le délégué doit respecter ?",
        expertAnswer: "1) Prendre l'alerte avec le plus grand sérieux et recueillir immédiatement les 4 critères légaux : nom du médecin déclarant, initiales/âge du patient, nom de la spécialité avec numéro de lot AB459, heure de survenue et traitement d'urgence administré. 2) Remplir la fiche d'alerte interne de pharmacovigilance dans les 2 heures. 3) Transmettre sous 24h ouvrées au Responsable de Pharmacovigilance (QPPV) du laboratoire et à l'AIRP. 4) Assurer le suivi médical ultérieur auprès du médecin dès que le patient est stabilisé.",
        keyTakeaways: "La pharmacovigilance est une obligation légale et pénale sacrée : la sécurité des malades passe toujours avant les intérêts commerciaux."
      },
      {
        id: "m15-quiz",
        title: "15.8 Mini-Quiz d'évaluation : Module 15",
        isQuiz: true,
        quizModuleId: 15
      }
    ]
  }
];
