app.directive('timer', ['$interval', function ($interval) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attr) {
            const finish = new Date(2019, 5, 4 ,0,0,0).getTime();
            const finish_secs = Math.floor(finish) - 2592000234;
            const start = Math.floor(new Date(2019, 3, 25 ,0,0,0).getTime()) - 2592000234;
            let timer = $interval(function() {
                const today = new Date().getTime();
                const diff = finish - today;
                scope.days = Math.floor(diff / (1000 * 60 * 60 * 24) - 30);
                scope.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                scope.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                scope.seconds = Math.floor((diff % (1000 * 60)) / 1000);
                scope.percent = Math.floor(((today - start) * 100) / (finish_secs - start));
                if(diff - 2592000234 <= 0){
                    scope.days = scope.hours = scope.minutes = scope.seconds = 0;
                    $interval.cancel(timer)
                }
            }, 1000);

        }
    };
}]);