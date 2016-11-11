var app = angular.module("FinalApp");
app.controller('MainController', ['$scope','$resource', 'PostResource',  function($scope, $resource, PostResource){
    //put se utilizan para actualizar elementos.
    //Post = $resource("https://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}}); //api para traer posto
    User = $resource("https://jsonplaceholder.typicode.com/users/:id", {id: "@id"}); // api traer usuarios
    $scope.posts = PostResource.query();
    $scope.users = User.query();
    $scope.removePost = function(post){
        PostResource.delete({id: post.id}, function(data){
            console.log(data);
        });

        //filter es una funcion ecmascript 5 nos permite iterar el arreglo y filtrar algunos elementos.
        $scope.posts = $scope.posts.filter(function(element){
        //element-> es elemento que va iterando el filtro [1,2,3,4] element sería igual a uno, luego a dos etc..
            //cuando ese rturn de falso, el item se elimina si e sverdadero se conserva en el arreglo.
            return element.id !== post.id;
        });
    }

    // Se hace la petición GET directamente y trae el arreglo: query() -> GET /posts -> devuelve un arrgelo post, si no devuelve nada va salir un error, obligadamente tenemo que tener un arreglo para utilizar query().
}]);

app.controller('PostController', ['$scope','PostResource','$routeParams','$location',  function($scope,PostResource,$routeParams, $location){
    $scope.title = "Editar Post";
    $scope.post  = $scope.post = PostResource.get({id: $routeParams.id});

    $scope.savePost = function(){
        PostResource.update({id: $scope.post.id}, {data: $scope.post},function(data){
            console.log(data);
            $location.path("/post/"+$scope.post.id);
        });
    }
    //Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
}]);

app.controller('NewPostController', ['$scope','PostResource','$location',  function($scope,PostResource, $location){
    //Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
    $scope.post = {};
    $scope.savePost = function(){
        PostResource.save({data: $scope.post}, function(data){
            console.log(data);
            $location.path("/"); //redirige la pagina cuando utilizamos ngroute
        });
    }
}]);