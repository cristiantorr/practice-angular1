/*Si queremos usar el modulo solo le quitamos los []*/
var app = angular.module('CustomDirective');

app.directive("myAutocomplete" , function(){
    function link(scope,element,attrs){
        $(element).autocomplete({
            source : scope[attrs.myAutocomplete],
            select : function(ev,ui){
                ev.preventDefault();
                if(ui.item){
                    scope.optionSelected(ui.item.value);
                }
            },
                focus: function(ev,ui){
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }
        });
    };
    return {
        link: link
    }
});
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