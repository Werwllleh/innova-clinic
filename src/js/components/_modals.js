// Open modal
const getScrollbarWidth = () => {

	// Creating invisible container
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll'; // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement('div');
	outer.appendChild(inner);

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer);

	return scrollbarWidth;

}



const modalLinks = document.querySelectorAll('[data-modal]')
if (modalLinks.length) {
	modalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const isModalMobileOnly = link.dataset.modalMobile

			if (isModalMobileOnly && window.innerWidth > 1024) {
				return;
			}

			if (link.dataset.modal === 'doctor' && window.innerWidth < 1024) {
				return;
			}


			const modalId = `#modal-${link.dataset.modal}`;

			openModal(modalId)

		})
	})
}

const header = document.querySelector('header');
const appointmentConsultationBtn = document.querySelector('.appointment-consultation-btn');

// Open modal
export const openModal = (modalId) => {
	const modal = document.querySelector(modalId)
	const otherShownModal = document.querySelector('.modal--shown')

	if (!modal) {
		console.warn(`Modal ${modalId} does not exist!`)
		return
	}

	if (otherShownModal) {
		closeModal(otherShownModal)
	} else {
		document.body.classList.add('is-locked')
		showBackdrop()
	}

	if (appointmentConsultationBtn) {
		appointmentConsultationBtn.style.right = `${Number(window.getComputedStyle(appointmentConsultationBtn).right.replace('px', '')) + getScrollbarWidth()}px`;
	}


	modal.classList.add('modal--show')
	document.body.style.paddingRight = getScrollbarWidth() + 'px';


	if (!header.classList.contains('header--scroll')) {
		header.style.right = `${getScrollbarWidth()}px`;
	} else {
		header.style.right = `${Number(window.getComputedStyle(header).right.replace('px', '')) + getScrollbarWidth()}px`;
	}

	setTimeout(() => {
		modal.classList.add('modal--shown')
	})
}

// Close modal
function closeModal(isModalFromModal = false) {
	const modal = document.querySelector('.modal--shown')
	if (!modal) return

	modal.classList.remove('modal--shown')
	if (!isModalFromModal) hideBackdrop()
	setTimeout(() => {
		modal.classList.remove('modal--show');

		document.body.style.paddingRight = '';
		header.style.right = '';
		if (appointmentConsultationBtn) {
			appointmentConsultationBtn.style.right = '';
		}

		if (!isModalFromModal) {
			document.body.classList.remove('is-locked')
		}
	}, 350, modal)
}

// Close on Close btn click
const closeButtons = document.querySelectorAll('.js-modal-close')
if (closeButtons.length) {
	closeButtons.forEach((button) => {
		button.addEventListener('click', () => closeModal())
	})
}


// Close on Escape
document.body.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') {
		closeModal()
	}
}, false)

// Show backdrop
const showBackdrop = () => {
	let backdrop = document.querySelector('.modal-backdrop')
	if (!backdrop) {
		backdrop = document.createElement('div')
		document.body.appendChild(backdrop)
		backdrop.addEventListener('click', () => closeModal())
		backdrop.classList.add('modal-backdrop')
		setTimeout(() => {
			backdrop.classList.add('modal-backdrop--show')
		})
	}
}

// Hide backdrop
const hideBackdrop = () => {
	const backdrop = document.querySelector('.modal-backdrop')
	if (backdrop) {
		backdrop.classList.remove('modal-backdrop--show')
		setTimeout(() => {
			backdrop.remove()
		}, 350)
	}
}

// Modal Filter
const filterFormList = document.querySelectorAll('.modal-filter__form')
if (filterFormList.length) {
	filterFormList.forEach((form) => {
		const selectList = form.querySelectorAll('select')
		form.addEventListener('reset', function () {
			form.classList.add('reset')
			selectList.forEach((select) => {
				const defaultValue = select.querySelector('option').value
				select.slim.setSelected(defaultValue)
			})
			form.classList.remove('modal-filter__form--touched')
			setTimeout(() => {
				form.classList.remove('reset')
			}, 100)
		})

		form.addEventListener('change', () => form.classList.add('modal-filter__form--touched'))
	})
}

// const modalWindows = document.querySelectorAll('.modal__window ');
//
// const throttle = (func, limit) => {
// 	let lastFunc
// 	let lastRan
// 	return function() {
// 		const context = this
// 		const args = arguments
// 		if (!lastRan) {
// 			func.apply(context, args)
// 			lastRan = Date.now()
// 		} else {
// 			clearTimeout(lastFunc)
// 			lastFunc = setTimeout(function() {
// 				if ((Date.now() - lastRan) >= limit) {
// 					func.apply(context, args)
// 					lastRan = Date.now()
// 				}
// 			}, limit - (Date.now() - lastRan))
// 		}
// 	}
// }
//
// if (modalWindows.length) {
//
// // код будет срабатывать раз в 1 секунду
// 	document.addEventListener('scroll', throttle(function() {
// 		return (
// 			modalWindows.forEach((modalWindow) => {
// 				if (pageYOffset > 0) {
// 					modalWindow.classList.add('dark-theme');
// 				} else {
// 					modalWindow.classList.remove('dark-theme');
// 				}
// 			})
// 		)
// 	}, 600))
// }
