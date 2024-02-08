import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

const element = document.querySelector('[data-slider="hero"]');

export const initSlider = () => {
  const slider = new Swiper(element, {
     observer: true,
     modules: [Autoplay, Pagination],
     pagination: {
       el: '.swiper-prog-slide.js-active .hero__pagination',
       clickable: true,
       type: 'bullets',
       bulletElement: 'div',
       bulletClass: 'hero__pagination-bullet',
       bulletActiveClass: 'hero__pagination-bullet--active',
     },
     loop: true,
     breakpoints: {
       1440: {
         allowTouchMove: false,
       },
     },
     on: {
       slideChangeTransitionStart: function () {
         slider.pagination.init();
         slider.pagination.render();
         slider.pagination.update();
       }
     }
   });
}
