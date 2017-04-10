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

$('.fa-bars').on('click', function(){
		$('nav ul li').slideToggle(500);
	});	

});
