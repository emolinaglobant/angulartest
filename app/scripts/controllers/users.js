'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
  .controller('UsersCtrl', function ($scope,userService) {
    
    userService.get().then(function(data){
        //$scope.users=data.users;
         $scope.users = [{name:'Esteban MOlina',age:'45'},{name:'Esteban MOlina',age:'45'},{name:'Esteban MOlina',age:'45'}];
    });
    
    $scope.addUser = function (){
        
        var user = {name:$scope.name , age : $scope.age};
        userService.set(user).then(function(result){
            console.log(result);
        });
    };
    
    
  });
