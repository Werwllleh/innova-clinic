import {Swiper} from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import lightGallery from "lightgallery";

document.addEventListener('DOMContentLoaded', () => {
	const certificates = document.querySelectorAll('.section-certificate-slider__content');

	if (certificates.length) {
		certificates.forEach((certificate) => {
			new Swiper(certificate, {
				modules: [Navigation, Pagination],
				slidesPerView: "auto",
				grabCursor: true,
				navigation: {
					prevEl: '.section-certificate-slider__nav .slider-nav__btn--prev',
					nextEl: '.section-certificate-slider__nav .slider-nav__btn--next',
				},
				breakpoints: {
					320: {
						spaceBetween: 16
					},
					640: {
						spaceBetween: 30
					}
				},
				on: {
					init: function () {
						const lgItems = document.querySelectorAll('.section-certificate-slider__content .swiper-wrapper');
						if (lgItems.length) {
							lgItems.forEach((lgItem) => {
								lightGallery(lgItem,{
									selector: '.section-certificate-slider__elem',
								});
							})
						}
					},
				}
			});
		})
	}

})
