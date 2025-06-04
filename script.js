
// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.clientX - 10 + 'px';
cursor.style.top = e.clientY - 10 + 'px';
});





















// Generate floating elements
function createFloatingElements() {
const container = document.querySelector('.floating-elements');
for (let i = 0; i < 20; i++) {
const element = document.createElement('div');
element.className = 'floating-element';
element.style.left = Math.random() * 100 + '%';
element.style.top = Math.random() * 100 + '%';
element.style.width = Math.random() * 100 + 50 + 'px';
element.style.height = element.style.width;
element.style.animationDelay = Math.random() * 6 + 's';
element.style.animationDuration = (Math.random() * 4 + 4) + 's';
container.appendChild(element);
}
}






















// Mouse trail particles
document.addEventListener('mousemove', (e) => {
if (Math.random() < 0.1) {
createParticle(e.clientX, e.clientY);
}
});

// Animation controls
let animationPaused = false;
let currentSpeed = 1;

function toggleAnimation() {
const orbits = document.querySelectorAll('.orbit');
const sun = document.querySelector('.sun');

if (animationPaused) {
orbits.forEach(orbit => orbit.style.animationPlayState = 'running');
sun.style.animationPlayState = 'running';
animationPaused = false;
} else {
orbits.forEach(orbit => orbit.style.animationPlayState = 'paused');
sun.style.animationPlayState = 'paused';
animationPaused = true;
}
}

function speedUp() {
currentSpeed = currentSpeed >= 4 ? 0.5 : currentSpeed * 2;
const orbits = document.querySelectorAll('.orbit');

orbits.forEach((orbit, index) => {
const baseDuration = [5, 8, 12, 16, 20][index];
orbit.style.animationDuration = (baseDuration / currentSpeed) + 's';
});
}

function resetView() {
currentSpeed = 1;
const orbits = document.querySelectorAll('.orbit');

orbits.forEach((orbit, index) => {
const baseDuration = [5, 8, 12, 16, 20][index];
orbit.style.animationDuration = baseDuration + 's';
orbit.style.animationPlayState = 'running';
});

document.querySelector('.sun').style.animationPlayState = 'running';
animationPaused = false;
}

function startExploration() {
document.querySelector('.hero').style.transform = 'translateY(-100vh)';
document.querySelector('.hero').style.transition = 'transform 1s ease-in-out';

setTimeout(() => {
document.querySelector('.solar-system').scrollIntoView({
behavior: 'smooth'
});
}, 500);
}



















// Smooth scrolling for navigation
document.querySelectorAll('.nav-item').forEach(item => {
item.addEventListener('click', (e) => {
e.preventDefault();
// Add smooth scrolling logic here for different sections
});
});

// Add some interactive sound effects (visual feedback)
document.addEventListener('click', (e) => {
const ripple = document.createElement('div');
ripple.style.position = 'absolute';
ripple.style.left = e.clientX - 25 + 'px';
ripple.style.top = e.clientY - 25 + 'px';
ripple.style.width = '50px';
ripple.style.height = '50px';
ripple.style.border = '2px solid #00ffff';
ripple.style.borderRadius = '50%';
ripple.style.pointerEvents = 'none';
ripple.style.animation = 'ripple 0.6s ease-out';
ripple.style.zIndex = '9999';

document.body.appendChild(ripple);

setTimeout(() => ripple.remove(), 600);
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
createStars();
createFloatingElements();
});
