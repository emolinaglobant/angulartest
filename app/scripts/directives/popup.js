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
      templateUrl: 'views/pop-up.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the popUp directive');
       // element.find('h3');
        
        //scope.popup = scope.$parent.popup;
    
       
      }
    };
  });
