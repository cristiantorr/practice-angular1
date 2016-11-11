
/*

/*pagina para ahcer peticiones de prueba https://jsonplaceholder.typicode.com/*/

var app = angular.module("MyFirstApp", []);

/*en forma de arrglo pasamos el nombre de todas las dependencias ejemplo "$scope" y "$http" ya cuando s e minifica el nombre no cambia
-$http ES UNA DEPENDENCIA PARA HACER PETICIONES ASINCRONAS DESDE ANGULAR Y JAVASCRIPT
*/
app.controller("MyFirstAppController", ["$scope","$http",function($scope, $http){

	$scope.posts = [];
	$scope.loading = true; /* variable para el loading*/
	/*$scope.traerPost = function(){*/

		/*mandamos el parametro osea la url ESTO ES VIA GET*/
		$http.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
				console.log(data);
				$scope.posts = data;
				$scope.loading = false;
		})
		.error(function(err){
			$scope.loading = false;
		});
}]);
