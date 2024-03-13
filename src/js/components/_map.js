import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


document.addEventListener('DOMContentLoaded', () => {

	const mapGalleries = document.querySelectorAll('.mapGallery');

	if (mapGalleries.length) {
		mapGalleries.forEach((mapGallery) => {
			lightGallery((mapGallery), {
				plugins: [lgZoom, lgThumbnail],
				licenseKey: 'your_license_key',
				speed: 300,
			});
		})
	}


	const mapSwitchBtns = document.querySelectorAll('.map__info-placebtn');
	const mapInfoBlock = document.querySelector('.map__info-content');
	const mapMobileButtons = document.querySelectorAll('.map__info-btn-mobile');
	const mapMobile = document.querySelector('.map-inner');
	const closeMapMobile = document.querySelectorAll('.close-map');

	if (mapMobileButtons.length) {
		mapMobileButtons.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				if (btn.getAttribute('data-place') === 'place1') {
					mapMobile.classList.add('show-map');
					document.body.classList.add('noscroll');
				}
				if (btn.getAttribute('data-place') === 'place2') {
					mapMobile.classList.add('show-map');
					document.body.classList.add('noscroll');
				}
			})
		})
	}


	if (closeMapMobile.length) {
		closeMapMobile.forEach((closeMapBtn) => {
			closeMapBtn.addEventListener('click', (e) => {
				e.preventDefault();
				mapMobile.classList.remove('show-map');
				document.body.classList.remove('noscroll');
			})
		})
	}
	if (mapSwitchBtns.length) {
		mapSwitchBtns.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				if (btn.getAttribute('data-place') === 'place1') {
					mapSwitchBtns[0].classList.add('active');
					mapSwitchBtns[1].classList.remove('active');
					mapInfoBlock.children[0].classList.add('show');
					mapInfoBlock.children[1].classList.remove('show');
				}
				if (btn.getAttribute('data-place') === 'place2') {
					mapSwitchBtns[1].classList.add('active');
					mapSwitchBtns[0].classList.remove('active');
					mapInfoBlock.children[1].classList.add('show');
					mapInfoBlock.children[0].classList.remove('show');
				}
			})
		});
	}


	const places = {
		place1: [{
			lat: 56.138666,
			lon: 47.216191,
		}],
		place2: [{
			lat: 56.126088,
			lon: 47.230198,
		}],
	}

	function init() {
		let map = new ymaps.Map('mapInner', {
			center: [56.138666, 47.216191],
			zoom: 14,
			controls: []
		});

		let activeCategory = "place1";

		const showCategory = (category) => {
			map.geoObjects.removeAll();
			map.behaviors.disable('scrollZoom');

			places[category].forEach((item) => {
				const placemark = new ymaps.Placemark([item.lat, item.lon], {}, {
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: './images/icons/map-place.svg',
					// Размеры метки.
					iconImageSize: [57, 73],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-29, -68]
				});

				map.geoObjects.add(placemark);
			});

			activeCategory = category;
		}
		if (mapSwitchBtns.length) {
			mapSwitchBtns.forEach((button) => {
				button.addEventListener('click', () => {
					const category = button.getAttribute('data-place');
					showCategory(category);
				});
			});
		}

		if (mapMobileButtons.length) {
			mapMobileButtons.forEach((button) => {
				button.addEventListener('click', () => {
					const category = button.getAttribute('data-place');
					showCategory(category);
				});
			})
		}


		showCategory(activeCategory);

	}

	const mapElem = document.querySelector('#mapInner')
	if (mapElem) {
		ymaps.ready(init)
	}
})

