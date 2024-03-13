document.addEventListener('DOMContentLoaded', () => {
	const footerButtons = document.querySelectorAll('.second__level-information');

	if (footerButtons.length) {
		footerButtons.forEach((footerButton, index) => {
			footerButton.children[0].addEventListener('click', (e) => {
				e.preventDefault();
				footerButton.children[0].classList.toggle("active");

				if (footerButton.children[0].classList.contains("active")) {
					footerButton.children[1].style.maxHeight = `${footerButton.children[1].children[0].clientHeight}px`;
				} else {
					footerButton.children[1].style.maxHeight = "0px";
				}
			})
		})
	}
})
