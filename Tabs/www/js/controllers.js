angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $state) {
    console.log('ok');
    $http.get('https://thamapp.herokuapp.com/api/orders')
        .then(function(res) {
            console.log(res);
            $scope.myDataArray = res.data;
        }, function(error) {
            console.log(error);
        });
    $scope.btngo = function(data) {
        console.log(data);
        $state.go("tab.order", { data: JSON.stringify(data) });

    }
})

.controller('OrderCtrl', function($scope, $stateParams) {
    $scope.data = JSON.parse($stateParams.data);
    if ($scope.data.discount) {
        $scope.data.discount = $scope.data.discount;
    } else {
        $scope.data.discount = 0;
    }
    $scope.address = $scope.data.shipping.address + ' ' + $scope.data.shipping.subdistrict + ' ' + $scope.data.shipping.district + ' ' + $scope.data.shipping.province + ' ' + $scope.data.shipping.postcode;
    console.log($scope.data);
    console.log($scope.address);
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});