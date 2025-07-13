// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Vanta.js 3D animated background
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  lineColor: 0x4CAF50,
  backgroundColor: 0x1e1e1e
});

// Typing animation intro
new TypeIt("#type-text", {
  speed: 80,
  loop: true,
  deleteSpeed: 40,
  waitUntilVisible: true
})
  .type("B.Tech Student at IIT Patna , majoring in Electrical and Electronics Engineering")
  .pause(1000)
  // .delete()
  // .type("Electrical & Electronics Engineer")
  // .pause(1000)
  .delete()
  .type("C++ , DSA Learner & Aspiring Web Developer")
  .pause(1000)
  // .delete()
  // .type("Aspiring Web Developer")
  // .pause(1000)
  .go();
