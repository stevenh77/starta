(function () {
    'use strict';

    angular
        .module('app.common.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config', 'logger'];

    function Shell($timeout, config, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = config.appTitle;
        //vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //TODO: Force a 1 second delay so we can see the splash.
            $timeout(function () {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();