/* MENU RESPONSIVE */
var contador = 0;
var y = $(this).scrollTop();

$( '#btn-menu' ).click(function() {
  if(contador == 0){
  $('#menu').addClass('menu-movil');
  $("#logo img").attr("src","img/logo2.png");
  $('nav ul li a').css('color','#254759');
  $("#header").addClass("header-blanco");

  contador = 1;
}else{
  $('#menu').removeClass('menu-movil');
  $('#menu').addClass('ani-menu');
  $("#header").removeClass("header-blanco");
  $("#logo img").attr("src","img/logo.png");
  $('nav ul li a').css('color','#fff');

  if(y >=80){
  	$("#logo img").attr("src","img/logo2.png");
  }
  contador = 0;
}
});


$( "nav > ul > li" ).click(function() {
  
  $('#menu').removeClass('menu-movil');

});




/** BARRA DE MENU APARECE **/
$(document).ready(function(){
	$(window).scroll(function(event){

			var y = $(this).scrollTop();
			var ancho = $(window).width();

			if(y >= 80){
				$("#logo img").attr("src","img/logo2.png");
				$("#header").addClass("header-blanco");
				$('nav ul li a').css('color','#254759');

				if (ancho <= 768){
					$("#header").removeClass("header-blanco");
					$("#header").addClass("header-transparente");
				}
		
			}else{
				$("#logo img").attr("src","img/logo.png");
				$("#header").removeClass("header-blanco");
				$('nav ul li a').css('color','#fff');
				

				if (ancho <= 768){
					$('nav ul li a').css('color','#254759');
				}

			}
		

	});


		var ancho = $(window).width();
	 
		if (ancho <= 768){
			$("#header").removeClass("header-blanco");
			$("#header").addClass("header-transparente");
		}
});




/*EFECTO SCROLL SMOOTH*/
$('#menu > ul > li').click(function(){          
  var id = $(this).data('id');               
  $('html, body').stop().animate({           
    scrollTop: $('#'+id+'').offset().top - 60
  },1000, 'swing');                          
} );

$('.btn-inicio').click(function(){          
  var ids = $(this).data('elid');               
  $('html, body').stop().animate({           
    scrollTop: $('#'+ids+'').offset().top - 60
  },1000, 'swing');                          
} );



