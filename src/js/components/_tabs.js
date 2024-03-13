document.addEventListener('DOMContentLoaded', () => {
	const tabBoxList = document.querySelectorAll('.tabs')
	if (tabBoxList.length) {
		tabBoxList.forEach((tabBox) => {
			const tabButtonList = tabBox.querySelectorAll('.tabs__button')

			tabButtonList.forEach((button) => {
				button.addEventListener('click', () => {
					if (button.classList.contains('.tabs__button--active')) return

					const currentButton = tabBox.querySelector('.tabs__button--active')
					currentButton.classList.remove('tabs__button--active')
					button.classList.add('tabs__button--active')

					const currentContent = tabBox.querySelector('.tabs__content--active')
					currentContent.classList.remove('tabs__content--active')

					const content = tabBox.querySelector(`#${button.dataset.content}`)
					content.classList.add('tabs__content--active')
				})
			})
		})
	}
})
