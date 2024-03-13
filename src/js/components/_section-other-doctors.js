import {Swiper} from "swiper";

document.addEventListener('DOMContentLoaded', () => {
	let slider = null

	const initSlider = () => {
		if (window.innerWidth > 768) {
			if (slider) {
				slider.destroy(true, true)
				slider = null
			}
		} else {
			if(!slider) {
				slider = new Swiper('.section-other-doctors__slider', {
					slidesPerView: 1.2,
					spaceBetween: 8,
				})
			}
		}
	}

	initSlider()
	window.addEventListener('resize', () => {
		initSlider()
	})
})
