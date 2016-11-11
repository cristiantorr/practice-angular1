
/*

/*pagina para ahcer peticiones de prueba https://jsonplaceholder.typicode.com/*/

var app = angular.module("MyFirstApp", []);

/*en forma de arrglo pasamos el nombre de todas las dependencias ejemplo "$scope" y "$http" ya cuando s e minifica el nombre no cambia
-$http ES UNA DEPENDENCIA PARA HACER PETICIONES ASINCRONAS DESDE ANGULAR Y JAVASCRIPT
*/
app.controller("MyFirstAppController", ["$scope","$http",function($scope, $http){

	$scope.posts = [];
	$scope.newPost = {};

	/*$scope.traerPost = function(){*/

		/*mandamos el parametro osea la url ESTO ES VIA GET*/
		$http.get("https://jsonplaceholder.typicode.com/posts")

		.success(function(data){
				console.log(data);
				$scope.posts = data;
		})
		.error(function(){

		});

		/*CON .post VAMOS AGREGAR POST y hacemos la variable newPost*/
		$scope.addPost = function(){

			/*Enviamos los parametros que esperan que se envien title, body, userid con los datos recogidos en $scope.newPost como el tiutle y el body */
			$http.post("https://jsonplaceholder.typicode.com/posts",{
				title 	 : $scope.newPost.title,
				body  	 : $scope.newPost.body,
				userId : 1

			})
			.success(function(data, status, headers, config){
				/*mandamos a $scope.posts los datos de $scope.newPost y limpiamos otra vez para mandar mas datos $scope.newPost = {}; */

				/*se podria enviar con los datos en $scope.newPost  = push($scope.newPost) o tambien simplemente push(data) ya que responde con el mismo post podemos verlo con el console.log(data)*/
					$scope.posts.push($scope.newPost);
					$scope.newPost = {};

			})
			.error(function(error, status, headers, config){
				console.log(error);
			});
		}

	/*}*/
}]);
