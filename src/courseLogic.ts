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
  levelIndex: number;
} {
  let xp = readCount * 50; // 50 XP per section read
  xp += quizPassedCount * 150; // 150 XP per passed quiz
  if (examPassed) xp += 1000; // 1000 XP for final exam

  let level = "Débutant";
  let levelIndex = 1;

  if (xp >= 2500 || examPassed) {
    level = "Expert Terrain Yonah";
    levelIndex = 4;
  } else if (xp >= 1500) {
    level = "Délégué Confirmé";
    levelIndex = 3;
  } else if (xp >= 600) {
    level = "Intermédiaire";
    levelIndex = 2;
  }

  return { xp, level, levelIndex };
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
