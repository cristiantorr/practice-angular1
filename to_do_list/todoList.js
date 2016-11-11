


/*pasamos la dependencia LocalStoreModule*/
var app = angular.module("TodoList", ["LocalStorageModule"]);

/* pasamos un sevicio LocalStorageModule
*/
app.controller("TodoController", ["$scope","localStorageService",function($scope, localStorageService){

	/*
	-verificamos con localstorage si ya ahi algo guardado
	-ponemos una clave que los identifique en mel metodo get

	*/
		if(localStorageService.get("angular-todolist")){
			$scope.todo = localStorageService.get("angular-todolist");
		}else{
			$scope.todo = [];

		}


	/*
	watch sirve para verificar si s emodifica algun valor.
	 el servicio watch collection nos sirve porque utilizamos arreglo $scope.todo si no fuera arreglo solo utilizariamos el  $watch, esto ayuda para ejecutar un codigo que se repite en la aplicacion hacerlo una sola vez en este caso el localstorage se actualiza siempre cuando se actualiza o se agrega una actividad, en las dos funciones el codigo sta comentado = localStorageService.set("angular-todolist", $scope.todo);**/
	$scope.$watchCollection("todo",function(newValue, oldValue){
		console.log(newValue);
		console.log(oldValue);
		localStorageService.set("angular-todolist", $scope.todo);
	});

	$scope.addActividad = function(){
		$scope.todo.push($scope.newActividad);

		$scope.newActividad = {};

		/*actualizamos el localStorage tambien en set van dos parametros primero va la clave con la que identificamos*/

		/*localStorageService.set("angular-todolist", $scope.todo);*/

	}

	$scope.cleanActividad = function(){
		$scope.todo = [];

		/*actualizamos el localStorage tambien en set van dos parametros primero va la clave con la que identificamos*/
		/*localStorageService.set("angular-todolist", $scope.todo);*/

	}

}]);
