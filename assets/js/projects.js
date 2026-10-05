(() => {
  const controls = document.getElementById('projectControls');
  if (!controls) return;
  const cards = [...document.querySelectorAll('.project-card')];
  const search = document.getElementById('searchBox');
  const buttons = [...controls.querySelectorAll('[data-area]')];
  const count = document.getElementById('resultCount');
  const empty = document.getElementById('noProjects');
  let area = 'all';
  const normalize = value => value.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const projects = cards.map(card => ({card, areas: card.dataset.areas.split(','), text: normalize(card.dataset.search)}));
  function filter() {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    projects.forEach(project => {
      const matches = (area === 'all' || project.areas.includes(area)) && terms.every(term => project.text.includes(term));
      project.card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} of ${cards.length} projects shown`;
    empty.hidden = visible !== 0;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.area === area)));
  }
  buttons.forEach(button => button.addEventListener('click', () => { area = button.dataset.area; filter(); }));
  search.addEventListener('input', filter);
  document.getElementById('clearBtn').addEventListener('click', () => { search.value = ''; area = 'all'; filter(); });
  controls.hidden = false;
  filter();
})();
