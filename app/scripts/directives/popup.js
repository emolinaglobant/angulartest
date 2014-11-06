'use strict';

/**
 * @ngdoc directive
 * @name angulartestApp.directive:popUp
 * @description
 * # popUp
 */
angular.module('angulartestApp')
  .directive('popUp', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the popUp directive');
      }
    };
  });
