(function () {
    'use strict';

    angular
        .module('app.modules.dashboard')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/dashboard',
                config: {
                    templateUrl: 'app/modules/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();