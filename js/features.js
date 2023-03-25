export default function featuresLinks(btn, container) {
	const d = document;

	d.addEventListener('click', (e) => {
			if (e.target.matches(btn)) {
					d.querySelectorAll(btn).forEach(itembtn => {
							if (itembtn.classList[1] !== e.target.classList[1]) {
									itembtn.classList.remove('active');
							} else {
									e.target.classList.toggle('active');
							}
					});;

					const clase = e.target.classList[1];

					d.querySelectorAll(container).forEach(currentItem => {
							if (currentItem.classList[0] === clase) {
									currentItem.classList.add('active')
							} else {
									currentItem.classList.remove('active')
							}
					});
			}
	})
}