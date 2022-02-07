const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const link1 = document.getElementById('links1')
const link2 = document.getElementById('links2')
const link3 = document.getElementById('links3')
const link4 = document.getElementById('links4')
const link5 = document.getElementById('links5')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}

function linkToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}

btn.addEventListener('click', navToggle);
link1.addEventListener('click', linkToggle);
link2.addEventListener('click', linkToggle);
link3.addEventListener('click', linkToggle);
link4.addEventListener('click', linkToggle);
link5.addEventListener('click', linkToggle);