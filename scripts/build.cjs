// Script d'assemblage final du fichier autonome index.html — Institut d'Excellence Yonah
const fs = require('fs');
const path = require('path');

const tronc1 = require('./data_tronc_commun_1_to_15.cjs');
const tronc2 = require('./data_tronc_commun_16_to_30.cjs');
const tracks = require('./data_tracks.cjs');
const enrichments = require('./module_enrichments.cjs');
const { INSTITUTIONAL_DATA, EXAM_QUESTION_BANK } = require('./data_institutional_and_exam.cjs');

const allModules = [...tronc1, ...tronc2, ...tracks];

// Enrichissement approfondi de chaque module (pratique terrain, guide médecin, alertes et script audio)
allModules.forEach(mod => {
  const enr = enrichments[mod.id];
  if (enr) {
    const fieldSection = {
      id: `m${mod.id}-field`,
      title: `${mod.id <= 30 ? mod.id + '.3' : mod.badge + '.3'} ${enr.fieldGuideTitle}`,
      audioScript: enr.audioScript,
      html: `
        <div class="box-callout box-key">
          <div class="box-header">🎯 Boîte à Outils de Terrain du Délégué Médical</div>
          <p>Ce guide synthétise les réflexes cliniques indispensables pour réussir vos entretiens avec les prescripteurs et garantir le bon usage des traitements.</p>
        </div>

        <div class="def-card" style="border-left-color: var(--yonah-navy);">
          <div class="def-card-title">🗣️ Questions d'investigation clinique en consultation</div>
          <p style="font-size:0.92rem; color:var(--text-muted); margin-bottom:0.75rem;">À poser au praticien lors de la phase de découverte pour cerner ses besoins réels :</p>
          <ul style="margin-left: 1.25rem; line-height: 1.8; font-size: 0.95rem;">
            ${enr.keyQuestions.map(q => `<li><strong>${q}</strong></li>`).join('')}
          </ul>
        </div>

        <div class="case-card" style="margin: 1.25rem 0;">
          <div class="case-header">
            <span class="case-badge">Dialogue Médecin / Délégué</span>
            <h3 class="case-title">Traitement de l'objection fréquente de terrain</h3>
          </div>
          <div style="background:var(--yonah-warning-light); border:1px solid var(--yonah-warning); padding:0.9rem; border-radius:var(--radius-sm); margin-bottom:0.75rem;">
            <strong style="color:var(--yonah-warning);">👨‍⚕️ Objection du praticien :</strong><br>
            <em>${enr.objection}</em>
          </div>
          <div style="background:var(--yonah-emerald-light); border:1px solid var(--yonah-emerald); padding:0.9rem; border-radius:var(--radius-sm);">
            <strong style="color:var(--yonah-emerald);">🤝 Réponse & Réfutation scientifique du délégué Yonah :</strong><br>
            <p style="margin-top:0.35rem; line-height:1.6;">${enr.rebuttal}</p>
          </div>
        </div>

        <div class="def-card" style="border-left-color: var(--yonah-danger);">
          <div class="def-card-title">⚠️ Vigilance Thérapeutique & Pharmacovigilance</div>
          <ul style="margin-left: 1.25rem; line-height: 1.8; font-size: 0.95rem;">
            ${enr.vigilanceAlerts.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>

        <div class="box-callout box-tip" style="margin-top: 1.25rem;">
          <div class="box-header">💊 Conseil & Vigilance Officine</div>
          <p>${enr.officineTip}</p>
        </div>

        <div class="def-card" style="border-left-color: var(--yonah-gold); background: var(--yonah-gold-light); margin-top: 1.25rem;">
          <div class="def-card-title">🎙️ Synthèse Vocale Flash (Script 90 secondes)</div>
          <p style="font-size:0.95rem; line-height:1.65; color:var(--text-main); font-style:italic;">
            « ${enr.audioScript} »
          </p>
        </div>
      `
    };

    const quizIdx = mod.sections.findIndex(s => s.isQuiz || s.isFinalExamSession || s.isExamContract);
    if (quizIdx !== -1) {
      mod.sections.splice(quizIdx, 0, fieldSection);
    } else {
      mod.sections.push(fieldSection);
    }

    mod.sections.forEach(s => {
      if (!s.audioScript) s.audioScript = enr.audioScript;
    });
  }
});

console.log(`Assemblage du parcours complet : ${allModules.length} modules & tracks au total.`);

// Génération du contenu HTML complet autonome
const htmlContent = `<!--
  Institut d'Excellence Yonah — Délégué Médical Professionnel
  Version : 4.0 (Parcours Certifiant Complet : 30 Modules & 8 Tracks de Spécialisation)
  Date : 2026-10-28
  Fichier autonome — Aucune connexion requise (Offline-First)
  Certificat infalsifiable : YONAH-DM-2025-XXXXXX (Vérifiable)
-->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <title>Institut d'Excellence YONAH — Délégué Médical : Du Débutant à l'Expert</title>
  <meta name="description" content="Formation certifiante complète de référence pour délégués médicaux et cadres pharmaceutiques : 30 modules fondamentaux et 8 tracks de spécialisation. Propriété pédagogique de Guede Camus SALOMON.">
  <meta property="og:title" content="Institut d'Excellence YONAH — Délégué Médical : Du Débutant à l'Expert">
  <meta property="og:description" content="Parcours d'élite certifiant de 30 modules et 8 tracks de spécialisation. YONAH — Propriété pédagogique de Guede Camus SALOMON.">
  <meta name="theme-color" content="#0B3D5C">

  <style>
    /* =====================================================================
       SYSTÈME DE DESIGN INSTITUT YONAH — THÈMES & TYPOGRAPHIE
       ===================================================================== */
    :root {
      --yonah-navy: #0B3D5C;
      --yonah-navy-dark: #062335;
      --yonah-navy-light: #16537b;
      --yonah-gold: #D4A24C;
      --yonah-gold-light: #fef7ec;
      --yonah-gold-dark: #a87926;
      --yonah-emerald: #0E7C66;
      --yonah-emerald-light: #e6f6f2;
      --yonah-cream: #F8F5EE;
      --yonah-gray: #4A5568;
      --yonah-gray-light: #718096;
      --yonah-danger: #C53030;
      --yonah-danger-light: #FFF5F5;
      --yonah-warning: #DD6B20;
      --yonah-warning-light: #FFFAF0;

      --bg: #F8F5EE;
      --surface: #FFFFFF;
      --surface-subtle: #F0EDE4;
      --border: #E2DBD0;
      --border-focus: #0B3D5C;
      --text-main: #1A202C;
      --text-muted: #4A5568;
      --text-on-dark: #FFFFFF;

      --shadow-sm: 0 1px 3px rgba(11, 61, 92, 0.08);
      --shadow-md: 0 4px 12px rgba(11, 61, 92, 0.12);
      --shadow-lg: 0 10px 25px rgba(11, 61, 92, 0.18);
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;
      --radius-full: 9999px;

      --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --touch-min: 44px;
    }

    [data-theme="dark"] {
      --bg: #061824;
      --surface: #0B283D;
      --surface-subtle: #103753;
      --border: #1B4C72;
      --border-focus: #D4A24C;
      --text-main: #F7FAFC;
      --text-muted: #CBD5E0;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
      --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.7);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: var(--font-system);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.65;
      font-size: 16px;
      min-height: 100vh;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
    }

    button, input, select, textarea {
      font-family: inherit;
      font-size: 1rem;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
      user-select: none;
    }

    #appWrapper {
      display: flex;
      flex: 1;
      height: 100vh;
      overflow: hidden;
    }

    /* BARRE SUPÉRIEURE */
    .topbar {
      height: 60px;
      background-color: var(--surface);
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: var(--shadow-sm);
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .brand-logo-svg {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--yonah-navy);
      letter-spacing: 0.5px;
      line-height: 1.1;
    }

    [data-theme="dark"] .brand-name {
      color: var(--yonah-gold);
    }

    .brand-sub {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--yonah-gray-light);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .topbar-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .icon-btn {
      min-width: var(--touch-min);
      min-height: var(--touch-min);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      border: 1px solid transparent;
      transition: background 0.15s, color 0.15s;
    }

    .icon-btn:hover {
      background: var(--surface-subtle);
      color: var(--text-main);
    }

    .icon-btn.btn-institution {
      background: var(--yonah-gold-light);
      color: var(--yonah-gold-dark);
      border: 1px solid var(--yonah-gold);
      font-weight: 800;
      font-size: 0.85rem;
      padding: 0 0.75rem;
      gap: 0.4rem;
    }

    [data-theme="dark"] .icon-btn.btn-institution {
      background: rgba(212, 162, 76, 0.2);
      color: var(--yonah-gold);
    }

    /* BARRE LATÉRALE */
    .sidebar {
      width: 320px;
      background-color: var(--surface);
      border-right: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      z-index: 45;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .sidebar-user-card {
      padding: 0.9rem 1rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--surface-subtle);
    }

    .user-avatar-badge {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }

    .avatar-circle {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background: var(--yonah-navy);
      color: var(--yonah-gold);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--yonah-gold);
    }

    .user-info-text {
      display: flex;
      flex-direction: column;
    }

    .user-name-display {
      font-weight: 800;
      font-size: 0.88rem;
      color: var(--text-main);
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .user-level-badge {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--yonah-emerald);
    }

    .sidebar-level-filters {
      padding: 0.6rem 0.8rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      gap: 0.3rem;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .tier-tab-btn {
      white-space: nowrap;
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-full);
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--text-muted);
      border: 1px solid var(--border);
      background: var(--surface);
    }

    .tier-tab-btn.active {
      background: var(--yonah-navy);
      color: var(--text-on-dark);
      border-color: var(--yonah-navy);
    }

    [data-theme="dark"] .tier-tab-btn.active {
      background: var(--yonah-gold);
      color: var(--yonah-navy-dark);
      border-color: var(--yonah-gold);
    }

    .sidebar-search-box {
      padding: 0.6rem 0.8rem;
      border-bottom: 1px solid var(--border);
    }

    .search-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-input-field {
      width: 100%;
      height: 36px;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 0 0.8rem 0 2.2rem;
      font-size: 0.85rem;
      color: var(--text-main);
      outline: none;
    }

    .search-input-field:focus {
      border-color: var(--border-focus);
    }

    .search-icon-inside {
      position: absolute;
      left: 0.7rem;
      pointer-events: none;
      color: var(--text-muted);
    }

    .sidebar-scroll {
      flex: 1;
      overflow-y: auto;
      padding: 0.6rem 0.5rem;
    }

    .tier-group-header {
      padding: 0.7rem 0.6rem 0.3rem;
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--yonah-gold-dark);
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }

    .mod-group {
      margin-bottom: 0.35rem;
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    .mod-header-btn {
      width: 100%;
      text-align: left;
      padding: 0.55rem 0.65rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
      font-size: 0.84rem;
      color: var(--text-main);
      border-radius: var(--radius-md);
    }

    .mod-header-btn:hover {
      background: var(--surface-subtle);
    }

    .mod-header-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex: 1;
      overflow: hidden;
    }

    .badge-number {
      width: 22px;
      height: 22px;
      border-radius: var(--radius-full);
      background: var(--surface-subtle);
      color: var(--yonah-navy);
      font-size: 0.72rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    [data-theme="dark"] .badge-number {
      color: var(--yonah-gold);
    }

    .sec-list {
      list-style: none;
      padding: 0.2rem 0 0.2rem 1rem;
    }

    .sec-link-btn {
      width: 100%;
      text-align: left;
      padding: 0.45rem 0.65rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--text-muted);
      border-radius: var(--radius-sm);
      line-height: 1.35;
    }

    .sec-link-btn:hover {
      background: var(--surface-subtle);
      color: var(--text-main);
    }

    .sec-link-btn.active {
      background: rgba(11, 61, 92, 0.12);
      color: var(--yonah-navy);
      font-weight: 800;
    }

    [data-theme="dark"] .sec-link-btn.active {
      background: rgba(212, 162, 76, 0.2);
      color: var(--yonah-gold);
    }

    /* ZONE PRINCIPALE DE LECTURE */
    .main-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }

    .content-scrollable {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem 1rem 6rem;
      scroll-behavior: smooth;
    }

    .container-reading {
      max-width: 860px;
      margin: 0 auto;
    }

    /* BARRE INFÉRIEURE STICKY */
    .bottombar-sticky {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 64px;
      background: var(--surface);
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.25rem;
      box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);
      z-index: 40;
    }

    .btn-nav-touch {
      min-width: 110px;
      height: 44px;
      padding: 0 1rem;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.88rem;
      border: 1px solid var(--border);
      color: var(--text-main);
      background: var(--surface);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-nav-touch.primary {
      background: var(--yonah-navy);
      color: var(--text-on-dark);
      border-color: var(--yonah-navy);
    }

    [data-theme="dark"] .btn-nav-touch.primary {
      background: var(--yonah-gold);
      color: var(--yonah-navy-dark);
      border-color: var(--yonah-gold);
    }

    .btn-nav-touch:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .nav-pos-center {
      text-align: center;
      font-size: 0.78rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* FICHES BILINGUES OBLIGATOIRES */
    .def-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-left: 5px solid var(--yonah-gold);
      border-radius: var(--radius-md);
      padding: 1.25rem 1.4rem;
      margin: 1.25rem 0;
      box-shadow: var(--shadow-sm);
    }

    .def-card-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--yonah-navy);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    [data-theme="dark"] .def-card-title {
      color: var(--yonah-gold);
    }

    .def-row {
      margin-bottom: 0.6rem;
      font-size: 0.93rem;
      line-height: 1.6;
    }

    .def-label {
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: var(--text-main);
    }

    .def-label.expert { color: var(--yonah-navy-light); }
    .def-label.simple { color: var(--yonah-emerald); }
    .def-label.example { color: var(--yonah-gold-dark); }

    [data-theme="dark"] .def-label.expert { color: #93c5fd; }
    [data-theme="dark"] .def-label.simple { color: #34d399; }
    [data-theme="dark"] .def-label.example { color: #fbbf24; }

    /* ENCADRÉS SCIENTIFIQUES */
    .box-callout {
      border-radius: var(--radius-md);
      padding: 1.25rem 1.4rem;
      margin: 1.5rem 0;
      border-left: 5px solid transparent;
      box-shadow: var(--shadow-sm);
    }

    .box-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 800;
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .box-key {
      background: rgba(11, 61, 92, 0.08);
      border-left-color: var(--yonah-navy);
    }
    .box-key .box-header { color: var(--yonah-navy); }
    [data-theme="dark"] .box-key { background: rgba(11, 61, 92, 0.3); border-left-color: #3b82f6; }
    [data-theme="dark"] .box-key .box-header { color: #93c5fd; }

    .box-warning {
      background: var(--yonah-danger-light);
      border-left-color: var(--yonah-danger);
    }
    .box-warning .box-header { color: var(--yonah-danger); }
    [data-theme="dark"] .box-warning { background: rgba(197, 48, 48, 0.2); }

    .table-science {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.9rem;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .table-science th, .table-science td {
      padding: 0.8rem 1rem;
      border: 1px solid var(--border);
      text-align: left;
    }

    .table-science th {
      background: var(--yonah-navy);
      color: white;
      font-weight: 700;
    }

    [data-theme="dark"] .table-science th {
      background: #103753;
      color: var(--yonah-gold);
    }

    .table-science tr:nth-child(even) {
      background: var(--surface-subtle);
    }

    .tool-widget {
      background: var(--surface);
      border: 2px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      margin: 2rem 0;
      box-shadow: var(--shadow-md);
    }

    /* CAS PRATIQUES */
    .case-card {
      background: var(--surface);
      border: 2px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      margin: 2rem 0;
      box-shadow: var(--shadow-md);
    }

    .case-badge-banner {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--yonah-navy);
      color: var(--yonah-gold);
      padding: 0.3rem 0.8rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin-bottom: 0.75rem;
    }

    .case-title {
      font-size: 1.15rem;
      font-weight: 800;
      margin-bottom: 0.6rem;
      color: var(--text-main);
    }

    .case-desc {
      background: var(--surface-subtle);
      padding: 1rem;
      border-radius: var(--radius-md);
      margin-bottom: 1rem;
      font-size: 0.92rem;
      line-height: 1.6;
    }

    .case-textarea {
      width: 100%;
      height: 100px;
      padding: 0.8rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      background: var(--surface);
      color: var(--text-main);
      margin-bottom: 0.75rem;
      resize: vertical;
    }

    .case-expert-reveal {
      background: var(--yonah-emerald-light);
      border: 1px solid var(--yonah-emerald);
      border-radius: var(--radius-md);
      padding: 1.25rem;
      margin-top: 1rem;
    }

    [data-theme="dark"] .case-expert-reveal {
      background: rgba(14, 124, 102, 0.2);
    }

    /* CERTIFICAT OFFICIEL INFALSIFIABLE */
    .cert-wrap {
      background: #FFFFFF;
      color: #062335;
      border: 10px double #D4A24C;
      border-radius: var(--radius-md);
      padding: 3rem 2rem;
      margin: 2rem auto;
      max-width: 780px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
      position: relative;
    }

    .cert-seal-box {
      width: 80px;
      height: 80px;
      margin: 0 auto 1rem;
    }

    .cert-title-huge {
      font-size: 1.8rem;
      font-weight: 900;
      color: #0B3D5C;
      letter-spacing: 1px;
      margin-bottom: 0.4rem;
      text-transform: uppercase;
    }

    .cert-sub-text {
      font-size: 0.9rem;
      font-weight: 700;
      color: #D4A24C;
      margin-bottom: 1.5rem;
      letter-spacing: 0.5px;
    }

    .cert-recipient {
      font-size: 2rem;
      font-weight: 900;
      color: #062335;
      margin: 1rem 0;
      border-bottom: 2px solid #D4A24C;
      display: inline-block;
      padding: 0 2rem 0.3rem;
    }

    .cert-statement {
      max-width: 660px;
      margin: 0 auto 2rem;
      font-size: 0.98rem;
      line-height: 1.6;
      color: #2D3748;
    }

    .cert-meta-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      border-top: 1px solid #E2DBD0;
      padding-top: 1.5rem;
      font-size: 0.85rem;
      text-align: left;
    }

    .cert-signature-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5rem;
    }

    .cert-sig-svg {
      width: 140px;
      height: 50px;
    }

    .cheat-alert-modal {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .cheat-alert-card {
      background: var(--surface);
      max-width: 640px;
      width: 100%;
      border-radius: var(--radius-lg);
      padding: 2rem;
      text-align: left;
      border: 3px solid var(--yonah-navy);
      max-height: 90vh;
      overflow-y: auto;
    }

    /* =====================================================================
       PROTECTION PÉDAGOGIQUE & FILIGRANE D'IMPRESSION (MULTIPLE PAGES)
       ===================================================================== */
    .print-watermark-overlay {
      display: none;
    }
    .print-page-header-fixed {
      display: none;
    }
    .print-page-footer-fixed {
      display: none;
    }
    .lesson-print-header {
      display: none;
    }
    .lesson-print-footer {
      display: none;
    }

    /* Barre d'action et d'autorité sur chaque leçon (écran) */
    .lesson-action-topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.6rem;
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid var(--border);
    }
    .lat-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .lat-tier {
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--yonah-gold-dark);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .lat-badge {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--yonah-navy);
      background: var(--surface-subtle);
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-sm);
    }
    [data-theme="dark"] .lat-badge {
      color: var(--yonah-gold);
    }
    .lat-buttons {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .btn-action-touch {
      min-height: 40px;
      padding: 0 0.85rem;
      border-radius: var(--radius-md);
      font-size: 0.82rem;
      font-weight: 700;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--text-main);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s;
    }
    .btn-action-touch:hover {
      background: var(--surface-subtle);
      border-color: var(--yonah-gold);
    }
    .btn-action-touch.read {
      background: var(--yonah-emerald-light);
      color: var(--yonah-emerald);
      border-color: var(--yonah-emerald);
    }
    .btn-action-touch.btn-print-cta {
      background: var(--yonah-gold-light);
      color: var(--yonah-gold-dark);
      border-color: var(--yonah-gold);
    }
    [data-theme="dark"] .btn-action-touch.btn-print-cta {
      background: rgba(212, 162, 76, 0.2);
      color: var(--yonah-gold);
    }

    .lesson-auth-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
      background: var(--surface-subtle);
      border: 1px solid var(--border);
      border-left: 4px solid var(--yonah-gold);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius-md);
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--yonah-navy);
      margin-bottom: 1rem;
    }
    [data-theme="dark"] .lesson-auth-pill {
      color: var(--yonah-gold);
    }
    .lesson-auth-pill .auth-sep {
      opacity: 0.4;
    }

    .lesson-screen-footer {
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px dashed var(--border);
      text-align: center;
    }
    .lsf-copy {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
    }

    /* Hero d'accueil optimisé mobile */
    .home-hero-card {
      background: linear-gradient(135deg, #0B3D5C 0%, #062335 100%);
      color: white;
      border-radius: var(--radius-lg);
      padding: 2rem 1.25rem;
      border: 2px solid var(--yonah-gold);
      box-shadow: var(--shadow-lg);
      margin-bottom: 2rem;
      text-align: center;
    }
    .home-hero-pill {
      display: inline-block;
      background: rgba(212, 162, 76, 0.2);
      color: var(--yonah-gold);
      padding: 0.35rem 0.9rem;
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 800;
      margin-bottom: 0.85rem;
      letter-spacing: 0.5px;
    }
    .home-hero-title {
      font-size: 1.85rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 0.6rem;
    }
    .home-founder-tag {
      font-size: 0.92rem;
      color: var(--yonah-gold);
      margin-bottom: 0.85rem;
      font-weight: 600;
    }
    .home-founder-tag strong {
      color: #FFFFFF;
      font-weight: 800;
    }
    .home-hero-desc {
      font-size: 0.95rem;
      opacity: 0.92;
      max-width: 680px;
      margin: 0 auto 1rem;
      line-height: 1.6;
    }
    .home-pedagogical-notice {
      display: inline-block;
      border: 1px dashed var(--yonah-gold);
      background: rgba(212, 162, 76, 0.12);
      color: var(--yonah-gold);
      padding: 0.4rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.82rem;
      font-weight: 800;
      margin-bottom: 1.25rem;
      letter-spacing: 0.3px;
    }
    .home-name-box {
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md);
      padding: 1rem;
      max-width: 480px;
      margin: 0 auto 1.5rem;
    }
    .home-name-label {
      display: block;
      font-size: 0.82rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: var(--yonah-gold);
    }
    .home-name-input {
      width: 100%;
      height: 44px;
      padding: 0 0.75rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--yonah-gold);
      text-align: center;
      font-weight: 700;
      font-size: 1rem;
      background: #FFFFFF;
      color: #062335;
      outline: none;
    }
    .home-cta-row {
      display: flex;
      justify-content: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }
    .home-cta-row .btn-nav-touch {
      min-height: 48px;
      font-size: 0.92rem;
    }
    .home-btn-main {
      padding: 0 1.5rem;
    }
    .home-btn-sec {
      background: rgba(212, 162, 76, 0.25);
      color: var(--yonah-gold);
      border-color: var(--yonah-gold);
    }
    .home-btn-ter {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      border-color: var(--yonah-gold);
    }

    /* RÈGLES MOBILE-FIRST POUR SMARTPHONES */
    @media (max-width: 767px) {
      .topbar {
        padding: 0 0.5rem;
      }
      .brand-sub {
        display: none;
      }
      .brand-name {
        font-size: 1.05rem;
      }
      .btn-inst-label {
        display: none;
      }
      .icon-btn.btn-institution {
        padding: 0 0.5rem;
        min-width: 40px;
      }

      .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        width: 88%;
        max-width: 330px;
        box-shadow: var(--shadow-lg);
        z-index: 100;
        height: 100vh;
      }

      .sidebar.open {
        transform: translateX(0);
      }

      .sidebar-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(6, 35, 53, 0.65);
        z-index: 95;
        display: none;
        backdrop-filter: blur(2px);
      }

      .sidebar-backdrop.active {
        display: block;
      }

      .bottombar-sticky {
        height: 64px;
        padding: 0 0.6rem env(safe-area-inset-bottom, 0) 0.6rem;
      }
      .btn-nav-touch {
        min-width: 80px;
        height: 44px;
        padding: 0 0.65rem;
        font-size: 0.84rem;
      }
      .nav-pos-center {
        font-size: 0.72rem;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .home-hero-title {
        font-size: 1.45rem;
      }
      .home-hero-card {
        padding: 1.5rem 1rem;
      }
      .home-cta-row {
        flex-direction: column;
      }
      .home-cta-row .btn-nav-touch {
        width: 100%;
        justify-content: center;
      }

      .lesson-action-topbar {
        flex-direction: column;
        align-items: flex-start;
      }
      .lat-buttons {
        width: 100%;
        justify-content: space-between;
      }
      .lat-buttons .btn-action-touch {
        flex: 1;
        justify-content: center;
      }

      .table-science {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }

      .cert-wrap {
        padding: 1.75rem 1rem;
        margin: 1rem 0;
      }
      .cert-title-huge {
        font-size: 1.3rem;
      }
      .cert-recipient {
        font-size: 1.45rem;
        padding: 0 0.5rem 0.25rem;
      }
      .cert-meta-grid {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 0.75rem;
      }
    }

    @media (min-width: 768px) {
      .menu-hamburger-btn {
        display: none;
      }
      .sidebar-close-btn {
        display: none !important;
      }
    }

    /* =====================================================================
       LECTEUR AUDIO & SYNTHÈSE VOCALE LOCALE (WEB SPEECH)
       ===================================================================== */
    .btn-audio-cta {
      background: var(--yonah-navy);
      color: white;
      border-color: var(--yonah-navy);
    }
    .btn-audio-cta:hover {
      background: var(--yonah-navy-light);
    }

    .lesson-audio-bar {
      background: var(--surface);
      border: 1.5px solid var(--yonah-gold);
      border-radius: var(--radius-md);
      padding: 0.85rem 1rem;
      margin-bottom: 1.25rem;
      box-shadow: var(--shadow-sm);
      animation: labSlideDown 0.25s ease-out;
    }

    @keyframes labSlideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .lab-main-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .lab-status {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      min-width: 170px;
    }

    .lab-wave {
      display: flex;
      align-items: flex-end;
      gap: 3px;
      height: 20px;
      padding: 2px 0;
    }
    .lab-wave span {
      display: block;
      width: 3.5px;
      background: var(--yonah-gold);
      border-radius: 2px;
      height: 6px;
      transition: height 0.15s ease;
    }
    .lab-wave.speaking span:nth-child(1) { animation: waveAnim 0.7s infinite alternate ease-in-out; }
    .lab-wave.speaking span:nth-child(2) { animation: waveAnim 0.5s infinite 0.2s alternate ease-in-out; }
    .lab-wave.speaking span:nth-child(3) { animation: waveAnim 0.8s infinite 0.4s alternate ease-in-out; }
    .lab-wave.speaking span:nth-child(4) { animation: waveAnim 0.6s infinite 0.1s alternate ease-in-out; }

    @keyframes waveAnim {
      0% { height: 4px; }
      100% { height: 18px; }
    }

    .lab-text {
      display: flex;
      flex-direction: column;
    }
    .lab-title {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--yonah-navy);
    }
    .lab-sub {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .lab-controls {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .lab-mode-btn {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.35rem 0.6rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
      background: var(--surface-subtle);
      color: var(--text-main);
      cursor: pointer;
      transition: all 0.2s;
    }
    .lab-mode-btn.active {
      background: var(--yonah-navy);
      color: white;
      border-color: var(--yonah-navy);
    }

    .lab-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--yonah-navy);
      cursor: pointer;
      transition: all 0.2s;
    }
    .lab-btn:hover {
      background: var(--surface-subtle);
    }
    .lab-btn-play {
      background: var(--yonah-gold);
      border-color: var(--yonah-gold-dark);
      color: var(--yonah-navy-dark);
      font-weight: 900;
    }
    .lab-btn-play:hover {
      background: #c7943f;
    }

    .lab-speed-select {
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.35rem 0.5rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--yonah-navy);
      cursor: pointer;
    }

    .lab-progress-track {
      width: 100%;
      height: 4px;
      background: var(--border);
      border-radius: 2px;
      margin-top: 0.65rem;
      overflow: hidden;
    }
    .lab-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--yonah-navy), var(--yonah-gold));
      border-radius: 2px;
      transition: width 0.2s ease;
    }

    /* =====================================================================
       RÈGLES D'IMPRESSION RIGILITÉ & FILIGRANE SUR TOUTES LES PAGES
       ===================================================================== */
    @page {
      size: A4 portrait;
      margin: 18mm 14mm 18mm 14mm;
      @top-center {
        content: "YONAH — Propriété pédagogique de Guede Camus SALOMON";
        font-size: 8pt;
        font-weight: 700;
        color: #4A5568;
        border-bottom: 0.5pt solid #D4A24C;
        padding-bottom: 3pt;
      }
      @bottom-center {
        content: "« YONAH — Propriété pédagogique de Guede Camus SALOMON » • Contact : +225 0779638812";
        font-size: 8pt;
        font-weight: 700;
        color: #4A5568;
        border-top: 0.5pt solid #D4A24C;
        padding-top: 3pt;
      }
    }

    @media print {
      body {
        background: white !important;
        color: black !important;
        font-size: 11pt !important;
        line-height: 1.5 !important;
      }
      .topbar, .sidebar, .sidebar-backdrop, .bottombar-sticky, .toast, .btn-print-hide, .home-cta-row, .cheat-alert-modal, #modalSlot {
        display: none !important;
      }
      #appWrapper, .main-area, .content-scrollable, .container-reading {
        display: block !important;
        height: auto !important;
        max-width: 100% !important;
        width: 100% !important;
        overflow: visible !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /* FILIGRANE RÉPÉTÉ SUR TOUTES LES PAGES PAR POSITION: FIXED */
      .print-watermark-overlay {
        display: flex !important;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 99999 !important;
        pointer-events: none !important;
        overflow: hidden !important;
        opacity: 0.17 !important;
        transform: rotate(-30deg) scale(1.15);
      }

      .print-watermark-row {
        font-size: 19pt !important;
        font-weight: 900 !important;
        color: #0B3D5C !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        white-space: nowrap !important;
        text-align: center !important;
        user-select: none !important;
        -webkit-user-select: none !important;
        margin: 18mm 0 !important;
      }

      .print-page-header-fixed {
        display: block !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 15pt !important;
        font-size: 7.5pt !important;
        font-weight: 800 !important;
        color: #0B3D5C !important;
        border-bottom: 0.75pt solid #D4A24C !important;
        background: white !important;
        text-align: center !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
        padding-bottom: 2pt !important;
      }

      .print-page-footer-fixed {
        display: block !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 15pt !important;
        font-size: 7.5pt !important;
        font-weight: 700 !important;
        color: #4A5568 !important;
        border-top: 0.75pt solid #D4A24C !important;
        background: white !important;
        text-align: center !important;
        padding-top: 2pt !important;
      }

      .lesson-print-header {
        display: block !important;
        border: 1.5pt solid #0B3D5C !important;
        border-left: 6pt solid #D4A24C !important;
        background: #F8F5EE !important;
        padding: 8pt 12pt !important;
        margin-bottom: 14pt !important;
        border-radius: 4pt !important;
      }
      .lesson-print-header .lph-inst {
        font-size: 11pt !important;
        font-weight: 900 !important;
        color: #0B3D5C !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
      }
      .lesson-print-header .lph-prop {
        font-size: 9pt !important;
        font-weight: 800 !important;
        color: #D4A24C !important;
        margin-top: 2pt !important;
      }
      .lesson-print-header .lph-meta {
        font-size: 8pt !important;
        color: #4A5568 !important;
        margin-top: 2pt !important;
      }

      .lesson-print-footer {
        display: block !important;
        border-top: 1pt dashed #0B3D5C !important;
        margin-top: 20pt !important;
        padding-top: 8pt !important;
        text-align: center !important;
        font-size: 8.5pt !important;
        font-weight: 800 !important;
        color: #0B3D5C !important;
        page-break-inside: avoid !important;
      }

      .def-card, .box-callout, .case-card, .tool-widget {
        page-break-inside: avoid !important;
        border-width: 1pt !important;
        box-shadow: none !important;
      }

      .table-science {
        min-width: 100% !important;
        page-break-inside: auto !important;
      }
      .table-science tr {
        page-break-inside: avoid !important;
      }

      .cert-wrap {
        border-width: 5px !important;
        box-shadow: none !important;
        page-break-inside: avoid !important;
        margin: 0 auto !important;
      }
    }
  </style>
</head>
<body>
  <div id="appWrapper">
    <div id="sideBackdrop" class="sidebar-backdrop" onclick="app.closeSidebar()"></div>

    <aside id="sidebar" class="sidebar">
      <div class="sidebar-user-card">
        <div class="user-avatar-badge" onclick="app.promptUserName()" style="cursor: pointer;" title="Cliquer pour changer de nom">
          <div class="avatar-circle" id="userAvatar">Y</div>
          <div class="user-info-text">
            <span class="user-name-display" id="userNameDisplay">Apprenant Yonah</span>
            <span class="user-level-badge" id="userLevelDisplay">Niveau 1 : Débutant</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.25rem;">
          <button class="icon-btn" onclick="app.promptUserName()" title="Modifier mon profil" style="color: var(--text-muted); width: 36px; height: 36px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <button class="icon-btn sidebar-close-btn" onclick="app.closeSidebar()" title="Fermer le menu" aria-label="Fermer" style="color: var(--yonah-gold); width: 36px; height: 36px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      <div class="sidebar-level-filters">
        <button class="tier-tab-btn active" id="tabTier-ALL" onclick="app.filterByTier('ALL')">Tous (38)</button>
        <button class="tier-tab-btn" id="tabTier-DEBUTANT" onclick="app.filterByTier('DEBUTANT')">🟢 Débutant (1-8)</button>
        <button class="tier-tab-btn" id="tabTier-INTERMEDIAIRE" onclick="app.filterByTier('INTERMEDIAIRE')">🟡 Interm. (9-16)</button>
        <button class="tier-tab-btn" id="tabTier-AVANCE" onclick="app.filterByTier('AVANCE')">🟠 Avancé (17-24)</button>
        <button class="tier-tab-btn" id="tabTier-EXPERT" onclick="app.filterByTier('EXPERT')">🔴 Expert (25-30)</button>
        <button class="tier-tab-btn" id="tabTier-TRACKS" onclick="app.filterByTier('TRACKS')">🎯 Spécialisations (8 Tracks)</button>
      </div>

      <div class="sidebar-search-box">
        <div class="search-wrap">
          <svg class="search-icon-inside" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="courseSearchInput" class="search-input-field" placeholder="Rechercher (ADME, ATC, Vaccin, TDR...)" oninput="app.filterContent(this.value)">
        </div>
      </div>

      <nav class="sidebar-scroll" id="sidebarModuleList"></nav>
    </aside>

    <div class="main-area">
      <header class="topbar">
        <div class="brand-group" onclick="app.showHome()">
          <button class="icon-btn menu-hamburger-btn" onclick="event.stopPropagation(); app.toggleSidebar();" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          
          <svg class="brand-logo-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#062335" stroke="#D4A24C" stroke-width="3"/>
            <path d="M50 18 L55 28 L66 28 L57 35 L61 46 L50 39 L39 46 L43 35 L34 28 L45 28 Z" fill="#D4A24C"/>
            <path d="M50 38 L50 78" stroke="#D4A24C" stroke-width="4" stroke-linecap="round"/>
            <path d="M50 48 C62 44, 62 58, 50 60 C38 62, 38 72, 50 74" stroke="#0E7C66" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <circle cx="50" cy="36" r="4" fill="#D4A24C"/>
          </svg>

          <div class="brand-text">
            <span class="brand-name">YONAH</span>
            <span class="brand-sub">Institut d'Excellence • 30M + 8 Tracks</span>
          </div>
        </div>

        <div class="topbar-actions">
          <button class="icon-btn btn-institution" onclick="app.showInstitutionalModal()" title="À propos de l'Institut YONAH & Fondateur">
            <span class="btn-inst-icon">🏛️</span>
            <span class="btn-inst-label">À propos</span>
          </button>
          <button class="icon-btn btn-print-quick" onclick="window.print()" title="Imprimer la page / Télécharger en PDF (avec filigrane)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </button>
          <button class="icon-btn" onclick="app.toggleTheme()" title="Thème clair / sombre">
            <svg id="themeIconSvg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          </button>
          <button class="icon-btn" onclick="app.showVerifyModal()" title="Vérifier un certificat Yonah">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </button>
          <button class="icon-btn" onclick="app.exportDataJson()" title="Exporter mes données">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
        </div>
      </header>

      <main class="content-scrollable" id="mainContentScroll">
        <div class="container-reading" id="readingContainer"></div>
      </main>

      <footer class="bottombar-sticky" id="bottomNav">
        <button id="btnNavPrev" class="btn-nav-touch" onclick="app.navigateOffset(-1)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          <span>Précédent</span>
        </button>

        <div class="nav-pos-center">
          <span id="navPosText">Tableau de bord</span>
        </div>

        <button id="btnNavNext" class="btn-nav-touch primary" onclick="app.navigateOffset(1)">
          <span>Suivant</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </footer>
    </div>
  </div>

  <!-- FILIGRANE MULTI-PAGES OFFICIEL POUR TOUTE IMPRESSION (POSITION FIXED DANS MEDIA PRINT) -->
  <div class="print-watermark-overlay" aria-hidden="true">
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
    <div class="print-watermark-row">YONAH — Propriété pédagogique de Guede Camus SALOMON</div>
  </div>

  <div class="print-page-header-fixed" aria-hidden="true">
    YONAH — Propriété pédagogique de Guede Camus SALOMON • Institut d'Excellence YONAH
  </div>
  <div class="print-page-footer-fixed" aria-hidden="true">
    « YONAH — Propriété pédagogique de Guede Camus SALOMON » • Contact : +225 0779638812
  </div>

  <div id="toastMessage" style="position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%) translateY(20px); background: #0B3D5C; color: white; border: 1px solid #D4A24C; padding: 0.6rem 1.25rem; border-radius: 9999px; font-size: 0.88rem; font-weight: 700; opacity: 0; pointer-events: none; transition: all 0.25s; z-index: 90; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
    Action validée
  </div>

  <div id="modalSlot"></div>

  <!-- =====================================================================
       MOTEUR JS : CURRICULUM OFFICIEL & SURVEILLANCE D'EXAMEN
       ===================================================================== -->
  <script>
    const TIERS_META = {
      DEBUTANT: { name: "🟢 NIVEAU 1 — DÉBUTANT", range: "Modules 1 à 8", duration: "15–20 h", focus: "Fondations : métier, médicament, corps humain, maladie, pharmacologie de base" },
      INTERMEDIAIRE: { name: "🟡 NIVEAU 2 — INTERMÉDIAIRE", range: "Modules 9 à 16", duration: "15–20 h", focus: "Application : ATC, classes thérapeutiques, interactions, visite médicale" },
      AVANCE: { name: "🟠 NIVEAU 3 — AVANCÉ", range: "Modules 17 à 24", duration: "15–20 h", focus: "Maîtrise : argumentaire EBM, territoire, KOL, éthique, CRM, veille" },
      EXPERT: { name: "🔴 NIVEAU 4 — EXPERT", range: "Modules 25 à 30", duration: "12–18 h", focus: "Excellence : leadership, mentorat, crise, stratégie, certification finale" },
      TRACKS: { name: "🎯 ÉTAGE 2 — TRACKS DE SPÉCIALISATION", range: "8 Tracks d'Élite", duration: "20–30 h", focus: "Spécialisations : Vaccins, Dispositifs médicaux, OTC/Dermo, MSL, Santé publique, Marchés publics" }
    };

    const INSTITUTIONAL_INFO = ${JSON.stringify(INSTITUTIONAL_DATA)};
    const YONAH_COURSE_DATA = ${JSON.stringify(allModules)};
    const EXAM_QUESTION_BANK = ${JSON.stringify(EXAM_QUESTION_BANK)};

    class YonahTrainingEngine {
      constructor() {
        this.currentSectionId = "home";
        this.activeTierFilter = "ALL";
        this.userName = "";
        this.readSections = [];
        this.bookmarks = [];
        this.moduleQuizScores = {};
        this.userCaseAnswers = {};
        this.violations = [];
        this.isDarkMode = false;
        this.examInProgress = false;
        this.examTimerSec = 3600; // 60 minutes
        this.examInterval = null;
        this.examQuestionsActive = [];
        this.examUserAnswers = {};
        this.examResult = null;
        this.flatSections = [];
        this.blurTimeout = null;

        this.initAudioSystem();
        this.initFlatList();
        this.loadStorage();
        this.applyTheme();
        this.renderSidebar();
        this.renderCurrentView();
        this.bindEvents();
      }

      initFlatList() {
        this.flatSections = [];
        YONAH_COURSE_DATA.forEach((mod) => {
          mod.sections.forEach((sec) => {
            this.flatSections.push({
              ...sec,
              moduleId: mod.id,
              moduleTier: mod.tier,
              moduleBadge: mod.badge,
              moduleTitle: mod.title
            });
          });
        });
      }

      loadStorage() {
        try {
          const raw = localStorage.getItem("yonah_dm_v4_store") || localStorage.getItem("yonah_dm_v3_store");
          if (raw) {
            const data = JSON.parse(raw);
            this.userName = data.userName || "";
            this.readSections = Array.isArray(data.readSections) ? data.readSections : [];
            this.bookmarks = Array.isArray(data.bookmarks) ? data.bookmarks : [];
            this.moduleQuizScores = data.moduleQuizScores || {};
            this.userCaseAnswers = data.userCaseAnswers || {};
            this.isDarkMode = Boolean(data.isDarkMode);
            this.examResult = data.examResult || null;
            this.currentSectionId = data.lastSec || "home";
          }
        } catch (e) {
          console.warn("Storage load error", e);
        }
      }

      saveStorage() {
        try {
          const payload = {
            userName: this.userName,
            readSections: this.readSections,
            bookmarks: this.bookmarks,
            moduleQuizScores: this.moduleQuizScores,
            userCaseAnswers: this.userCaseAnswers,
            isDarkMode: this.isDarkMode,
            examResult: this.examResult,
            lastSec: this.currentSectionId
          };
          localStorage.setItem("yonah_dm_v4_store", JSON.stringify(payload));
        } catch (e) {
          console.warn("Storage save error", e);
        }
      }

      applyTheme() {
        if (this.isDarkMode) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
      }

      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveStorage();
        this.showToast(this.isDarkMode ? "Mode sombre activé" : "Mode clair activé");
      }

      showToast(text) {
        const el = document.getElementById("toastMessage");
        if (!el) return;
        el.textContent = text;
        el.style.opacity = "1";
        el.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => {
          el.style.opacity = "0";
          el.style.transform = "translateX(-50%) translateY(20px)";
        }, 2200);
      }

      toggleSidebar() {
        const sb = document.getElementById("sidebar");
        const bd = document.getElementById("sideBackdrop");
        sb?.classList.toggle("open");
        bd?.classList.toggle("active");
      }

      closeSidebar() {
        const sb = document.getElementById("sidebar");
        const bd = document.getElementById("sideBackdrop");
        sb?.classList.remove("open");
        bd?.classList.remove("active");
      }

      promptUserName() {
        const cur = this.userName || "Apprenant";
        const val = prompt("Entrez votre Nom et Prénom pour la certification Yonah :", cur);
        if (val && val.trim()) {
          this.userName = val.trim();
          this.saveStorage();
          this.updateUserBadge();
          this.showToast("Profil apprenant mis à jour");
        }
      }

      updateUserBadge() {
        const elName = document.getElementById("userNameDisplay");
        const elAvatar = document.getElementById("userAvatar");
        const elLvl = document.getElementById("userLevelDisplay");
        const dispName = this.userName || "Apprenant Yonah";
        if (elName) elName.textContent = dispName;
        if (elAvatar) elAvatar.textContent = dispName.charAt(0).toUpperCase();

        const xp = this.readSections.length * 40 + Object.keys(this.moduleQuizScores).length * 120 + (this.examResult?.passed ? 1500 : 0);
        let lvl = "🟢 Niveau 1 : Débutant";
        if (xp >= 3500 || this.examResult?.passed) lvl = "🔴 Niveau 4 : Expert Certifié";
        else if (xp >= 2200) lvl = "🟠 Niveau 3 : Avancé";
        else if (xp >= 900) lvl = "🟡 Niveau 2 : Intermédiaire";

        if (elLvl) elLvl.textContent = \`\${lvl} (\${xp} XP)\`;
      }

      calculateProgress() {
        const total = this.flatSections.length;
        if (total === 0) return 0;
        const read = new Set(this.readSections).size;
        return Math.min(100, Math.round((read / total) * 100));
      }

      filterByTier(tierKey) {
        this.activeTierFilter = tierKey;
        document.querySelectorAll(".tier-tab-btn").forEach((b) => b.classList.remove("active"));
        document.getElementById(\`tabTier-\${tierKey}\`)?.classList.add("active");
        this.renderSidebar();
      }

      showHome() {
        if (this.examInProgress) return;
        this.audioStop();
        this.currentSectionId = "home";
        this.saveStorage();
        this.closeSidebar();
        this.renderCurrentView();
        this.renderSidebar();
      }

      goToSection(id) {
        if (this.examInProgress && id !== "m30-exam") {
          alert("Examen en cours ! Terminez ou soumettez l'épreuve avant de naviguer.");
          return;
        }
        this.audioStop();
        this.currentSectionId = id;
        this.saveStorage();
        this.closeSidebar();
        this.renderCurrentView();
        this.renderSidebar();
        document.getElementById("mainContentScroll")?.scrollTo({ top: 0, behavior: "smooth" });
      }

      navigateOffset(offset) {
        if (this.examInProgress) return;
        if (this.currentSectionId === "home") {
          if (offset > 0 && this.flatSections.length > 0) {
            this.goToSection(this.flatSections[0].id);
          }
          return;
        }
        const idx = this.flatSections.findIndex((s) => s.id === this.currentSectionId);
        if (idx === -1) return;
        const target = idx + offset;
        if (target < 0) {
          this.showHome();
        } else if (target < this.flatSections.length) {
          this.goToSection(this.flatSections[target].id);
        }
      }

      toggleSectionRead(id) {
        if (this.readSections.includes(id)) {
          this.readSections = this.readSections.filter((x) => x !== id);
          this.showToast("Section marquée comme non lue");
        } else {
          this.readSections.push(id);
          this.showToast("Section validée ! +40 XP");
        }
        this.saveStorage();
        this.updateUserBadge();
        this.renderSidebar();
        this.renderCurrentView();
      }

      renderSidebar() {
        const nav = document.getElementById("sidebarModuleList");
        if (!nav) return;
        this.updateUserBadge();

        let html = \`
          <div class="mod-group">
            <button class="sec-link-btn \${this.currentSectionId === "home" ? "active" : ""}" onclick="app.showHome()">
              <span>🏠 Tableau de bord global</span>
            </button>
          </div>
        \`;

        const tiers = ["DEBUTANT", "INTERMEDIAIRE", "AVANCE", "EXPERT", "TRACKS"];

        tiers.forEach((tKey) => {
          if (this.activeTierFilter !== "ALL" && this.activeTierFilter !== tKey) return;
          const tMeta = TIERS_META[tKey];
          const modsInTier = YONAH_COURSE_DATA.filter((m) => m.tier === tKey);

          html += \`
            <div class="tier-group-header">
              <span>\${tMeta.name}</span>
            </div>
          \`;

          modsInTier.forEach((mod) => {
            html += \`
              <div class="mod-group" id="modBox-\${mod.id}">
                <button class="mod-header-btn" onclick="app.toggleModCollapse(\${mod.id})">
                  <div class="mod-header-title">
                    <span class="badge-number">\${mod.id > 100 ? 'T' + (mod.id - 100) : mod.id}</span>
                    <span style="line-height:1.2; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:230px;">\${mod.title.replace(/^Module \\d+ : |^Track \\d+ : /, '')}</span>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <ul class="sec-list">
            \`;

            mod.sections.forEach((sec) => {
              const isActive = sec.id === this.currentSectionId;
              const isRead = this.readSections.includes(sec.id);
              html += \`
                <li>
                  <button class="sec-link-btn \${isActive ? "active" : ""}" onclick="app.goToSection('\${sec.id}')">
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:220px;">\${sec.title}</span>
                    \${isRead ? '<span style="color:var(--yonah-emerald); font-weight:800;">✓</span>' : ''}
                  </button>
                </li>
              \`;
            });

            html += \`</ul></div>\`;
          });
        });

        nav.innerHTML = html;
      }

      toggleModCollapse(modId) {
        const el = document.getElementById(\`modBox-\${modId}\`);
        el?.classList.toggle("collapsed");
      }

      renderCurrentView() {
        const mount = document.getElementById("readingContainer");
        const posText = document.getElementById("navPosText");
        const btnPrev = document.getElementById("btnNavPrev");
        const btnNext = document.getElementById("btnNavNext");
        if (!mount) return;

        if (this.currentSectionId === "home") {
          this.renderHome(mount);
          if (posText) posText.textContent = "Parcours 30M + 8 Tracks";
          if (btnPrev) btnPrev.disabled = true;
          if (btnNext) {
            btnNext.disabled = false;
            btnNext.querySelector("span").textContent = "Commencer";
          }
          return;
        }

        const sec = this.flatSections.find((s) => s.id === this.currentSectionId);
        if (!sec) return;

        const idx = this.flatSections.findIndex((s) => s.id === sec.id);
        const total = this.flatSections.length;
        if (posText) posText.textContent = \`Section \${idx + 1} / \${total}\`;
        if (btnPrev) btnPrev.disabled = false;
        if (btnNext) {
          btnNext.disabled = idx === total - 1;
          btnNext.querySelector("span").textContent = idx === total - 1 ? "Fin" : "Suivant";
        }

        const isRead = this.readSections.includes(sec.id);
        const tMeta = TIERS_META[sec.moduleTier] || TIERS_META.DEBUTANT;

        let html = \`
          <!-- EN-TÊTE OFFICIEL POUR IMPRESSION (VISIBLE UNIQUEMENT À L'IMPRESSION) -->
          <div class="lesson-print-header">
            <div class="lph-inst">INSTITUT D'EXCELLENCE YONAH</div>
            <div class="lph-prop">« YONAH — Propriété pédagogique de Guede Camus SALOMON »</div>
            <div class="lph-meta">Initiateur de l'idée de YONAH • Contact : +225 0779638812 • \${sec.moduleBadge} : \${sec.moduleTitle}</div>
          </div>

          <!-- BARRE D'ACTIONS ÉCRAN AVEC COMMANDE D'IMPRESSION RAPIDE -->
          <div class="lesson-action-topbar btn-print-hide">
            <div class="lat-info">
              <span class="lat-tier">\${tMeta.name}</span>
              <span class="lat-badge">\${sec.moduleBadge}</span>
            </div>
            <div class="lat-buttons">
              <button class="btn-action-touch btn-audio-cta" onclick="app.toggleAudioPlayer()" title="Écouter le cours en synthèse vocale (100% hors-ligne)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                <span>Écouter</span>
              </button>
              <button class="btn-action-touch btn-print-cta" onclick="window.print()" title="Imprimer cette leçon ou l'enregistrer en PDF avec filigrane protégé">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                <span>Imprimer / PDF</span>
              </button>
              <button class="btn-action-touch \${isRead ? 'read' : ''}" onclick="app.toggleSectionRead('\${sec.id}')">
                \${isRead ? '✓ Validé (+40 XP)' : 'Marquer comme lu'}
              </button>
            </div>
          </div>

          <!-- LECTEUR AUDIO DU COURS -->
          <div id="lessonAudioBar" class="lesson-audio-bar btn-print-hide" style="display:none;">
            <div class="lab-main-row">
              <div class="lab-status">
                <div class="lab-wave" id="labSoundWave">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div class="lab-text">
                  <span class="lab-title" id="labTitleText">Synthèse Vocale YONAH</span>
                  <span class="lab-sub" id="labStatusText">Prêt pour la lecture</span>
                </div>
              </div>

              <div class="lab-controls">
                <div style="display:flex; gap:0.25rem;">
                  <button class="lab-mode-btn active" id="labModeExpress" onclick="app.setAudioMode('express')" title="Écouter la synthèse flash de 90 secondes">🎙️ Synthèse Flash</button>
                  <button class="lab-mode-btn" id="labModeFull" onclick="app.setAudioMode('full')" title="Écouter l'intégralité du cours">📖 Cours complet</button>
                </div>
                <button class="lab-btn lab-btn-play" id="labBtnPlay" onclick="app.audioPlayPause()" title="Lecture / Pause">
                  <svg id="labIconPlay" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <button class="lab-btn" onclick="app.audioStop()" title="Arrêter la lecture">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"/></svg>
                </button>
                <select class="lab-speed-select" id="labSpeedSelect" onchange="app.setAudioSpeed(this.value)" title="Vitesse de lecture">
                  <option value="0.85">0.85x</option>
                  <option value="1.0" selected>1.0x</option>
                  <option value="1.2">1.2x</option>
                </select>
                <button class="icon-btn" onclick="app.closeAudioBar()" title="Fermer le lecteur" style="width:32px; height:32px; font-weight:800; color:var(--text-muted);">✕</button>
              </div>
            </div>
            <div class="lab-progress-track">
              <div class="lab-progress-fill" id="labProgressFill" style="width: 0%;"></div>
            </div>
          </div>

          <h1 style="font-size:1.6rem; font-weight:900; color:var(--text-main); margin-bottom:1.25rem; line-height:1.25;">\${sec.title}</h1>
          <div class="lesson-body-content" style="font-size:1.02rem; line-height:1.75; color:var(--text-main);">
            \${sec.html || ''}
          </div>

          <!-- PIED DE PAGE D'IMPRESSION DU SUPPORT (VISIBLE UNIQUEMENT À L'IMPRESSION) -->
          <div class="lesson-print-footer">
            « YONAH — Propriété pédagogique de Guede Camus SALOMON » • Contact : +225 0779638812 • Institut d'Excellence YONAH
          </div>
        \`;

        mount.innerHTML = html;

        if (sec.isCase) {
          this.mountCaseStudy(sec);
        } else if (sec.isQuiz) {
          this.mountModuleQuiz(sec.quizModuleId);
        } else if (sec.isExamContract) {
          this.mountExamContract();
        } else if (sec.isFinalExamSession) {
          this.mountExamSession();
        } else if (sec.isCertificateView) {
          this.mountCertificateView();
        }
      }

      renderHome(mount) {
        const pct = this.calculateProgress();

        mount.innerHTML = \`
          <div class="home-hero-card">
            <div class="home-hero-pill">
              INSTITUT D'EXCELLENCE YONAH • PARCOURS DE RÉFÉRENCE
            </div>
            <h1 class="home-hero-title">
              Délégué Médical : Du Débutant à l'Expert
            </h1>
            <p class="home-hero-desc">
              Programme certifiant d'excellence : <strong>30 modules fondamentaux</strong> et <strong>8 tracks de spécialisation</strong>. Pharmacologie fondamentale, physiopathologie, classification ATC, CIM-11, interactions médicamenteuses et visite médicale de terrain.
            </p>

            <div class="home-name-box">
              <label class="home-name-label">
                Nom & Prénom de l'apprenant (pour la certification) :
              </label>
              <input type="text" id="homeNameInput" value="\${this.userName}" placeholder="ex : KOUASSI Yao Emmanuel" class="home-name-input" onchange="app.saveHomeName(this.value)">
            </div>

            <div class="home-cta-row">
              <button class="btn-nav-touch primary home-btn-main" onclick="app.navigateOffset(1)">
                \${pct > 0 ? "Reprendre ma formation (" + pct + "%)" : "Commencer le Module 1"}
              </button>
              <button class="btn-nav-touch home-btn-sec" onclick="app.showInstitutionalModal()">
                🏛️ À propos de l'Institut
              </button>
              <button class="btn-nav-touch home-btn-ter" onclick="app.goToSection('m30-integrity')">
                🎓 Examen & Certificat
              </button>
            </div>
          </div>

          <h2 style="font-size:1.35rem; font-weight:800; margin-bottom:1rem; color:var(--text-main);">Curriculum d'Excellence : 4 Niveaux & Spécialisations</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:1rem; margin-bottom:2.5rem;">
            \${Object.keys(TIERS_META).map((tKey) => {
              const t = TIERS_META[tKey];
              const mods = YONAH_COURSE_DATA.filter((m) => m.tier === tKey);
              return \`
                <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-md); padding:1.25rem; box-shadow:var(--shadow-sm); cursor:pointer;" onclick="app.filterByTier('\${tKey}'); app.goToSection('\${mods[0].sections[0].id}')">
                  <div style="font-size:0.78rem; font-weight:800; color:var(--yonah-gold-dark); margin-bottom:0.3rem;">\${t.range} • \${t.duration}</div>
                  <h3 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin-bottom:0.4rem;">\${t.name}</h3>
                  <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">\${t.focus}</p>
                </div>
              \`;
            }).join('')}
          </div>
        \`;
      }

      saveHomeName(val) {
        this.userName = val.trim();
        this.saveStorage();
        this.updateUserBadge();
        this.showToast("Nom enregistré pour la certification");
      }

      runAdmeCalc() {
        const inp = document.getElementById("calcT12Input");
        const resEl = document.getElementById("admeCalcResult");
        if (!inp || !resEl) return;
        const t12 = parseFloat(inp.value) || 12;
        const ss = (t12 * 5).toFixed(1);
        const el = (t12 * 7).toFixed(1);
        resEl.innerHTML = \`<strong>Résultats cinétiques pour T1/2 = \${t12}h :</strong><br>• État d'équilibre (Steady-State 97%) : <strong>\${ss}h</strong> (5 demi-vies)<br>• Élimination complète (>99%) : <strong>\${el}h</strong> (7 demi-vies).<br><em>Règle Yonah : Pour une T1/2 > 20h, une seule prise matinale assure une couverture constante sur 24h.</em>\`;
      }

      mountCaseStudy(sec) {
        const box = document.createElement("div");
        box.className = "case-card";
        const savedAns = this.userCaseAnswers[sec.caseId] || "";

        box.innerHTML = \`
          <div class="case-badge-banner">CAS PRATIQUE DE TERRAIN</div>
          <div class="case-title">\${sec.title}</div>
          <div class="case-desc">
            <strong>Contexte :</strong> \${sec.caseContext}<br><br>
            <strong>Problème opérationnel :</strong> \${sec.caseProblem}
          </div>
          <label style="display:block; font-size:0.88rem; font-weight:700; margin-bottom:0.4rem;">Votre décision opérationnelle :</label>
          <textarea id="caseInput-\${sec.caseId}" class="case-textarea" placeholder="Rédigez ici ce que vous dites et faites concrètement...">\${savedAns}</textarea>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <button class="btn-nav-touch" onclick="app.saveCaseAnswer('\${sec.caseId}')">Enregistrer ma réponse</button>
            <button class="btn-nav-touch primary" onclick="app.revealCaseExpert('\${sec.caseId}')">Voir la réponse modèle YONAH</button>
          </div>
          <div id="caseRevealBox-\${sec.caseId}" style="display:\${savedAns ? 'block' : 'none'};">
            <div class="case-expert-reveal">
              <strong style="color:var(--yonah-emerald); display:block; margin-bottom:0.4rem;">✓ Réponse Modèle Pédagogique YONAH :</strong>
              <p style="font-size:0.95rem; line-height:1.6;">\${sec.expertAnswer}</p>
              <div class="box-callout box-key" style="margin-top:0.8rem; margin-bottom:0;">
                <div class="box-header">Points clés à retenir</div>
                <p style="font-size:0.9rem;">\${sec.keyTakeaways}</p>
              </div>
            </div>
          </div>
        \`;

        document.getElementById("readingContainer")?.appendChild(box);
      }

      saveCaseAnswer(caseId) {
        const input = document.getElementById(\`caseInput-\${caseId}\`);
        if (!input) return;
        this.userCaseAnswers[caseId] = input.value.trim();
        this.saveStorage();
        this.showToast("Réponse sauvegardée dans votre dossier");
      }

      revealCaseExpert(caseId) {
        this.saveCaseAnswer(caseId);
        const el = document.getElementById(\`caseRevealBox-\${caseId}\`);
        if (el) el.style.display = "block";
      }

      mountModuleQuiz(modId) {
        const box = document.createElement("div");
        box.className = "case-card";
        const questions = EXAM_QUESTION_BANK.filter((q) => (q.id % 30) === (modId % 30) || (q.id % 10) === (modId % 10)).slice(0, 3);
        const qList = questions.length ? questions : EXAM_QUESTION_BANK.slice(0, 3);

        box.innerHTML = \`
          <div class="case-badge-banner">ÉVALUATION DU MODULE</div>
          <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:1rem;">Mini-Quiz d'Ancrage des Connaissances</h3>
          \${qList.map((q, idx) => \`
            <div style="background:var(--surface-subtle); border-radius:var(--radius-md); padding:1rem; margin-bottom:1rem;">
              <p style="font-weight:700; font-size:0.95rem; margin-bottom:0.75rem;">\${idx + 1}. \${q.q}</p>
              <div style="display:flex; flex-direction:column; gap:0.4rem;">
                \${q.opts.map((opt, oIdx) => \`
                  <button class="btn-nav-touch" style="text-align:left; justify-content:flex-start; height:auto; padding:0.5rem 0.8rem;" onclick="app.checkModuleQuizAnswer(this, \${oIdx === q.c}, '\${q.exp.replace(/'/g, "\\\\'")}')">
                    <span>\${opt}</span>
                  </button>
                \`).join('')}
              </div>
              <div class="quiz-feedback-slot" style="margin-top:0.6rem; font-size:0.88rem; display:none;"></div>
            </div>
          \`).join('')}
        \`;

        document.getElementById("readingContainer")?.appendChild(box);
      }

      checkModuleQuizAnswer(btn, isCorrect, exp) {
        const parent = btn.closest("div").parentElement;
        const feedback = parent.querySelector(".quiz-feedback-slot");
        if (isCorrect) {
          btn.style.background = "var(--yonah-emerald)";
          btn.style.color = "white";
          feedback.innerHTML = \`<strong style="color:var(--yonah-emerald);">✓ Réponse exacte !</strong> \${exp}\`;
        } else {
          btn.style.background = "var(--yonah-danger)";
          btn.style.color = "white";
          feedback.innerHTML = \`<strong style="color:var(--yonah-danger);">✗ Incorrect.</strong> \${exp}\`;
        }
        feedback.style.display = "block";
      }

      mountExamContract() {
        const box = document.getElementById("contractActionBox");
        if (!box) return;

        box.innerHTML = \`
          <div style="background:var(--surface); border:2px solid var(--yonah-navy); border-radius:var(--radius-lg); padding:1.5rem; text-align:center;">
            <h3 style="font-size:1.25rem; font-weight:800; color:var(--yonah-navy); margin-bottom:0.75rem;">
              Prêt pour l'Examen Certifiant National ?
            </h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem; line-height:1.5;">
              Candidat déclaré : <strong>\${this.userName || "Apprenant non renseigné"}</strong><br>
              En cliquant sur "Démarrer l'Examen", vous acceptez le basculement en plein écran et le protocole anti-triche sous peine d'invalidation automatique après 3 violations.
            </p>
            <button class="btn-nav-touch primary" onclick="app.launchExam()" style="height:50px; font-size:1rem; padding:0 2rem;">
              Démarrer l'Examen (40 Questions • 60 Min)
            </button>
          </div>
        \`;
      }

      launchExam() {
        if (!this.userName || !this.userName.trim()) {
          const val = prompt("Veuillez saisir votre Nom et Prénom pour l'examen officiel :");
          if (!val || !val.trim()) return;
          this.userName = val.trim();
          this.saveStorage();
          this.updateUserBadge();
        }

        try {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
          }
        } catch (e) {}

        this.examInProgress = true;
        this.violations = [];
        this.examTimerSec = 3600;
        this.examUserAnswers = {};

        // Tirage aléatoire de 40 questions avec Fisher-Yates
        const pool = [...EXAM_QUESTION_BANK];
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        this.examQuestionsActive = pool.slice(0, 40);

        this.startExamTimer();
        this.goToSection("m30-exam");
        this.showToast("Session d'examen sécurisée active");
      }

      startExamTimer() {
        if (this.examInterval) clearInterval(this.examInterval);
        this.examInterval = setInterval(() => {
          this.examTimerSec--;
          const el = document.getElementById("examLiveTimer");
          if (el) {
            const m = Math.floor(this.examTimerSec / 60);
            const s = this.examTimerSec % 60;
            el.textContent = \`\${m.toString().padStart(2, '0')}:\${s.toString().padStart(2, '0')}\`;
          }
          if (this.examTimerSec <= 0) {
            clearInterval(this.examInterval);
            this.finishExam(true);
          }
        }, 1000);
      }

      recordViolation(type, msg) {
        if (!this.examInProgress) return;
        this.violations.push({ type, msg, time: new Date().toLocaleTimeString() });
        const count = this.violations.length;

        if (count >= 3) {
          this.examInProgress = false;
          clearInterval(this.examInterval);
          this.examResult = {
            invalidated: true,
            reason: "Session invalidée : 3 violations du protocole anti-triche détectées.",
            violationsCount: count,
            date: new Date().toLocaleDateString()
          };
          this.saveStorage();
          alert("ALERTE INTÉGRITÉ YONAH : 3 violations détectées. Votre session d'examen est immédiatement invalidée.");
          this.goToSection("m30-cert");
          return;
        }

        alert(\`AVERTISSEMENT D'INTÉGRITÉ (\${count}/3) : \${msg}. Restez concentré sur l'écran d'examen.\`);
      }

      mountExamSession() {
        const mount = document.getElementById("examSessionMount");
        if (!mount) return;

        if (!this.examInProgress) {
          mount.innerHTML = \`
            <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
              <p>Aucune session d'examen active.</p>
              <button class="btn-nav-touch primary" onclick="app.goToSection('m30-integrity')" style="margin-top:1rem;">Aller au contrat d'intégrité</button>
            </div>
          \`;
          return;
        }

        mount.innerHTML = \`
          <div style="background:var(--yonah-navy); color:white; border-radius:var(--radius-lg); padding:1rem 1.5rem; display:flex; justify-content:space-between; align-items:center; position:sticky; top:70px; z-index:30; box-shadow:var(--shadow-md); margin-bottom:1.5rem;">
            <div>
              <span style="font-size:0.8rem; font-weight:800; color:var(--yonah-gold); text-transform:uppercase;">EXAMEN CERTIFIANT YONAH</span><br>
              <strong style="font-size:1.1rem;">\${this.userName}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:1.5rem;">
              <div style="text-align:right;">
                <span style="font-size:0.75rem; opacity:0.8;">TEMPS RESTANT</span><br>
                <span id="examLiveTimer" style="font-size:1.4rem; font-weight:900; font-family:monospace; color:var(--yonah-gold);">60:00</span>
              </div>
              <button class="btn-nav-touch" onclick="app.finishExam(false)" style="background:var(--yonah-gold); color:var(--yonah-navy-dark); border-color:var(--yonah-gold); font-weight:800;">
                Terminer & Valider
              </button>
            </div>
          </div>

          <div id="examQuestionsContainer">
            \${this.examQuestionsActive.map((q, idx) => \`
              <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem;">
                <p style="font-weight:800; font-size:1.02rem; margin-bottom:0.75rem; color:var(--text-main);">
                  Question \${idx + 1} / \${this.examQuestionsActive.length} : \${q.q}
                </p>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                  \${q.opts.map((opt, oIdx) => \`
                    <label style="display:flex; align-items:center; gap:0.75rem; padding:0.6rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border); cursor:pointer;" class="exam-opt-label">
                      <input type="radio" name="examQ_\${q.id}" value="\${oIdx}" onchange="app.recordExamChoice(\${q.id}, \${oIdx})">
                      <span style="font-size:0.95rem;">\${opt}</span>
                    </label>
                  \`).join('')}
                </div>
              </div>
            \`).join('')}
          </div>

          <div style="text-align:center; margin:2rem 0;">
            <button class="btn-nav-touch primary" onclick="app.finishExam(false)" style="height:50px; font-size:1.05rem; padding:0 2.5rem;">
              Soumettre définitivement mon Examen
            </button>
          </div>
        \`;
      }

      recordExamChoice(qId, optIdx) {
        this.examUserAnswers[qId] = optIdx;
      }

      async finishExam(autoSubmit) {
        if (!this.examInProgress) return;
        this.examInProgress = false;
        clearInterval(this.examInterval);

        let score = 0;
        this.examQuestionsActive.forEach((q) => {
          if (this.examUserAnswers[q.id] === q.c) {
            score++;
          }
        });

        const total = this.examQuestionsActive.length;
        const pct = Math.round((score / total) * 100);
        const passed = pct >= 80;

        // Génération de l'identifiant cryptographique SHA-256
        const seed = \`\${this.userName}_\${score}_\${Date.now()}__YONAH_CERT_SALT_2025\`;
        let certHex = "";
        try {
          const enc = new TextEncoder().encode(seed);
          const buf = await crypto.subtle.digest("SHA-256", enc);
          const arr = Array.from(new Uint8Array(buf));
          certHex = arr.slice(0, 3).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
        } catch (e) {
          certHex = Math.random().toString(36).substring(2, 8).toUpperCase();
        }

        const certId = \`YONAH-DM-2025-\${certHex}\`;

        this.examResult = {
          passed,
          score,
          total,
          pct,
          certId,
          date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
          violationsCount: this.violations.length,
          autoSubmitted: autoSubmit
        };

        this.saveStorage();
        this.updateUserBadge();
        this.goToSection("m30-cert");
      }

      mountCertificateView() {
        const mount = document.getElementById("certificateViewMount");
        if (!mount) return;

        if (!this.examResult) {
          mount.innerHTML = \`
            <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem; text-align:center;">
              <p>Vous n'avez pas encore passé l'examen final de certification.</p>
              <button class="btn-nav-touch primary" onclick="app.goToSection('m30-integrity')" style="margin-top:1rem;">Accéder au protocole d'examen</button>
            </div>
          \`;
          return;
        }

        const res = this.examResult;

        if (res.invalidated) {
          mount.innerHTML = \`
            <div style="background:var(--yonah-danger-light); border:3px solid var(--yonah-danger); border-radius:var(--radius-lg); padding:2.5rem 1.5rem; text-align:center;">
              <h2 style="color:var(--yonah-danger); font-size:1.6rem; font-weight:900; margin-bottom:0.75rem;">SESSION INVALIDÉE POUR VIOLATION D'INTÉGRITÉ</h2>
              <p style="font-size:1rem; line-height:1.6; max-width:550px; margin:0 auto 1.5rem;">
                Le protocole de surveillance a relevé 3 violations (sorties d'onglet ou fenêtre non active). L'examen doit être repassé dans le respect du protocole.
              </p>
              <button class="btn-nav-touch" onclick="app.goToSection('m30-integrity')">Repasser l'examen</button>
            </div>
          \`;
          return;
        }

        if (!res.passed) {
          mount.innerHTML = \`
            <div style="background:var(--surface); border:2px solid var(--border); border-radius:var(--radius-lg); padding:2.5rem 1.5rem; text-align:center;">
              <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:0.5rem;">Score obtenu : \${res.score} / \${res.total} (\${res.pct}%)</h2>
              <p style="color:var(--text-muted); margin-bottom:1.5rem;">Le seuil d'excellence Yonah est de 80% (32/40). Révisez les modules et retentez l'épreuve !</p>
              <button class="btn-nav-touch primary" onclick="app.goToSection('m30-integrity')">Recommencer l'examen</button>
            </div>
          \`;
          return;
        }

        // CERTIFICAT VALIDE
        mount.innerHTML = \`
          <div class="cert-wrap">
            <svg class="cert-seal-box" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#062335" stroke="#D4A24C" stroke-width="4"/>
              <path d="M50 15 L55 26 L66 26 L57 33 L61 44 L50 37 L39 44 L43 33 L34 26 L45 26 Z" fill="#D4A24C"/>
              <path d="M50 38 L50 78" stroke="#D4A24C" stroke-width="4" stroke-linecap="round"/>
              <path d="M50 48 C62 44, 62 58, 50 60 C38 62, 38 72, 50 74" stroke="#0E7C66" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            </svg>
            <div class="cert-title-huge">CERTIFICAT DE RECONNAISSANCE INTERNE</div>
            <div class="cert-sub-text">INSTITUT D'EXCELLENCE YONAH • PARCOURS DE FORMATION D'ÉLITE</div>
            <p style="font-size:0.95rem; text-transform:uppercase; letter-spacing:1px; color:#4A5568;">Il est certifié que</p>
            <div class="cert-recipient">\${this.userName || "Apprenant Certifié"}</div>
            <p class="cert-statement">
              a suivi avec assiduité et validé l'intégralité du cursus pédagogique d'excellence <strong>« Délégué Médical : Du Débutant à l'Expert »</strong> comprenant les <strong>30 modules fondamentaux</strong> et les <strong>tracks de spécialisation</strong>, et a satisfait avec succès à l'examen final d'évaluation sous protocole de surveillance anti-triche, attestant de ses compétences de haut niveau pour exercer avec rigueur, science et éthique.
            </p>
            <div class="cert-meta-grid">
              <div>
                <strong>Identifiant unique :</strong><br>
                <span style="font-family:monospace; color:#0B3D5C; font-weight:800;">\${res.certId}</span>
              </div>
              <div>
                <strong>Date de délivrance :</strong><br>
                \${res.date}
              </div>
              <div>
                <strong>Score & Intégrité :</strong><br>
                \${res.score} / \${res.total} (\${res.pct}%) • \${res.violationsCount === 0 ? '✓ SANS VIOLATION' : 'VIOLATION MINEURE'}
              </div>
            </div>

            <div style="font-size:0.78rem; color:#718096; text-align:center; margin-top:1.5rem; line-height:1.45; border-top:1px solid #E2DBD0; padding-top:0.75rem;">
              Certificat de reconnaissance interne délivré par l'Institut d'Excellence YONAH.<br>
              Propriété pédagogique de Guede Camus SALOMON • Vérifiable via identifiant cryptographique unique.
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1rem; border-top:1px dashed #CBD5E0; flex-wrap:wrap; gap:1rem;">
              <div style="text-align:left;">
                <svg width="68" height="68" viewBox="0 0 25 25" style="border:1px solid #D4A24C; padding:2px; background:white;">
                  <rect width="25" height="25" fill="white"/>
                  <path d="M1 1h7v7H1zM3 3h3v3H3zM17 1h7v7h-7zM19 3h3v3h-3zM1 17h7v7H1zM3 19h3v3H3zM10 2h2v2h-2zM14 2h2v2h-2zM10 6h4v2h-4zM2 10h3v2H2zM6 10h4v2H6zM11 11h3v3h-3zM17 10h2v2h-2zM21 11h3v2h-3zM10 17h2v2h-2zM14 17h4v2h-4zM10 21h2v3h-2zM14 21h3v3h-3zM19 17h4v2h-4zM20 21h3v3h-3z" fill="#0B3D5C"/>
                </svg>
                <div style="font-size:0.65rem; color:#718096; margin-top:0.2rem;">QR Authentification</div>
              </div>
              <div class="cert-signature-area">
                <svg class="cert-sig-svg" viewBox="0 0 140 50">
                  <path d="M10 35 Q 40 5, 70 30 T 130 20" stroke="#0B3D5C" stroke-width="2.5" fill="none"/>
                  <path d="M30 40 Q 60 15, 90 35" stroke="#D4A24C" stroke-width="1.8" fill="none"/>
                </svg>
                <span style="font-size:0.88rem; font-weight:900; color:#062335;">Guede Camus SALOMON</span>
                <span style="font-size:0.75rem; color:#4A5568; font-weight:700;">Initiateur de l'idée de YONAH</span>
                <span style="font-size:0.7rem; color:#718096;">Tél : +225 0779638812</span>
              </div>
            </div>
          </div>

          <div class="btn-print-hide" style="text-align:center; margin:1.5rem 0 3rem; display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-nav-touch primary" onclick="window.print()" style="min-height:50px; font-size:1rem; padding:0 2rem;">
              🖨️ Imprimer / Télécharger mon Certificat (PDF avec filigrane)
            </button>
            <button class="btn-nav-touch" onclick="app.showVerifyModal()" style="min-height:50px; font-size:1rem; padding:0 1.5rem;">
              🔍 Vérifier l'authenticité
            </button>
          </div>
        \`;
      }

      showVerifyModal() {
        const slot = document.getElementById("modalSlot");
        if (!slot) return;

        slot.innerHTML = \`
          <div class="cheat-alert-modal" onclick="app.closeModalSlot(event)">
            <div class="cheat-alert-card" style="border-color:var(--yonah-navy); text-align:left;" onclick="event.stopPropagation()">
              <h3 style="font-size:1.3rem; font-weight:900; color:var(--yonah-navy); margin-bottom:0.75rem;">Vérifier un Certificat Yonah</h3>
              <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1rem;">
                Entrez l'identifiant officiel figurant sur le document (ex : YONAH-DM-2025-XXXXXX) :
              </p>
              <input type="text" id="verifyCertInput" class="search-input-field" placeholder="YONAH-DM-2025-..." style="margin-bottom:1rem; text-transform:uppercase;">
              <button class="btn-nav-touch primary" style="width:100%; margin-bottom:1rem;" onclick="app.verifyCertAction()">Vérifier l'authenticité</button>
              <div id="verifyResultSlot" style="font-size:0.9rem;"></div>
              <button class="btn-nav-touch" style="width:100%; margin-top:0.5rem;" onclick="app.closeModalSlot()">Fermer</button>
            </div>
          </div>
        \`;
      }

      verifyCertAction() {
        const inEl = document.getElementById("verifyCertInput");
        const resSlot = document.getElementById("verifyResultSlot");
        if (!inEl || !resSlot) return;

        const val = inEl.value.trim().toUpperCase();
        if (this.examResult && this.examResult.certId === val && this.examResult.passed) {
          resSlot.innerHTML = \`
            <div style="background:var(--yonah-emerald-light); border:1px solid var(--yonah-emerald); padding:0.85rem; border-radius:var(--radius-sm); color:#064e3b;">
              <strong>✓ CERTIFICAT OFFICIEL AUTHENTIQUE</strong><br>
              Titulaire : <strong>\${this.userName}</strong><br>
              Date : \${this.examResult.date}<br>
              Parcours : 30 Modules & Spécialisations • Score : \${this.examResult.score}/\${this.examResult.total} (\${this.examResult.pct}%)<br>
              <em>Certificat de reconnaissance interne — Institut d'Excellence YONAH</em>
            </div>
          \`;
        } else {
          resSlot.innerHTML = \`
            <div style="background:var(--yonah-danger-light); border:1px solid var(--yonah-danger); padding:0.85rem; border-radius:var(--radius-sm); color:#7f1d1d;">
              <strong>✗ CERTIFICAT INTROUVABLE DANS LA BASE LOCALE</strong><br>
              Vérifiez la saisie exacte du code (format YONAH-DM-2025-XXXXXX).
            </div>
          \`;
        }
      }

      showInstitutionalModal() {
        const slot = document.getElementById("modalSlot");
        if (!slot) return;

        const info = INSTITUTIONAL_INFO;

        slot.innerHTML = \`
          <div class="cheat-alert-modal" onclick="app.closeModalSlot(event)">
            <div class="cheat-alert-card" onclick="event.stopPropagation()">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:2px solid var(--yonah-gold); padding-bottom:0.5rem;">
                <h2 style="font-size:1.35rem; font-weight:900; color:var(--yonah-navy);">\${info.about.institution}</h2>
                <button class="icon-btn" onclick="app.closeModalSlot()" style="width:36px; height:36px; font-size:1.2rem; font-weight:900;">✕</button>
              </div>

              <!-- IDENTITÉ OFFICIELLE DU FONDATEUR -->
              <div style="background:var(--surface-subtle); border-radius:var(--radius-md); padding:1.25rem; border-left:4px solid var(--yonah-gold); margin-bottom:1.25rem;">
                <div style="font-size:0.75rem; font-weight:800; color:var(--yonah-gold-dark); text-transform:uppercase; letter-spacing:0.5px;">Fondateur & Propriété Pédagogique</div>
                <div style="font-size:1.35rem; font-weight:900; color:var(--yonah-navy); margin:0.3rem 0;">\${info.about.founder}</div>
                <div style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">\${info.about.role}</div>
                <div style="display:inline-flex; align-items:center; gap:0.4rem; background:rgba(11,61,92,0.1); padding:0.35rem 0.8rem; border-radius:var(--radius-full); font-weight:800; font-size:0.9rem; color:var(--yonah-navy);">
                  📞 Contact direct : \${info.about.contact}
                </div>
              </div>

              <div style="font-size:0.92rem; line-height:1.6; color:var(--text-main); margin-bottom:1.25rem;">
                <p><strong>Mission de formation :</strong> \${info.about.mission}</p>
                <p style="margin-top:0.4rem; font-size:0.86rem; font-weight:700; color:var(--yonah-gold-dark);">\${info.about.ownership}</p>
              </div>

              <!-- STATUT OFFICIEL DU CERTIFICAT -->
              <div class="box-callout box-key" style="margin:1rem 0;">
                <div class="box-header" style="color:var(--yonah-navy);">Statut Officiel du Certificat YONAH</div>
                <p style="font-size:0.9rem; line-height:1.6; margin-bottom:0.75rem;">
                  <strong>Certificat de Reconnaissance Interne :</strong> \${info.about.certificateNotice.summary}
                </p>
                <div style="font-weight:800; font-size:0.82rem; color:var(--yonah-gold-dark); margin-bottom:0.4rem; text-transform:uppercase;">Piliers d'Excellence & Valeur :</div>
                <ul style="margin-left:1.25rem; font-size:0.86rem; line-height:1.6;">
                  \${info.about.certificateNotice.credibilityPoints.map(p => \`<li>\${p}</li>\`).join('')}
                </ul>
              </div>

              <div style="display:flex; gap:0.5rem; margin-top:1.25rem;">
                <button class="btn-nav-touch primary" style="flex:1;" onclick="app.closeModalSlot()">Fermer</button>
              </div>
            </div>
          </div>
        \`;
      }

      closeModalSlot(e) {
        if (!e || e.target.classList.contains("cheat-alert-modal")) {
          document.getElementById("modalSlot").innerHTML = "";
        }
      }

      initAudioSystem() {
        this.audioSupported = 'speechSynthesis' in window;
        this.audioMode = 'express';
        this.audioRate = 1.0;
        this.audioChunks = [];
        this.audioChunkIdx = 0;
        this.audioPlaying = false;
        this.audioPaused = false;
        this.audioVoices = [];

        if (this.audioSupported) {
          const loadVoices = () => {
            try {
              this.audioVoices = window.speechSynthesis.getVoices();
            } catch (e) {}
          };
          loadVoices();
          if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
          }
        }
      }

      toggleAudioPlayer() {
        const bar = document.getElementById("lessonAudioBar");
        if (!bar) return;
        if (bar.style.display === "none" || !bar.style.display) {
          bar.style.display = "block";
          this.prepareAudio(false);
        } else {
          this.audioStop();
          bar.style.display = "none";
        }
      }

      closeAudioBar() {
        this.audioStop();
        const bar = document.getElementById("lessonAudioBar");
        if (bar) bar.style.display = "none";
      }

      setAudioMode(mode) {
        if (this.audioMode === mode) return;
        this.audioMode = mode;
        const btnExp = document.getElementById("labModeExpress");
        const btnFull = document.getElementById("labModeFull");
        if (btnExp) btnExp.classList.toggle("active", mode === 'express');
        if (btnFull) btnFull.classList.toggle("active", mode === 'full');
        this.prepareAudio(this.audioPlaying && !this.audioPaused);
      }

      setAudioSpeed(rate) {
        this.audioRate = parseFloat(rate) || 1.0;
        if (this.audioPlaying && !this.audioPaused) {
          if (window.speechSynthesis) window.speechSynthesis.cancel();
          this.speakCurrentChunk();
        }
      }

      prepareAudio(autoPlay = false) {
        if (!this.audioSupported) {
          const st = document.getElementById("labStatusText");
          if (st) st.textContent = "Synthèse vocale non disponible sur ce navigateur";
          return;
        }

        if (window.speechSynthesis) window.speechSynthesis.cancel();
        this.audioPlaying = false;
        this.audioPaused = false;

        const sec = this.flatSections.find((s) => s.id === this.currentSectionId);
        if (!sec) return;

        let rawText = "";
        if (this.audioMode === 'express') {
          rawText = sec.audioScript || (sec.title + ". " + (sec.keyTakeaways || ""));
        } else {
          const tmp = document.createElement("div");
          tmp.innerHTML = sec.html || "";
          tmp.querySelectorAll("script, style, button, input, .btn-print-hide").forEach(el => el.remove());
          rawText = sec.title + ". " + tmp.textContent.replace(/\\s+/g, " ").trim();
        }

        const sentences = rawText.match(/[^.!?:]+[.!?:]+/g) || [rawText];
        this.audioChunks = sentences.map(s => s.trim()).filter(s => s.length > 2);
        this.audioChunkIdx = 0;

        this.updateAudioUIState();

        if (autoPlay && this.audioChunks.length > 0) {
          this.audioPlayPause();
        }
      }

      audioPlayPause() {
        if (!this.audioSupported) {
          this.showToast("Synthèse vocale non disponible");
          return;
        }

        if (this.audioPlaying && !this.audioPaused) {
          window.speechSynthesis.pause();
          this.audioPaused = true;
          this.updateAudioUIState();
          return;
        }

        if (this.audioPaused) {
          window.speechSynthesis.resume();
          this.audioPaused = false;
          this.updateAudioUIState();
          return;
        }

        if (this.audioChunks.length === 0) {
          this.prepareAudio(false);
        }

        if (this.audioChunks.length > 0) {
          this.audioPlaying = true;
          this.audioPaused = false;
          this.speakCurrentChunk();
        }
      }

      speakCurrentChunk() {
        if (!this.audioPlaying || this.audioPaused) return;

        if (this.audioChunkIdx >= this.audioChunks.length) {
          this.audioStop();
          const st = document.getElementById("labStatusText");
          if (st) st.textContent = "Lecture audio terminée ✓";
          this.showToast("Synthèse audio terminée avec succès");
          return;
        }

        const text = this.audioChunks[this.audioChunkIdx];
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = this.audioRate;
        utter.lang = "fr-FR";

        if (this.audioVoices && this.audioVoices.length > 0) {
          const frVoice = this.audioVoices.find(v => v.lang && v.lang.startsWith("fr"));
          if (frVoice) utter.voice = frVoice;
        }

        utter.onend = () => {
          if (!this.audioPlaying || this.audioPaused) return;
          this.audioChunkIdx++;
          this.updateAudioUIState();
          this.speakCurrentChunk();
        };

        utter.onerror = (e) => {
          console.warn("Speech error", e);
          if (!this.audioPlaying || this.audioPaused) return;
          this.audioChunkIdx++;
          this.speakCurrentChunk();
        };

        this.updateAudioUIState();
        window.speechSynthesis.speak(utter);
      }

      audioStop() {
        if (this.audioSupported && window.speechSynthesis) {
          try { window.speechSynthesis.cancel(); } catch (e) {}
        }
        this.audioPlaying = false;
        this.audioPaused = false;
        this.audioChunkIdx = 0;
        this.updateAudioUIState();
      }

      updateAudioUIState() {
        const iconPlay = document.getElementById("labIconPlay");
        const wave = document.getElementById("labSoundWave");
        const st = document.getElementById("labStatusText");
        const progFill = document.getElementById("labProgressFill");

        const total = this.audioChunks.length;
        const current = this.audioChunkIdx;
        const pct = total > 0 ? Math.round((current / total) * 100) : 0;

        if (progFill) progFill.style.width = pct + "%";

        if (this.audioPlaying && !this.audioPaused) {
          if (iconPlay) iconPlay.innerHTML = \`<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>\`;
          if (wave) wave.classList.add("speaking");
          if (st) st.textContent = \`Lecture : phrase \${current + 1} / \${total} (\${pct}%)\`;
        } else if (this.audioPaused) {
          if (iconPlay) iconPlay.innerHTML = \`<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>\`;
          if (wave) wave.classList.remove("speaking");
          if (st) st.textContent = \`En pause (\${pct}%)\`;
        } else {
          if (iconPlay) iconPlay.innerHTML = \`<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>\`;
          if (wave) wave.classList.remove("speaking");
          if (st) st.textContent = total > 0 ? \`Prêt (\${total} phrases)\` : "Prêt pour la lecture";
        }
      }

      exportDataJson() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem("yonah_dm_v4_store") || localStorage.getItem("yonah_dm_v3_store") || "{}");
        const a = document.createElement("a");
        a.href = dataStr;
        a.download = \`yonah_parcours_certifiant_\${Date.now()}.json\`;
        a.click();
        this.showToast("Dossier de formation exporté");
      }

      filterContent(q) {
        const query = q.toLowerCase().trim();
        const links = document.querySelectorAll(".sec-link-btn");
        links.forEach((l) => {
          const t = l.textContent.toLowerCase();
          l.style.display = t.includes(query) ? "flex" : "none";
        });
      }

      bindEvents() {
        window.addEventListener("keydown", (e) => {
          if (this.examInProgress) {
            if ((e.ctrlKey || e.metaKey) && ["c", "v", "u", "p", "a"].includes(e.key.toLowerCase())) {
              e.preventDefault();
              this.recordViolation("KEYBOARD_SHORTCUT", \`Raccourci clavier Ctrl+\${e.key.toUpperCase()}\`);
            }
            if (["F12", "F11"].includes(e.key)) {
              e.preventDefault();
              this.recordViolation("KEYBOARD_DEVTOOLS", "Tentative d'ouverture des outils de développement");
            }
            return;
          }

          if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
          if (e.key === "ArrowLeft") this.navigateOffset(-1);
          if (e.key === "ArrowRight") this.navigateOffset(1);
          if (e.key === "Escape") this.closeSidebar();
        });

        document.addEventListener("contextmenu", (e) => {
          if (this.examInProgress) {
            e.preventDefault();
            this.recordViolation("CONTEXT_MENU", "Tentative de clic droit");
          }
        });

        document.addEventListener("copy", (e) => {
          if (this.examInProgress) {
            e.preventDefault();
            this.recordViolation("CLIPBOARD_COPY", "Tentative de copie");
          }
        });

        document.addEventListener("paste", (e) => {
          if (this.examInProgress) {
            e.preventDefault();
            this.recordViolation("CLIPBOARD_PASTE", "Tentative de collage");
          }
        });

        document.addEventListener("visibilitychange", () => {
          if (this.examInProgress && document.hidden) {
            this.recordViolation("TAB_SWITCH", "Sortie d'onglet / Changement d'application");
          }
        });

        window.addEventListener("blur", () => {
          if (this.examInProgress) {
            this.blurTimeout = setTimeout(() => {
              if (this.examInProgress && document.hidden) {
                this.recordViolation("WINDOW_BLUR", "Perte de focus de la fenêtre");
              }
            }, 500);
          }
        });

        window.addEventListener("focus", () => {
          if (this.blurTimeout) clearTimeout(this.blurTimeout);
        });
      }
    }

    let app;
    window.addEventListener("DOMContentLoaded", () => {
      app = new YonahTrainingEngine();
      window.app = app;
    });
  </script>
</body>
</html>
`;

// Écriture dans index.html de l'application
const targetIndexPath = path.join(__dirname, '../index.html');
fs.writeFileSync(targetIndexPath, htmlContent, 'utf8');
console.log(`Compilation réussie ! ${targetIndexPath} généré avec succès (${Buffer.byteLength(htmlContent, 'utf8')} octets).`);
