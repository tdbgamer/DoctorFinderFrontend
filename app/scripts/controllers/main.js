'use strict';

/**
 * @ngdoc function
 * @name doctorFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doctorFinderApp
 */
angular.module('doctorFinderApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav) {
    var vm = this;

    vm.occupations = ['psy', 'deu', 'phys'];

    vm.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    vm.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    //--------------
    vm.items = ['1', '2', '3'];
    vm.toggle1 = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    vm.exists1 = function (item, list) {
      return list.indexOf(item) > -1;
    };

    vm.map = {center: {latitude: 45, longitude: -73}, zoom: 8};


    // vm.isIndeterminate = function() {
    //   return (vm.selected.length !== 0 &&
    //     vm.selected.length !== vm.items.length);
    // };
    //
    // vm.isChecked = function() {
    //   return vm.selected.length === vm.items.length;
    // };
    //
    // vm.toggleAll = function() {
    //   if (vm.selected.length === vm.items.length) {
    //     vm.selected = [];
    //   } else if (vm.selected.length === 0 || vm.selected.length > 0) {
    //     vm.selected = vm.items.slice(0);
    //   }
    // };

    //------------


    vm.toggleLeft = buildToggler('left');
    vm.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function () {
        $mdSidenav(componentId).toggle();
      };
    }

  });

// angular.module('ngPortalApp')
//   .directive('googleMap', function () {
//     return {
//       template: '<iframe width="100%" height="350" frameborder="0" style="border:0"></iframe>',
//       restrict: 'E',
//       scope: {
//         pbcode: '='
//       },
//       link: function postLink(scope, element) {
//         var mapFrame = element.find("iframe");
//         if (scope.pbcode) {
//           mapFrame.attr('src', "https://www.google.com/maps/embed?pb=" + scope.pbcode);
//         }
//         else {
//           mapFrame.attr('src', '');
//         }
//       }
//     };
//
//
//
//
//   });
