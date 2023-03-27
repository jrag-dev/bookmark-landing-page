import hamburgerMenu from './menu_hamburguesa.js';
import featuresLinks from './features.js';
import questionsAsked from './questions_asked.js';
import contactForm from './contact_form.js'


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
		hamburgerMenu('.nav__hamburger', '.nav__hamburger--close', '.nav__container', '.nav__link', '.nav__logo', '.nav__logo--white');
		featuresLinks('.features__opcines p', '.features__content article');
		questionsAsked('.flex-between', '.response', '.asked__img--blue', '.asked__img--red');
		contactForm('.contact__form')
})