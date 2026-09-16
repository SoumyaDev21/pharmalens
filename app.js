/**
 * PharmaLens — Interactive Web Simulator & Engine
 * Built for Google Material 3 Design
 * Creator: Soumya Dev Maity (Pharmacovigilance & Regulatory Affairs)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
  initTheme();

  // Clinical Datasets
  const clinicalData = {
    olaparib: {
      name: "Olaparib",
      brand: "LYNPARZA • PARP Inhibitor (FDA Approved)",
      doctor: "Dr. A. Sen, MD • Medical Oncology",
      slipHtml: `
        <div class="rx-doctor">Dr. A. Sen, MD • Medical Oncology</div>
        <p class="rx-patient" style="font-size: 0.72rem; color: #5f6368; margin-bottom: 6px;">Patient: P. Sharma, 48F • Reg: #ONC-4421</p>
        <div class="rx-med"><strong>Tab. Olaparib 150 mg</strong></div>
        <div class="rx-sig">Sig: 2 tablets orally twice daily (300mg BID)</div>
        <div class="rx-icd">Ind: BRCA1/2-mutated Advanced Ovarian & Breast CA</div>
        <div style="margin-top: 10px; font-size: 0.65rem; color: #80868b; border-top: 1px dashed #dadce0; padding-top: 4px;">Dispense: 112 Film-Coated Tablets • Refill x 2</div>
      `,
      extracted: [
        { key: "Active Pharmaceutical Ingredient (API)", val: "Olaparib" },
        { key: "Strength & Dosage", val: "150 mg per tablet" },
        { key: "Dosage Form", val: "Film-coated tablet" },
        { key: "Administration Route", val: "Oral" },
        { key: "Prescribed Frequency", val: "300 mg (two 150 mg tablets) BID (twice daily)" },
        { key: "Clinical Indication", val: "gBRCAm HER2-negative metastatic breast cancer & recurrent epithelial ovarian cancer" },
        { key: "RxNorm CUI", val: "1599818" },
        { key: "WHO ATC Code", val: "L01XX46 (Other antineoplastic agents)" },
        { key: "Specialty Classification", val: "Medical Oncology / Targeted Therapeutics" }
      ],
      fda: {
        boxedWarning: "Myelodysplastic Syndrome / Acute Myeloid Leukemia (MDS/AML) occurred in < 1.5% of patients treated with LYNPARZA. Perform complete blood counts (CBC) at baseline and monthly thereafter during therapy.",
        adverseReactions: [
          { name: "Nausea", pct: 77 },
          { name: "Fatigue / Asthenia", pct: 67 },
          { name: "Anemia (Hemoglobin drop)", pct: 46 },
          { name: "Vomiting", pct: 40 },
          { name: "Neutropenia", pct: 27 },
          { name: "Thrombocytopenia", pct: 18 }
        ],
        interactions: "Avoid coadministration with strong or moderate CYP3A inhibitors (e.g. ketoconazole, clarithromycin) or inducers (e.g. rifampin, St. John's Wort). Reduce dose to 100mg BID if coadministration is unavoidable."
      },
      trials: [
        {
          nct: "NCT02000622",
          title: "OlympiAD: Olaparib Monotherapy Versus Chemotherapy for Patients With HER2-Negative Metastatic Breast Cancer and a Germline BRCA Mutation",
          phase: "Phase 3",
          status: "Completed",
          sponsor: "AstraZeneca"
        },
        {
          nct: "NCT01844986",
          title: "SOLO-1: Olaparib as Maintenance Therapy in Patients With Newly Diagnosed Advanced BRCA-Mutated Ovarian Cancer",
          phase: "Phase 3",
          status: "Active / Long-term Follow-up",
          sponsor: "AstraZeneca"
        },
        {
          nct: "NCT02470585",
          title: "OlympiA: Olaparib as Adjuvant Treatment in Patients With Germline BRCA Mutated High Risk HER2 Negative Primary Breast Cancer",
          phase: "Phase 3",
          status: "Active, Not Recruiting",
          sponsor: "Breast International Group"
        }
      ]
    },

    metformin: {
      name: "Metformin Hydrochloride",
      brand: "GLUCOPHAGE • Biguanide Antidiabetic (FDA Approved)",
      doctor: "Dr. R. Mukherjee, MD • Endocrinology",
      slipHtml: `
        <div class="rx-doctor">Dr. R. Mukherjee, MD • Endocrinology</div>
        <p class="rx-patient" style="font-size: 0.72rem; color: #5f6368; margin-bottom: 6px;">Patient: R. Gupta, 54M • Reg: #ENDO-1982</p>
        <div class="rx-med"><strong>Tab. Metformin HCl 850 mg</strong></div>
        <div class="rx-sig">Sig: 1 tablet orally twice daily with meals (BID)</div>
        <div class="rx-icd">Ind: Type 2 Diabetes Mellitus • HbA1c: 8.4%</div>
        <div style="margin-top: 10px; font-size: 0.65rem; color: #80868b; border-top: 1px dashed #dadce0; padding-top: 4px;">Dispense: 60 Tablets • Refill x 5</div>
      `,
      extracted: [
        { key: "Active Pharmaceutical Ingredient (API)", val: "Metformin Hydrochloride" },
        { key: "Strength & Dosage", val: "850 mg per tablet" },
        { key: "Dosage Form", val: "Oral tablet (Immediate release)" },
        { key: "Administration Route", val: "Oral" },
        { key: "Prescribed Frequency", val: "1 tablet (850 mg) twice daily with meals" },
        { key: "Clinical Indication", val: "Adjunct to diet and exercise to improve glycemic control in Type 2 Diabetes Mellitus" },
        { key: "RxNorm CUI", val: "6809" },
        { key: "WHO ATC Code", val: "A10BA02 (Biguanides)" },
        { key: "Specialty Classification", val: "Endocrinology & Metabolism" }
      ],
      fda: {
        boxedWarning: "Lactic Acidosis: Rare but life-threatening complication that can occur due to metformin accumulation. Risk increases with renal impairment, sepsis, excessive alcohol intake, and acute congestive heart failure. Contraindicated if eGFR < 30 mL/min/1.73m².",
        adverseReactions: [
          { name: "Diarrhea", pct: 53 },
          { name: "Nausea & Vomiting", pct: 25 },
          { name: "Flatulence", pct: 12 },
          { name: "Asthenia", pct: 9 },
          { name: "Dyspepsia", pct: 7 },
          { name: "Subnormal Vitamin B12 Levels", pct: 7 }
        ],
        interactions: "Iodinated contrast agents for radiological studies require temporary discontinuation of metformin 48h prior due to acute renal failure risks."
      },
      trials: [
        {
          nct: "NCT00000620",
          title: "Diabetes Prevention Program (DPP) & DPP Outcomes Study (DPPOS)",
          phase: "Phase 4",
          status: "Completed",
          sponsor: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)"
        },
        {
          nct: "NCT04033107",
          title: "Targeting Aging with MEtformin (TAME Trial)",
          phase: "Phase 3",
          status: "Recruiting",
          sponsor: "American Federation for Aging Research / Albert Einstein College of Medicine"
        }
      ]
    },

    amoxicillin: {
      name: "Amoxicillin",
      brand: "AMOXIL • Aminopenicillin Antibiotic (FDA Approved)",
      doctor: "Dr. K. Banerjee, MBBS, DCH • Pediatrics & ENT",
      slipHtml: `
        <div class="rx-doctor">Dr. K. Banerjee, MBBS, DCH • ENT Specialist</div>
        <p class="rx-patient" style="font-size: 0.72rem; color: #5f6368; margin-bottom: 6px;">Patient: A. Roy, 29F • Reg: #ENT-8903</p>
        <div class="rx-med"><strong>Cap. Amoxicillin 500 mg</strong></div>
        <div class="rx-sig">Sig: 1 cap every 8 hours (TID) x 7 days</div>
        <div class="rx-icd">Ind: Acute Bacterial Rhinosinusitis</div>
        <div style="margin-top: 10px; font-size: 0.65rem; color: #80868b; border-top: 1px dashed #dadce0; padding-top: 4px;">Dispense: 21 Capsules • No Refills (Antibiotic Stewardship)</div>
      `,
      extracted: [
        { key: "Active Pharmaceutical Ingredient (API)", val: "Amoxicillin Trihydrate" },
        { key: "Strength & Dosage", val: "500 mg per capsule" },
        { key: "Dosage Form", val: "Hard gelatin capsule" },
        { key: "Administration Route", val: "Oral" },
        { key: "Prescribed Frequency", val: "1 capsule (500 mg) every 8 hours for 7 days" },
        { key: "Clinical Indication", val: "Infections of the ear, nose, and throat (ENT) caused by susceptible Streptococcus spp." },
        { key: "RxNorm CUI", val: "723" },
        { key: "WHO ATC Code", val: "J01CA04 (Penicillins with extended spectrum)" },
        { key: "Specialty Classification", val: "Infectious Diseases / Primary Care" }
      ],
      fda: {
        boxedWarning: "Hypersensitivity Reactions: Serious and occasionally fatal anaphylaxis has been reported in patients on penicillin therapy. Careful inquiry regarding prior hypersensitivity reactions to penicillins or cephalosporins is required before initiating therapy.",
        adverseReactions: [
          { name: "Diarrhea", pct: 9 },
          { name: "Maculopapular Rash / Urticaria", pct: 5 },
          { name: "Nausea", pct: 3 },
          { name: "Vomiting", pct: 2 },
          { name: "Mucocutaneous Candidiasis", pct: 2 },
          { name: "Elevated AST / ALT", pct: 1 }
        ],
        interactions: "Probenecid decreases renal tubular secretion of amoxicillin. Concomitant use with oral contraceptives may reduce contraceptive efficacy."
      },
      trials: [
        {
          nct: "NCT03288324",
          title: "Short-course Amoxicillin for Childhood Community-Acquired Pneumonia (SAIL)",
          phase: "Phase 4",
          status: "Completed",
          sponsor: "McMaster University"
        },
        {
          nct: "NCT02447926",
          title: "Optimizing Duration of Amoxicillin Therapy for Acute Otitis Media in Children",
          phase: "Phase 3",
          status: "Completed",
          sponsor: "University of Pittsburgh"
        }
      ]
    },

    atorvastatin: {
      name: "Atorvastatin Calcium",
      brand: "LIPITOR • HMG-CoA Reductase Inhibitor (FDA Approved)",
      doctor: "Dr. S. K. Dutta, MD, DM • Cardiology",
      slipHtml: `
        <div class="rx-doctor">Dr. S. K. Dutta, MD, DM • Cardiology</div>
        <p class="rx-patient" style="font-size: 0.72rem; color: #5f6368; margin-bottom: 6px;">Patient: B. Chatterjee, 62M • Reg: #CARD-5011</p>
        <div class="rx-med"><strong>Tab. Atorvastatin Calcium 20 mg</strong></div>
        <div class="rx-sig">Sig: 1 tablet once daily (QD) at bedtime</div>
        <div class="rx-icd">Ind: Primary Hyperlipidemia & ASCVD Risk Reduction</div>
        <div style="margin-top: 10px; font-size: 0.65rem; color: #80868b; border-top: 1px dashed #dadce0; padding-top: 4px;">Dispense: 30 Tablets • Refill x 11</div>
      `,
      extracted: [
        { key: "Active Pharmaceutical Ingredient (API)", val: "Atorvastatin Calcium" },
        { key: "Strength & Dosage", val: "20 mg per tablet" },
        { key: "Dosage Form", val: "Film-coated tablet" },
        { key: "Administration Route", val: "Oral" },
        { key: "Prescribed Frequency", val: "1 tablet once daily at bedtime" },
        { key: "Clinical Indication", val: "Primary prevention of cardiovascular disease & reduction of elevated total-C, LDL-C, apo B, and TG" },
        { key: "RxNorm CUI", val: "83367" },
        { key: "WHO ATC Code", val: "C10AA05 (HMG CoA reductase inhibitors)" },
        { key: "Specialty Classification", val: "Cardiology & Preventative Medicine" }
      ],
      fda: {
        boxedWarning: "Myopathy & Rhabdomyolysis: Rare occurrences of rhabdomyolysis with acute renal failure secondary to myoglobinuria. Concomitant use with strong CYP3A4 inhibitors (e.g., cyclosporine, clarithromycin, itraconazole) increases plasma concentrations.",
        adverseReactions: [
          { name: "Nasopharyngitis", pct: 8.3 },
          { name: "Arthralgia", pct: 6.9 },
          { name: "Diarrhea", pct: 6.8 },
          { name: "Pain in Extremity", pct: 6.0 },
          { name: "Urinary Tract Infection", pct: 5.7 },
          { name: "Dyspepsia", pct: 4.7 }
        ],
        interactions: "Grapefruit juice in large amounts (>1.2 liters daily) inhibits CYP3A4 and significantly increases atorvastatin systemic exposure."
      },
      trials: [
        {
          nct: "NCT00327691",
          title: "Anglo-Scandinavian Cardiac Outcomes Trial - Lipid Lowering Arm (ASCOT-LLA)",
          phase: "Phase 4",
          status: "Completed",
          sponsor: "Imperial College London / Pfizer"
        },
        {
          nct: "NCT00078182",
          title: "Stroke Prevention by Aggressive Reduction in Cholesterol Levels (SPARCL)",
          phase: "Phase 3",
          status: "Completed",
          sponsor: "Pfizer"
        }
      ]
    }
  };

  // State
  let currentSampleKey = 'olaparib';
  let currentActiveTab = 'extracted';

  // Elements
  const sampleChips = document.querySelectorAll('.sample-chip');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const demoSlip = document.getElementById('demoSlip');
  const demoDrugName = document.getElementById('demoDrugName');
  const demoBrandSubtitle = document.getElementById('demoBrandSubtitle');
  const tabContent = document.getElementById('tabContent');
  const demoStatusTag = document.getElementById('demoStatusTag');
  const demoLaser = document.getElementById('demoLaser');
  const btnRescan = document.getElementById('btnRescan');

  // Initialize Simulator with Olaparib
  loadSample(currentSampleKey);

  // Sample Chips Click Handler
  sampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const sampleKey = chip.getAttribute('data-sample');
      if (sampleKey && sampleKey !== currentSampleKey) {
        sampleChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentSampleKey = sampleKey;
        triggerScanAnimation(() => {
          loadSample(sampleKey);
        });
      }
    });
  });

  // Tab Buttons Click Handler
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      if (tabName) {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveTab = tabName;
        renderTabContent();
      }
    });
  });

  // Re-scan Button Click Handler
  if (btnRescan) {
    btnRescan.addEventListener('click', () => {
      triggerScanAnimation(() => {
        loadSample(currentSampleKey);
      });
    });
  }

  function triggerScanAnimation(callback) {
    if (demoStatusTag) {
      demoStatusTag.textContent = "⚡ ML Kit Scanning & Triage in progress...";
      demoStatusTag.style.color = "var(--google-blue)";
    }
    if (demoSlip) {
      demoSlip.style.opacity = '0.4';
      demoSlip.style.transform = 'scale(0.97)';
    }

    // Temporary laser speed-up
    if (demoLaser) {
      demoLaser.style.animationDuration = '0.9s';
    }

    setTimeout(() => {
      if (demoSlip) {
        demoSlip.style.opacity = '1';
        demoSlip.style.transform = 'scale(1)';
      }
      if (demoLaser) {
        demoLaser.style.animationDuration = '2.4s';
      }
      const randomMs = Math.floor(Math.random() * (195 - 120 + 1)) + 120;
      if (demoStatusTag) {
        demoStatusTag.textContent = `● OCR Scan Complete (${randomMs}ms)`;
        demoStatusTag.style.color = "var(--google-green)";
      }
      if (callback) callback();
    }, 600);
  }

  function loadSample(key) {
    const data = clinicalData[key];
    if (!data) return;

    if (demoSlip) {
      demoSlip.innerHTML = data.slipHtml;
    }
    if (demoDrugName) {
      demoDrugName.textContent = data.name;
    }
    if (demoBrandSubtitle) {
      demoBrandSubtitle.textContent = `Brand: ${data.brand}`;
    }

    renderTabContent();
  }

  function renderTabContent() {
    const data = clinicalData[currentSampleKey];
    if (!data || !tabContent) return;

    if (currentActiveTab === 'extracted') {
      let rowsHtml = '';
      data.extracted.forEach(item => {
        rowsHtml += `
          <tr>
            <td>${item.key}</td>
            <td><strong>${item.val}</strong></td>
          </tr>
        `;
      });

      tabContent.innerHTML = `
        <table class="rx-fields-table">
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      `;
    } else if (currentActiveTab === 'fda') {
      let adverseHtml = '';
      data.fda.adverseReactions.forEach(adv => {
        adverseHtml += `
          <div class="adverse-row">
            <span class="adverse-name">${adv.name}</span>
            <div class="adverse-bar-wrap">
              <div class="adverse-bar-fill" style="width: ${adv.pct}%"></div>
            </div>
            <span class="adverse-pct">${adv.pct}%</span>
          </div>
        `;
      });

      tabContent.innerHTML = `
        <div class="boxed-warning-box">
          <span class="warning-icon">⚠️</span>
          <div>
            <div class="warning-heading">U.S. FDA Boxed Warning & Safety Alert</div>
            <div class="warning-body">${data.fda.boxedWarning}</div>
          </div>
        </div>

        <div style="margin-top: 8px;">
          <h4 style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; color: var(--text-primary);">
            FAERS Most Frequent Adverse Reactions:
          </h4>
          <div class="adverse-reactions-list">
            ${adverseHtml}
          </div>
        </div>

        <div style="margin-top: 10px; padding: 12px; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.82rem; color: var(--text-secondary);">
          <strong>Drug Interactions & Precautions:</strong> ${data.fda.interactions}
        </div>
      `;
    } else if (currentActiveTab === 'trials') {
      let trialsHtml = '';
      data.trials.forEach(trial => {
        trialsHtml += `
          <div class="trial-card-item">
            <span class="trial-nct">${trial.nct}</span>
            <div class="trial-title">${trial.title}</div>
            <div class="trial-meta">
              <span><strong>Phase:</strong> ${trial.phase}</span>
              <span>•</span>
              <span><strong>Status:</strong> ${trial.status}</span>
              <span>•</span>
              <span><strong>Sponsor:</strong> ${trial.sponsor}</span>
            </div>
          </div>
        `;
      });

      tabContent.innerHTML = `
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">
          Querying <strong>ClinicalTrials.gov</strong> API for interventional studies matching <em>${data.name}</em>:
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${trialsHtml}
        </div>
      `;
    }
  }

  // Dark / Light Theme Support
  function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('pharmalens_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pharmalens_theme', theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
});
