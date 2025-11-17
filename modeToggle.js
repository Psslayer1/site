const toggle = document.getElementById('modeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.remove('dark', 'light');

  if (toggle.textContent === '🌙') {
    document.body.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    document.body.classList.add('light');
    toggle.textContent = '🌙';
  }
});
