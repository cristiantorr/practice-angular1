

/*hacer un filtro que remueva etiquetas de html al m,omento de imprimir esto se llaman filtros customizados ya que ahí unos que trae angular*/

var app = angular.module("mainModule", []);
app.filter("removeHtml",function(){ /*.FILTER para crearlo*/
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,''); /*expresion regular que quita las llaves de las etiquetas < y >*/

	}
})
	.controller("FiltersController", function($scope){ /*controlador con la variablñe $scope.mi_html */
		$scope.mi_html = "<p>Hola mundo sin  etiquetas</p>";
		/*Otros filtros que ya están en angular por ejemplo el json $scope.mijson_html = {};
$scope.mijason_title.title
$scope.mijason_body.body o el currency para el costo 	$scope.costo = 2;*/
		$scope.mijson_html = {};
		$scope.mijson_html.title = "Hola";
		$scope.mijson_html.body  = "Hola mundo";
		$scope.costo = 2;

	});
