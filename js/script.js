'use strict';

//sidebar variables
const toggleButton = document.querySelector('#btn');
const sidebar = document.querySelector('#sidebar');

//Profile dropdown toggle buttom
toggleButton.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});


//form variables
const inputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('.send_message_btn');
const form = document.querySelector('.form');

//add event to all forms input
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('input', function () {
  
		// check form validation
		if (form.checkValidity()) {
			formBtn.removeAttribute('disabled');
		} else {
			formBtn.setAttribute('disabled', '');
		}
  
	});
}