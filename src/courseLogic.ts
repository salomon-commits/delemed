/**
 * Yonah Institute Medical Representative Course Logic & Anti-Cheat Utilities
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AntiCheatViolation {
  type: string;
  timestamp: number;
  questionIndex: number;
  details: string;
}

export function calculateProgress(readSectionIds: string[], totalSectionsCount: number): number {
  if (totalSectionsCount <= 0) return 0;
  const uniqueReadCount = new Set(readSectionIds).size;
  const clamped = Math.min(uniqueReadCount, totalSectionsCount);
  return Math.round((clamped / totalSectionsCount) * 100);
}

export function calculateQuizScore(
  userAnswers: Record<number, number>,
  questions: QuizQuestion[]
): { score: number; total: number; percentage: number; passed: boolean } {
  if (!questions || questions.length === 0) {
    return { score: 0, total: 0, percentage: 0, passed: false };
  }

  let score = 0;
  for (const q of questions) {
    if (userAnswers[q.id] === q.correctIndex) {
      score += 1;
    }
  }

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 80; // 80% passing standard for Yonah certification

  return { score, total, percentage, passed };
}

export function shuffleArray<T>(array: T[], seedRandom = Math.random): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seedRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function calculateXpAndLevel(readCount: number, quizPassedCount: number, examPassed: boolean): {
  xp: number;
  level: string;
  levelTier: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE' | 'EXPERT';
  levelBadge: string;
} {
  let xp = readCount * 40; // 40 XP per section read
  xp += quizPassedCount * 120; // 120 XP per passed quiz
  if (examPassed) xp += 1500; // 1500 XP for final Yonah expert exam

  let level = "🟢 Débutant (Fondations)";
  let levelTier: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE' | 'EXPERT' = 'DEBUTANT';
  let levelBadge = "Niveau 1";

  if (xp >= 3500 || examPassed) {
    level = "🔴 Expert Certifié Yonah";
    levelTier = 'EXPERT';
    levelBadge = "Niveau 4";
  } else if (xp >= 2200) {
    level = "🟠 Délégué Médical Avancé";
    levelTier = 'AVANCE';
    levelBadge = "Niveau 3";
  } else if (xp >= 900) {
    level = "🟡 Délégué Intermédiaire";
    levelTier = 'INTERMEDIAIRE';
    levelBadge = "Niveau 2";
  }

  return { xp, level, levelTier, levelBadge };
}

export function evaluateViolations(violations: AntiCheatViolation[]): {
  count: number;
  isInvalidated: boolean;
  statusLabel: string;
} {
  const count = violations.length;
  const isInvalidated = count >= 3;
  let statusLabel = "SANS VIOLATION";
  if (count === 1) {
    statusLabel = "VIOLATION MINEURE (1/3)";
  } else if (count === 2) {
    statusLabel = "AVERTISSEMENT SÉVÈRE (2/3)";
  } else if (count >= 3) {
    statusLabel = "SESSION INVALIDÉE (≥3 VIOLATIONS)";
  }
  return { count, isInvalidated, statusLabel };
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export interface AtcGroupInfo {
  letter: string;
  name: string;
  examples: string[];
}

export const ATC_GROUPS: Record<string, AtcGroupInfo> = {
  A: { letter: "A", name: "Appareil digestif et métabolisme", examples: ["Metformine", "Oméprazole", "Insuline"] },
  B: { letter: "B", name: "Sang et organes hématopoïétiques", examples: ["Héparine", "Clopidogrel", "Warfarine"] },
  C: { letter: "C", name: "Système cardio-vasculaire", examples: ["Amlodipine", "Ramipril", "Atorvastatine"] },
  D: { letter: "D", name: "Dermatologie", examples: ["Bétaméthasone", "Érythromycine locale"] },
  G: { letter: "G", name: "Système génito-urinaire et hormones sexuelles", examples: ["Tamsulosine", "Progestatifs"] },
  H: { letter: "H", name: "Préparations hormonales systémiques", examples: ["Lévothyroxine", "Prednisone"] },
  J: { letter: "J", name: "Anti-infectieux à usage systémique", examples: ["Amoxicilline", "Ciprofloxacine", "Ceftriaxone"] },
  L: { letter: "L", name: "Antinéoplasiques et immunomodulateurs", examples: ["Méthotrexate", "Pembrolizumab"] },
  M: { letter: "M", name: "Système musculo-squelettique", examples: ["Ibuprofène", "Allopurinol"] },
  N: { letter: "N", name: "Système nerveux", examples: ["Paracétamol", "Sertraline", "Morphine"] },
  P: { letter: "P", name: "Produits antiparasitaires", examples: ["Artéméther-Luméfantrine", "Albendazole"] },
  R: { letter: "R", name: "Système respiratoire", examples: ["Salbutamol", "Fluticasone"] },
  S: { letter: "S", name: "Organes sensoriels", examples: ["Latanoprost", "Tobramycine collyre"] },
  V: { letter: "V", name: "Divers", examples: ["Antidotes", "Produits de contraste"] }
};

export function getAtcGroup(letter: string): AtcGroupInfo | null {
  return ATC_GROUPS[letter.toUpperCase()] || null;
}

export function calculateHalfLifeTimes(halfLifeHours: number): {
  steadyStateHours: number; // 5 half lives ~ 97%
  fullEliminationHours: number; // 7 half lives ~ 99%
} {
  if (halfLifeHours <= 0) return { steadyStateHours: 0, fullEliminationHours: 0 };
  return {
    steadyStateHours: Math.round(halfLifeHours * 5 * 10) / 10,
    fullEliminationHours: Math.round(halfLifeHours * 7 * 10) / 10
  };
}

export function getRawlinsDescription(type: string): string {
  switch (type.toUpperCase()) {
    case "A":
      return "Type A (Augmented) : Effet prévisible, dose-dépendant, lié au mécanisme pharmacologique (ex : hypotension sous antihypertenseur).";
    case "B":
      return "Type B (Bizarre) : Effet imprévisible, indépendant de la dose, souvent immuno-allergique ou idiosyncrasique (ex : choc anaphylactique).";
    case "C":
      return "Type C (Chronic) : Effet lié à la dose cumulée et au traitement au long cours (ex : ostéoporose sous corticoïdes).";
    case "D":
      return "Type D (Delayed) : Effet différé apparaissant à distance du traitement (ex : tératogénicité, cancérogénèse).";
    case "E":
      return "Type E (End of treatment) : Effet de sevrage ou rebond à l'arrêt brutal (ex : rebond hypertensif à l'arrêt des bêtabloquants).";
    case "F":
      return "Type F (Failure) : Échec thérapeutique imprévu souvent lié à une interaction ou résistance microbienne.";
    default:
      return "Type non classifié";
  }
}

