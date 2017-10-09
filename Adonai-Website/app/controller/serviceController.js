angular.module('AdonaiApp').controller('serviceController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.$on('$viewContentLoaded', function () {
        Layout.init(false);
    });
}]);
