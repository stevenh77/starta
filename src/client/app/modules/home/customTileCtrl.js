(function () {
    'use strict';

    angular
        .module('app.modules.home')
        .controller('CustomTileCtrl', CustomTileCtrl);

    /* @ngInject */
    function CustomTileCtrl($scope, logger) {
        /*jshint validthis: true */

        $scope.remove = function (tile) {
            console.log(tile);
            logger.info(tile.name + ' tile remove fired');
            $scope.$parent.tiles.splice($scope.$parent.tiles.indexOf(tile), 1);
        };

        $scope.openSettings = function (tile) {
            console.log(tile);
            logger.info(tile.name + ' tile openSettings fired');
        };
    }
})();