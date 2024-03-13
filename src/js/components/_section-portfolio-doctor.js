import {Swiper} from "swiper";
import {Navigation} from "swiper/modules";


document.addEventListener('DOMContentLoaded', () => {
	new Swiper('.section-portfolio-doctor__slider', {
		modules: [Navigation],
		navigation: {
			prevEl: '.section-portfolio-doctor .slider-nav__btn--prev',
			nextEl: '.section-portfolio-doctor .slider-nav__btn--next',
		},
		noSwipingSelector: 'img-comparison-slider',
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			640: {
				slidesPerView: 1.8,
				spaceBetween: 30,
			},
			720: {
				slidesPerView: 2.5,
				spaceBetween: 40,
			}
		},
	});
})
