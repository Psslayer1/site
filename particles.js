const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 150; i++) { // more stars
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5, // small radius
    dx: (Math.random() - 0.5) * 0.3, // slower movement
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // twinkle
    p.r += (Math.random() - 0.5) * 0.1;
    if (p.r < 0.5) p.r = 0.5;
    if (p.r > 2) p.r = 2;

    // move
    p.x += p.dx;
    p.y += p.dy;

    // bounce edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    // draw star
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = '#7a0000ff';
    ctx.shadowColor = 'rgba(71, 0, 0, 0.8)'; 
    ctx.shadowBlur = 5;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
