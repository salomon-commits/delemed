/**
 * Course logic helpers for the medical representative training app
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SectionSummary {
  id: string;
  moduleId: number;
  title: string;
  keywords: string[];
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
  const passed = percentage >= 75; // 75% passing score standard in medical pharma training

  return { score, total, percentage, passed };
}

export function toggleBookmark(currentBookmarks: string[], sectionId: string): string[] {
  if (currentBookmarks.includes(sectionId)) {
    return currentBookmarks.filter((id) => id !== sectionId);
  }
  return [...currentBookmarks, sectionId];
}

export function filterSections<T extends SectionSummary>(sections: T[], query: string): T[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return sections;

  return sections.filter((s) => {
    const titleMatch = s.title.toLowerCase().includes(trimmed);
    const keywordMatch = s.keywords?.some((k) => k.toLowerCase().includes(trimmed));
    return titleMatch || keywordMatch;
  });
}

export function formatStudyTime(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const hrs = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  if (hrs > 0) {
    return `${hrs}h ${mins.toString().padStart(2, '0')}m`;
  }
  return `${mins}m ${secs.toString().padStart(2, '0')}s`;
}

export function getProgressBadge(percentage: number): { title: string; level: number; color: string } {
  if (percentage >= 100) {
    return { title: 'Opérationnel Terrain Certifié', level: 4, color: '#10b981' };
  }
  if (percentage >= 70) {
    return { title: 'Maîtrise Clinique Avancée', level: 3, color: '#3b82f6' };
  }
  if (percentage >= 35) {
    return { title: 'Compétences Fondamentales', level: 2, color: '#f59e0b' };
  }
  if (percentage > 0) {
    return { title: 'Intégration Initiale', level: 1, color: '#6366f1' };
  }
  return { title: 'Débutant', level: 0, color: '#64748b' };
}
