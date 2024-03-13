import mixitup from 'mixitup';

const doctorFeedbackList = document.querySelector('.section-doctor-feedback__list')
if(doctorFeedbackList) {
	const btnList = document.querySelectorAll('.section-doctor-feedback__filter-btn')
	btnList.forEach((btn) => {
		btn.addEventListener('click', () => {
			if(!btn.classList.contains('section-doctor-feedback__filter-btn--current')) {
				const currentBtn = document.querySelector('.section-doctor-feedback__filter-btn--current')
				currentBtn.classList.remove('section-doctor-feedback__filter-btn--current')
				btn.classList.add('section-doctor-feedback__filter-btn--current')
			}
		})
	})
	
	const containerEl = document.querySelector('.section-doctor-feedback__list')
	mixitup(containerEl, {
		load: {
			sort: 'date:desc'
		}
	});
}

