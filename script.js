// Código do carrossel existente
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

// Menu sanduíche
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');

// Abrir menu
menuToggle.addEventListener('click', () => {
  sideMenu.style.right = '0';
  overlay.style.display = 'block';
});

// Fechar menu ao clicar fora
overlay.addEventListener('click', () => {
  sideMenu.style.right = '-100%';
  overlay.style.display = 'none';
});
