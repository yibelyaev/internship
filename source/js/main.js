// https://swiperjs.com/get-started#installation
import './utils/focus-lock';

import {initBurger} from './modules/burger/burger.js';
import {StickyHeader} from './vendor/sticky-header';
import {initSlider} from './modules/sliders/hero-slider.js';
import {initSwiper} from './modules/sliders/prog-slide.js';

const stickyHeader = new StickyHeader();
stickyHeader.init();

initBurger();

initSlider();
initSwiper();
