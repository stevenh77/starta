(function () {
    'use strict';

    angular
        .module('app.modules.admin')
        .run(appRun);

    /* @ngInject */
    function appRun (routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/admin',
                config: {
                    title: 'admin',
                    controller: 'Admin',
                    controllerAs: 'vm',
                    templateUrl: 'app/modules/admin/admin.html',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-admin"></i> Admin'
                    }
                }
            }
        ];
    }
})();