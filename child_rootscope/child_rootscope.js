
/* $rootScope -> todos los objetos $scope que hemos creado heredan de un objeto llamado $rootScope que angular crea cuando instanciamos el modulo, cuando creamos el modulo y detecta ng-app relacionando atravez  de esa directiva  ng-app  el modulo que creamos atravez de la pagina web.
-Cuando llega a ng-app (EN LA PAGINA WEB)crea el rootScope.
-Cuando llega a NG-CONTROLLE(en la pagina web) crea unscope a partir del rootScope.
- Todos esto quiere decir que todos los atributos que asignemos al rootScope están accesibles a travez de todos los scope que nosotros creamos a travez de la herencia de prototipos de javascript.
*/
/* como podemos asignar valores al rootScope EJEMPLO:
**************************************
UNO injectandolo  en el controllador  :

var app = angular.module('MyFirstApp', []);
app.controller('FirstController', ['$scope', '$rootScope', function($scope, $rootScope){

}]);
**************************************
DOS con el metodo run y no es necesario declarar la variable en el controller ya que controller toma el scope del rootScope.
-Esto puede servir para tener una variable que se repita en todos los controladores y no tener que ponerla controlador por controlador.

var app = angular.module('MyFirstApp', []);
    app.run(function($rootScope){
        $rootScope.nombre = "CRISTIAN TORRES";
    });
    app.controller('FirstController', ['$scope',function($scope){
    }]);

NOTA: si REDECLARAMOS LA VARIABLE NOMBRE en el run y el controller por eherencia siempr etomara el hijo en este caso tomara el nombre de "andres".
var app = angular.module('MyFirstApp', []);
    app.run(function($rootScope){
        $rootScope.nombre = "CRISTIAN TORRES";
    });
    app.controller('FirstController', ['$scope',function($scope){
        $nombre.scope = "andres";
    }]);

*/

var app = angular.module('MyFirstApp', []);
    app.run(function($rootScope){
        $rootScope.nombre = "CRISTIAN TORRES";
    });
    app.controller('FirstController', ['$scope',function($scope){
        $scope.nombre = "andres";
        /*si actualizamos la variable se actualizara en el hijo y en el padre */
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre = "Gloria";
            })
        },2000);
    }]);
    app.controller('ChildController', ['$scope', function($scope){

    }]);