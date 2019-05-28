app.directive('autoTooltip', ['$interval', '$timeout', function ($interval, $timeout) {
    return {
        restrict: 'A',
        scope: {
            container: '@',
            dropdown: '@',
        },
        link: function (scope, element, attr) {
            $timeout(function () {
                let button = element[0];
                let container = document.querySelector(scope.container);
                let dropdown = element[0].querySelector(scope.dropdown);
                let container_points = {
                    'top': container.offsetTop,
                    'right': container.offsetLeft + container.clientWidth,
                    'bottom': container.offsetTop + container.clientHeight,
                    'left': container.offsetLeft,
                };

                function setButtonDistance() {
                    angular.element(dropdown).css({'display':'block','visibility':'hidden','pointer-event':'none'});
                    let button_distances = {
                        'top': button.offsetTop,
                        'right': container.clientWidth - (button.offsetLeft + button.clientWidth),
                        'bottom': container.clientHeight - (button.offsetTop + button.clientHeight),
                        'left': button.offsetLeft,
                    };
                    button_distances = sortObj(button_distances);
                    $timeout(function () {angular.element(dropdown).css({'display':'none','visibility':'visible','pointer-event':'auto'});});
                    return button_distances;
                }

                function sortObj(o) {
                    let sortable = [];
                    for (let i in o) sortable.push([i, o[i]]);
                    sortable.sort(function (a, b) {
                        return b[1] - a[1];
                    });
                    let obj_sort = {};
                    for (let i in sortable) obj_sort[sortable[i][0]] = sortable[i][1];
                    return obj_sort
                }

                function setState(dropdown, distance) {
                    let state = '';
                    if (distance['left'] >= dropdown.clientWidth && distance['right'] >= dropdown.clientWidth) {
                        state += '1';
                    } else if (distance['left'] >= dropdown.clientWidth && distance['right'] <= dropdown.clientWidth) {
                        state += '2';
                    } else if (distance['left'] <= dropdown.clientWidth && distance['right'] >= dropdown.clientWidth) {
                        state += '3';
                    } else {
                        alert('not space in left and right');
                        console.log('distance left :'+distance['left']);
                        console.log('distance right :'+distance['right']);
                        console.log('dropdown width :'+dropdown.clientWidth);
                        console.log('dropdown height :'+dropdown.clientHeight);
                    }
                    if (distance['top'] >= dropdown.clientHeight && distance['bottom'] >= dropdown.clientHeight) {
                        state += '1';
                    } else if (distance['top'] >= dropdown.clientHeight && distance['bottom'] <= dropdown.clientHeight) {
                        state += '2';
                    } else if (distance['top'] <= dropdown.clientHeight && distance['bottom'] >= dropdown.clientHeight) {
                        state += '3';
                    } else {
                        alert('not space in top and bottom');
                        console.log('distance top :'+distance['top']);
                        console.log('distance bottom :'+distance['bottom']);
                        console.log('dropdown width :'+dropdown.clientWidth);
                        console.log('dropdown height :'+dropdown.clientHeight);
                    }
                    return Number(state)
                }

                function setCss(container, x = 0, y = 0) {
                    angular.element(dropdown).css({
                        'transform': 'translate3d(' + x + 'px, ' + y + 'px, 0)',
                    });
                }

                function setStyle(dropdown, state) {
                    let x = 0;
                    let y = 0;
                    switch (state) {
                        case 12:
                            x = -(dropdown.clientWidth / 2 - button.clientWidth / 2);
                            y = -dropdown.clientHeight;
                            setCss(dropdown, x, y);
                            break;
                        case 13:
                            x = -(dropdown.clientWidth / 2 - button.clientWidth / 2);
                            y = button.clientHeight;
                            setCss(dropdown, x, y);
                            break;
                        case 21:
                            x = -dropdown.clientWidth;
                            y = -(dropdown.clientHeight / 2 - button.clientHeight / 2);
                            setCss(dropdown, x, y);
                            break;
                        case 22:
                            x = -dropdown.clientWidth;
                            y = -(dropdown.clientHeight - button.clientHeight);
                            setCss(dropdown, x, y);
                            break;
                        case 23:
                            x = -dropdown.clientWidth;
                            y = 0;
                            setCss(dropdown, x, y);
                            break;
                        case 31:
                            x = button.clientWidth;
                            y = -(dropdown.clientHeight / 2 - button.clientHeight / 2);
                            setCss(dropdown, x, y);
                            break;
                        case 32:
                            x = button.clientWidth;
                            y = -(dropdown.clientHeight - button.clientHeight);
                            setCss(dropdown, x, y);
                            break;
                        case 33:
                            x = button.clientWidth;
                            y = 0;
                            setCss(dropdown, x, y);
                            break;
                    }
                }


                angular.element(button).on('click',function () {
                    let button_distances = setButtonDistance();
                    let state = setState(dropdown, button_distances);
                    setStyle(dropdown, state);
                    console.log(button_distances);
                    console.log(state);

                    $timeout(function () {
                        if(angular.element(dropdown).css('display')==='block'){
                            angular.element(dropdown).css({'display':'none'});
                        }else if(angular.element(dropdown).css('display')==='none'){
                            angular.element(dropdown).css({'display':'block'});
                        }
                    },10)
                })

            }, 1000)
        }
    };
}]);