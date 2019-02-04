var block = $('.block__line_1');
var block_1 = $('.block__line_2');
var block_2 = $('.block__line_3');
var button = $('.button__start');
var text = $('<span class = "text__win">Вы выграли</span>');
var count = 0;
var images = $('.block__line_1 img,.block__line_2 img,block__line_3 img');
var button_2X = $('.button__2x');
var bet = Number($(".text__bet").text());
var coins = Number($("i").text());
var spanWin = $('<span>Royal Flesh!!!</span><br>');
function scroll(){
	count++;
	if(count<9999){
	var arr = ["images/7.png","images/orange.png","images/plum.png"];
	var random = Math.floor(Math.random() * arr.length);
	var random1 = Math.floor(Math.random() * arr.length);
	var random2 = Math.floor(Math.random() * arr.length);
	var img = $("<img><img><img><img><img><img>");
	var img_1 = $("<img><img><img><img><img><img>");
	var img_2 = $("<img><img><img><img><img><img>");
	for(var i=0;i<images.length;i++){
		block.append(img);
		img.eq(0).attr("src",arr[random]);
		img.eq(1).attr("src",arr[random1]);
		img.eq(2).attr("src",arr[random2]);
		img.eq(3).attr("src",arr[random]);
		img.eq(4).attr("src",arr[random1]);
		img.eq(5).attr("src",arr[random2]);
		block_1.append(img_1);
		img_1.eq(0).attr("src",arr[random2]);
		img_1.eq(1).attr("src",arr[random]);
		img_1.eq(2).attr("src",arr[random1]);
		img_1.eq(3).attr("src",arr[random2]);
		img_1.eq(4).attr("src",arr[random]);
		img_1.eq(5).attr("src",arr[random1]);
		block_2.append(img_2);
		img_2.eq(0).attr("src",arr[random1]);
		img_2.eq(1).attr("src",arr[random2]);
		img_2.eq(2).attr("src",arr[random]);
		img_2.eq(3).attr("src",arr[random1]);
		img_2.eq(4).attr("src",arr[random2]);
		img_2.eq(5).attr("src",arr[random]);
		}
		block.scrollTo('100%',500);
		block_1.scrollTo('100%',600);
		block_2.scrollTo('100%',700);
		if(random==random1&&random1==random2){
			$('main').after(spanWin);
			var win = coins + (bet*2);
			$('i').text(win);
		}
	}	
}
function calc(){
	bet*=2;
	$(".text__bet").text(bet);
	Number($("i").text(coins-bet));
}
button.on("click",scroll);
button_2X.on("click",calc);
	

	

