export default function hamburgerMenu(btnHamburger, btnClose, panelMenu, menuLink, logoBlack, logoWhite) {
		const d = document;

		d.addEventListener('click', (e) => {
				if (e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`)) {
						d.querySelector(btnHamburger).classList.toggle('is-close');
						d.querySelector(btnClose).classList.toggle('is-active');
						d.querySelector(panelMenu).classList.toggle('is-active');
						d.querySelector(logoBlack).classList.toggle('is-close');
						d.querySelector(logoWhite).classList.toggle('is-active');
				}

				if (e.target.matches(menuLink)) {
						d.querySelector(panelMenu).classList.remove('is-active');
						d.querySelector(btnClose).classList.remove('is-active');
						d.querySelector(btnHamburger).classList.remove('is-close');
						d.querySelector(logoWhite).classList.remove('is-active');
						d.querySelector(logoBlack).classList.remove('is-close');
				}
		})
}