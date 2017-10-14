'use strict';

/**
 * @ngdoc function
 * @name doctorFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doctorFinderApp
 */
angular.module('doctorFinderApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.myDate = '';

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('Picked Date');

    vm.showDate = function () {
      console.log('Picked Date');
      console.log(vm.myDate);
    };


  });
