'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('MainCtrl', function ($scope,$filter) {
    $scope.currencies = [
            {
              "id": "UYU",
              "name": "Uruguayan Peso",
              "value": 24.39
            },
            {
              "id": "ARS",
              "name": "Argentine Peso",
              "value": 8.48
            },
            {
              "id": "USD",
              "name": "US Dollar",
              "value": 1
            }
        ];
    $scope.currencyFromVal = 1;
    $scope.currencyToVal = 1;
    $scope.currencyFromObject = null;
    $scope.currencyToObject = null;
    
    $scope.convert = function(type){
        switch(type){
             case 1 :
                 $scope.currencyFromObject = $filter('filter')($scope.currencies,{id:$scope.currencyFrom})[0];
                $scope.currencyToVal = $scope.currencyFromObject.value*$scope.currencyToVal;
                break;
            case 2 :
                $scope.currencyToObject = $filter('filter')($scope.currencies,{id:$scope.currencyTo})[0];
                  $scope.currencyFromVal = $scope.currencyToObject.value*$scope.currencyFromVal;
                
            break;
           
        }
             
    };
        
  });
