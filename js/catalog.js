(() => {
  'use strict';

  const catalog = document.querySelector('[data-catalog]');
  if (!catalog) return;

  const form = catalog.querySelector('[data-catalog-filters]');
  const grid = catalog.querySelector('.product-grid');
  const cards = Array.from(catalog.querySelectorAll('.product-card'));
  const empty = catalog.querySelector('[data-catalog-empty]');
  const count = catalog.querySelector('[data-results-count]');
  const clearButton = catalog.querySelector('[data-clear-filters]');

  if (!form || !grid || !empty || !count || cards.length === 0) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const categorySelect = form.elements.category;
  const manufacturerSelect = form.elements.manufacturer;
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category') || '';
  const initialManufacturer = params.get('manufacturer') || '';

  const hasOption = (select, value) => Array.from(select.options).some((option) => option.value === value);
  if (initialCategory && hasOption(categorySelect, initialCategory)) categorySelect.value = initialCategory;
  if (initialManufacturer && hasOption(manufacturerSelect, initialManufacturer)) manufacturerSelect.value = initialManufacturer;

  form.hidden = false;

  requestAnimationFrame(() => {
    const height = grid.getBoundingClientRect().height;
    if (height > 0) grid.style.minHeight = `${height}px`;
  });

  function updateResults() {
    const category = categorySelect.value;
    const manufacturer = manufacturerSelect.value;
    let visible = 0;

    cards.forEach((card) => {
      const matchesCategory = !category || card.dataset.category === category;
      const matchesManufacturer = !manufacturer || card.dataset.manufacturer === manufacturer;
      const show = matchesCategory && matchesManufacturer;
      card.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = visible === 1 ? '1 produkts' : `${visible} produkti`;
    empty.hidden = visible !== 0;
  }

  function animateFilterChange() {
    if (reduceMotion.matches) {
      updateResults();
      return;
    }

    grid.classList.remove('is-filtering');
    empty.classList.remove('is-filtering');
    void grid.offsetWidth;
    grid.classList.add('is-filtering');
    if (!empty.hidden) empty.classList.add('is-filtering');

    window.setTimeout(() => {
      updateResults();
      if (!empty.hidden) {
        empty.classList.remove('is-filtering');
        void empty.offsetWidth;
        empty.classList.add('is-filtering');
      }
    }, 100);

    window.setTimeout(() => {
      grid.classList.remove('is-filtering');
      empty.classList.remove('is-filtering');
    }, 220);
  }

  form.addEventListener('change', animateFilterChange);
  form.addEventListener('reset', () => {
    window.setTimeout(animateFilterChange, 0);
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      form.reset();
      animateFilterChange();
    });
  }

  updateResults();
})();
