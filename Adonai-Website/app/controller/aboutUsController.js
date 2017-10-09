/* Setup blank page controller */
angular.module('AdonaiApp').controller('aboutUsController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.$on('$viewContentLoaded', function () {
        Layout.init(false);        
    });
}]);
