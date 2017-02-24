'use strict';

angular.
  module('boilerApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<phone-list></phone-list>'
        }).
        otherwise('/');
    }
  ]);
