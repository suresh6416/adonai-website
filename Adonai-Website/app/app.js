var AdonaiApp = angular.module('AdonaiApp', ['ui.router', 'oc.lazyLoad']);

AdonaiApp.controller('HomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.init(); // init header        
    });
}]);

/* Setup Rounting For All Pages */
AdonaiApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/welcome/home");

    $stateProvider        
        .state('welcome', {
            abstract: true,
            url: '/welcome',
            templateUrl: 'app/views/layout/welcome.html'
        })
        .state('welcome.home', {
            url: "/home",
            templateUrl: "app/views/landing/home.html",
            data: { pageTitle: 'Home' },
            controller: "HomeController"
        })
        .state('welcome.aboutUs', {
            url: "/aboutUs",
            templateUrl: "app/views/aboutUs/aboutUs.html",
            data: { pageTitle: 'AboutUs' },
            controller: "aboutUsController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'app/controller/aboutUsController.js'
                        ]
                    });
                }]
            }
        })
}]);
