app.directive('timer', ['$interval', function ($interval) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attr) {
        }
    };
}]);