//function go (game, score) {
//	if (score >= 80){
//		return game + ' is fucking awesome';
//	} else if (score >= 60) {
//		return game + ' is just O.K.';
//	} else if (score < 60) {
//		return game + ' is shit.';
//	}
//}
//
//alert( go('Hitman', 98) );
//alert( go('Doom', 95) );
//alert( go('Ps Plus', 10) );
//alert( go('Fifa 17', 65) );




//for (var 1=0; i < 10; i++) {
//	console.log('i is  ', i)
//}





//var numOne = document.getElementById("num-one");
//var numTwo = document.getElementById("num-two");
//var addSum = document.getElementById("add-sum");

//numOne.addEventListener("input", add);
//numTwo.addEventListener("input", add);


//function add() {
//	var one = parseFloat(numOne.value) || 0;
//	var two = parseFloat(numTwo.value) || 0;
//	var sum = one+two;
//	addSum.innerHTML = "WTF: " + sum;
//}




 $(document).ready(function(){

 	
 	
window.onscroll = function() {
	fixedNav()
};

function fixedNav() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
		document.getElementById("nav").className = "nav fixed";
		document.getElementById("social").className = "social hidden"
		document.getElementById("social2").className = "social2"
	} else {
		document.getElementById("nav").className = "nav";
		document.getElementById("social").className = "social"
		document.getElementById("social2").className = "hidden"
	}
}



 	$('.left').delay(400).animate({
 		'margin-right':'20px'
 	});
 	$('.right').delay(400).animate({
 		'margin-left':'20px'
 	});
 	$('.center').delay(600).animate({
 		'opacity':'1'
 	});
 	




















 	$('.dropdown').hide();
 	
 	$('.navbtn').hover(function(){
 		var dropdown = $(this).attr('dropdown');
 		$('.' + dropdown).slideToggle(200);
 	});
 		
 	

 	$('.panel-button').on('click', function(){
 		var panelId = $(this).attr('panelId');
 		$('.'+panelId).slideToggle(300);
 	})

 	$('.jumbotron').hover(function(){
 		$('.hgo').animate({
 			'padding-top':'100px'
 		});
 		
 		
 		//$('.hgo').fadeToggle(500, 0);
 	});

});
