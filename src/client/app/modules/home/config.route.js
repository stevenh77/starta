(function () {
    'use strict';

    angular
        .module('app.modules.home')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'Home',
                    controllerAs: 'vm',
                    title: 'home',
                    settings: {
                        nav: 0,
                        content: '<i class="fa fa-dashboard"></i> Home'
                    }
                }
            }
        ];
    }
})();