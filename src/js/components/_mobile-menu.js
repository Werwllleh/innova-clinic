document.addEventListener('DOMContentLoaded', () => {
	const menuBtn = document.querySelector('.header__mobile-button--menu')
	const menu = document.querySelector('.mobile-menu')
	const search = document.querySelector('.mobile-menu__nav-link-search')
	const notFound = document.querySelector('.mobile-menu-search__answer-notfound')
	const notFoundSpan = document.querySelector('.mobile-menu-search__answer-notfound span')
	const searchPanel = document.querySelector('.mobile-menu__panel--search')
	const searchPanelInput = document.querySelector('.mobile-menu-search__input input')
	const searchPanelCancel = document.querySelector('.mobile-menu-search__cancel')
	const searchPanelClean = document.querySelector('.mobile-menu-search__input--clean')
	const mobileAnswer = document.querySelector('.mobile-menu-search__answer--body .nav__search-answer')
	const mobileServicesBtn = document.querySelector('.mobile-services-button')
	const mobileServicesBtnBack = document.querySelector('.mobile-menu-services__back-button')
	const mobileServicesPanel = document.querySelector('.mobile-menu-services')

	if (mobileServicesBtnBack) {
		mobileServicesBtnBack.addEventListener('click', (e) => {
			e.preventDefault();
			mobileServicesPanel.classList.remove('show');
		})
	}

	if (mobileServicesBtn) {
		mobileServicesBtn.addEventListener('click', (e) => {
			e.preventDefault();
			mobileServicesPanel.classList.add('show');
		})
	}

	if (search) {
		search.addEventListener('click', (e) => {
			e.preventDefault();
			searchPanel.classList.add('active')
		})
	}

	if (searchPanelCancel) {
		searchPanelCancel.addEventListener('click', (e) => {
			e.preventDefault();
			searchPanelInput.value = '';
			searchPanel.classList.remove('active');
			searchPanelClean.classList.remove('show');
			mobileAnswer.classList.remove('active');
			notFound.classList.remove('show');
		})
	}

	if (searchPanelInput) {
		searchPanelInput.addEventListener('input', (e) => {
			if (searchPanelInput.value === '') {
				searchPanelClean.classList.remove('show');
				mobileAnswer.classList.remove('active');
				notFound.classList.remove('show');
			} else if (searchPanelInput.value.toLocaleLowerCase() === 'не найдено') {
				notFound.classList.add('show');
				mobileAnswer.classList.remove('active');
				notFoundSpan.innerHTML = searchPanelInput.value;
			} else {
				notFound.classList.remove('show');
				searchPanelClean.classList.add('show');
				mobileAnswer.classList.add('active');
			}
		})
	}

	if (searchPanelClean) {
		searchPanelClean.addEventListener('click', (e) => {
			e.preventDefault();
			searchPanelInput.value = '';
			searchPanelClean.classList.remove('show');
			mobileAnswer.classList.remove('active');
			notFound.classList.remove('show');
		})
	}

	if (menuBtn) {
		menuBtn.addEventListener('click', () => {
			if (menuBtn.classList.contains('header__mobile-button--menu-show')) {
				menuBtn.classList.remove('header__mobile-button--menu-show')
				menu.classList.remove('mobile-menu--show')
				searchPanel.classList.remove('active')
				mobileServicesPanel.classList.remove('show');
				notFound.classList.remove('show');
				searchPanelInput.value = ''
				setTimeout(() => {
					menu.style.display = ''
					document.body.classList.remove('is-locked')
				}, 300)
			} else {
				menu.style.display = 'flex'
				menuBtn.classList.add('header__mobile-button--menu-show')
				document.body.classList.add('is-locked')
				setTimeout(() => {
					menu.classList.add('mobile-menu--show')
				})
			}
		})
	}


	const subMenuList = document.querySelectorAll('.mobile-menu__nav-link-arrow')
	if (subMenuList.length) {
		subMenuList.forEach((submenu) => {
			submenu.addEventListener('click', () => {
				submenu.closest('.mobile-menu__nav-elem').classList.toggle('mobile-menu__nav-elem--expanded')
			})
		})
	}
})
