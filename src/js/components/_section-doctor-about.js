document.addEventListener('DOMContentLoaded', () => {
	const moreBtn = document.querySelector('.section-doctor-about__more-btn');
	const doctorTexts = document.querySelectorAll('.section-doctor-about__text-wrap p');

	let lettersToCut = 300;

	if (doctorTexts.length) {
		doctorTexts.forEach((doctorText, index) => {
			if (index >= 3) {
				doctorText.style.display = 'none';
			}
		})
	}

	if (moreBtn) {
		moreBtn.addEventListener('click', () => {
			moreBtn.classList.add('hidden');
			doctorTexts.forEach((doctorText, index) => {
				if (doctorText.style.display === 'none') {
					doctorText.style.display = 'block';
				}
			});
			// const container = moreBtn.closest('.section-doctor-about__text-box')
			// container.classList.add('section-doctor-about__text-box--expanded')
		})
	}
})
