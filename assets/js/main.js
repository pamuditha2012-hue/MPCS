/**
 * Demo MPCS - Main Interactivity Script
 * Handles UI interactions, calculators, branch filtering, modals & animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStickyHeader();
  initMobileDrawer();
  initBackToTop();
  initStatsCounter();
  initCalculators();
  initBranchFilters();
  initModals();
  initForms();
});

/* -------------------------------------------------------------------------
   0. Theme Manager (Default: Light Mode)
   ------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('mpcs_theme') || 'light'; // Clean light mode default
  applyTheme(savedTheme);

  // Bind all toggle buttons (topbar, desktop header, mobile header)
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  // Bind drawer pills
  document.querySelectorAll('.theme-pill-opt').forEach(pill => {
    pill.addEventListener('click', () => {
      const chosenTheme = pill.getAttribute('data-theme-val');
      if (chosenTheme) applyTheme(chosenTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mpcs_theme', theme);
  localStorage.setItem('theme', theme);

  // Update theme toggle buttons state and icons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.setAttribute('data-theme-state', theme);
    const sun = btn.querySelector('.sun-icon');
    const moon = btn.querySelector('.moon-icon');
    const btnText = btn.querySelector('.theme-btn-text');
    const modeText = btn.querySelector('.theme-mode-text');

    if (theme === 'dark') {
      btn.setAttribute('aria-label', 'Switch to Light Mode');
      btn.setAttribute('title', 'Switch to Light Mode');
      if (sun) sun.style.display = 'inline-flex';
      if (moon) moon.style.display = 'none';
      if (btnText) btnText.textContent = 'Light';
      if (modeText) modeText.textContent = 'Light Mode';
    } else {
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
      btn.setAttribute('title', 'Switch to Dark Mode');
      if (sun) sun.style.display = 'none';
      if (moon) moon.style.display = 'inline-flex';
      if (btnText) btnText.textContent = 'Dark';
      if (modeText) modeText.textContent = 'Dark Mode';
    }
  });

  // Update drawer theme pills active status
  document.querySelectorAll('.theme-pill-opt').forEach(pill => {
    if (pill.getAttribute('data-theme-val') === theme) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

/* -------------------------------------------------------------------------
   1. Sticky Header
   ------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   ------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* -------------------------------------------------------------------------
   3. Back to Top Button
   ------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------------------
   4. Animated Stats Counter
   ------------------------------------------------------------------------- */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-count');
  if (!counters.length) return;

  let hasAnimated = false;

  function checkVisibility() {
    if (hasAnimated) return;
    const firstCounter = counters[0];
    const rect = firstCounter.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      hasAnimated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const duration = 1600;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString();
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
}

/* -------------------------------------------------------------------------
   5. Interactive Calculators (Deposit & Loan)
   ------------------------------------------------------------------------- */
function initCalculators() {
  // FD / Savings Calculator
  const amountSlider = document.getElementById('calcAmountRange');
  const amountInput = document.getElementById('calcAmountInput');
  const tenureSelect = document.getElementById('calcTenureSelect');
  const resultDisplay = document.getElementById('calcMaturityDisplay');
  const interestDisplay = document.getElementById('calcInterestDisplay');
  const monthlyDisplay = document.getElementById('calcMonthlyDisplay');

  if (amountSlider && amountInput && tenureSelect && resultDisplay) {
    // Synchronize slider and number input
    amountSlider.addEventListener('input', () => {
      amountInput.value = (+amountSlider.value).toLocaleString();
      calculateFD();
    });

    amountInput.addEventListener('change', () => {
      let rawVal = +amountInput.value.replace(/[^0-9]/g, '');
      if (rawVal < 1000) rawVal = 1000;
      if (rawVal > 10000000) rawVal = 10000000;
      amountSlider.value = rawVal;
      amountInput.value = rawVal.toLocaleString();
      calculateFD();
    });

    tenureSelect.addEventListener('change', calculateFD);

    function calculateFD() {
      const principal = +amountSlider.value;
      const rateConfig = {
        '3m': { rate: 0.085, months: 3 },
        '6m': { rate: 0.0975, months: 6 },
        '12m': { rate: 0.11, months: 12 },
        '24m': { rate: 0.115, months: 24 },
        'reg_savings': { rate: 0.045, months: 12 },
        'kids_savings': { rate: 0.065, months: 12 },
        'senior_savings': { rate: 0.07, months: 12 }
      };

      const selected = rateConfig[tenureSelect.value] || rateConfig['12m'];
      const annualRate = selected.rate;
      const months = selected.months;

      // Simple accurate interest for tenure
      const interest = principal * (annualRate * (months / 12));
      const maturity = principal + interest;
      const monthlyRate = (principal * annualRate) / 12;

      resultDisplay.textContent = 'Rs. ' + Math.round(maturity).toLocaleString('en-LK');
      if (interestDisplay) {
        interestDisplay.textContent = 'Rs. ' + Math.round(interest).toLocaleString('en-LK');
      }
      if (monthlyDisplay) {
        monthlyDisplay.textContent = 'Rs. ' + Math.round(monthlyRate).toLocaleString('en-LK');
      }
    }

    // Initial calculation
    calculateFD();
  }

  // Loan EMI Calculator
  const loanAmountInput = document.getElementById('loanAmount');
  const loanRateInput = document.getElementById('loanRate');
  const loanMonthsInput = document.getElementById('loanMonths');
  const loanEmiDisplay = document.getElementById('loanEmiResult');
  const loanTotalInterestDisplay = document.getElementById('loanTotalInterest');

  if (loanAmountInput && loanRateInput && loanMonthsInput && loanEmiDisplay) {
    function calculateLoan() {
      const p = +loanAmountInput.value || 0;
      const annualRate = +loanRateInput.value || 0;
      const n = +loanMonthsInput.value || 1;

      if (p <= 0 || annualRate <= 0 || n <= 0) return;

      const r = (annualRate / 100) / 12;
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - p;

      loanEmiDisplay.textContent = 'Rs. ' + Math.round(emi).toLocaleString('en-LK');
      if (loanTotalInterestDisplay) {
        loanTotalInterestDisplay.textContent = 'Rs. ' + Math.round(totalInterest).toLocaleString('en-LK');
      }
    }

    [loanAmountInput, loanRateInput, loanMonthsInput].forEach(inp => {
      inp.addEventListener('input', calculateLoan);
    });

    calculateLoan();
  }
}

/* -------------------------------------------------------------------------
   6. Branch Directory Filtering & Search
   ------------------------------------------------------------------------- */
function initBranchFilters() {
  const filterBtns = document.querySelectorAll('.branch-filter-btn');
  const branchCards = document.querySelectorAll('.branch-item-card');
  const searchInput = document.getElementById('branchSearchInput');

  if (!branchCards.length) return;

  function filterCards() {
    const activeBtn = document.querySelector('.branch-filter-btn.active');
    const selectedCategory = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    branchCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesCat = (selectedCategory === 'all' || cardCategory.includes(selectedCategory));
      const matchesSearch = (!query || textContent.includes(query));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }
}

/* -------------------------------------------------------------------------
   7. Modals System (Member Application, Tender Download, Info)
   ------------------------------------------------------------------------- */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const closeBtns = document.querySelectorAll('.modal-close-btn, .modal-cancel');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const openModal = btn.closest('.modal-overlay');
      if (openModal) {
        openModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* -------------------------------------------------------------------------
   8. Form Handlers & Demo Toast Notifications
   ------------------------------------------------------------------------- */
function initForms() {
  // Contact & Grievance form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Submitting...';

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        contactForm.reset();
        showToast('Your message has been submitted successfully! Ticket #REF-2026-8812');
      }, 1000);
    });
  }

  // Member Registration Modal Form
  const memberForm = document.getElementById('memberRegForm');
  if (memberForm) {
    memberForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = memberForm.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
      memberForm.reset();
      showToast('Membership pre-application received! Our secretariat will contact you.');
    });
  }

  // Welfare Eligibility Checker Quiz
  const welfareQuizForm = document.getElementById('welfareQuizForm');
  const welfareQuizResult = document.getElementById('welfareQuizResult');
  if (welfareQuizForm && welfareQuizResult) {
    welfareQuizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const benefitType = document.getElementById('quizBenefitType').value;
      const years = +document.getElementById('quizMemberYears').value;

      let msg = '';
      if (benefitType === 'dividend') {
        msg = 'Eligible! As an active shareholder, your annual dividend will be credited at the AGM.';
      } else if (benefitType === 'death') {
        msg = years >= 1 
          ? 'Eligible! Death Donation Fund covers members (Rs. 50,000) and dependents (Rs. 25,000).' 
          : 'Under processing: Death donation requires minimum 1 year of continuous active membership.';
      } else if (benefitType === 'scholarship') {
        msg = 'Eligible! Children of active members with passed Grade 5, O/L or A/L can submit award vouchers.';
      } else {
        msg = 'Eligible! Critical medical assistance grants can be approved through the welfare board review.';
      }

      welfareQuizResult.innerHTML = `<div style="background: var(--primary-50); border: 1px solid var(--primary-500); padding: 16px; border-radius: var(--radius-md); color: var(--primary-900); font-weight: 600;">${msg}</div>`;
      welfareQuizResult.style.display = 'block';
    });
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
