var app = angular.module('CustomDirective', []);
app.directive('backImg', function(){
    return function(scope, element, attrs){
        //la directiva backImg, la letra en mayuscula "I" refleja en el html un "-"
        //en esta parte hacemos lo que queremos cone l elemento
        //el observe es un metodo de los atributos que recibe como prametro la funcion que va ejecutar la directiva.
        attrs.$observe('backImg', function(value){
            element.css({
                "background": "url("+value+")",
                "background-size": "cover",
                "background-position": "center"
            });
        });
    }
});
app.controller("AppCtrl", ["$scope","$http", function($scope, $http){
    $http.get("https://api.github.com/users/codigofacilito/repos")
    .success(function(data){
        $scope.repos = data;
    })
    .error(function(err){
        console.log(err);
    });
}])