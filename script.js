// Alle Boxen mit der Klasse 'box' auswählen
const boxes = document.querySelectorAll('.box, .return-button, .bewertung-button');

// Für jede Box ein Klick-Ereignis hinzufügen
boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Den Wert aus dem data-link Attribut lesen
    const link = box.getAttribute("data-link");

    // Wenn ein Link da ist, weiterleiten zur Seite
    if (link) {
      window.location.href = link;
    }
  });
});












