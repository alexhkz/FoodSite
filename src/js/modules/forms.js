import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
	// Forms

	const forms = document.querySelectorAll(formSelector); // собираем формы
	
	const message = {  // создаём объект с уведомлениями пользователя
		loading: '../img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item); // под каждую из форм подвязываем функцию postData
	});

	function bindPostData(form) { // функция, являющаяся обработчиком событий при отправке
		form.addEventListener('submit', (e) => { // при заполнении полей
			e.preventDefault();

			const statusMessage = document.createElement('img'); // создаём новый див на странице
			statusMessage.src = message.loading; 
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage); // показывает сообщение на странице
			
			const formData = new FormData(form); // создаём формдату с данными из инпутов

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
				console.log(data);
				showThanksModal(message.success); // оповещаем пользователя об успехе
				statusMessage.remove(); // удаляем блок с сообщением со страницы
			}).catch(() => {
				showThanksModal(message.failure); // при ошибке 
			}).finally(() => {
				form.reset(); // сбрасывем форму
			});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000);
	}
}

export default forms;