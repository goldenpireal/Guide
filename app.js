(() => {
  const roadmaps = [
    {
      title: "Web Development",
      category: "Technology",
      level: "Beginner",
      description: "Go from the basics of the web to building and publishing your own websites.",
      tags: ["html", "css", "javascript", "frontend", "website", "programming"],
      steps: [
        { title: "Understand how the web works", detail: "Learn browsers, servers, URLs, HTTP and how a page reaches your screen.", resources: [{name:"MDN — How the web works",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/How_the_Web_works"}] },
        { title: "Learn HTML", detail: "Build page structure with semantic elements, forms, links, images and accessible markup.", resources: [{name:"MDN — HTML",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"}] },
        { title: "Learn CSS", detail: "Style pages with selectors, the box model, Flexbox, Grid and responsive layouts.", resources: [{name:"MDN — CSS",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"},{name:"web.dev — Learn CSS",url:"https://web.dev/learn/css"}] },
        { title: "Learn JavaScript", detail: "Practise variables, functions, arrays, objects, DOM events, async code and fetch.", resources: [{name:"MDN — JavaScript",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"},{name:"JavaScript.info",url:"https://javascript.info/"}] },
        { title: "Build real projects", detail: "Make a portfolio, a to-do app and a project that uses a public API. Learn Git as you go.", resources: [{name:"The Odin Project",url:"https://www.theodinproject.com/"}] },
        { title: "Publish your work", detail: "Deploy a site, test it on mobile, improve accessibility and write a useful README.", resources: [{name:"GitHub Pages",url:"https://docs.github.com/en/pages"},{name:"Vercel Docs",url:"https://vercel.com/docs"}] }
      ]
    },
    {
      title: "Vectors",
      category: "Mathematics",
      level: "Beginner",
      description: "Understand vectors visually, learn the operations, and apply them to geometry and physics.",
      tags: ["math", "mathematics", "physics", "linear algebra", "vector"],
      steps: [
        {title:"Build the intuition",detail:"Understand scalars versus vectors, magnitude, direction and vector notation.",resources:[{name:"Khan Academy — Vectors",url:"https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces"}]},
        {title:"Represent vectors",detail:"Work with components, coordinates, unit vectors and position vectors.",resources:[{name:"3Blue1Brown — Linear algebra",url:"https://www.3blue1brown.com/topics/linear-algebra"}]},
        {title:"Add and scale vectors",detail:"Practise addition, subtraction, scalar multiplication and geometric interpretation.",resources:[{name:"OpenStax — Calculus Volume 3",url:"https://openstax.org/details/books/calculus-volume-3"}]},
        {title:"Learn dot and cross products",detail:"Explore angles, projections, perpendicularity, area and orientation.",resources:[{name:"Khan Academy — Dot and cross products",url:"https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces"}]},
        {title:"Apply vectors",detail:"Solve problems involving forces, velocity, displacement and lines in space.",resources:[{name:"OpenStax — University Physics",url:"https://openstax.org/subjects/science"}]}
      ]
    },
    {
      title: "Matrices",
      category: "Mathematics",
      level: "Beginner",
      description: "Learn matrix notation and operations, then connect matrices to transformations and systems.",
      tags: ["math", "mathematics", "linear algebra", "algebra"],
      steps: [
        {title:"Matrix basics",detail:"Read rows, columns, dimensions and entries; identify common matrix types.",resources:[{name:"Khan Academy — Matrices",url:"https://www.khanacademy.org/math/linear-algebra"}]},
        {title:"Matrix operations",detail:"Practise addition, scalar multiplication and matrix multiplication.",resources:[{name:"MIT OpenCourseWare — Linear Algebra",url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"}]},
        {title:"Determinants and inverses",detail:"Understand determinants, invertibility and inverse matrices.",resources:[{name:"3Blue1Brown — Linear algebra",url:"https://www.3blue1brown.com/topics/linear-algebra"}]},
        {title:"Solve linear systems",detail:"Use matrices and row reduction to solve simultaneous equations.",resources:[{name:"MIT OCW — 18.06",url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"}]},
        {title:"Explore transformations",detail:"See how matrices rotate, scale, shear and map vectors between spaces.",resources:[{name:"3Blue1Brown — Essence of linear algebra",url:"https://www.3blue1brown.com/topics/linear-algebra"}]}
      ]
    },
    {
      title: "Astronomy",
      category: "Science",
      level: "Beginner",
      description: "Explore the night sky, our solar system, stars, galaxies and the wider universe.",
      tags: ["space", "science", "physics", "cosmos", "universe"],
      steps: [
        {title:"Start with the sky",detail:"Learn constellations, apparent motion, phases of the Moon and observing basics.",resources:[{name:"NASA — Space Place",url:"https://spaceplace.nasa.gov/"}]},
        {title:"Explore the solar system",detail:"Study the Sun, planets, moons, asteroids and comets.",resources:[{name:"NASA — Solar System Exploration",url:"https://science.nasa.gov/solar-system/"}]},
        {title:"Understand light and telescopes",detail:"Learn wavelengths, spectra, electromagnetic radiation and how telescopes collect light.",resources:[{name:"OpenStax — Astronomy",url:"https://openstax.org/details/books/astronomy-2e"}]},
        {title:"Study stars and galaxies",detail:"Explore stellar life cycles, nebulae, the Milky Way and galaxy types.",resources:[{name:"OpenStax — Astronomy",url:"https://openstax.org/details/books/astronomy-2e"}]},
        {title:"Look at the universe",detail:"Get introduced to expansion, dark matter, dark energy and cosmology.",resources:[{name:"NASA — Universe",url:"https://science.nasa.gov/universe/"}]}
      ]
    },
    {
      title: "Python Programming",
      category: "Technology",
      level: "Beginner",
      description: "Start coding with Python, practise problem solving and build useful small programs.",
      tags: ["coding", "programming", "computer science", "automation", "python"],
      steps: [
        {title:"Set up and run Python",detail:"Use the interpreter or an editor, run scripts and understand errors.",resources:[{name:"Official Python Tutorial",url:"https://docs.python.org/3/tutorial/"}]},
        {title:"Learn the fundamentals",detail:"Practise variables, types, strings, conditions, loops and functions.",resources:[{name:"Python for Everybody",url:"https://www.py4e.com/"}]},
        {title:"Work with collections",detail:"Use lists, tuples, dictionaries, sets and comprehensions.",resources:[{name:"Official Python Tutorial",url:"https://docs.python.org/3/tutorial/"}]},
        {title:"Organise programs",detail:"Learn modules, files, exceptions, packages and virtual environments.",resources:[{name:"Python Packaging User Guide",url:"https://packaging.python.org/"}]},
        {title:"Build projects",detail:"Make a quiz, a file organiser and a small data or API project.",resources:[{name:"The Python Challenge",url:"https://www.pythonchallenge.com/"}]}
      ]
    },
    {
      title: "World History",
      category: "Humanities",
      level: "Beginner",
      description: "Build a broad timeline and learn to compare societies, events and historical sources.",
      tags: ["history", "social science", "humanities", "civilization"],
      steps: [
        {title:"Learn how history works",detail:"Understand timelines, primary sources, evidence, context and historical interpretation.",resources:[{name:"Khan Academy — World History",url:"https://www.khanacademy.org/humanities/world-history"}]},
        {title:"Study early societies",detail:"Explore the first cities, agriculture, trade and ancient civilizations.",resources:[{name:"World History Encyclopedia",url:"https://www.worldhistory.org/"}]},
        {title:"Explore interconnected worlds",detail:"Study empires, religions, trade routes, migration and cultural exchange.",resources:[{name:"Khan Academy — World History",url:"https://www.khanacademy.org/humanities/world-history"}]},
        {title:"Understand the modern era",detail:"Trace industrialisation, revolutions, colonialism and global conflicts.",resources:[{name:"OpenStax — World History",url:"https://openstax.org/subjects/social-sciences"}]},
        {title:"Think like a historian",detail:"Compare sources, identify bias and build evidence-based explanations.",resources:[{name:"Library of Congress — Teaching with Primary Sources",url:"https://www.loc.gov/programs/teachers/"}]}
      ]
    }
  ];

  const form = document.querySelector(".searching");
  const input = document.querySelector(".searchbar");
  const results = document.querySelector("#roadmap-results");
  if (!form || !input || !results) return;

  const STORAGE_KEY = "intmap-learning-state-v1";
  const readState = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"completed":{},"bookmarks":[]}'); }
    catch { return {completed:{},bookmarks:[]}; }
  };
  const saveState = (state) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch { /* Keep the current session usable if storage is unavailable. */ }
  };
  const state = readState();
  if (!state.completed) state.completed = {};
  if (!Array.isArray(state.bookmarks)) state.bookmarks = [];
  const completedFor = (title) => state.completed[title] || [];
  const isBookmarked = (title) => state.bookmarks.includes(title);

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);

  const score = (roadmap, query) => {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    const title = roadmap.title.toLowerCase();
    const category = roadmap.category.toLowerCase();
    const tags = roadmap.tags.join(" ").toLowerCase();
    if (title === q) return 100;
    if (title.startsWith(q)) return 80;
    if (title.includes(q)) return 65;
    if (category.includes(q)) return 45;
    if (tags.includes(q)) return 30;
    return 0;
  };

  const renderResults = (query) => {
    const matches = roadmaps.map((item) => ({item, score:score(item, query)}))
      .filter((entry) => entry.score > 0)
      .sort((a,b) => b.score - a.score);
    if (!query.trim()) {
      results.innerHTML = '<p class="results-empty">Type a topic above to explore its learning roadmap.</p>';
      results.hidden = false;
      return;
    }
    if (!matches.length) {
      results.innerHTML = '<div class="results-empty"><strong>No roadmap found yet.</strong><p>Try a broader term such as maths, science, programming or history. More topics will be added over time.</p></div>';
      results.hidden = false;
      return;
    }
    results.innerHTML = '<div class="results-heading"><span>LEARNING PATHS</span><span>' + matches.length + ' topic' + (matches.length === 1 ? '' : 's') + ' found</span></div>' +
      '<div class="roadmap-grid">' + matches.map(({item}) =>
        '<article class="roadmap-card">' +
          '<div class="card-topline"><span class="roadmap-meta">' + escapeHtml(item.category) + ' · ' + escapeHtml(item.level) + '</span>' +
          '<button class="bookmark-button ' + (isBookmarked(item.title) ? 'is-saved' : '') + '" type="button" data-bookmark="' + escapeHtml(item.title) + '" aria-label="' + (isBookmarked(item.title) ? 'Remove bookmark' : 'Bookmark roadmap') + '" aria-pressed="' + isBookmarked(item.title) + '">' + (isBookmarked(item.title) ? '★' : '☆') + '</button></div>' +
          '<strong>' + escapeHtml(item.title) + '</strong>' +
          '<span class="roadmap-description">' + escapeHtml(item.description) + '</span>' +
          '<button class="roadmap-open" type="button" data-roadmap="' + escapeHtml(item.title) + '">Explore roadmap <span aria-hidden="true">↗</span></button>' +
        '</article>'
      ).join("") + '</div><div id="roadmap-detail" class="roadmap-detail" aria-live="polite"></div>';
    results.hidden = false;
    results.querySelectorAll("[data-roadmap]").forEach((button) => {
      button.addEventListener("click", () => showRoadmap(button.dataset.roadmap));
    });
    results.querySelectorAll("[data-bookmark]").forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.dataset.bookmark;
        state.bookmarks = isBookmarked(title)
          ? state.bookmarks.filter((saved) => saved !== title)
          : [...state.bookmarks, title];
        saveState(state);
        renderResults(input.value);
      });
    });
    if (matches.length === 1) showRoadmap(matches[0].item.title);
  };

  const showRoadmap = (title) => {
    const item = roadmaps.find((roadmap) => roadmap.title === title);
    const detail = document.querySelector("#roadmap-detail");
    if (!item || !detail) return;
    const done = completedFor(title);
    const percent = Math.round((done.length / item.steps.length) * 100);
    detail.innerHTML = '<div class="detail-top"><div><span class="roadmap-meta">YOUR LEARNING PATH</span><h2>' + escapeHtml(item.title) + '</h2><p>' + escapeHtml(item.description) + '</p></div>' +
      '<button class="bookmark-detail ' + (isBookmarked(title) ? 'is-saved' : '') + '" type="button" data-detail-bookmark aria-pressed="' + isBookmarked(title) + '">' + (isBookmarked(title) ? '★ Saved' : '☆ Save roadmap') + '</button></div>' +
      '<div class="progress-panel"><div class="progress-copy"><strong>Your progress</strong><span class="progress-count">' + done.length + ' of ' + item.steps.length + ' steps · ' + percent + '%</span></div>' +
      '<div class="progress-track" role="progressbar" aria-label="Roadmap completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + percent + '"><span style="width:' + percent + '%"></span></div></div>' +
      '<ol class="roadmap-steps">' + item.steps.map((step, index) => {
        const checked = done.includes(index);
        return '<li class="' + (checked ? 'step-done' : '') + '"><span class="step-number">' + String(index + 1).padStart(2, "0") + '</span><div class="step-content">' +
          '<label class="step-check"><input type="checkbox" data-step="' + index + '"' + (checked ? ' checked' : '') + '><span class="custom-check" aria-hidden="true"></span><span class="step-title">' + escapeHtml(step.title) + '</span></label>' +
          '<p>' + escapeHtml(step.detail) + '</p><div class="resource-links">' + step.resources.map((resource) =>
            '<a href="' + escapeHtml(resource.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(resource.name) + ' ↗</a>'
          ).join("") + '</div></div></li>';
      }).join("") + '</ol><p class="roadmap-note">Your progress and saved roadmaps are stored only in this browser on this device. Resources are external links.</p>';

    detail.querySelectorAll("[data-step]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const index = Number(checkbox.dataset.step);
        const current = completedFor(title);
        state.completed[title] = checkbox.checked
          ? [...new Set([...current, index])]
          : current.filter((step) => step !== index);
        saveState(state);
        showRoadmap(title);
      });
    });
    detail.querySelector("[data-detail-bookmark]").addEventListener("click", () => {
      state.bookmarks = isBookmarked(title)
        ? state.bookmarks.filter((saved) => saved !== title)
        : [...state.bookmarks, title];
      saveState(state);
      showRoadmap(title);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults(input.value);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderResults(input.value);
    }
  });
  document.querySelectorAll(".search-help").forEach((help) => {
    help.addEventListener("click", (event) => {
      const text = event.target.closest("strong") ? "" : event.target.textContent;
      const match = text && roadmaps.find((item) => item.title.toLowerCase() === text.toLowerCase());
      if (match) { input.value = match.title; renderResults(input.value); }
    });
  });
  results.hidden = true;
})();