'use strict';

angular.module('app').controller('SettingsCtrl', function($scope, me, $window, $state){

    $scope.meCopy = angular.copy(me);

    $scope.submit = function(){
        $scope.meCopy.$update().then(function(){
            me.login = $scope.meCopy.login;
            me.email = $scope.meCopy.email;
        });
    };

    $scope.disconnect = function(){
        $window.localStorage.clear();
        $window.sessionStorage.clear();
        $state.go('auth');
    };

});