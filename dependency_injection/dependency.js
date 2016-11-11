
/*
--Cuando angular detecta el nombre en este caso $scope busca en su lista de dependencias ese nombre e injecta y con esto viene toda la funcionalidad..
--Un problema es que injectando asi con el nombre de la variable  es cuando se quiere minificar javascript.
- cuando se minifica el javascript en entorno de produccion se pueden cambiar los nombres de variables y ya angular no tendria el nombre $scope si no digamos $a y aqui rompe todo el esquema de angular por eso ahi una manera de practica para esto:
*/

var app = angular.module("MyFirstApp", []);

/*en forma de arrglo pasamos el nombre de todas las dependencias ejemplo "$scope" o "$http" ya cuando s e minifica el nombre no cambia*/
app.controller("MyFirstAppController", ["$scope", "$http",function(m, http){
	
	m.nuevoUserComentario= {};/*asignamos el objeto nuevoUserComentario*/
	m.comentarios = [
		{
			comentario : "Que buen curso",
			username : "Cristian"
		},
		{
			comentario: "Que mal curso",
			username: "Carlos"
		}

	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoUserComentario);
		m.nuevoUserComentario= {};/*se reinicia nuevoUserComentario para que se pueda agregar más comentarios si no solo da una vez y sale error*/
	}

	/*push agregamos elementos a el arreglo*/

}]);

//$scope enlaza el controllador o la información del controllador con la vista