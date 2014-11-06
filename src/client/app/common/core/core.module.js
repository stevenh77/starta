(function () {
    'use strict';

    angular.module('app.common.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize',
        /*
         * Our reusable cross app code modules
         */
        'app.common.exception', 'app.common.logger', 'app.common.router',
        /*
         * 3rd Party modules
         */
        'ngplus', 'gridster'
    ]);

})();