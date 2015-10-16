'use strict';

/**
 * @ngdoc function
 * @name vbwebcreationApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the vbwebcreationApp
 */
angular.module('vbwebcreationApp')
    .controller('MapCtrl', function ($scope, $timeout) {
        $scope.focus = function () {
            var time;
            angular.element('.map-google-embed iframe').css("pointer-events", "auto");


            $timeout.cancel(time);
            time = $timeout(function () {
                angular.element('.map-google-embed iframe').css("pointer-events", "none");
            }, 4000);
        }
    });