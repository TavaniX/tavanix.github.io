let data = [
	{
		name: "Axe",
		text: "Ещё будучи рядовым бугаем в армии Красного тумана, Могул Хан положил глаз на генеральский титул. Битву за битвой он самыми кровавыми способами доказывал собственное превосходство. Облегчало подъём в чинах и то, что без тени сомнения он мог обезглавить старшего по званию. В семилетней кампании на Тысячеболотье Могул Хан отличился в кровопролитных бойнях, и звезда его славы засияла еще ярче, но число соратников неизменно сокращалось. В ночь безоговорочной победы он провозгласил себя генералом Красного тумана, присвоив себе заодно и титул верховного военачальника. Однако теперь в его отряде не значилось ни одного воина. Множество бойцов было повержено врагом, но и от его топора погибло достаточно. Стоит ли говорить, что большинство солдат теперь ни за что не переманить под его знамена? Но Могул Хана это совсем не смущает, ведь он знает: один в поле воин.",
		bgimg: "fon_axe.jpg",
		avatar: "ava_axe.png"
	},
	{
		name: "Undying",
		text: "Как давно он потерял имя? Запустелые руины его разума больше не знают. Он смутно припоминает доспехи, знамена и угрюмых собратьев, скачущих бок о бок. Он помнит битву: боль и страх, когда бледные руки сорвали его с седла. Он помнит ужас: его вместе с соратниками бросили в бездонный зёв Мёртвого бога, где их ждало лишь небытие в объятиях погребальной песни. В глубокой тьме их покинуло время. Их покинули мысли. Их покинул разум. Но не голод. Брат поднял на брата ломаные зубы и ногти. И началось: сначала далёкая, едва слышимая нота, за ней другая, затем еще одна, и были они неизбежны и нескончаемы. Хор постепенно вырос в сплошную стену звука, вытеснившую все мысли. Песнь панихиды поглотила воина, и он простёр свои руки к Мёртвому богу, приняв свою участь. Но ей была отнюдь не смерть. Мёртвый бог требовал войны. ",
		bgimg: "fon_undying.jpg",
		avatar: "ava_undying.png"
	},
	{
		name: "Pudge",
		text: "На полях Вечной бойни, далеко на юге от Квойджа, тучная фигура упорно трудится под покровом ночи — расчленяет и потрошит павших, сгружая в кучи их конечности и потроха, — чтобы к рассвету поле боя было чисто. В этом проклятом мире ничто не разлагается само по себе — мертвецам не суждено вернуться обратно в землю, и не важно, насколько глубока могила. Окружённый стаями птиц-падальщиков, каждая из которых ждёт своего кусочка мёртвой плоти, мясник упражняется с лезвиями, и с каждым движением они становятся лишь острее. Вжик-вжик-тук. Плоть отсекается от костей, связки и сухожилия разрываются как мокрая бумага. И хоть мясницкое ремесло всегда было по вкусу тучному здоровяку, с годами у него проснулся интерес ещё и к тому, что остаётся после его работы. Сначала кусочек мускула там, потом глоточек крови здесь... Вскоре он впивался в самые крепкие тела подобно грызущей кость собаке. Даже те, кто не питают страха перед жнецом Смерти, предпочитают не связываться с мясником.",
		bgimg: "fon_pudge.jpg",
		avatar: "ava_pudge.png"
	},
	{
		name: "Rubick",
		text: "Любому колдуну под силу использовать заклинание или два, а некоторые из них могут даже стать волшебником после долгого обучения, но лишь самым талантливым дозволено носить титул мага. Впрочем, как и в любом другом кругу колдунов, ощущение сплочённости никогда не гарантировало честного соперничества. Уже известный в высшем колдовском кругу как дуэлянт и исследователь магии, Rubick никогда и не думал, что у него есть задатки мага. До тех пор, пока его не попытались убить в седьмой раз. Со вздохом выкинув двенадцатого из так называемых убийц со своего балкона, он осознал, насколько безнадёжно неинтересны стали покушения на его жизнь.",
		bgimg: "fon_rubick.jpg",
		avatar: "ava_rubick.png"
	},
	{
		name: "Earthshaker",
		text: "Словно голем или гаргулья, Рейгор когда-то лежал в земле, но сейчас свободно ступает по ней. В отличие от других, он создал себя своей волей и никому не служит. В беспокойных снах, заключённый глубоко в камне, он узнал, что жизнь проходит над ним. Любопытство пытало его. В сезон землетрясений пик горы Ишай стряхивал с себя рыхлые лавины, меняя течение рек и превращая пологие низины в бездонные разломы. Когда земля наконец перестала содрогаться, из оседающей пыли вышел наш герой, сбрасывая с себя тяжёлые валуны, словно невесомую простыню. Он сделался похожим на смертную тварь и назвался Рейгором Каменное Копыто. В его венах течет кровь, а в легких проходит воздух, и это значит, что теперь он смертен. Но дух его всё еще един с землёй; он несёт её силу в волшебном тотеме и никогда не расстаётся с ним. И в день, когда Рейгор обратится в пыль, земля с радостью примет своего блудного сына.",
		bgimg: "fon_shaker.jpg",
		avatar: "ava_shaker.png"
	}
];

let page = 0;

let rootElem = document.getElementById('root');
let galContainer = document.createElement('div');
let film = document.createElement('div');
galContainer.classList.add('galContainer');
film.classList.add('film');

galContainer.style.backgroundImage = `url("img/${data[0].bgimg}")`;

data.forEach(function(elem){
	let cardElem = document.createElement('div');
	let containerElem = document.createElement('div');
	let avatarElem = document.createElement('div');
	let nameElem = document.createElement('h2');
	let textElem = document.createElement('p');

	cardElem.classList.add('card'); 
	containerElem.classList.add('container');
	avatarElem.classList.add('avatar');
	nameElem.innerText = elem.name;
	textElem.innerText = elem.text;

	avatarElem.style.backgroundImage = `url("img/${elem.avatar}")`;

	containerElem.appendChild(avatarElem);
	containerElem.appendChild(nameElem);
	cardElem.appendChild(containerElem); 
	cardElem.appendChild(textElem);

	film.appendChild(cardElem);
});

galContainer.appendChild(film);
rootElem.appendChild(galContainer);

let rightBtn = document.createElement('div');
let leftBtn = document.createElement('div');

rightBtn.addEventListener('click', goRight);
leftBtn.addEventListener('click', goLeft);

rightBtn.classList.add('rightBtn');
leftBtn.classList.add('leftBtn');

rightBtn.innerText = '>';
leftBtn.innerText = '<';

galContainer.appendChild(rightBtn);
galContainer.appendChild(leftBtn);

let pointContainer = document.createElement('div');
pointContainer.classList.add('pointContainer');

data.forEach(function(elem){
	let point = document.createElement('div');
	point.classList.add('point');
	point.addEventListener('click', function(){
		let points = [...document.querySelectorAll('.point')];
		page = points.indexOf(this);
		film.style.marginLeft = `-${page}00%`;
		point.classList.add('active');
		galContainer.style.backgroundImage = `url("img/${elem.bgimg}")`;

		points.filter(elem => elem !== points[page]).forEach (function(elem){
			elem.classList.remove('active');
		});
	});
	pointContainer.appendChild(point);
});
galContainer.appendChild(pointContainer);

let pointNodes = document.querySelectorAll(".point");
pointNodes.item(0).classList.add('active');


function resize(){
	film.style.width = data.length * window.innerWidth + 'px'; 
	document.querySelectorAll('.card').forEach(elem=>elem.style.width = galContainer.offsetWidth + 'px'); 
};

resize();

function goLeft(){
	if (page === 0) { 
		return;
	};
	page--;
	film.style.marginLeft = `-${page}00%`;

	galContainer.style.backgroundImage = `url("img/${data[page].bgimg}")`;

	colorPoints();
};

function goRight(){
	if (page === data.length-1) {
		return;
	};
	page++;
	film.style.marginLeft = `-${page}00%`;

	galContainer.style.backgroundImage = `url("img/${data[page].bgimg}")`;

	colorPoints();
};

function colorPoints(){
	pointNodes.item(page).classList.add('active');

	let points = [...document.querySelectorAll('.point')];
	points.filter(elem => elem !== points[page]).forEach (function(elem){
		elem.classList.remove('active');
	});	
};


window.addEventListener('resize', resize); // при изменении размера экрана запускается функция resize