const d = document;

export default function contactForm(formContact) {
	const form = d.querySelector(formContact);
	const inputs = d.querySelectorAll(`${formContact} [required]`)

	d.addEventListener('click', (e) => {

			if (e.target.matches('.btn-send')) {
					const email = d.querySelector('.contact__input');
					const pattern = email.pattern;

					if (pattern) {
						let regex = new RegExp(pattern);
						if (!regex.exec(email.value)) {
								email.parentElement.classList.add('is-active')
								email.nextElementSibling.nextElementSibling.classList.add('is-active')
								email.nextElementSibling.classList.add('is-active')
						} else {
								email.parentElement.classList.remove('is-active')
								email.nextElementSibling.classList.remove('is-active')
								email.nextElementSibling.nextElementSibling.classList.remove('is-active')
						}
					}

				e.preventDefault();
			}

	})
}