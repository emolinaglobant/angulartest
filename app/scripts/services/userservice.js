'use strict';

/**
 * @ngdoc service
 * @name angulartestApp.userService
 * @description
 * # userService
 * Service in the angulartestApp.
 */
angular.module('angulartestApp')
  .service('userService', function userService($rootScope, $q, $http, $window, config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

        return {
            get: function () {
                var d = $q.defer();

                $http.get(config.endpoints.users).then(function (response) {
                    d.resolve(response.data);
                });

                return d.promise;
            },

            set: function (user) {
                var d = $q.defer();
                debugger;
                $http({
                  method: 'post',
                  url: config.endpoints.users,
                 // data: user,
                  //headers: {'Content-Type': 'application/json'}
                })
                .success(function (data) {
                  
                    d.resolve(data);
                  
                })
                .error(function (data, status) {
                  
                  d.reject('Error ocurred');
                });

                return d.promise;
            }
        };
  });
