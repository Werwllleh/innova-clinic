
document.addEventListener('DOMContentLoaded', () => {

	const accordions = document.querySelectorAll('.accordion__question-field');
	if(accordions.length) {
		accordions.forEach((accordion) => {
			const accHeader = accordion.querySelector('.accordion__question-header');
			const accBody = accordion.querySelector('.accordion__question-answer');
			const accContent = accordion.querySelector('.accordion__question-answer-body');

			accHeader.addEventListener('click', (e) => {

				e.preventDefault();
				accordion.classList.toggle("opened");

				if ( accordion.classList.contains("opened") ) {
					accBody.style.maxHeight = `${accContent.clientHeight}px`;
				} else {
					accBody.style.maxHeight = "0px";
				}
			})
		});
	}
})


