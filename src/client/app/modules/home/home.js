(function () {
    'use strict';

    angular
        .module('app.modules.home')
        .controller('Home', Home);

    /* @ngInject */
    function Home(logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Home';

        activate();

        function activate() {
            logger.info('Activated Home View');
        }
    }
})();