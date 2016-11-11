
/*pasamos la dependencia LocalStoreModule*/
var app = angular.module("MyFactories", ["LocalStorageModule"]);

/* pasamos un sevicio LocalStorageModule
*/

/* ESTE ES EL SERVICIO  que srive para agregar todo los atributos, metodos , sirve para realizar actividades en este caso actividades del todo list. ya hemos utilizado servicios como
-http
-localStorage
y todos lo que estamos haciendo es uniendolos aquí, esa es una ventaja que podemos integrar varios servicios como el (LocalStorage)

- Las funciones como tal se hacen en factory, pero ene l controller se hacen las funcione sque llaman a estas y queda más limpio el codigo.
*/
app.factory('ToDoService', function(localStorageService){
    var toDoService = {};
    toDoService.key = "angular-todolist";

    if(localStorageService.get(toDoService.key)){
            toDoService.activities = localStorageService.get(toDoService.key);
        }else{
            toDoService.activities  = [];
    }

    /*Todas nuestras actividades es un objeto json que se guarda en un arreglo*/

    toDoService.add = function(newActv){
        toDoService.activities.push(newActv);
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
    }
    toDoService.removeItem = function(item){
        toDoService.activities =  toDoService.activities.filter(function(activty){
                return activty !== item;
        });
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    }
    return toDoService;
});
/* Aquí instanciamos el objeto toDoService*/
app.controller("FactoriesController", function($scope, ToDoService){
    /* Aquí estamos usando todos los metodos creados en el servicio y el controllador queda más limpio */

    $scope.todo = ToDoService.getAll();
    $scope.newActv = {};
    $scope.addActv = function(){
       ToDoService.add($scope.newActv);
       $scope.newActv = {};
    }
    $scope.removeActv = function(item){
        $scope.todo = ToDoService.removeItem(item);
    }
    $scope.cleanActv = function(){
       $scope.todo = ToDoService.clean();
    }

});
