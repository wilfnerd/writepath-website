// WritePath Consulting — Interactions

// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('show');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu on link click (mobile)
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Intersection Observer for reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => io.observe(el));

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.className = 'btn back-top hidden';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  const show = window.scrollY > 420;
  backToTop.classList.toggle('hidden', !show);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Sign In form handler
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = signinForm.email.value.trim();
    const password = signinForm.password.value.trim();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Sign in request:", { email, password });
    alert("Sign in successful (demo). Backend integration pending.");
  });
}
