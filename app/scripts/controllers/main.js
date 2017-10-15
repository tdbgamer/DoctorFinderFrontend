'use strict';

/**
 * @ngdoc function
 * @name doctorFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doctorFinderApp
 */
angular.module('doctorFinderApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $http) {
    var vm = this;

    vm.name = "";
    vm.city = "";
    vm.zipcode = "";
    vm.state = "GA";
    vm.specialization = "";
    vm.showBarIcon = true;
    vm.doctorList = [];

    vm.toggleBarIcon = function () {
      vm.showBarIcon = !vm.showBarIcon;
    };


    vm.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    vm.onCancel = function () {
      vm.doctorList = [];
    }

    vm.onSubmit = function () {
      vm.result = {
        city: vm.city,
        zipcode: vm.zipcode,
        specialization: vm.specialization,
        name: vm.name
      }
      vm.getDoctors();
      return vm.result;
    };

    vm.getMarkerLocation = function (data) {
      var array = [];

      data.forEach(function (element, index) {
        array.push([
          element.name,
          element.addresses[0].long,
          element.addresses[0].lat,
          index
        ]);
      });

      return array;
    }


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

    vm.getDoctorList = function (json) {
      var array = [];
      for (var key in json) {
        if (json.hasOwnProperty(key)) {
          var item = json[key];
          array.push({
            n_id: item.id,
            rating: item.ratings,
            phone: item.addresses[0].phone_number,
            address: item.addresses[0].street_address,
            doctor: item.name
          });
        }
      }

      console.log(array);
      return array;
    }

    vm.getDoctors = function () {
      $http({
        method: 'GET',
        url: 'https://doctor-finder-backend.herokuapp.com/doctors',
        data: {}
      }).then(function successCallback(response) {
        console.log(response);
        var resultlLocation = vm.getMarkerLocation(response.data);
        vm.doctorList = vm.getDoctorList(response.data);
        vm.refreshGoogleMap(resultlLocation);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        console.log('Error doctors');
        console.log(response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });


    };

    vm.refreshGoogleMap = function (locations) {
      console.log("refresh Map");
      console.log(locations);
      // var latlng = new google.maps.LatLng(-24.397, 140.644);
      // google.maps.Marker.setPosition(latlng);

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: locations[2][1], lng: locations[2][2]}
      });

      // Create an array of alphabetical characters used to label the markers.
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
          position: {lat: location[1], lng: location[2]},
          label: labels[i % labels.length]
        });
      });

      // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      var locations = locations;
    };

    vm.renderRating = function(rating) {
      var result = '';
      var i;
      for (i = 0; i < rating.length; i++) {
        result += 'x';
      }
      return result;
    }


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
        vm.toggleBarIcon();
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
