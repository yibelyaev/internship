const isOpen = 'is-open';
const button = document.querySelector('.header__burger');
const overlay = document.querySelector('.header__overlay');
const menu = document.querySelector('.header__menu')



const openBurger = () => {
  button.classList.add(isOpen);
  overlay.classList.add(isOpen);
  menu.classList.add(isOpen);
  document.addEventListener('keydown', eventClick);
  window.scrollLock.disableScrolling();
  window.focusLock.lock('[data-menu="burger"]', false);
};

const closeBurger = () => {
  button.classList.remove(isOpen);
  overlay.classList.remove(isOpen);
  menu.classList.remove(isOpen);
  document.removeEventListener('keydown', eventClick);
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
};

function eventClick (e){
  if (e.key === 'Escape') {
    closeBurger();
  }
}

const initBurger = () => {
  button.addEventListener('click', () => button.classList.contains(isOpen) ? closeBurger() : openBurger())
};

export { initBurger }