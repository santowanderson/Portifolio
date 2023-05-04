'use strict';

const toggleButton = document.querySelector('#btn');
const sidebar = document.querySelector('#sidebar');

const url = window.location.href;
const navLinks = document.querySelectorAll('a');

//Profile dropdown toggle buttom
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

//Navigation links mark
for (var i =0; i < navLinks.length; i++) {
    let link = navLinks[i];

    if (link.href === url) {
        link.classList.add('active');
    }
}