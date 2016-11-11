
/*ngRoute es una depenencia*/
var app = angular.module('CustomDirective',['ngRoute']);
/* Aquí vamos a configurar diferentes servucios */
/*$routeProvider nos permite definir las rutas*/
app.config(function($routeProvider) {
    /*Cuando el routeProvider detecte esta url ("/") va a buscar el layautt('index.html') y donde encuentr el atributo va pegar el contenido del template('home.html')*/
    $routeProvider
    .when("/",{
        controller : "ReposController",
        templateUrl: "templates/home.html"
    })
    /* este /repo/:name -> name es un parametro para que me muestre el nombre del repositorio*/
    .when("/repo/:name",{
        controller: "RepoController",
        templateUrl: "templates/repo.html"
    })
})