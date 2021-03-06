﻿(function () {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.common.core',
        'app.common.widgets',
        'app.common.layout',
        'app.common.router',

        /*
         * Feature areas
         */
        'app.modules.admin',
        'app.modules.dashboard',
        'app.modules.home'
    ]);

})();