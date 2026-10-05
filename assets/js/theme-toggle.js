(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const storageKey = 'portfolio-theme';
  const stored = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (theme, persist = true) => {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.querySelector('.theme-toggle__icon').textContent = dark ? '☀' : '☾';
    button.querySelector('.theme-toggle__label').textContent = dark ? 'Light mode' : 'Dark mode';
    if (persist) localStorage.setItem(storageKey, dark ? 'dark' : 'light');
  };
  setTheme(stored || (prefersDark ? 'dark' : 'light'), false);
  button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
