var app = angular.module("FinalApp");
app.factory('PostResource', ['$resource', function($resource){
    return $resource("https://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
}])