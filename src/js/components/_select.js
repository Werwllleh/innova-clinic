import SlimSelect from 'slim-select'

document.addEventListener('DOMContentLoaded', () => {
	const selectList = document.querySelectorAll('.select')
	if (selectList.length) {
		selectList.forEach((select) => {
			const selectEl = new SlimSelect({
				select: select,
				settings: {
					showSearch: false,
				},
				events: {
					afterChange: (newVal) => {
						const form = select.closest('form')
						if (form && !form.classList.contains('reset')) {
							const event = new Event('change')
							form.dispatchEvent(event)
						}
					}
				}
			})
		})
	}
})
