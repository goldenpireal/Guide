document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".searchbar");
  if (!searchBar) return;

  const suggestions = [
    "Vectors",
    "Mathematical Induction",
    "Ionic Equilibrium",
    "Euclid's Lemma",
    "Matrices",
    "Complex Numbers"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeNext = () => {
    // Do not overwrite text while the visitor is actively searching.
    if (document.activeElement === searchBar || searchBar.value.length > 0) {
      window.setTimeout(typeNext, 500);
      return;
    }

    const current = suggestions[textIndex];
    searchBar.placeholder = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      window.setTimeout(typeNext, 85);
    } else if (!deleting) {
      deleting = true;
      window.setTimeout(typeNext, 1350);
    } else if (charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(typeNext, 38);
    } else {
      deleting = false;
      textIndex = (textIndex + 1) % suggestions.length;
      window.setTimeout(typeNext, 280);
    }
  };

  typeNext();
});
