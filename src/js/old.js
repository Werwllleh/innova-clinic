import {Swiper} from 'swiper'
import {Navigation, Pagination} from 'swiper/modules';
import Fancybox from "fancybox";
import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {

	Fancybox.bind('[data-fancybox="gallery"]', {
		hideScrollbar: false,
	});

	const background = document.querySelector('.bg');
	const bodyMain = document.querySelector('body');
	const header = document.querySelector('.header');

	/*==============HEADER==========*/
	function headerWatcher() {
		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

		if (window.scrollY < 0.1) {
			header.classList.remove('header--scroll')
		} else {
			header.classList.add('header--scroll')
		}
		requestAnimationFrame(headerWatcher)
	}

	if (header) {
		headerWatcher();
	}

	const search = document.querySelector('.js-search-btn');
	const inputMenu = document.querySelector('.nav__search');
	const navLinks = document.querySelector('.header__nav-links');
	const inputSearchClear = document.querySelector('.search-input-clear');
	const inputSearch = document.querySelector('.nav__search-input');
	const inputSearchAnswer = document.querySelector('.nav__search-answer');
	const notFoundAnswer = document.querySelector('.nav__search-notfound');

	if (search) {
		search.addEventListener('click', (e) => {
			e.preventDefault();
			// header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			header.classList.toggle('darkBg');
			search.classList.toggle('active');
			inputMenu.classList.toggle('active');
			navLinks.classList.toggle('hidden');
			background.classList.toggle('blackout');
			bodyMain.classList.toggle('noscroll');
			notFoundAnswer.classList.remove('active');
			inputSearch.value = '';
			inputSearch.focus()

			if (inputSearchAnswer.classList.contains('active')) {
				inputSearchAnswer.classList.remove('active');
				inputSearchClear.classList.remove('active');
				notFoundAnswer.classList.remove('active');
				inputSearch.value = '';
			}
		})

		inputSearch.addEventListener('input', (e) => {
			if (inputSearch.value === 'Не найдено') {
				notFoundAnswer.classList.add('active');
				inputSearchAnswer.classList.remove('active');
				document.querySelector('.answer__notfound-text-value').innerHTML = inputSearch.value
			} else if (inputSearch.value.length >= 1) {
				inputSearchClear.classList.add('active');
				inputSearchAnswer.classList.add('active');
				notFoundAnswer.classList.remove('active');
			} else {
				inputSearchClear.classList.remove('active');
				inputSearchAnswer.classList.remove('active');
				notFoundAnswer.classList.remove('active');
			}
		})

		inputSearchClear.addEventListener('click', () => {
			inputSearchAnswer.classList.remove('active');
			inputSearch.value = '';
			inputSearchClear.classList.remove('active');
			notFoundAnswer.classList.remove('active');
			inputSearch.focus()
		})

		background.addEventListener('click', () => {
			inputSearch.value = '';
			inputSearchClear.classList.remove('active');
			search.classList.remove('active');
			inputMenu.classList.remove('active');
			navLinks.classList.remove('hidden');
			background.classList.remove('blackout');
			search.classList.remove('active');
			inputSearchAnswer.classList.remove('active');
			bodyMain.classList.remove('noscroll');
			notFoundAnswer.classList.remove('active');
		})
	}


	/*=============/HEADER==========*/


	/*=============SUB-MENU==========*/
	const menuLinks = document.querySelectorAll('.header__nav-link');
	const arrow = document.querySelectorAll('.menu-arrow');

	if (menuLinks.length) {
		for (let i = 0; i < menuLinks.length; i++) {
			menuLinks[i].addEventListener("mouseenter", showSub, false);
			menuLinks[i].addEventListener("mouseleave", hideSub, false);
		}
	}

	function showSub(e) {
		if (this.children.length > 1) {
			this.children[0].style.color = "#337AE0";
			this.children[0].classList.add('open-menu');
			this.children[1].style.visibility = "visible";
			this.children[1].style.opacity = "1";
			background.classList.add('blackout');
		} else {
			return false;
		}
	}

	function hideSub(e) {
		if (this.children.length > 1) {
			this.children[0].style.color = "#3A3C40";
			this.children[0].classList.remove('open-menu');
			this.children[1].style.visibility = "hidden";
			this.children[1].style.opacity = "0";
			background.classList.remove('blackout');
		} else {
			return false;
		}
	}


	/*=============SUB-MENU==========*/


	/*=============SLIDERS==========*/
	new Swiper('.stocks__slider', {
		modules: [Navigation, Pagination],
		// Optional parameters
		// slidesPerView: 3,
		// spaceBetween: 40,
		direction: 'horizontal',
		loop: false,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},

		// Navigation arrows
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},

		// And if we need scrollbar
		scrollbar: false,

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			// when window width is >= 640px
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

	new Swiper('.doctors__slider', {
		modules: [Navigation, Pagination],
		// Optional parameters
		slidesPerView: 3,
		spaceBetween: 20,
		direction: 'horizontal',
		loop: false,
		height: 'auto',

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},

		// Navigation arrows
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},

		// And if we need scrollbar
		scrollbar: false,

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			// when window width is >= 640px
			480: {
				slidesPerView: 1.5,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2.4,
			}
		}
	});

	new Swiper('.feedback__slider', {
		modules: [Navigation, Pagination],
		// Optional parameters
		loop: false,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},

		// Navigation arrows
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},

		// And if we need scrollbar
		scrollbar: false,
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 8,
				centeredSlides: false,
			},
			564: {
				slidesPerView: 1.3,
				spaceBetween: 10,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			992: {
				slidesPerView: 2.2,
				spaceBetween: 40,
			},
			1450: {
				slidesPerView: 2.8,
				centeredSlides: true,
				spaceBetween: 40,
			}
		}
	});

	new Swiper('.portfolio__slider', {
		modules: [Navigation, Pagination],
		noSwipingSelector: 'img-comparison-slider',
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},
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
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});

	new Swiper('.map__info-slider', {
		modules: [Navigation, Pagination],
		// Optional parameters

		direction: 'horizontal',
		loop: false,

		// If we need pagination
		pagination: false,

		// Navigation arrows
		navigation: {
			prevEl: '.map-slider-button-prev',
			nextEl: '.map-slider-button-next',
		},

		// And if we need scrollbar
		scrollbar: false,
		breakpoints: {
			320: {
				slidesPerView: 2.5,
				spaceBetween: 4,
			},
			768: {
				slidesPerView: 3.4,
				spaceBetween: 10,
			}
		}
	});

	new Swiper('.equipment__slider', {
		modules: [Navigation, Pagination],
		spaceBetween: 40,
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		// Navigation arrows
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},

		// And if we need scrollbar
		scrollbar: false,
	});

	/*============/SLIDERS==========*/

	const questions = document.querySelectorAll('.qa__question-checkbox');
	if (questions.length) {
		questions.forEach((question) => {
			question.addEventListener('click', (e) => {

				let field = e.currentTarget.parentNode.parentNode;
				let input = e.currentTarget;
				let answer = e.currentTarget.parentNode.parentNode.children[1];

				answer.classList.toggle('active');

				if (input.checked === true) {
					answer.style.maxHeight = `${field.clientHeight}px`;
				} else {
					answer.style.maxHeight = "0px";
				}
			})
		});
	}


	const contentWrapper = document.querySelectorAll('.feedback__slide-text p');
	let lettersToCut = 230;

	const cutTextFeedback = () => {
		if (window.innerWidth <= 564) {
			contentWrapper.forEach((slideText) => {

				let originalText = slideText.innerHTML;
				let endOriginalText = originalText.substring(lettersToCut);

				originalText = originalText.substring(0, lettersToCut);
				slideText.innerHTML = originalText;

				const moreText = document.createElement('span');
				moreText.innerHTML = endOriginalText
				slideText.appendChild(moreText);
				moreText.style.display = "none";

				const readMoreLink = document.createElement('span');
				readMoreLink.classList.add('link-read-more');
				readMoreLink.innerHTML = `<span>...</span>Читать полностью`;
				slideText.appendChild(readMoreLink);

				readMoreLink.addEventListener("click", (e) => {
					e.preventDefault();
					moreText.style.display = "inline";
					readMoreLink.style.display = "none";
				})
			})
		}
	}

	if (contentWrapper.length) {
		window.addEventListener('resize', () => {
			cutTextFeedback()
		});

		cutTextFeedback()
	}


	const bannerControlPlay = document.querySelector('.banner__plan-play');

	if (bannerControlPlay) {
		bannerControlPlay.addEventListener('click', () => {
			const video = document.querySelector('.banner__plan-video');

			bannerControlPlay.classList.toggle('active');

			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		});
	}

	const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

	if (lazyVideos.length) {
		if ("IntersectionObserver" in window) {
			let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (video) {
					if (video.isIntersecting) {
						for (let source in video.target.children) {
							let videoSource = video.target.children[source];
							if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
								videoSource.src = videoSource.dataset.src;
							}
						}

						video.target.load();
						video.target.classList.remove("lazy");
						lazyVideoObserver.unobserve(video.target);
					}
				});
			});

			lazyVideos.forEach(function (lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});
		}
	}

})



