var app = angular.module('CustomDirective');
app.controller("ReposController", ["$scope","$http", function($scope, $http){
    $scope.repos = [];
    $http.get("https://api.github.com/users/twitter/repos")
    .success(function(data){
        $scope.posts = data;
        for (var i = data.length - 1; i >= 0; i--) {
            var repo = data[i];
            $scope.repos.push(repo.name);
        }
    })
    .error(function(err){
        console.log(err);
    });
    $scope.optionSelected = function(data){
        $scope.$apply(function(){
            $scope.main_repo = data;
        })
    }
}]);
app.controller('RepoController', ["$scope","$http","$routeParams", function($scope, $http, $routeParams){
    $scope.repo = {};
    /* Aca estamos recibisndo el parametro nombre del repositorio name entonces tenemos que poner $routeParams.name este "name " tenemos que ponerlo igual a como lo mandamos  (.when("/repo/:name") si ponemos "id" lo recibimos con el nombre de id ejemplo: $routeParams.id*/
     $http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
    .success(function(data){
        $scope.repo = data;
        /*for (var i = data.length - 1; i >= 0; i--) {
            var repo = data[i];
            $scope.repos.push(repo.name);
        }*/
    })
    .error(function(err){
        console.log(err);
    });
}])