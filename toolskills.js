document.querySelectorAll('.tool-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const fill = card.querySelector('.skill-fill');
    const level = card.getAttribute('data-level'); // e.g., 90
    fill.style.width = level + '%'; // fills to 90%
  });

  card.addEventListener('mouseleave', () => {
    const fill = card.querySelector('.skill-fill');
    fill.style.width = '0%'; // reset on leave
  });
});
