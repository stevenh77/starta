(function () {
    'use strict';

    angular
        .module('app.modules.home')
        .controller('Home', Home);

    /* @ngInject */
    function Home($scope, logger) {
        /*jshint validthis: true */
        
        $scope.title = 'Home';

        $scope.gridsterOptions = {
            columns: 6, // the width of the grid, in columns
            margins: [10, 10],
            resizable: {
                enabled: true,
                handles: ['se']
            },
            draggable: {
                enabled: true, 
                handle: '.resizeHandle'
            }
        };

        $scope.tiles = [
            {sizeX: 1, sizeY: 1, row: 0, col: 0, name: 'Dashboard', url: '#/dashboard'},
            {sizeX: 1, sizeY: 1, row: 0, col: 1, name: 'Admin', url: '#/admin'}
        ];

        activate();

        function activate() {
            logger.info('Activated Home View');
        }
    }
})();

//$scope.gridsterOptions = {
//    columns: 6, // the width of the grid, in columns
//    pushing: true, // whether to push other items out of the way on move or resize
//    floating: true, // whether to automatically float items up so they stack
//                      (you can temporarily disable if you are adding unsorted items with ng-repeat)
//    swapping: false, // whether or not to have items of the same size switch places 
//                          instead of pushing down if they are the same size
//    width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster 
//                      to be the full width of its containing element
//    colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
//    rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
//    margins: [10, 10], // the pixel distance between each widget
//    outerMargin: true, // whether margins apply to outer edges of the grid
//    isMobile: false, // stacks the grid items if true
//    mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
//    mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
//    minColumns: 1, // the minimum columns the grid must have
//    minRows: 2, // the minimum height of the grid, in rows
//    maxRows: 100,
//    defaultSizeX: 2, // the default width of a gridster item, if not specifed
//    defaultSizeY: 1, // the default height of a gridster item, if not specified
//    resizable: {
//        enabled: true,
//        handles: ['se'],
//        start: function (event, $element, widget) { }, // optional callback fired when resize is started,
//        resize: function (event, $element, widget) { }, // optional callback fired when item is resized,
//        stop: function (event, $element, widget) { } // optional callback fired when item is finished resizing
//    },
//    draggable: {
//        enabled: true, // whether dragging items is supported
//        handle: '.resizeHandle', // optional selector for resize handle
//        start: function (event, $element, widget) { }, // optional callback fired when drag is started,
//        drag: function (event, $element, widget) { }, // optional callback fired when item is moved,
//        stop: function (event, $element, widget) { } // optional callback fired when item is finished dragging
//    }
//};