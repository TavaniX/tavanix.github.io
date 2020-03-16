let placeElems = document.getElementById('container');
let btnSubmit = document.getElementById('btnSubmit');
let cardCounter;// переменная для хранения порядкового номера карт

if (localStorage.length == 0) {
	// если localStorage нет, то создаем
	cardCounter = 0; 
	localStorage.setItem("cardCounter", cardCounter);
	localStorage.setItem("userInput", JSON.stringify([]));
} else {
	// если есть, то получаем айди последней карты
	cardCounter = localStorage.getItem('cardCounter');
	// и рендерим карты с localStorage
	renderNewCard(JSON.parse(localStorage.getItem('userInput')));
};

// для принудительной перезагрузки
// location.reload() 

// функция для сбора данных из формы и добавления в localStorage
btnSubmit.onclick = function() {

	// получаем введенные пользователем значения
	let setTitle = document.getElementById('title');
	let setDescription = document.getElementById('decription');
	let setDeadline = document.getElementById('deadline');

	// создаем и заполняем объект для хранения введенных значений пользователем
	let inputedByUser = {
		'id': JSON.parse(localStorage.getItem('cardCounter')),
		'title': setTitle.value,
		'description': setDescription.value,
		'deadline': setDeadline.value
	};

	cardCounter++; // инкремент для уникальности
	localStorage.setItem('cardCounter', cardCounter); // перезаписываем для следующей карты

	// создаем массив для хранения объектов и вкладываем объект в localStorage
	let inputArr = JSON.parse(localStorage.getItem('userInput')); // забираем то, что есть в localStorage
	inputArr.push(inputedByUser); // добавляем в наш объект
	localStorage.setItem('userInput', JSON.stringify(inputArr)); // кладем обратно в localStorage

	// вызываем функцию для отрисовки карточек и передаем всё, что есть в localStorage
	renderNewCard(JSON.parse(localStorage.getItem('userInput')));

};

// функция рендеринга html
function renderNewCard(localStorageValues){
	
	let array = [...localStorageValues]; // распаковали данные из localStorage

	for (let i=0; i<array.length; i++) {

		// чекаем наличие элемента в массиве: есть - пропускаем рендер, нет – создаём.
		let localElem = array[i];

		if(document.getElementById(`card-${localElem.id}`)){
			continue;
		};

		// создаем карточку
		let deadlineCard = document.createElement('div');
		deadlineCard.classList.add('deadlineCard');
		deadlineCard.id = 'card-' + localElem.id; // уникальный id карты
		container.appendChild(deadlineCard);

		// название задачи
		let taskTitle = document.createElement('div');
		taskTitle.classList.add('taskTitle');
		deadlineCard.appendChild(taskTitle);
		taskTitle.innerText = localElem.title;

		// описание задачи
		let taskDescription = document.createElement('div');
		taskDescription.classList.add('taskDescription');
		deadlineCard.appendChild(taskDescription);
		taskDescription.innerText = localElem.description;

		// дедлайн задачи
		let taskDeadline = document.createElement('div');
		taskDeadline.classList.add('taskDeadline');
		deadlineCard.appendChild(taskDeadline);
		taskDeadline.innerText = 'Your deadline is: ' + localElem.deadline;

		// сколько осталось времени на реализацию
		let timeLeft = document.createElement(`time-left${localElem.id}`);
		timeLeft.classList.add('timeLeft');
		deadlineCard.appendChild(timeLeft);

		// прогресс бар - визуальная полоса с индикатором времени
		let progressBar = document.createElement('div');
		progressBar.classList.add('progressBar');
		deadlineCard.appendChild(progressBar);

		let progressBarRed = document.createElement('div');
		progressBarRed.classList.add('progressBarRed');
		let p = document.createElement('p');
		progressBarRed.appendChild(p);
		progressBar.appendChild(progressBarRed);

		// удалить дедлайн
		let btnRemove = document.createElement('div');
		btnRemove.classList.add('btnRemove');
		btnRemove.innerText = 'Remove';
		deadlineCard.appendChild(btnRemove);

		// сразу определяем обработчик на удаление и вызываем функцию
		btnRemove.addEventListener('click', ()=> removeCard(localElem['id']));

		// создаем пользовательский элемент
		class TimeCounter extends HTMLElement {

			constructor() {
				super();
				setInterval( ()=>{this.connectedCallback()}, 1000);
			};

			connectedCallback() {
				// console.log('погнали');
				// получаем дедлайн
				let countDownDate = new Date(localElem.deadline).getTime();

				// получаем текущее время и дату
				let now = new Date().getTime();
		
				// разница между сейчас и дедлайном
				let distance = countDownDate - now;
				let result = -(now - countDownDate);

				// расчет времени в отдельных измерениях
				let days = Math.floor(distance / (1000 * 60 * 60 * 24));
				let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
				// выводим результат
				timeLeft.innerHTML = "Time left: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
				
				// закрашиваем красным
				if (result>101){
					progressBarRed.style.width = (100-result/1000000) + '%';
					p.innerText = Math.floor((100-result/1000000)) + '%';
				};

				// если срок просрочен, то ругаемся
				if (distance < 0) {
					timeLeft.innerHTML = "Expired";
					deadlineCard.style.backgroundColor = ('#e84118');
					progressBar.remove();
				};
			};

			disconnectedCallback() {
				console.log('пользовательский элемент был удален');
			};
		};

		customElements.define(`time-left${localElem.id}`, TimeCounter);

	};
};

// функция удаления карточки из localStorage и DOM
function removeCard(elemToDelete){

	// создаем массив и забираем данные из localStorage
	let localStorageArray = JSON.parse(localStorage.getItem('userInput'));

	// циклом перебираем массив, находим в нем айдишник на удаление, и удаляем по индексу из массива
	for (let i = 0; i<localStorageArray.length; i++){
		// если айдишник на удаление совпадает с кликнутым по карте
		if(localStorageArray[i]['id'] == elemToDelete){
			localStorageArray.splice(i, 1); // вырезаем ножом из массива
			localStorage.setItem('userInput', JSON.stringify(localStorageArray)); // обновляем localStorage
		};
	};

	// удаляем ноду из самого DOM по уникальному айдишнику
	document.getElementById(`card-${elemToDelete}`).remove();

};