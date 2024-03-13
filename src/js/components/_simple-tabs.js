document.addEventListener('DOMContentLoaded', () => {
	const tabBoxList = document.querySelectorAll('.simple-tabs')
	if (tabBoxList.length) {
		tabBoxList.forEach((tabBox) => {
			const tabButtonList = tabBox.querySelectorAll('.simple-tabs__button')

			tabButtonList.forEach((button) => {
				button.addEventListener('click', () => {
					if (button.classList.contains('.simple-tabs__button--active')) return

					const currentButton = tabBox.querySelector('.simple-tabs__button--active')
					currentButton.classList.remove('simple-tabs__button--active')
					button.classList.add('simple-tabs__button--active')

					const currentContent = tabBox.querySelector('.simple-tabs__content--active')
					currentContent.classList.remove('simple-tabs__content--active')

					const content = tabBox.querySelector(`#${button.dataset.content}`)
					content.classList.add('simple-tabs__content--active')
				})
			})
		})
	}
})
