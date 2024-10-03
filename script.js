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

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll position: ' + window.pageXOffset, pageYOffset);

  console.log(
    'height/width of viewport: ' + document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //scrolling

  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addeventlistener: great you are reading this message');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

/// rgba(255, 255, 255);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
