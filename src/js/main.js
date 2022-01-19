window.addEventListener('DOMContentLoaded', () => {

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

	// Timer

	//  конечная дата
	const deadline = '2022-05-09'; 
 
	//функция по расчету промежутков
	// создаем локальную переменную в которую методом Date.parse разбираем строковое значение и переводим его в милисекунды. от этих милисекунд отнимаем также переведенное в милисекунды ВРЕМЯ ДАТЫ ИЗ СИСТЕМЫ. получаем разницу которую и будет отщитывать таймер.
	//  вычисляем дни. выводим разультат без остатся через math.floor. РАЗНИЦУ делим на произведение (тысяча милисекунд  умноженые на 60(так получаем количество милисекунд в одной минуте) умноженые ещё раз на 60(получаем сколько в одном часе) и умножаем еще раз на 24 часа(и получаем сколько в сутках будет милисекунд) ). арифметика в скобках - получение милисекунд в одних сутках.  разницу в милисекундах делим на милисекунды в одних сутках и получаем СКОЛЬКО СУТОК ОСТАЛОСЬ ДО ОКОНЧАНИЕ НАШЕЙ ДАТЫ.
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

});