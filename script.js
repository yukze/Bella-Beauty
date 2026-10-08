/* =========================================================
   BELLA BEAUTY - script.js
   1. Meniul de pe telefon
   2. Plasă de siguranță pentru imagini
   ========================================================= */

/* ---------- 1. MENIUL DE PE TELEFON ---------- */
const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav');

// Deschide sau închide meniul și actualizează atributele pentru cititoarele de ecran
function setMenu(open) {
  menu.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
}

menuButton.addEventListener('click', () => {
  setMenu(!menu.classList.contains('is-open'));
});

// Închide meniul după ce se apasă un link
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Închide meniul cu tasta Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

/* ---------- 2. PLASĂ DE SIGURANȚĂ PENTRU IMAGINI ---------- */
// Dacă o imagine nu se încarcă (de exemplu fără internet), o ascundem.
// Fundalul cald din spatele ei rămâne, deci pagina arată în continuare bine.
document.querySelectorAll('img').forEach((img) => {
  const hide = () => img.classList.add('is-broken');
  img.addEventListener('error', hide);
  if (img.complete && img.naturalWidth === 0 && img.src) hide();
});
