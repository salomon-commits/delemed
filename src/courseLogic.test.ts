import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProgress,
  calculateQuizScore,
  shuffleArray,
  calculateXpAndLevel,
  evaluateViolations,
  formatDuration,
  getAtcGroup,
  calculateHalfLifeTimes,
  getRawlinsDescription,
  type QuizQuestion,
} from './courseLogic.ts';

test('calculateProgress calculates and clamps percentage', () => {
  assert.equal(calculateProgress([], 40), 0);
  assert.equal(calculateProgress(['s1', 's2'], 10), 20);
  assert.equal(calculateProgress(['s1', 's1', 's2'], 10), 20);
  assert.equal(calculateProgress(['s1', 's2', 's3'], 2), 100);
});

test('calculateQuizScore uses 80% passing standard for Yonah', () => {
  const sample: QuizQuestion[] = [
    { id: 1, question: 'Q1', options: ['A', 'B'], correctIndex: 0, explanation: '' },
    { id: 2, question: 'Q2', options: ['A', 'B'], correctIndex: 0, explanation: '' },
    { id: 3, question: 'Q3', options: ['A', 'B'], correctIndex: 0, explanation: '' },
    { id: 4, question: 'Q4', options: ['A', 'B'], correctIndex: 0, explanation: '' },
    { id: 5, question: 'Q5', options: ['A', 'B'], correctIndex: 0, explanation: '' },
  ];

  // 4 out of 5 = 80% -> passed
  const r1 = calculateQuizScore({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }, sample);
  assert.equal(r1.percentage, 80);
  assert.equal(r1.passed, true);

  // 3 out of 5 = 60% -> failed
  const r2 = calculateQuizScore({ 1: 0, 2: 0, 3: 0, 4: 1, 5: 1 }, sample);
  assert.equal(r2.percentage, 60);
  assert.equal(r2.passed, false);
});

test('shuffleArray randomly reorders without losing elements', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffled = shuffleArray(items);
  assert.equal(shuffled.length, items.length);
  assert.deepEqual(new Set(shuffled), new Set(items));
});

test('calculateXpAndLevel computes levels properly across 4 tiers', () => {
  const l1 = calculateXpAndLevel(0, 0, false);
  assert.equal(l1.levelTier, 'DEBUTANT');
  assert.match(l1.level, /Débutant/);

  const l2 = calculateXpAndLevel(15, 3, false); // 600 + 360 = 960
  assert.equal(l2.levelTier, 'INTERMEDIAIRE');

  const l3 = calculateXpAndLevel(40, 6, false); // 1600 + 720 = 2320
  assert.equal(l3.levelTier, 'AVANCE');

  const l4 = calculateXpAndLevel(40, 6, true); // + 1500 = 3820
  assert.equal(l4.levelTier, 'EXPERT');
  assert.match(l4.level, /Expert/);
});

test('evaluateViolations triggers invalidation at 3 violations', () => {
  const v0 = evaluateViolations([]);
  assert.equal(v0.count, 0);
  assert.equal(v0.isInvalidated, false);
  assert.equal(v0.statusLabel, 'SANS VIOLATION');

  const v1 = evaluateViolations([
    { type: 'TAB_SWITCH', timestamp: Date.now(), questionIndex: 1, details: 'Sortie d onglet' }
  ]);
  assert.equal(v1.count, 1);
  assert.equal(v1.isInvalidated, false);

  const v3 = evaluateViolations([
    { type: 'TAB_SWITCH', timestamp: Date.now(), questionIndex: 1, details: '1' },
    { type: 'FULLSCREEN_EXIT', timestamp: Date.now(), questionIndex: 2, details: '2' },
    { type: 'CLIPBOARD_PASTE', timestamp: Date.now(), questionIndex: 3, details: '3' },
  ]);
  assert.equal(v3.count, 3);
  assert.equal(v3.isInvalidated, true);
  assert.match(v3.statusLabel, /INVALIDÉE/);
});

test('formatDuration formats mm:ss', () => {
  assert.equal(formatDuration(1200), '20:00');
  assert.equal(formatDuration(45), '00:45');
});

test('getAtcGroup retrieves valid ATC groups', () => {
  const atcC = getAtcGroup('C');
  assert.ok(atcC);
  assert.equal(atcC?.name, 'Système cardio-vasculaire');
  assert.ok(atcC?.examples.includes('Amlodipine'));

  const atcJ = getAtcGroup('j'); // case-insensitive
  assert.ok(atcJ);
  assert.equal(atcJ?.name, 'Anti-infectieux à usage systémique');

  assert.equal(getAtcGroup('Z'), null);
});

test('calculateHalfLifeTimes estimates steady-state and elimination hours', () => {
  const res = calculateHalfLifeTimes(12); // e.g. 12h half-life
  assert.equal(res.steadyStateHours, 60); // 5 x 12
  assert.equal(res.fullEliminationHours, 84); // 7 x 12

  const zero = calculateHalfLifeTimes(0);
  assert.equal(zero.steadyStateHours, 0);
  assert.equal(zero.fullEliminationHours, 0);
});

test('getRawlinsDescription returns clinical descriptions', () => {
  assert.match(getRawlinsDescription('A'), /Type A \(Augmented\)/);
  assert.match(getRawlinsDescription('b'), /Type B \(Bizarre\)/);
  assert.match(getRawlinsDescription('E'), /sevrage ou rebond/);
  assert.equal(getRawlinsDescription('Unknown'), 'Type non classifié');
});

