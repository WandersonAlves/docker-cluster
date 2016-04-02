angular.module("neweb", []).
directive("sobre", function () {
    return {
        templateUrl: 'res/views/sobre.html'
    }
}).
directive("projetos", function () {
    return {
        templateUrl: 'res/views/projetos.html'
    }
}).
directive("contato", function () {
    return {
        templateUrl: 'res/views/contato.html'
    }
}).
directive("infra", function () {
    return {
        templateUrl: 'res/views/infra.html'
    }
}).
directive("customFooter", function () {
    return {
        templateUrl: 'res/views/customFooter.html'
    }
});