'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

const allSelections = document.querySelectorAll('.section');
console.log(document.getElementById('section--1'));
console.log(allSelections);
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));

// Creating and inserting a new element

const message = document.createElement('div');
const header = document.querySelector('.header');
console.log(message);

message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and anylytics';

message.innerHTML =
  'We use cookies for improved functionality and anylytics. <button class = "btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 10 + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', '');

const logo = document.querySelector('.nav__logo');
logo.alt = 'Beautiful minimalist logo';

console.log(logo.getAttribute('alt'));

logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

console.log(link.dataset);
