/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
	const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
			modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
			timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
			slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
			forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
			cards = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js"),
			calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");

			tabs();
			modal();
			timer();
			slider();
			forms();
			cards();
			calc();
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
	//Calc

	const result = document.querySelector('.calculating__result span');

	let sex, height, weight, age, ratio;

	if (localStorage.getItem('sex')) {
		sex = localStorage.getItem('sex');
	} else {
		sex = 'female';
		localStorage.setItem('sex', 'female');
	}

	if (localStorage.getItem('ratio')) {
		ratio = localStorage.getItem('ratio');
	} else {
		ratio = 1.375;
		localStorage.setItem('ratio', 1.375);
	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);
			if (elem.getAttribute('id') === localStorage.getItem('sex')) {
				elem.classList.add(activeClass);
			}
			if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				elem.classList.add(activeClass);
			}
		});
	}

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) {
			result.textContent = '____';
			return;
		}

		if (sex === 'female') {
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}

	calcTotal();

	function getStaticInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.addEventListener('click', (e) => {
				if (e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
				} else {
					sex = e.target.getAttribute('id');
					localStorage.setItem('sex', e.target.getAttribute('id'));
				}
	
				elements.forEach(elem => {
					elem.classList.remove(activeClass);
				});
	
				e.target.classList.add(activeClass);
	
				calcTotal();
			});
		});
	}

	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	function getDinamycInformation(selector) {
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {

			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid red';
			} else {
				input.style.border = 'none';
			}

			switch(input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}

			calcTotal();
		});
	}

	getDinamycInformation('#height');
	getDinamycInformation('#weight');
	getDinamycInformation('#age');
}

module.exports = calc;

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards() {
// Classes for cards

class MenuCard {
	constructor(src, alt, title, descr, price, parentSelector, ...classes) {
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.descr = descr;
		this.price = price;
		this.classes = classes;
		this.parent = document.querySelector(parentSelector);
		this.transfer = 77;
		this.changeToRUB();
	}

	changeToRUB() {
		this.price = this.price * this.transfer;
	}

	render() {
		const element = document.createElement('div');

		if (this.classes.length === 0) {
			this.element = 'menu__item';
			element.classList.add(this.element);
		} else {
			this.classes.forEach(className => element.classList.add(className)); 
		}
		
		element.innerHTML = `
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.descr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
			</div>
		`;
		this.parent.append(element);
	}
}

const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) { //если что-то пошло не так с запросом выдаём ошибку
		throw new Error(`Could not fetch ${url}, status: ${res.status}`); //если выдаём ошибку в ручном режиме, то срабатывает catch
	}

	return await res.json();
};

// getResource('http://localhost:3000/menu')
// 	.then(data => {
// 		data.forEach(({img, altimg, title, descr, price}) => {
// 			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
// 		});
// 	});

axios.get('http://localhost:3000/menu')
	.then(data => {
		data.data.forEach(({img, altimg, title, descr, price}) => {
			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		});
	});

}

module.exports = cards;

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
	// Forms

	const forms = document.querySelectorAll('form'); // собираем формы
	
	const message = {  // создаём объект с уведомлениями пользователя
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item); // под каждую из форм подвязываем функцию postData
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
				headers: {
					'Content-type': 'application/json'
				},
				body: data
		});

		return await res.json();
	};

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
		openModal();

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
			closeModal();
		}, 4000);
	}

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));
}

module.exports = forms;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
	// Modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
			modal = document.querySelector('.modal');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
	// Slider

	const slides = document.querySelectorAll('.offer__slide'),
			slider = document.querySelector('.offer__slider'),
			prev = document.querySelector('.offer__slider-prev'),
			next = document.querySelector('.offer__slider-next'),
			total = document.querySelector('#total'),
			current = document.querySelector('#current'),
			slidesWrapper = document.querySelector('.offer__slider-wrapper'),
			slidesField = document.querySelector('.offer__slider-inner'),
			sliderWidth = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent =  `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent =  slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';


	slides.forEach(slide => {
		slide.style.width = sliderWidth;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
			dots = [];

	indicators.classList.add('carousel-indicators');
	indicators.style.cssText = `
		position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 15;
			display: flex;
			justify-content: center;
			margin-right: 15%;
			margin-left: 15%;
			list-style: none;
	`;
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.style.cssText = `
			box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 6px;
			margin-right: 3px;
			margin-left: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: 0.5;
			transition: opacity 0.6s ease;
		`;
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	const dotsOpacity = () => {
		dots.forEach(dot => dot.style.opacity = '.5');
			dots[slideIndex - 1].style.opacity = 1;
	};

	const slidesCheck = () => {
		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	};

	const deleteNotDigigts = (str) => {
		return +str.replace(/\D/g, '');
	};

	next.addEventListener('click', () => {
		if (offset == deleteNotDigigts(sliderWidth) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigigts(sliderWidth);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		slidesCheck();
		dotsOpacity();
	});

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = deleteNotDigigts(sliderWidth) * (slides.length - 1);
		} else {
			offset -= deleteNotDigigts(sliderWidth);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		slidesCheck();
		dotsOpacity();
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigigts(sliderWidth) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			slidesCheck();
			dotsOpacity();
		});
	});

	// showSlides(slideIndex);

	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`;
	// } else {
	// 	total.textContent = slides.length;
	// }

	// function showSlides(n) {
	// 	if (n > slides.length) {
	// 		slideIndex = 1;
	// 	}
	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	}

	// 	slides.forEach((item) => item.style.display = 'none');

	// 	slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
		
	// 	if (slides.length < 10) {
	// 		current.textContent =  `0${slideIndex}`;
	// 	} else {
	// 		current.textContent =  slideIndex;
	// 	}
	// }

	// function plusSlides (n) {
	// 	showSlides(slideIndex += n);
	// }

	// prev.addEventListener('click', function(){
	// 	plusSlides(-1);
	// });

	// next.addEventListener('click', function(){
	// 	plusSlides(1);
	// });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
	// Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent'),
			tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

module.exports = tabs;



/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
	// Timer

	//  конечная дата
	const deadline = '2022-05-09'; 
 
	//функция по расчету промежутков
	// создаем локальную переменную в которую методом Date.parse разбираем строковое значение и переводим его в милисекунды. от этих милисекунд отнимаем также переведенное в милисекунды ВРЕМЯ ДАТЫ ИЗ СИСТЕМЫ. получаем разницу которую и будет отщитывать таймер.
	//  вычисляем дни. выводим разультат без остатка через math.floor. РАЗНИЦУ делим на произведение (тысяча милисекунд  умноженые на 60(так получаем количество милисекунд в одной минуте) умноженые ещё раз на 60(получаем сколько в одном часе) и умножаем еще раз на 24 часа(и получаем сколько в сутках будет милисекунд) ). арифметика в скобках - получение милисекунд в одних сутках.  разницу в милисекундах делим на милисекунды в одних сутках и получаем СКОЛЬКО СУТОК ОСТАЛОСЬ ДО ОКОНЧАНИЕ НАШЕЙ ДАТЫ.
	// (нашу разницу милисекунд делим на количество милисекунд в одном часе) делим это % на 24 и % возвращает нам остаток от деления. (пример%: 5 % 2 = 1.  5/2=4 и 1 в остатке)
	// (разницу делим на 1000 и получаем количество секунд которые у нас есть, потом делим на 60 и получаем количество минут) % 60 т.к. в одной минуте шестьдесят секунд. и получаем остаток деления минут. (примечание: он не должен быть больше чем 60).
	// (остаток делем на 100 и получаем колиество секунд внутри милисекунд) и % остаток от 60. 
	function getTimeRemaining(endtime) { 
		const t = Date.parse(endtime) - Date.parse(new Date()), 
				days = Math.floor( (t / (1000 * 60 * 60 * 24)) ), 
				hours = Math.floor( (t / (1000 * 60 * 60) %  24) ), 
				minutes = Math.floor( (t / 1000 / 60) % 60), 
				seconds = Math.floor( (t / 1000) % 60); 

		return { //функция возвращает обьект в котором на основе расчетов получены отдельные данные.
			'total': t, // разница
			'days': days, // дни
			'hours': hours , //часы
			'minutes': minutes, //минуты
			'seconds': seconds //секунды
		};
	}

	function getZero(num) { // добавления нуля к числам до 10
		if (num >= 0 && num < 10) { 
			return `0${num}`;
		} else { 
			return num;
		}
	}


	function setClock(selector, endtime) { // функция установки таймера на страничке

	const timer = document.querySelector(selector), // получаем в переменную таймер. если их на странице будет несколько, то их селектор передается сюда первым аргументом.
			days = timer.querySelector('#days'), // получаем айди обращаясь не к документу а сразу к таймеру
			hours = timer.querySelector('#hours'), 
			minutes = timer.querySelector('#minutes'), 
			seconds = timer.querySelector('#seconds'), 
			timeInterval = setInterval(updateClock, 1000); // устанавливаем, что с интервалом в секунду будем запускать функцию updateClock
			
	updateClock(); // запускается тут, для того, что бы не было скачков и она начинала действовать с момента загрузки страницы.

	function updateClock() { 
		const t = getTimeRemaining(endtime); // в локальную переменную  засовываем "функция по расчету промежутков" написаную первой(которая вычисляет всё и переносит итоги в обьект). теперь в t хранится этот обьект с уже полученными данными.
		// в полученный выше (days = timer.querySelector('#days')) #days закидывает значение из обьета, проверяя, надо ли подставлять ноль или нет.
		days.innerHTML = getZero(t.days);  
		hours.innerHTML = getZero(t.hours);
		minutes.innerHTML = getZero(t.minutes);
		seconds.innerHTML = getZero(t.seconds);

		// проверяем у обьекта созданного первой функцией getTimeRemaining() свойство total, и если оно равняется нулю, значит таймер истек, интервал останавливается и таймер больше не идет.
		if (t.total <= 0) { 
			clearInterval(timeInterval); // собственно сама отмена таймера.
		}
	}
	} 

	setClock('.timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map