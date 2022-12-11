document.addEventListener('DOMContentLoaded', () => {
const accordions = document.querySelectorAll('.accordion');
	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 30 + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});

const menu__btn = document.querySelector("#menu__btn");
const popup = document.querySelector("#popup");
menu__btn.addEventListener("click", btnHandler);
	function btnHandler (e) {
		e.preventDefault ();
		document.body.classList.toggle("body-lock");
		popup.classList.toggle("popup-open");
	}



