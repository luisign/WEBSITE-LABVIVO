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

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  sideMenu.style.right = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  sideMenu.style.right = '-100%';
  overlay.style.display = 'none';
});
