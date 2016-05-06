$(document).ready(function(){
 

	var ancho = $(window).width();
 
// Si trabajamos con una imagen desactivamos el background-size:cover;
	if (ancho <= 768){

		$('.contenedor-full').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});


		$('.interesado').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});

		$('.equipo').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});
	}



	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('.contenedor-full').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.17);
		
		$('.interesado').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.07);
		
		$('.equipo').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});


	
 
});