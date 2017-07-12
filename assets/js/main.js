var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit': '15'},
	})
	.done(function(respuesta) {
		
		console.log(respuesta);
		respuesta.results.forEach(function(el){
			var nombrePoke = el.name;
			$(".all-pokemon").append('<div class="container-cada-poke col-lg-3 col-md-3 col-sm-4 col-xs-4">'+
					'<div class="cada-poke col-lg-12 col-md-12 col-sm-12 col-xs-12" id="'+nombrePoke+'">'+
						'<h3>'+nombrePoke+'</h3>'+
					'</div>'+
				'</div>').append(llamarHabilidades(el.url));
		})
		
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete nombre");
	}); 
}

llamarAjax();
//Imprimir pokemon + habilidad 10ptos
//Imprimir pokemon + todas las habilidades 15puntos
//Imprimir pokemon habilidades y cualquier otra cosas del pokemon +20ptos
//No hacerlo con document.write 30pts
//Hacerlo con jquery 35ptos
//Agregar CSS 45ptos