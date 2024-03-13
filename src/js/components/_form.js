import validator from 'validator';
import IMask from "imask";
import {openModal} from "./_modals";

const formList = document.querySelectorAll('form');

const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const validateGroup = (group, isValid) => {
	const input = group.querySelector('.form-group__field')

	if (isValid) {
		input.classList.remove('form-group__field-error')
		group.classList.add('form-group--validated')
	} else {
		input.classList.add('form-group__field-error')
		group.classList.remove('form-group--validated')
	}
}

if (formList.length) {
	formList.forEach((form) => {
		const groupList = form.querySelectorAll('.form-group')
		groupList.forEach((group) => {
			const input = group.querySelector('.form-group__field')

			if (input.name === 'name') {
				input.addEventListener('input', () => {
					const isValid = validator.isLength(input.value, {min: 3})
					validateGroup(group, isValid)
				})
			} else if (input.name === 'phone') {
				input.addEventListener('input', () => {
					// const isValid = validator.isMobilePhone('+' + input.value.replace(/\D+/g, ''), 'ru-RU')
					const isValid = validator.isLength(input.value, {min: 18})
					validateGroup(group, isValid)
				})
			} else if (input.name === 'email') {
				input.addEventListener('input', () => {
					const isValid = validator.isEmail(input.value)
					if (emailRegex.test(input.value)) {
						input.classList.remove('form-group__field-error')
						validateGroup(group, isValid)
					} else {
						input.classList.add('form-group__field-error')
					}

				})
			}
		})
	})
}



const submittedForms = document.querySelectorAll('.modal-contacts__form');
const getConsultForm = document.querySelectorAll('.get-consult__form');

if (getConsultForm.length) {
	getConsultForm.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			// Отправляем форму с проверкой
			// ...
			if (form.elements['email'] && form.elements['email'].value !== '') {
				if (form.elements['phone'] && form.elements['phone'].value.length !== 18 || !emailRegex.test(form.elements['email'].value)) {
					return;
				} else {
					openModal('#modal-success')
				}
			} else {
				if (form.elements['phone'] && form.elements['phone'].value.length !== 18) {
					return
				} else {
					openModal('#modal-success')
				}
			}
		})
	})
}

if(submittedForms.length) {
	submittedForms.forEach((form)=>{
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			// Отправляем форму с проверкой
			// ...
			if (form.elements['email'] && form.elements['email'].value !== '') {
				if (form.elements['phone'] && form.elements['phone'].value.length !== 18 || !emailRegex.test(form.elements['email'].value)) {
					return;
				} else {
					openModal('#modal-success')
				}
			} else {
				if (form.elements['phone'] && form.elements['phone'].value.length !== 18) {
					return
				} else {
					openModal('#modal-success')
				}
			}
		})
	})
}

// Phone mask
const phoneInputsList = document.querySelectorAll('input[type="tel"]')
if (phoneInputsList.length) {
	phoneInputsList.forEach((phoneInput) => {
		IMask(phoneInput, {
			mask: '+{7} (000) 000-00-00',
		})
	})
}
