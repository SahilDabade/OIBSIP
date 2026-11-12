document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('sahil_portfolio_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', `Switch to ${savedTheme === 'dark' ? 'light' : 'dark'} mode`);

    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sahil_portfolio_theme', newTheme);
      themeToggleBtn.setAttribute('aria-label', `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} mode`);
      showToast(`Switched to ${newTheme.toUpperCase()} theme`);
    });
  }

  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    navMenu.classList.add('open');
    navToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    navToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          closeMobileMenu();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
        navToggleBtn.focus();
      }
    });
  }

  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {

    revealElements.forEach(el => el.classList.add('revealed'));
  }

  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const certModal = document.getElementById('certificate-modal');
  const certModalCloseBtn = document.getElementById('modal-close-btn');
  const certTriggerBtns = document.querySelectorAll('.view-cert-btn');
  const modalCertImg = document.getElementById('modal-cert-image');
  const modalCertTitle = document.getElementById('modal-cert-title');

  function openCertificateModal(imgSrc, titleText) {
    if (modalCertImg && imgSrc) modalCertImg.src = imgSrc;
    if (modalCertTitle && titleText) modalCertTitle.textContent = titleText;
    if (certModal) {
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (certModalCloseBtn) certModalCloseBtn.focus();
    }
  }

  function closeCertificateModal() {
    if (certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  certTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = btn.getAttribute('data-cert-img');
      const title = btn.getAttribute('data-cert-title');
      openCertificateModal(imgSrc, title);
    });
  });

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertificateModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertificateModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModal.classList.contains('active')) {
        closeCertificateModal();
      }
    });
  }

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    function showError(input, message) {
      const feedback = input.parentElement.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = message;
        feedback.classList.add('show');
      }
      input.setAttribute('aria-invalid', 'true');
    }

    function clearError(input) {
      const feedback = input.parentElement.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = '';
        feedback.classList.remove('show');
      }
      input.removeAttribute('aria-invalid');
    }

    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => clearError(field));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please provide your name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        showError(subjectInput, 'Please enter a subject (at least 3 characters).');
        isValid = false;
      } else {
        clearError(subjectInput);
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please write a message with at least 10 characters.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const senderName = nameInput.value.trim();
        showToast(`Thank you, ${senderName}! Message received (Demo Mode).`);
        contactForm.reset();
      }
    });
  }

  function showToast(message, duration = 3500) {
    let toast = document.getElementById('portfolio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolio-toast';
      toast.className = 'toast-container';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    toast.classList.add('show');

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  const resumeDownloadBtns = document.querySelectorAll('.resume-download-trigger');
  resumeDownloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Resume Download: Placeholder linked. Drop resume.pdf to activate direct file download!');
    });
  });

  console.log('✓ Sahil Dabade Portfolio — Scripts initialized successfully.');
});
