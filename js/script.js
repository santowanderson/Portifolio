'use strict';

//sidebar variables
const toggleButton = document.querySelector('#btn');
const sidebar = document.querySelector('#sidebar');

//Profile dropdown toggle buttom
toggleButton.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});


//form variables
const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

//add event to input field
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('input', function() {
		if (form.checkValidity()) {
			formBtn.removeAttribute('disabled');
		} else {
			formBtn.setAttribute('disabled', '');
		}
	});
}

//send email
