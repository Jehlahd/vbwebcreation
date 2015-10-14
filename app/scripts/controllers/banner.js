'use strict';

/**
 * @ngdoc function
 * @name vbwebcreationApp.controller:BannerCtrl
 * @description
 * # BannerCtrl
 * Controller of the vbwebcreationApp
 */
angular.module('vbwebcreationApp')
    .controller('BannerCtrl', function () {
        angular.element(".banner-image-block").imagesLoaded(function () {
            angular.element(".banner-img").addClass("banner-img-animate");
        });
    });