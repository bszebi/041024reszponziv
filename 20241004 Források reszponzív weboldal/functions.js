const SITE = document.querySelector('.site');
const TRIGGER = document.querySelector('.trigger');

function revealMenu() {
    SITE.classList.toggle('reveal');
    TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
}
TRIGGER.addEventListener('click', revealMenu, false);

if (CSS.supports('display', 'grid')) {
    console.log('CSS Grid supported');
    // Place CSS Grid media queries here if necessary.
} else {
    console.log('CSS Grid not supported');
}
