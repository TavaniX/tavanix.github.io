let root = $('.root');

let imageArr = [
    'img/footer.jpg',
    'img/header.jpg',
    'img/buildings.jpg',
    'img/road.jpg',
    'img/board.jpg',
    'img/harley.jpg',
    'img/hands.jpg',
    'img/mac.jpg',
    'img/rock.jpg',
];

imageArr.forEach((elem, index)=>{
	let newElem = $('<div>');
	newElem.addClass('btn');
	newElem.css('background-image', `url("${imageArr[index]}")`);
	root.append(newElem);
});

$('.btn').click(function(){	//находим все элементы, и по событию клик будет обработчик
	$('.btn').siblings().removeClass('selected'); //у всех элементов сперва убираем класс selected
	$(this).addClass('selected'); //затем текущему элементу присваиваем этот класс
	$(this).addClass('clicked'); //чтобы применить тени
});

$('.clickedShadow').click(function(){
	$('.btn').filter('.clicked').css('box-shadow', '0 0 50px red'); //если кликали, то красный наружу
	$('.btn').not('.clicked').css('box-shadow', 'inset 0 0 50px green'); //не кликали, зеленый внутрь через inset
});
