(function () {
  const root = document.getElementById('exercise-root');
  const search = document.getElementById('search');
  const count = document.getElementById('count');
  const exercises = window.EXERCISES || [];

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }

  function execute(exercise, resultEl) {
    try {
      const result = exercise.run();
      resultEl.classList.remove('error');
      resultEl.textContent = result === undefined ? 'Exercício executado.' : String(result);
    } catch (error) {
      resultEl.classList.add('error');
      if (error instanceof Utils.CancelledError) {
        resultEl.textContent = error.message;
      } else {
        resultEl.textContent = 'Erro durante a execução: ' + error.message;
        console.error(error);
      }
    }
    resultEl.hidden = false;
  }

  function createCard(exercise) {
    const card = document.createElement('article');
    card.className = 'exercise-card';
    card.dataset.search = `${exercise.id} ${exercise.title} ${exercise.category} ${exercise.description}`.toLowerCase();

    const body = document.createElement('div');
    body.className = 'exercise-body';
    body.innerHTML = `
      <div class="exercise-head">
        <h3 class="exercise-title">${escapeHtml(exercise.id)} — ${escapeHtml(exercise.title)}</h3>
        <span class="badge">${escapeHtml(exercise.category)}</span>
      </div>
      <p class="exercise-description">${escapeHtml(exercise.description)}</p>
      <div class="exercise-actions">
        <button class="btn btn-primary run-btn" type="button">Executar</button>
        <button class="btn btn-ghost code-btn" type="button">Ver JavaScript</button>
      </div>
      <div class="result" hidden></div>
    `;

    const codeWrap = document.createElement('div');
    codeWrap.className = 'code-wrap';
    codeWrap.hidden = true;
    codeWrap.innerHTML = `<div class="code-title">Função JavaScript</div><pre class="code"><code>${escapeHtml(exercise.run.toString())}</code></pre>`;

    const resultEl = body.querySelector('.result');
    body.querySelector('.run-btn').addEventListener('click', () => execute(exercise, resultEl));
    body.querySelector('.code-btn').addEventListener('click', (event) => {
      codeWrap.hidden = !codeWrap.hidden;
      event.currentTarget.textContent = codeWrap.hidden ? 'Ver JavaScript' : 'Ocultar JavaScript';
    });

    card.append(body, codeWrap);
    return card;
  }

  function render(query = '') {
    root.innerHTML = '';
    const normalized = query.trim().toLowerCase();
    const filtered = exercises.filter(ex => !normalized || `${ex.id} ${ex.title} ${ex.category} ${ex.description}`.toLowerCase().includes(normalized));
    count.textContent = `${filtered.length} de ${exercises.length} exercícios`;

    if (!filtered.length) {
      root.innerHTML = '<div class="empty">Nenhum exercício encontrado para essa busca.</div>';
      return;
    }

    const groups = new Map();
    for (const ex of filtered) {
      if (!groups.has(ex.category)) groups.set(ex.category, []);
      groups.get(ex.category).push(ex);
    }

    for (const [category, list] of groups.entries()) {
      const section = document.createElement('section');
      section.className = 'category';
      section.innerHTML = `<h2>${escapeHtml(category)}</h2><p>${list.length} exercício(s) nesta seção.</p>`;
      root.appendChild(section);

      const grid = document.createElement('div');
      grid.className = 'exercise-grid';
      list.forEach(ex => grid.appendChild(createCard(ex)));
      root.appendChild(grid);
    }
  }

  search?.addEventListener('input', event => render(event.target.value));
  render();
})();
