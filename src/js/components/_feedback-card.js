function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

document.addEventListener('DOMContentLoaded', () => {
	const cardList = document.querySelectorAll('.feedback-card')
	if (cardList.length) {
		const check = (card) => {
			const wrapper = card.querySelector('.feedback-card__text-wrap')
			const box = wrapper.closest('.feedback-card__text-box')
			box.classList.remove('feedback-card__text-box--cut')
			setTimeout(() => {
				if (wrapper.offsetHeight > 186) {
					box.classList.add('feedback-card__text-box--cut')
				} else {
					box.classList.remove('feedback-card__text-box--cut')
				}
			})
		}

		const checkCards = () => {
			cardList.forEach((card) => {
				check(card)
			})
		}

		const resizeCheck = debounce(() => checkCards())

		window.addEventListener('resize', () => {
			resizeCheck()
		})
		window.onload = () => {
			checkCards()
		}

		cardList.forEach((card) => {
			const btn = card.querySelector('.feedback-card__text-more')
			btn.addEventListener('click', () => {
				card.classList.add('feedback-card__text-box--expanded')
			})
		})
	}
})
