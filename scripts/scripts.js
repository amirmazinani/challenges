let app = angular.module('challenges', ['ngRoute', 'angularCSS']);

app.controller('main', ['$scope', function ($scope) {
    $scope.challenges_numbers = [1];
}]);

app.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/challenges/index.html',
                controller: 'main',
                css: '/styles/styles.css'
            })
            .when('/challenges/1', {
                controller: '',
                templateUrl: '/challenges/1/index.html',
                css: ['/challenges/1/styles.css']
            })
            .when('/challenges/2', {
                controller: '',
                templateUrl: '/challenges/2/index.html',
                css: ['/challenges/2/styles.css']
            })
            .when('/challenges/3', {
                controller: '',
                templateUrl: '/challenges/3/index.html',
                css: ['/challenges/3/styles.css?1']
            })
            .when('/challenges/4', {
                controller: '',
                templateUrl: '/challenges/4/index.html',
                css: ['/challenges/4/styles.css?3']
            })
            .when('/challenges/5', {
                controller: '',
                templateUrl: '/challenges/5/index.html',
                css: ['/challenges/5/styles.css?3']
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);