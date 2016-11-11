
//tambien se puede hacer asi los modulos y controller
// llamar otro controllador

var app = angular.module("MyFirstApp", []);
app.controller("MyFirstAppController", function($scope){
	//$scope.nombre = "Cristian";
	$scope.nuevoUserComentario= {};/*asignamos el objeto nuevoUserComentario*/
	$scope.comentarios = [
		{
			comentario : "Que buen curso",
			username : "Cristian"
		},
		{
			comentario: "Que mal curso",
			username: "Carlos"
		}

	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoUserComentario);
		$scope.nuevoUserComentario= {};/*se reinicia nuevoUserComentario para que se pueda agregar más comentarios si no solo da una vez y sale error*/
	}

	/*push agregamos elementos a el arreglo*/

});

//$scope enlaza el controllador o la información del controllador con la vista