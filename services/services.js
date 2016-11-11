
/*pasamos la dependencia LocalStoreModule*/
var app = angular.module("MyServices", ["LocalStorageModule"]);

/* pasamos un sevicio LocalStorageModule
*/

/* ESTE ES EL SERVICIO  que srive para agregar todo los atributos, metodos , sirve para realizar actividades en este caso actividades del todo list. ya hemos utilizado servicios como
-http
-localStorage
y todos lo que estamos haciendo es uniendolos aquí, esa es una ventaja que podemos integrar varios servicios como el (LocalStorage)
*/
app.factory('TodoService', function(localStorageService){
    var toDoService = {};
    toDoService.key = "angular-todolist";

    if(localStorageService.get(toDoService.key)){
            toDoService.activities = localStorageService.get(toDoService.key);
        }else{
            toDoService.activities  = [];
    }

    /*Todas nuestras actividades es un objeto json que se guarda en un arreglo*/

    toDoService.addActivity = function(newActivity){
        toDoService.activities.push(newActivity);
        toDoService.updaLocalStorage();
    };

    toDoService.updaLocalStorage = function(){
        localStorageService.set(toDoService.key, toDoService.activities);
    };
    toDoService.clean = function(){
        toDoService.activities = [];
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    };
    toDoService.getAll = function(){
        return toDoService.activities;
    };
    toDoService.removeItem = function(){
        toDoService.activities =  toDoService.activities.filter(function(activity){
                return activity !== item;
        });
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    };
    return toDoService();
});
/* Aquí instanciamos el objeto toDoService*/
app.controller("ServicesController", ["$scope",function($scope, toDoService){
    /* Aquí estamos usando todos los metodos creados en el servicio y el controllador queda más limpio */

    $scope.todo = toDoService.getAll();
    $scope.newActivity = {};
    $scope.addActv = function(){
       toDoService.addActivity($scope.newActivity);
       $scope.newActivity = {};
    }
    $scope.cleanActividad = function(){
        toDoService.removeItem(item);
    }
    $scope.clean = function(){
        toDoService.clean();
    }

}]);
