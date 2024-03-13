import {Swiper} from "swiper";
import {Navigation, Pagination} from "swiper/modules";

const sliders = document.querySelectorAll('.section-portfolio-slider__slider')
sliders.forEach((slider) => {
	new Swiper(slider, {
		modules: [Navigation, Pagination],
		slidesPerView: 3,
		spaceBetween: 40,
		noSwipingSelector: 'img-comparison-slider',
		pagination: {
			el: slider.closest('.tabs__content').querySelector('.slider-nav__pagination'),
			type: 'progressbar',
			progressbarFillClass: 'slider-nav__pagination-fill'
		},
		navigation: {
			prevEl: slider.closest('.tabs__content').querySelector('.section-portfolio-slider .slider-nav__btn--prev'),
			nextEl: slider.closest('.tabs__content').querySelector('.section-portfolio-slider .slider-nav__btn--next'),
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 10
			},
			564: {
				slidesPerView: 2.2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2.6,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 40
			},
		}
	});
})


