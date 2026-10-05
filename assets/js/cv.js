(() => {
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-filter]');
    const section = group.closest('.cv-section');
    const entries = section.querySelectorAll('.cv-filterable');
    buttons.forEach((button) => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      entries.forEach((entry) => {
        const values = entry.dataset.filterValues.split(' ');
        entry.hidden = filter !== 'all' && !values.includes(filter);
      });
    }));
  });
})();
