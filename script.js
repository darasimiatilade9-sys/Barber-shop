const sidenav = document.getElementById('sidenav');
const menuBtn = document.getElementById('menu-btn');
const menuIcon = menuBtn.querySelector('img');

function isOpen() {
  return sidenav.classList.contains('open');
}

function setMenu(open) {
  sidenav.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuIcon.src = open ? 'Images/close.png' : 'Images/menu.png';
  menuBtn.setAttribute('aria-expanded', String(open));
}

menuBtn.addEventListener('click', function () {
  setMenu(!isOpen());
});

menuBtn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    setMenu(!isOpen());
  }
});

// Close when a nav link is chosen
sidenav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    setMenu(false);
  });
});

// Close when clicking anywhere outside the menu
document.addEventListener('click', function (e) {
  if (isOpen() && !sidenav.contains(e.target) && !menuBtn.contains(e.target)) {
    setMenu(false);
  }
});

// Close with the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && isOpen()) {
    setMenu(false);
    menuBtn.focus();
  }
});
