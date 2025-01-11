const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-container');

toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
  toggle.classList.toggle('close');
  if (toggle.classList.contains('close')) {
    toggle.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

navLinks.forEach(function (link) {
  if (link.href === currentUrl) {
    navLinks.forEach(function (nav) {
      nav.classList.remove('active');
    });
    link.classList.add('active');
  }
});