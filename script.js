// =====================================================================
//  CreditoEuropa – Simulateur de prêt multilingue + PDF
// =====================================================================

// 🌍 Dictionnaires i18n (it, de, pt, ro, en, pl, es)
const translations = {
  it: {
    pageTitle: "Simulatore di Prestito – CreditoEuropa",
    heading: "Simulatore di Prestito",
    subtitle: "Calcola il tuo piano di rimborso",
    langLabel: "Lingua",
    labelAmount: "Importo del prestito (€)",
    labelDuration: "Durata (mesi)",
    labelInterest: "Tasso d'interesse annuo (%)",
    btnCalculate: "Calcola il piano",
    btnPdf: "Scarica il PDF",
    resultsTitle: "Riepilogo",
    scheduleTitle: "Piano di rimborso",
    totale: "Totale",
    totInteressi: "Totale interessi",
    totRimborsato: "Totale rimborsato",
    generatedOn: "Generato il",
    disclaimer: "Simulazione indicativa, non costituisce un'offerta contrattuale.",
    alertValid: "Inserisci valori validi.",
    alertCalculate: "Calcola prima il piano di rimborso.",
    importo: "Importo del prestito",
    durata: "Durata",
    mesi: "mesi",
    tasso: "Tasso annuo",
    tassoInteresse: "Tasso d'interesse annuo",
    pagamento: "Pagamento mensile",
    rataStimata: "Rata mensile stimata",
    dataInizio: "Data inizio pagamento",
    dataInizioPluriel: "Data inizio pagamenti",
    pdfTitle: "Piano di Rimborso del Prestito",
    thNumero: "#",
    thData: "Data di Pagamento",
    thRata: "Rata (€)",
    thInteressi: "Interessi (€)",
    thCapitale: "Capitale (€)",
    thSaldo: "Saldo Residuo (€)",
    pagina: "Pagina",
    nomFichier: "Piano_di_rimborso_completo",
    locale: "it-IT"
  },
  de: {
    pageTitle: "Kreditrechner – CreditoEuropa",
    heading: "Kreditsimulator",
    subtitle: "Berechnen Sie Ihren Tilgungsplan",
    langLabel: "Sprache",
    labelAmount: "Darlehensbetrag (€)",
    labelDuration: "Laufzeit (Monate)",
    labelInterest: "Jährlicher Zinssatz (%)",
    btnCalculate: "Plan berechnen",
    btnPdf: "PDF herunterladen",
    resultsTitle: "Zusammenfassung",
    scheduleTitle: "Tilgungsplan",
    totale: "Gesamt",
    totInteressi: "Gesamtzinsen",
    totRimborsato: "Gesamtrückzahlung",
    generatedOn: "Erstellt am",
    disclaimer: "Unverbindliche Simulation, kein Vertragsangebot.",
    alertValid: "Bitte geben Sie gültige Werte ein.",
    alertCalculate: "Bitte berechnen Sie zuerst den Tilgungsplan.",
    importo: "Darlehensbetrag",
    durata: "Laufzeit",
    mesi: "Monate",
    tasso: "Jährlicher Zinssatz",
    tassoInteresse: "Jährlicher Zinssatz",
    pagamento: "Monatliche Rate",
    rataStimata: "Geschätzte monatliche Rate",
    dataInizio: "Erster Zahlungstermin",
    dataInizioPluriel: "Erster Zahlungstermin",
    pdfTitle: "Tilgungsplan für das Darlehen",
    thNumero: "#",
    thData: "Zahlungsdatum",
    thRata: "Rate (€)",
    thInteressi: "Zinsen (€)",
    thCapitale: "Tilgung (€)",
    thSaldo: "Restschuld (€)",
    pagina: "Seite",
    nomFichier: "Vollstaendiger_Tilgungsplan",
    locale: "de-DE"
  },
  pt: {
    pageTitle: "Simulador de Empréstimo – CreditoEuropa",
    heading: "Simulador de Empréstimo",
    subtitle: "Calcule o seu plano de amortização",
    langLabel: "Idioma",
    labelAmount: "Valor do empréstimo (€)",
    labelDuration: "Prazo (meses)",
    labelInterest: "Taxa de juro anual (%)",
    btnCalculate: "Calcular plano",
    btnPdf: "Descarregar PDF",
    resultsTitle: "Resumo",
    scheduleTitle: "Plano de amortização",
    totale: "Total",
    totInteressi: "Total de juros",
    totRimborsato: "Total reembolsado",
    generatedOn: "Gerado em",
    disclaimer: "Simulação indicativa, sem valor contratual.",
    alertValid: "Por favor, insira valores válidos.",
    alertCalculate: "Por favor, calcule primeiro o plano de amortização.",
    importo: "Valor do empréstimo",
    durata: "Prazo",
    mesi: "meses",
    tasso: "Taxa anual",
    tassoInteresse: "Taxa de juro anual",
    pagamento: "Prestação mensal",
    rataStimata: "Prestação mensal estimada",
    dataInizio: "Data de início do pagamento",
    dataInizioPluriel: "Data de início dos pagamentos",
    pdfTitle: "Plano de Amortização do Empréstimo",
    thNumero: "#",
    thData: "Data de Pagamento",
    thRata: "Prestação (€)",
    thInteressi: "Juros (€)",
    thCapitale: "Capital (€)",
    thSaldo: "Capital em Dívida (€)",
    pagina: "Página",
    nomFichier: "Plano_de_amortizacao_completo",
    locale: "pt-PT"
  },
  ro: {
    pageTitle: "Simulator de Credit – CreditoEuropa",
    heading: "Simulator de credit",
    subtitle: "Calculați graficul de rambursare",
    langLabel: "Limbă",
    labelAmount: "Valoarea împrumutului (€)",
    labelDuration: "Perioadă (luni)",
    labelInterest: "Rata dobânzii anuale (%)",
    btnCalculate: "Calculează graficul",
    btnPdf: "Descarcă PDF",
    resultsTitle: "Rezumat",
    scheduleTitle: "Grafic de rambursare",
    totale: "Total",
    totInteressi: "Total dobânzi",
    totRimborsato: "Total rambursat",
    generatedOn: "Generat la",
    disclaimer: "Simulare orientativă, fără valoare contractuală.",
    alertValid: "Vă rugăm să introduceți valori valide.",
    alertCalculate: "Vă rugăm să calculați mai întâi graficul de rambursare.",
    importo: "Valoarea împrumutului",
    durata: "Perioadă",
    mesi: "luni",
    tasso: "Rata anuală",
    tassoInteresse: "Rata dobânzii anuale",
    pagamento: "Plată lunară",
    rataStimata: "Rată lunară estimată",
    dataInizio: "Data de început a plății",
    dataInizioPluriel: "Data de început a plăților",
    pdfTitle: "Grafic de Rambursare a Creditului",
    thNumero: "#",
    thData: "Data Plății",
    thRata: "Rată (€)",
    thInteressi: "Dobândă (€)",
    thCapitale: "Capital (€)",
    thSaldo: "Sold Rămas (€)",
    pagina: "Pagina",
    nomFichier: "Grafic_de_rambursare_complet",
    locale: "ro-RO"
  },
  en: {
    pageTitle: "Loan Calculator – CreditoEuropa",
    heading: "Loan simulator",
    subtitle: "Calculate your repayment schedule",
    langLabel: "Language",
    labelAmount: "Loan amount (€)",
    labelDuration: "Duration (months)",
    labelInterest: "Annual interest rate (%)",
    btnCalculate: "Calculate schedule",
    btnPdf: "Download PDF",
    resultsTitle: "Summary",
    scheduleTitle: "Repayment schedule",
    totale: "Total",
    totInteressi: "Total interest",
    totRimborsato: "Total repaid",
    generatedOn: "Generated on",
    disclaimer: "Indicative simulation only, not a contractual offer.",
    alertValid: "Please enter valid values.",
    alertCalculate: "Please calculate the repayment plan first.",
    importo: "Loan amount",
    durata: "Duration",
    mesi: "months",
    tasso: "Annual rate",
    tassoInteresse: "Annual interest rate",
    pagamento: "Monthly payment",
    rataStimata: "Estimated monthly payment",
    dataInizio: "Payment start date",
    dataInizioPluriel: "Payment start date",
    pdfTitle: "Loan Repayment Schedule",
    thNumero: "#",
    thData: "Payment Date",
    thRata: "Payment (€)",
    thInteressi: "Interest (€)",
    thCapitale: "Principal (€)",
    thSaldo: "Remaining Balance (€)",
    pagina: "Page",
    nomFichier: "Complete_repayment_schedule",
    locale: "en-GB"
  },
  pl: {
    pageTitle: "Kalkulator pożyczki – CreditoEuropa",
    heading: "Symulator pożyczki",
    subtitle: "Oblicz swój harmonogram spłaty",
    langLabel: "Język",
    labelAmount: "Kwota pożyczki (€)",
    labelDuration: "Okres (miesiące)",
    labelInterest: "Roczne oprocentowanie (%)",
    btnCalculate: "Oblicz harmonogram",
    btnPdf: "Pobierz PDF",
    resultsTitle: "Podsumowanie",
    scheduleTitle: "Harmonogram spłaty",
    totale: "Razem",
    totInteressi: "Suma odsetek",
    totRimborsato: "Suma spłat",
    generatedOn: "Wygenerowano",
    disclaimer: "Symulacja orientacyjna, nie stanowi oferty umownej.",
    alertValid: "Proszę wprowadzić poprawne wartości.",
    alertCalculate: "Proszę najpierw obliczyć plan spłaty.",
    importo: "Kwota pożyczki",
    durata: "Okres",
    mesi: "miesięcy",
    tasso: "Oprocentowanie roczne",
    tassoInteresse: "Roczne oprocentowanie",
    pagamento: "Rata miesięczna",
    rataStimata: "Szacowana rata miesięczna",
    dataInizio: "Data rozpoczęcia spłaty",
    dataInizioPluriel: "Data rozpoczęcia spłat",
    pdfTitle: "Harmonogram Spłaty Pożyczki",
    thNumero: "#",
    thData: "Data Płatności",
    thRata: "Rata (€)",
    thInteressi: "Odsetki (€)",
    thCapitale: "Kapitał (€)",
    thSaldo: "Pozostało do spłaty (€)",
    pagina: "Strona",
    nomFichier: "Pelny_harmonogram_splaty",
    locale: "pl-PL"
  },
  es: {
    pageTitle: "Simulador de Préstamo – CreditoEuropa",
    heading: "Simulador de préstamo",
    subtitle: "Calcule su cuadro de amortización",
    langLabel: "Idioma",
    labelAmount: "Importe del préstamo (€)",
    labelDuration: "Plazo (meses)",
    labelInterest: "Tasa de interés anual (%)",
    btnCalculate: "Calcular cuadro",
    btnPdf: "Descargar PDF",
    resultsTitle: "Resumen",
    scheduleTitle: "Cuadro de amortización",
    totale: "Total",
    totInteressi: "Total de intereses",
    totRimborsato: "Total pagado",
    generatedOn: "Generado el",
    disclaimer: "Simulación orientativa, sin valor contractual.",
    alertValid: "Por favor, introduzca valores válidos.",
    alertCalculate: "Por favor, calcule primero el plan de amortización.",
    importo: "Importe del préstamo",
    durata: "Plazo",
    mesi: "meses",
    tasso: "Tasa anual",
    tassoInteresse: "Tasa de interés anual",
    pagamento: "Pago mensual",
    rataStimata: "Cuota mensual estimada",
    dataInizio: "Fecha de inicio de pago",
    dataInizioPluriel: "Fecha de inicio de pagos",
    pdfTitle: "Cuadro de Amortización del Préstamo",
    thNumero: "#",
    thData: "Fecha de Pago",
    thRata: "Cuota (€)",
    thInteressi: "Intereses (€)",
    thCapitale: "Capital (€)",
    thSaldo: "Saldo Pendiente (€)",
    pagina: "Página",
    nomFichier: "Cuadro_de_amortizacion_completo",
    locale: "es-ES"
  }
};

// =====================================================================
//  Configuration
// =====================================================================
const LOGO_URL = "logo.png";            // logo à placer à côté de index.html
const ARRONDI_EURO = true;              // mensualité arrondie à l'euro : décimales >= 0,50 -> euro supérieur, sinon décimales supprimées
const BRAND = { navy: [11, 61, 145], blue: [30, 136, 229], light: [241, 246, 253], line: [214, 228, 245], grey: [102, 112, 133] };

// Polices Unicode (accents polonais / roumains). Essayées dans l'ordre.
const FONT_SOURCES = {
  normal: ["fonts/Roboto-Regular.ttf", "https://cdn.jsdelivr.net/gh/googlefonts/roboto@v2.138/src/hinted/Roboto-Regular.ttf"],
  bold:   ["fonts/Roboto-Bold.ttf",    "https://cdn.jsdelivr.net/gh/googlefonts/roboto@v2.138/src/hinted/Roboto-Bold.ttf"]
};

// =====================================================================
//  Langue
// =====================================================================
function detectLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) return saved;
  } catch (e) { /* stockage indisponible */ }
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return translations[nav] ? nav : "en";
}

let currentLang = detectLang();
let localeFormat = translations[currentLang].locale;
let dernierPlan = null;

function applyLang(lang) {
  currentLang = translations[lang] ? lang : "en";
  localeFormat = translations[currentLang].locale;
  const t = translations[currentLang];
  try { localStorage.setItem("lang", currentLang); } catch (e) { /* ignore */ }

  document.documentElement.lang = currentLang;
  document.title = t.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  const sel = document.getElementById("lang-select");
  if (sel) sel.value = currentLang;

  if (dernierPlan) afficherResultats(); // re-rend dates et nombres dans la nouvelle langue
}

// =====================================================================
//  Formats
// =====================================================================
const money = (cts) =>
  new Intl.NumberFormat(localeFormat, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cts / 100);
const fmtDate = (d) => d.toLocaleDateString(localeFormat);
const pct = (v) =>
  new Intl.NumberFormat(localeFormat, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);

// =====================================================================
//  Calcul (en centimes entiers : pas d'écart d'arrondi)
// =====================================================================
function calculerPlan() {
  const t = translations[currentLang];
  const montant = parseFloat(document.getElementById("amount").value);
  const duree = parseInt(document.getElementById("duration").value, 10);
  const tauxAnnuel = parseFloat(document.getElementById("interest").value);

  if (
    !Number.isFinite(montant) || !Number.isFinite(duree) || !Number.isFinite(tauxAnnuel) ||
    montant <= 0 || duree <= 0 || tauxAnnuel < 0
  ) {
    alert(t.alertValid);
    return;
  }

  // 15 du mois, 3 mois plus tard (sans débordement de fin de mois)
  const now = new Date();
  const dateDebut = new Date(now.getFullYear(), now.getMonth() + 3, 15);

  const tauxMensuel = tauxAnnuel / 100 / 12;
  const montantCts = Math.round(montant * 100);

  let mensualiteCts =
    tauxMensuel === 0
      ? Math.round(montantCts / duree)
      : Math.round((montantCts * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -duree)));
  if (ARRONDI_EURO) {
    // Ex. 179,69 -> 180 ; 179,49 -> 179
    const euros = Math.floor(mensualiteCts / 100);
    const decimales = mensualiteCts - euros * 100; // en centimes
    mensualiteCts = (decimales >= 50 ? euros + 1 : euros) * 100;
  }

  let soldeCts = montantCts;
  const lignes = [];
  let totalInteretsCts = 0;
  let totalPayeCts = 0;

  for (let i = 0; i < duree; i++) {
    const interetsCts = Math.round(soldeCts * tauxMensuel);
    let rataCts = mensualiteCts;
    let principalCts = rataCts - interetsCts;

    // Dernier mois (ou capital déjà couvert) : on solde exactement
    if (i === duree - 1 || principalCts > soldeCts) {
      principalCts = soldeCts;
      rataCts = principalCts + interetsCts;
    }
    soldeCts -= principalCts;
    totalInteretsCts += interetsCts;
    totalPayeCts += rataCts;

    lignes.push({
      numero: i + 1,
      date: new Date(dateDebut.getFullYear(), dateDebut.getMonth() + i, 15),
      rataCts,
      interetsCts,
      principalCts,
      soldeCts
    });
  }

  dernierPlan = { montant, montantCts, duree, tauxAnnuel, mensualiteCts, dateDebut, totalInteretsCts, totalPayeCts, lignes };
  afficherResultats();
}

// =====================================================================
//  Affichage
// =====================================================================
function afficherResultats() {
  if (!dernierPlan) return;
  const t = translations[currentLang];
  const p = dernierPlan;

  document.getElementById("summary").innerHTML = `
    <div class="card"><span>${t.importo}</span><strong>${money(p.montantCts)} €</strong></div>
    <div class="card"><span>${t.durata}</span><strong>${p.duree} ${t.mesi}</strong></div>
    <div class="card"><span>${t.tasso}</span><strong>${pct(p.tauxAnnuel)} %</strong></div>
    <div class="card"><span>${t.pagamento}</span><strong>${money(p.mensualiteCts)} €</strong></div>
    <div class="card"><span>${t.dataInizio}</span><strong>${fmtDate(p.dateDebut)}</strong></div>
    <div class="card"><span>${t.totInteressi}</span><strong>${money(p.totalInteretsCts)} €</strong></div>
  `;

  const tbody = document.querySelector("#schedule tbody");
  tbody.innerHTML = "";
  p.lignes.forEach((r) => {
    const tr = document.createElement("tr");
    [r.numero, fmtDate(r.date), money(r.rataCts), money(r.interetsCts), money(r.principalCts), money(r.soldeCts)]
      .forEach((val) => {
        const td = document.createElement("td");
        td.textContent = val;
        tr.appendChild(td);
      });
    tbody.appendChild(tr);
  });

  document.getElementById("results").style.display = "block";
}

// =====================================================================
//  Outils PDF : logo, polices, texte
// =====================================================================
let logoCache; // undefined = pas encore tenté, null = indisponible

function chargerLogo() {
  if (logoCache !== undefined) return Promise.resolve(logoCache);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext("2d").drawImage(img, 0, 0);
        logoCache = { dataUrl: c.toDataURL("image/png"), w: img.naturalWidth, h: img.naturalHeight };
      } catch (e) {
        logoCache = null; // canvas bloqué (ex. page ouverte en file://)
      }
      resolve(logoCache);
    };
    img.onerror = () => { logoCache = null; resolve(null); };
    img.src = LOGO_URL;
  });
}

let fontCache; // undefined = pas tenté, null = indisponible, sinon { normal, bold } en base64

function bufferToBase64(buf) {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}

async function fetchPremier(urls) {
  for (const u of urls) {
    try {
      const res = await fetch(u);
      if (res.ok) return bufferToBase64(await res.arrayBuffer());
    } catch (e) { /* source suivante */ }
  }
  return null;
}

async function chargerPolices() {
  if (fontCache !== undefined) return fontCache;
  const [normal, bold] = await Promise.all([fetchPremier(FONT_SOURCES.normal), fetchPremier(FONT_SOURCES.bold)]);
  fontCache = normal && bold ? { normal, bold } : null;
  return fontCache;
}

// Repli sans police Unicode : retire les diacritiques (Helvetica ne les gère pas tous)
const ascii = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l").replace(/Ł/g, "L");
const cleanSpaces = (s) => String(s).replace(/[  ]/g, " ");

// Logo vectoriel de secours (utilisé si logo.png est absent)
function dessinerLogoVectoriel(doc, x, y, h, fontName) {
  const r = h / 2, cx = x + r, cy = y + r;
  doc.setFillColor(...BRAND.navy);
  doc.circle(cx, cy, r, "F");
  doc.setFillColor(255, 204, 0);
  for (let k = 0; k < 12; k++) {
    const a = (k * Math.PI * 2) / 12;
    doc.circle(cx + Math.cos(a) * r * 0.68, cy + Math.sin(a) * r * 0.68, r * 0.07, "F");
  }
  doc.setTextColor(255, 255, 255);
  doc.setFont(fontName, "bold");
  doc.setFontSize(h * 1.5);
  doc.text("€", cx, cy + h * 0.16, { align: "center" });

  doc.setFontSize(h * 1.55);
  doc.setTextColor(...BRAND.navy);
  doc.text("Credito", x + h + 3, y + h * 0.7);
  const wCredito = doc.getTextWidth("Credito");
  doc.setTextColor(...BRAND.blue);
  doc.text("Europa", x + h + 3 + wCredito, y + h * 0.7);
  return h + 3 + wCredito + doc.getTextWidth("Europa");
}

// =====================================================================
//  Génération du PDF
// =====================================================================
async function genererPDF() {
  const t = translations[currentLang];
  if (!dernierPlan) {
    alert(t.alertCalculate);
    return;
  }
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("jsPDF n'est pas chargé.");
    return;
  }

  const btn = document.getElementById("download-pdf");
  btn.disabled = true;

  try {
    const [logo, fonts] = await Promise.all([chargerLogo(), chargerPolices()]);
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    if (typeof doc.autoTable !== "function") {
      alert("Le plugin jspdf-autotable n'est pas chargé.");
      return;
    }

    // Police
    let fontName = "helvetica";
    if (fonts) {
      doc.addFileToVFS("Roboto-Regular.ttf", fonts.normal);
      doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
      doc.addFileToVFS("Roboto-Bold.ttf", fonts.bold);
      doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");
      fontName = "Roboto";
    }
    const tx = (s) => (fonts ? cleanSpaces(s) : ascii(cleanSpaces(s)));

    const p = dernierPlan;
    const W = doc.internal.pageSize.getWidth();   // 210
    const H = doc.internal.pageSize.getHeight();  // 297
    const M = 14;

    // ---- En-tête avec logo ------------------------------------------
    const logoH = 16;
    if (logo) {
      const logoW = (logo.w / logo.h) * logoH;
      doc.addImage(logo.dataUrl, "PNG", M, 10, Math.min(logoW, 70), logoH);
    } else {
      dessinerLogoVectoriel(doc, M, 11, 13, fontName);
    }
    doc.setDrawColor(...BRAND.blue);
    doc.setLineWidth(0.8);
    doc.line(M, 31, W - M, 31);

    // ---- Titre -------------------------------------------------------
    doc.setFont(fontName, "bold");
    doc.setFontSize(19);
    doc.setTextColor(...BRAND.navy);
    doc.text(tx(t.pdfTitle), M, 43);

    // ---- Carte de synthèse (2 lignes × 3 colonnes) -----------------
    const cardY = 50, cardH = 36, cardW = W - 2 * M;
    doc.setFillColor(...BRAND.light);
    doc.setDrawColor(...BRAND.line);
    doc.setLineWidth(0.3);
    doc.roundedRect(M, cardY, cardW, cardH, 3, 3, "FD");

    const items = [
      [t.importo, `${money(p.montantCts)} €`],
      [t.durata, `${p.duree} ${t.mesi}`],
      [t.tassoInteresse, `${pct(p.tauxAnnuel)} %`],
      [t.rataStimata, `${money(p.mensualiteCts)} €`],
      [t.dataInizioPluriel, fmtDate(p.dateDebut)],
      [t.totInteressi, `${money(p.totalInteretsCts)} €`]
    ];
    const colW = cardW / 3;
    items.forEach(([label, value], i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = M + 6 + col * colW;
      const y = cardY + 9 + row * 16;
      doc.setFont(fontName, "normal");
      doc.setFontSize(8);
      doc.setTextColor(...BRAND.grey);
      doc.text(tx(label), x, y);
      doc.setFont(fontName, "bold");
      doc.setFontSize(12);
      doc.setTextColor(...BRAND.navy);
      doc.text(tx(value), x, y + 6);
    });

    // ---- Tableau -----------------------------------------------------
    const head = [[t.thNumero, t.thData, t.thRata, t.thInteressi, t.thCapitale, t.thSaldo].map(tx)];
    const body = p.lignes.map((r) => [
      r.numero, fmtDate(r.date), money(r.rataCts), money(r.interetsCts), money(r.principalCts), money(r.soldeCts)
    ].map(tx));
    const totalPrincipalCts = p.lignes.reduce((s, r) => s + r.principalCts, 0);
    const foot = [["", t.totale, money(p.totalPayeCts), money(p.totalInteretsCts), money(totalPrincipalCts), ""].map(tx)];

    doc.autoTable({
      startY: cardY + cardH + 8,
      head,
      body,
      foot,
      showFoot: "lastPage",
      theme: "plain",
      margin: { top: 26, bottom: 20, left: M, right: M },
      styles: { font: fontName, fontSize: 9, cellPadding: 2.6, textColor: [68, 68, 68], lineColor: BRAND.line, lineWidth: 0 },
      headStyles: { fillColor: BRAND.navy, textColor: 255, fontStyle: "bold", halign: "center" },
      footStyles: { fillColor: BRAND.light, textColor: BRAND.navy, fontStyle: "bold", halign: "right" },
      alternateRowStyles: { fillColor: [247, 250, 255] },
      columnStyles: {
        0: { halign: "center", cellWidth: 12 },
        1: { halign: "center", cellWidth: 34 },
        2: { halign: "right" },
        3: { halign: "right" },
        4: { halign: "right" },
        5: { halign: "right" }
      },
      didParseCell: (d) => {
        if (d.section === "head" && d.column.index > 1) d.cell.styles.halign = "center";
        if (d.section === "foot" && d.column.index === 1) d.cell.styles.halign = "center";
      },
      didDrawCell: (d) => {
        if (d.section === "body") {
          doc.setDrawColor(...BRAND.line);
          doc.setLineWidth(0.1);
          doc.line(d.cell.x, d.cell.y + d.cell.height, d.cell.x + d.cell.width, d.cell.y + d.cell.height);
        }
      }
    });

    // ---- En-têtes des pages suivantes + pieds de page ---------------
    const total = doc.internal.getNumberOfPages();
    for (let n = 1; n <= total; n++) {
      doc.setPage(n);

      if (n > 1) {
        if (logo) {
          const lh = 9;
          doc.addImage(logo.dataUrl, "PNG", M, 8, Math.min((logo.w / logo.h) * lh, 45), lh);
        } else {
          dessinerLogoVectoriel(doc, M, 8, 8, fontName);
        }
        doc.setDrawColor(...BRAND.blue);
        doc.setLineWidth(0.5);
        doc.line(M, 20, W - M, 20);
      }

      doc.setDrawColor(...BRAND.line);
      doc.setLineWidth(0.3);
      doc.line(M, H - 14, W - M, H - 14);
      doc.setFont(fontName, "normal");
      doc.setFontSize(8);
      doc.setTextColor(...BRAND.grey);
      doc.text("CreditoEuropa", M, H - 9);
      doc.text(tx(t.disclaimer), W / 2, H - 9, { align: "center", maxWidth: 110 });
      doc.text(tx(`${t.pagina} ${n} / ${total}`), W - M, H - 9, { align: "right" });
    }

    // Nom du fichier : <nom selon la langue>_(<montant>_euro).pdf  ex. Piano_di_rimborso_completo_(6000_euro).pdf
    const montantNom = String(p.montant).replace(".", ",");
    doc.save(`${t.nomFichier}_(${montantNom}_euro).pdf`);
  } catch (err) {
    console.error(err);
    alert("PDF error: " + err.message);
  } finally {
    btn.disabled = false;
  }
}

// =====================================================================
//  Initialisation
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);

  document.getElementById("lang-select").addEventListener("change", (e) => applyLang(e.target.value));
  document.getElementById("loan-form").addEventListener("submit", (e) => {
    e.preventDefault();
    calculerPlan();
  });
  document.getElementById("download-pdf").addEventListener("click", genererPDF);

  // Précharge logo et polices pour que le PDF soit instantané
  chargerLogo();
  chargerPolices();
});