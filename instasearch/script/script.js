function render(obj, text) {
	let parsedImg = obj.display_url; //подставляем картинку
	let parsedCaption = obj.accessibility_caption; //забираем описание
	let parsedLikes = obj.edge_liked_by.count; //забираем количество лайков
	let parsedCaptionSliced;
	
	if (parsedCaption===undefined){
		parsedCaptionSliced = 'Описание отсутствует';
	}else {
		if (parsedCaption.indexOf(':')===-1){
			parsedCaptionSliced = parsedCaption;
		}else{
			parsedCaptionSliced = parsedCaption.slice(parsedCaption.indexOf(':')+2);
		}
		parsedCaptionSliced = parsedCaptionSliced[0].toUpperCase() + parsedCaptionSliced.slice(1);
		//спевра вырезаем первую буквы и приводим к верхнему регистру
		//а затем приклеиваем остальное, но без первой группы
	}
	
	let newBox = $('<div>');
	newBox.addClass('newDiv');
	newBox.css('background-image', `url("${parsedImg}")`); //двойные кавычки чтоб избежать пробелы в названии картинки
	$('.root').append(newBox);

	let newBoxDesc = $('<div>');
	newBoxDesc.addClass('newDivDesc');
	newBoxDesc.text(parsedCaptionSliced); 
	newBox.append(newBoxDesc);

    let likedElem = $('<div>');
    likedElem.addClass('liked');
    newBox.append(likedElem);

    let likedNum = $('<span>');
    likedNum.text(`${parsedLikes}`);
    likedElem.append(likedNum);
}

function instaSearch (tag_name){
	let params = {
	"tag_name": tag_name, // можно просто написать tag_name
	"first":100000
	};

	$.ajax({
		url:
		`https://www.instagram.com/graphql/query/?query_hash=174a5243287c5f3a7de741089750ab3b&variables=${JSON.stringify(params)}`,	// указываем URL и
		dataType : "json",	// тип загружаемых данных
		success: function (data) {	// вешаем свой обработчик на функцию success
			// обрабатываем полученные данные
			let edges = data.data.hashtag.edge_hashtag_to_media.edges;
			let result = edges.map(elem=>elem.node);
			result.forEach(render);
		}
	});
}

$('.btn').click(function(){
	let inputVal = $('input').val().toLowerCase(); //забираем значение инпута в нижнем регистре
	instaSearch(inputVal); //передаем в функцию
});


