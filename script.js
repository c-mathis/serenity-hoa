// Hero text rotator
const rotator = document.getElementById('hero-rotator');
let current = 0;
const isMobile = window.innerWidth < 768;
const lineH = isMobile ? 41.76 : 71.92;
setInterval(() => {
  current = (current + 1) % 3;
  rotator.style.transform = 'translateY(-' + (current * lineH) + 'px)';
}, 2500);

// Tab switcher
function switchTab(idx) {
  document.querySelectorAll('.tab-panel').forEach((p, i) => {
    p.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
}

// Animated counters
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.textContent.replace(/[0-9]/g, '').trim();
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + '+';
    if (current >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    }
  }, 30);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
