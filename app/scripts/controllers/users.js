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
     $scope.users = [{name:'Esteban MOlina',age:'45'},{name:'Esteban MOlina',age:'45'},{name:'Esteban MOlina',age:'45'}];
     $scope.show = false;
      /*userService.get().then(function(data){
         $scope.users=data.users;
        
    });*/
    $scope.addUser = function (){
        $scope.users.push({name:$scope.name , age : $scope.age});
        return;
        userService.set(user).then(function(result){
            console.log(result);
        });
    };
    $scope.removeUser = function (index) {
      $scope.users.splice(index, 1);
    };
    $scope.popup = function (index) {
      $scope.show = !$scope.show;
    };
 });
