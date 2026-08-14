/* Progressive enhancement for the generated TSSR glossary. */
(function (global) {
  "use strict";

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr")
      .replace(/[’']/g, " ")
      .replace(/[^a-z0-9+#./:-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenizeQuery(query) {
    return normalizeText(query).split(" ").filter(Boolean);
  }

  function splitValues(value, separator) {
    return String(value || "").split(separator).map((item) => item.trim()).filter(Boolean);
  }

  function createEntry(data, element) {
    const entry = {
      element: element || null,
      term: String(data.term || ""),
      fullName: String(data.fullName || ""),
      definition: String(data.definition || ""),
      aliases: Array.isArray(data.aliases) ? data.aliases : splitValues(data.aliases, "|"),
      keywords: Array.isArray(data.keywords) ? data.keywords : splitValues(data.keywords, "|"),
      courses: Array.isArray(data.courses) ? data.courses : splitValues(data.courses, " "),
      modules: Array.isArray(data.modules) ? data.modules : splitValues(data.modules, " "),
      letter: String(data.letter || ""),
      courseSort: String(data.courseSort || ""),
      moduleSort: String(data.moduleSort || ""),
      sourceOrder: Number(data.sourceOrder || 0),
      score: 0
    };

    entry.normalized = {
      term: normalizeText(entry.term),
      fullName: normalizeText(entry.fullName),
      definition: normalizeText(entry.definition),
      aliases: entry.aliases.map(normalizeText),
      keywords: entry.keywords.map(normalizeText)
    };
    entry.searchText = [
      entry.normalized.term,
      entry.normalized.fullName,
      entry.normalized.definition,
      ...entry.normalized.aliases,
      ...entry.normalized.keywords
    ].join(" ");
    return entry;
  }

  function scoreEntry(entry, query) {
    const normalizedQuery = normalizeText(query);
    const tokens = tokenizeQuery(query);
    if (!tokens.length) return 0;
    if (!tokens.every((token) => entry.searchText.includes(token))) return -1;

    let score = 0;
    for (const token of tokens) {
      if (entry.normalized.term === token) score += 120;
      else if (entry.normalized.term.startsWith(token)) score += 80;
      else if (entry.normalized.term.includes(token)) score += 60;

      if (entry.normalized.aliases.some((alias) => alias === token)) score += 100;
      else if (entry.normalized.aliases.some((alias) => alias.includes(token))) score += 52;

      if (entry.normalized.fullName.includes(token)) score += 42;
      if (entry.normalized.keywords.some((keyword) => keyword.includes(token))) score += 28;
      if (entry.normalized.definition.includes(token)) score += 12;
    }

    if (entry.normalized.term === normalizedQuery) score += 180;
    else if (entry.normalized.term.startsWith(normalizedQuery)) score += 90;
    if (entry.normalized.aliases.includes(normalizedQuery)) score += 130;
    return score;
  }

  function evaluateEntry(entry, state) {
    if (state.letter && entry.letter !== state.letter) return -1;
    if (state.course && !entry.courses.includes(state.course)) return -1;
    if (state.module && !entry.modules.includes(state.module)) return -1;
    return scoreEntry(entry, state.query);
  }

  function compareText(left, right) {
    return left.localeCompare(right, "fr", { sensitivity: "base", numeric: true });
  }

  function compareTerms(left, right) {
    const leftKey = normalizeText(left).replace(/^[^a-z0-9]+/, "");
    const rightKey = normalizeText(right).replace(/^[^a-z0-9]+/, "");
    return compareText(leftKey, rightKey);
  }

  function compareEntries(left, right, sort) {
    if (sort === "za") return compareTerms(right.term, left.term) || left.sourceOrder - right.sourceOrder;
    if (sort === "course") {
      return compareText(left.courseSort, right.courseSort) || compareTerms(left.term, right.term);
    }
    if (sort === "module") {
      return compareText(left.moduleSort, right.moduleSort) || compareTerms(left.term, right.term);
    }
    if (sort === "relevance") {
      return right.score - left.score || compareTerms(left.term, right.term);
    }
    return compareTerms(left.term, right.term) || left.sourceOrder - right.sourceOrder;
  }

  function filterAndSort(entries, state) {
    return entries
      .map((entry) => {
        entry.score = evaluateEntry(entry, state);
        return entry;
      })
      .filter((entry) => entry.score >= 0)
      .sort((left, right) => compareEntries(left, right, state.sort || "az"));
  }

  function availableModules(entries, state) {
    const moduleState = { ...state, module: "", letter: state.letter || "" };
    const available = new Set();
    for (const entry of entries) {
      if (evaluateEntry(entry, moduleState) < 0) continue;
      entry.modules.forEach((moduleId) => available.add(moduleId));
    }
    return available;
  }

  function availableLetters(entries, state) {
    const letterState = { ...state, letter: "" };
    const available = new Set();
    for (const entry of entries) {
      if (evaluateEntry(entry, letterState) >= 0 && entry.letter) available.add(entry.letter);
    }
    return available;
  }

  function entryFromCard(card) {
    return createEntry(card.dataset, card);
  }

  function initGlossary(scope) {
    const root = scope.querySelector("[data-glossary-root]");
    if (!root || root.dataset.glossaryInitialized === "true") return null;

    const controls = root.querySelector("[data-glossary-controls]");
    const list = root.querySelector("[data-glossary-list]");
    const cards = Array.from(root.querySelectorAll("[data-glossary-card]"));
    if (!controls || !list || !cards.length) return null;

    root.dataset.glossaryInitialized = "true";
    root.classList.add("is-enhanced");
    controls.hidden = false;

    const entries = cards.map(entryFromCard);
    const search = controls.querySelector("[data-glossary-search]");
    const course = controls.querySelector("[data-glossary-course]");
    const moduleSelect = controls.querySelector("[data-glossary-module]");
    const sort = controls.querySelector("[data-glossary-sort]");
    const count = controls.querySelector("[data-glossary-count]");
    const summary = controls.querySelector("[data-glossary-summary]");
    const empty = root.querySelector("[data-glossary-empty]");
    const letterButtons = Array.from(controls.querySelectorAll("[data-glossary-letter]"));
    const moduleOptions = Array.from(moduleSelect.options).slice(1);
    const state = { query: "", letter: "", course: "", module: "", sort: "az" };
    let frame = 0;

    function selectedLabel(select) {
      return select.selectedOptions[0] ? select.selectedOptions[0].textContent.trim() : "";
    }

    function syncState() {
      state.query = search.value.trim();
      state.course = course.value;
      state.module = moduleSelect.value;
      state.sort = sort.value;
    }

    function updateModuleOptions() {
      const available = availableModules(entries, state);
      let selectedStillAvailable = !state.module;
      for (const option of moduleOptions) {
        const belongsToCourse = !state.course || option.dataset.course === state.course;
        const usable = belongsToCourse && available.has(option.value);
        option.hidden = !belongsToCourse;
        option.disabled = !usable;
        if (option.value === state.module && usable) selectedStillAvailable = true;
      }
      if (!selectedStillAvailable) {
        moduleSelect.value = "";
        state.module = "";
      }
    }

    function updateLetters() {
      const available = availableLetters(entries, state);
      for (const button of letterButtons) {
        const letter = button.dataset.glossaryLetter;
        button.disabled = Boolean(letter) && !available.has(letter) && state.letter !== letter;
        const active = letter === state.letter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      }
    }

    function updateSummary(visibleCount) {
      const filters = [];
      if (state.query) filters.push(`recherche « ${state.query} »`);
      if (state.letter) filters.push(`initiale ${state.letter}`);
      if (state.course) filters.push(selectedLabel(course));
      if (state.module) filters.push(selectedLabel(moduleSelect));
      count.textContent = String(visibleCount);
      count.parentElement.childNodes.forEach((node) => {
        if (node.nodeType === 3 && /termes? affichés/.test(node.textContent || "")) {
          node.textContent = visibleCount > 1 ? " termes affichés " : " terme affiché ";
        }
      });
      summary.textContent = filters.length ? `· ${filters.join(" · ")}` : "· Tous les termes";
    }

    function apply() {
      frame = 0;
      syncState();
      updateModuleOptions();
      const visible = filterAndSort(entries, state);
      const visibleSet = new Set(visible);
      const fragment = document.createDocumentFragment();

      for (const entry of visible) {
        entry.element.hidden = false;
        fragment.appendChild(entry.element);
      }
      for (const entry of entries) {
        if (visibleSet.has(entry)) continue;
        entry.element.hidden = true;
        fragment.appendChild(entry.element);
      }
      list.appendChild(fragment);
      empty.hidden = visible.length !== 0;
      root.dataset.visible = String(visible.length);
      updateLetters();
      updateSummary(visible.length);
    }

    function scheduleApply() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    }

    search.addEventListener("input", scheduleApply);
    course.addEventListener("change", scheduleApply);
    moduleSelect.addEventListener("change", scheduleApply);
    sort.addEventListener("change", scheduleApply);
    letterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        state.letter = button.dataset.glossaryLetter;
        apply();
      });
    });
    controls.addEventListener("reset", function () {
      state.letter = "";
      requestAnimationFrame(apply);
    });

    apply();
    return { root, entries, state, apply };
  }

  const api = {
    normalizeText,
    tokenizeQuery,
    createEntry,
    scoreEntry,
    evaluateEntry,
    compareEntries,
    filterAndSort,
    availableModules,
    availableLetters,
    initGlossary
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  global.TSSRGlossary = api;

  if (typeof document === "undefined") return;
  const enhance = function () { initGlossary(document); };
  if (typeof document$ !== "undefined") document$.subscribe(enhance);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance, { once: true });
  else enhance();
})(typeof globalThis !== "undefined" ? globalThis : this);
