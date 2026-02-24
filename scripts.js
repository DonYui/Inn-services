document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    const menuIcon = menuToggle.querySelector('.menu-icon');
    const closeIcon = menuToggle.querySelector('.close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function closeMobileMenu() {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }

    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        closeMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // Active Navigation Link
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // Tabs Functionality for Profiles Section
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        e.preventDefault();
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }

  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.service-card, .benefit-item, .area-card, .profile-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Counter animation for stats
  const stats = document.querySelectorAll('.stat-number');

  const animateCounter = (element) => {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const number = parseInt(target.replace(/\D/g, ''));
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < number) {
        element.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => statsObserver.observe(stat));

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
    });
  });

  console.log('INN Services - Hunting website loaded successfully');

}); // end DOMContentLoaded