'use strict';

/**
 * @ngdoc service
 * @name angulartestApp.config
 * @description
 * # config
 * Constant in the angulartestApp.
 */

var serverConfigURI = {
	idp: 'http://desolate-cove-7171.herokuapp.com/esteban',
	
};

angular.module('angulartestApp')
  .constant('config', {
		endpoints: {
                    users: serverConfigURI.idp + '/users',
		}
	});
