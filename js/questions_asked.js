export default function questionsAsked (btn, response, btnBlue, btnRed) {
		const d = document;

		/*
		d.querySelector(btn).classList.toggle('is-active');
		d.querySelector(response).classList.toggle('is-active');
		d.querySelector(iconArrow).classList.toggle('is-active');
		*/

		d.addEventListener('click', (e) => {
				if (e.target.matches(btn) || `${e.target.matches(btn)} *`) {
						if (e.target.parentElement.classList.contains('question')) {
								if (e.target.parentElement.classList.contains('is-active')) {
										e.target.parentElement.classList.remove('is-active')
										e.target.parentElement.lastElementChild.classList.remove('is-active');
										e.target.children[1].classList.add('is-active')
										e.target.children[2].classList.remove('is-active')
								} else {
										e.target.parentElement.classList.toggle('is-active')
										e.target.parentElement.lastElementChild.classList.toggle('is-active');
										//e.target.lastElementChild.classList.toggle('is-active');
										e.target.children[1].classList.remove('is-active')
										e.target.children[2].classList.add('is-active')
								}
						}
					if (e.target.classList.contains('asked__img--blue') || e.target.classList.contains('asked__img--red')  || e.target.classList.contains('asked') ) {
								e.target.parentElement.parentElement.classList.toggle('is-active')
								e.target.parentElement.parentElement.lastElementChild.classList.toggle('is-active')
								e.target.parentElement.children[1].classList.toggle('is-active')
								e.target.parentElement.children[2].classList.toggle('is-active')
						}
				}
		})
}