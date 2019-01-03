let app = angular.module('challenges', ['ngRoute', 'angularCSS']);

app.controller('main', ['$scope', function ($scope) {
    $scope.challenges_numbers = [1];
}]);

app.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/challenges/index.php',
                controller: 'main',
                css: '/styles/styles.css'
            })
            .when('/challenges/1', {
                controller: '',
                templateUrl: '/challenges/1/index.php',
                css: ['/challenges/1/styles.css']
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);