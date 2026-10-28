import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProgress,
  calculateQuizScore,
  toggleBookmark,
  filterSections,
  formatStudyTime,
  getProgressBadge,
  type QuizQuestion,
} from './courseLogic.ts';

test('calculateProgress calculates correct percentage and clamps', () => {
  assert.equal(calculateProgress([], 10), 0);
  assert.equal(calculateProgress(['s1', 's2', 's3'], 10), 30);
  // Duplicate ids should not inflate progress
  assert.equal(calculateProgress(['s1', 's1', 's2'], 10), 20);
  // Over count clamped to 100
  assert.equal(calculateProgress(['s1', 's2', 's3', 's4'], 3), 100);
});

test('calculateQuizScore computes accuracy and passing mark', () => {
  const sampleQuestions: QuizQuestion[] = [
    { id: 1, question: 'Q1', options: ['A', 'B'], correctIndex: 0, explanation: 'Exp 1' },
    { id: 2, question: 'Q2', options: ['A', 'B'], correctIndex: 1, explanation: 'Exp 2' },
    { id: 3, question: 'Q3', options: ['A', 'B'], correctIndex: 0, explanation: 'Exp 3' },
    { id: 4, question: 'Q4', options: ['A', 'B'], correctIndex: 1, explanation: 'Exp 4' },
  ];

  // 3 out of 4 correct = 75% -> passed
  const res1 = calculateQuizScore({ 1: 0, 2: 1, 3: 0, 4: 0 }, sampleQuestions);
  assert.equal(res1.score, 3);
  assert.equal(res1.percentage, 75);
  assert.equal(res1.passed, true);

  // 2 out of 4 correct = 50% -> not passed
  const res2 = calculateQuizScore({ 1: 0, 2: 0, 3: 1, 4: 1 }, sampleQuestions);
  assert.equal(res2.score, 2);
  assert.equal(res2.percentage, 50);
  assert.equal(res2.passed, false);
});

test('toggleBookmark adds and removes bookmarks cleanly', () => {
  let bookmarks: string[] = [];
  bookmarks = toggleBookmark(bookmarks, 'm1-s1');
  assert.deepEqual(bookmarks, ['m1-s1']);

  bookmarks = toggleBookmark(bookmarks, 'm2-s3');
  assert.deepEqual(bookmarks, ['m1-s1', 'm2-s3']);

  // Remove first
  bookmarks = toggleBookmark(bookmarks, 'm1-s1');
  assert.deepEqual(bookmarks, ['m2-s3']);
});

test('filterSections matches by title and keywords', () => {
  const sections = [
    { id: '1', moduleId: 1, title: 'Cadre légal et Charte', keywords: ['déontologie', 'ansm', 'loi'] },
    { id: '2', moduleId: 2, title: 'Techniques de visite', keywords: ['méthode', 'entretien'] },
    { id: '3', moduleId: 3, title: 'Pharmacovigilance', keywords: ['sécurité', 'ansm'] },
  ];

  assert.equal(filterSections(sections, '').length, 3);
  assert.equal(filterSections(sections, 'charte').length, 1);
  assert.equal(filterSections(sections, 'ansm').length, 2); // found in 1 (keyword) and 3 (keyword)
  assert.equal(filterSections(sections, 'inexistant').length, 0);
});

test('formatStudyTime formats seconds to readable human time', () => {
  assert.equal(formatStudyTime(45), '0m 45s');
  assert.equal(formatStudyTime(125), '2m 05s');
  assert.equal(formatStudyTime(3665), '1h 01m');
});

test('getProgressBadge returns appropriate training tier', () => {
  assert.equal(getProgressBadge(0).title, 'Débutant');
  assert.equal(getProgressBadge(20).title, 'Intégration Initiale');
  assert.equal(getProgressBadge(50).title, 'Compétences Fondamentales');
  assert.equal(getProgressBadge(80).title, 'Maîtrise Clinique Avancée');
  assert.equal(getProgressBadge(100).title, 'Opérationnel Terrain Certifié');
});
