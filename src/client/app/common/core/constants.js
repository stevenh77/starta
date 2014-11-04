/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.common.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();