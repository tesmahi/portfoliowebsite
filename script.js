const toggleButton = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
  toggleButton.textContent = '☀️';
} else {
  toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
});
