// функция, которая при скроллинге от верха изменяет цвет нав панели
$(window).scroll(function(){
	let navBar = $('.intro');
	let navSize = navBar.height(); // замеряем высоту навигации

	scroll = $(document).scrollTop(); // показывает на сколько отскроллено окно
	
	if (scroll < navSize) {
		navBar.css('background-color', 'rgba(0, 0, 0, 0.3');
	};
	
	if (scroll > 0) {
		navBar.css('background-color', '#343a40');
	}
})

//  _____________ это пикер дат  _____________ 
var foopicker = new FooPicker({
	id: 'datepicker'
});

// _____________ работаем с заполнением меню  _____________ 

let menuBtnMain = [
	{
		itemsPrice: '$25.89',
		itemsTitle: 'Osso Buco',
		itemsText: 'Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious.'
	},
	{
		itemsPrice: '$16.89',
		itemsTitle: 'Pappardelle Mimmo',
		itemsText: 'This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.'
	},
	{
		itemsPrice: '$17.89',
		itemsTitle: 'Trippa Satriano',
		itemsText: 'Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!'
	},
	{
		itemsPrice: '$18.89',
		itemsTitle: 'Filetto Di Manzo',
		itemsText: 'Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.'
	}
];

let menuBtnDesserts = [
	{
		itemsPrice: '$20.89',
		itemsTitle: 'Tiramisu',
		itemsText: 'A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.'
	},
	{
		itemsPrice: '$6.89',
		itemsTitle: 'Cannoli',
		itemsText: 'Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.'
	},
	{
		itemsPrice: '$5.89',
		itemsTitle: 'Pistachio Passion',
		itemsText: 'Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust.'
	},
	{
		itemsPrice: '$4.89',
		itemsTitle: 'Chocolate-and-Pistachio Biscotti',
		itemsText: 'At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.'
	}
];

let menuBtnDrinks = [
	{
		itemsPrice: '$10.89',
		itemsTitle: 'Aperol Spritz',
		itemsText: 'The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!'
	},
	{
		itemsPrice: '$9.89',
		itemsTitle: 'Negroni',
		itemsText: 'Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.'
	},
	{
		itemsPrice: '$11.89',
		itemsTitle: 'Negroni Sbagliato',
		itemsText: 'A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.'
	},
	{
		itemsPrice: '$8.89',
		itemsTitle: 'White Peach Bellini',
		itemsText: 'White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.'
	}
];

// принимаем на входе название массива и кнопку, что кликнули как текст
function createMenuContent (array, clicked) {
	$('.content-wrapper').html(''); // очищаем общий контейнер
		for (let i=0; i<array.length; i++){
			// создаем контейнер для контента
			let itemsCreate = $('<div>');
			itemsCreate.addClass('items'); 

			// цена продукта
			let itemsPrice = $('<p>');
			itemsPrice.addClass('items-price');
			itemsPrice.text(array[i].itemsPrice);

			// название продукта
			let itemsTitle = $('<h4>');
			let itemsTitleLink = $('<a>');
			itemsTitleLink.addClass('items-title');
			itemsTitleLink.text(array[i].itemsTitle);

			// описание продукта
			let itemsText = $('<div>');
			let itemsTextCont = $('<p>');
			itemsTextCont.addClass('items-text');
			itemsTextCont.text(array[i].itemsText);

			// упаковываем в структуру
			itemsTitle.append(itemsTitleLink);
			itemsText.append(itemsTextCont);
			itemsCreate.append(itemsPrice);
			itemsCreate.append(itemsTitle);
			itemsCreate.append(itemsText);

			$('.content-wrapper').append(itemsCreate);
		}
		$('.clicked').css('color', 'rgba(255,255,255,.4)') // сперва все по умолчанию серые
		$(clicked).css('color', 'white'); // кнопка, на которую кликнули красится в белый
};

// показываем первый блок меню при перезагрузке
createMenuContent(menuBtnMain, '#navItems-main')

// отслеживаем клики по меню и передаем массив и текстом название кнопки
$('#navItems-main').click(function(){
	let objId = '#' + this.id
	createMenuContent(menuBtnMain, objId);
	return false // чтобы ссылка никуда не вела
})

$('#navItems-desserts').click(function(){
	let objId = '#' + this.id
	createMenuContent(menuBtnDesserts, objId);
	return false
})

$('#navItems-drinks').click(function(){
	let objId = '#' + this.id
	createMenuContent(menuBtnDrinks, objId)
	return false
})

// _____________ работаем с анимацией предложений  _____________ 

// событие, когда курсор в фокусе контейнера
$('.prod-outter').mouseenter(function() {
	let newHeight = $('.prod-outter').height() - 100 // переопределяю высоту, зависимость от @media

	$(this).find('.order').animate({
		'margin-top': newHeight, // опускаем блок сверху вниз
		'opacity': '1'
	}, 5);
});

// событие, когда курсор вне фокуса контейнера
$('.prod-outter').mouseleave(function() {
	$(this).find('.order').animate({
		'margin-top': '150px', // поднимаем блок обратно на высоту 100рх
		'opacity': '0'} // прячем блок
	, 5);
});

// _____________ работаем с анимацией галлереи  _____________ 

// событие, когда курсор в фокусе контейнера
$('.hoverGalleryItem').mouseenter(function() {
	// адаптаци, если окно в промежутку, то другой расчет центрирования
	if ($('.gallery').width()>576 && $('.gallery').width()<750 ) {
		$(this).find('.zoom').animate({
			'left': '50%',
			'margin-left': $(this).width()/3,
			'opacity': '1'
	}, 150);}
	else{
		$(this).find('.zoom').animate({
			'left': '50%',
			'margin-left': $(this).width()/2.5,
			'opacity': '1'
		}, 150);}
});

// событие, когда курсор вне фокуса контейнера
$('.hoverGalleryItem').mouseleave(function() {
	$(this).find('.zoom').animate({
		'left': '50%',
		'margin-left': '75',
		'opacity': '0'
	}, 150);
});

// _____________ работаем с анимацией при скроллах во всем документе  _____________

$(window).scroll(function(){
	let scroll = $(document).scrollTop(); 
	// показывает на сколько отскроллено окно

	// кнопка наверх
	let uparrow = $('.up');

	$(window).scroll(function() {
		if ($(this).scrollTop() >= 250) {
			uparrow.css('opacity', '1');
			uparrow.fadeIn();
		} else {
			uparrow.fadeOut();
		}
	});
	
	// если кликнули, то скроллим вверх
	uparrow.click(function() {
		$('html').stop().animate({scrollTop: 0}, 1000);
		// без .stop() страницу почему то начинает глючит
		// scroll в принципе становится не возможен
	})

	// блок about-us
	let aboutImages = $('.about-images');
	let aboutCook = $('.about-cook');
	
	if (scroll > 300) {
		aboutImages.animate({
			'margin-left': '0'
		}, 1700);
		aboutCook.animate({
			'margin-right': '0'
		}, 1700)};

	// блок featured
	let offersFeatured = $('.featured');
	if (scroll > 800) {
		offersFeatured.animate({
			'margin-top': '0'
		}, 1000)
	};

	// блок gallery
	let galleryTop = $('.gallery-top');

	if (scroll > 2400) {
		galleryTop.animate({
			'margin-right': '0'
		}, 1000)		
	};

	let galleryBottom = $('.gallery-bottom');

	if (scroll > 2800) {
		galleryBottom.animate({
			'margin-left': '0'
		}, 1000)		
	};


	// блок news
	let newsHeader = $('.header');

	if (scroll > 3300) {
		newsHeader.animate({
			'margin-left': '0'
		}, 1000)
	};

	let newsContent = $('#news-slight');
	if (scroll > 3500) {
		newsContent.animate({
			'margin-left': '0'
		}, 1500)
	};	

	// блок footer
	let footer = $('.footer');

	if (scroll >3500) {
		footer.fadeIn(2500);
	};
})

// _____________ работаем с галлереей  _____________

let buttonClicked = $('.zoom');

let imageURLs = [
	'img/background.jpg',
	'img/gallery-2.jpg',
	'img/gallery-3.jpg',
	'img/gallery-4.jpg',
	'img/gallery-5.jpg'
];

let imgID = [
	'img-one',
	'img-two',
	'img-three',
	'img-four',
	'img-five'
];

buttonClicked.click(function(){
	let imgClicked = $(this).parent(); // запоминает родителя кликнутого элемента, т.е. какое фото
	let imgClass = imgClicked.attr("class"); // считываем название класса родителя, т.е. фотки
	let imgResult = imgClass.split(' '); // разделяем по пробелу

	// контейнер модального окна
	let modalWindow = $('<div>');
	modalWindow.addClass('modalWindow');
	$('.root').append(modalWindow);

	// хедер модального окна
	let mwHeader = $('<div>');
	mwHeader.addClass('modalWindowHeader');
	modalWindow.append(mwHeader)

	// нода для отображения 3/5
	let countImg = $('<div>');
	countImg.addClass('countImg');

	mwHeader.append(countImg);

	// нода для крестика
	let btnClose = $('<div>');
	btnClose.addClass('btnClose');
	btnClose.text('X');
	mwHeader.append(btnClose);

	// если нажали на крестик, то удаляем ноду модального окна
	btnClose.click(function(){
		modalWindow.remove();
	})

	// обертка для контента
	let galleryWrap = $('<div>');
	galleryWrap.addClass('galleryWrap');
	modalWindow.append(galleryWrap);

	// создаем полосу прокрутки слева
	let mwNavLeft = $('<div>');
	mwNavLeft.addClass('modalWindowNavLeft');
	mwNavLeft.text('<');
	galleryWrap.append(mwNavLeft)

	// окно галлереи
	let mwGallery = $('<div>');
	mwGallery.addClass('mwGallery');
	galleryWrap.append(mwGallery)

	let arraySelected; // переменная, чтобы запомнить номер кликнутого элемента 
	// и потом использовать это в массиве для расставление фото слева и права
	
	// цикл, который проверяет номер кликнутого элемента с айди фото
	// если ок, то подставляет в качестве заднего фона картинку
	// arraySelected запоминает номер элемента в массиве
	for (let i = 0; i <= imageURLs.length; i++) {
		if (imgResult[0] == imgID[i]) {
			mwGallery.css('background-image', `url('${imageURLs[i]}')`);
			countImg.text(i+1 + ' / ' + imageURLs.length); // счетчик в левом углу
			arraySelected = i;
		}
	}

	// создаем полосу прокрутки справа
	let mwNavRight = $('<div>');
	mwNavRight.addClass('modalWindowNavRight');
	mwNavRight.text('>');
	galleryWrap.append(mwNavRight)

	// mwGallery.css('background-image'); - так можно получить значение свойства css

	// обрабатываем клик по левой <
	mwNavLeft.click(function(){
		// если кликнули на первое фото, то отправляем в конец
		if (arraySelected == 0) {
			mwGallery.css('background-image', `url('${imageURLs[imageURLs.length-1]}')`);
			arraySelected = imageURLs.length; // длина массива, так как затем декремент на 1
		}	
		// уменьшаем на 1, т.к. массива начинается с 0	
		arraySelected = arraySelected-1;

		countImg.text((arraySelected+1) + ' / ' + imageURLs.length); // счетчик в левом углу

		// задаем свойство заднего фона через массив по выбранному элементу
		mwGallery.css('background-image', `url('${imageURLs[arraySelected]}')`);
	})

	// обрабатываем клик по правой >
	mwNavRight.click(function(){
		arraySelected = arraySelected+1; // правое значение массива

		mwGallery.css('background-image', `url('${imageURLs[arraySelected]}')`);

		// если кликнули на последнее фото, то отправляем в начало
		if (arraySelected == imageURLs.length) {
			mwGallery.css('background-image', `url('${imageURLs[0]}')`);
			arraySelected = 0;
		}	
		
		let counter = arraySelected+1
		countImg.text(counter + ' / ' + imageURLs.length); // счетчик в левом углу		
	})
});

// _____________ работаем с новостями  _____________

$(function(){
	$('.dot-one').click(function(){
		$(this).css('backgroundColor', '#41A451'); // красим зеленым
		$(this).siblings().css('backgroundColor', '#c4c4c4'); // остальные красим серым
		$('.posts-wrapper').animate({
			'margin-left': '0' // возвращаем на исходную
		}, 1000);
	});

	$('.dot-two').click(function(){
		$(this).css('backgroundColor', '#41A451');
		$(this).siblings().css('backgroundColor', '#c4c4c4');
		$('.posts-wrapper').animate({
			'margin-left': '-100%'
		}, 1000);
	});

	$('.dot-three').click(function(){
		$(this).css('backgroundColor', '#41A451');
		$(this).siblings().css('backgroundColor', '#c4c4c4');
		$('.posts-wrapper').animate({
			'margin-left': '-200%'
		}, 1000);
	});
})

// window.innerWidth