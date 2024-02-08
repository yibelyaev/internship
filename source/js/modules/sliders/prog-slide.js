import Swiper from 'swiper';
import {Scrollbar, Navigation} from 'swiper/modules';

const element = document.querySelector('[data-swiper="programs"]');
const scrol = document.querySelector('[data-swiper="scrolbar-prog"]')


const initSwiper = () => {
  new Swiper(element, {
    modules: [Scrollbar],

    scrollbar: {
      el: scrol,
      draggable: true,
      dragSize: 32
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    }
  });
};

export {initSwiper};
