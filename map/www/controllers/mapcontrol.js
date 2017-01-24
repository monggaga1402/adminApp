angular.module('starter')

.controller('mapcontrol', function($scope, $cordovaGeolocation) {
    var myLatlng;
    var locations = [
        [13.9351084, 100.715099],
        [13.9341505, 100.7141161],
        [13.9347128, 100.7163853]
    ]
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(13.9351084, 100.715099), //เปลี่ยนตามต้องการ
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map
        });
    }

    $scope.map = map;






});