var AdonaiApp = angular.module('AdonaiApp', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);

AdonaiApp.controller('HomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.$on('$includeContentLoaded', function () {
        $scope.myInterval = 3000;
        $scope.slides = [
          {
              image: 'assets/frontend/onepage/img/silder/slide1.jpg'
          },
          {
              image: 'assets/frontend/onepage/img/silder/Slide2_bg.jpg'
          },
          {
              image: 'assets/frontend/onepage/img/silder/slide1.jpg'
          }
        ];
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
        .state('welcome.aboutTraining', {
            url: "/aboutTraining",
            templateUrl: "app/views/aboutUs/aboutTraining.html",
            data: { pageTitle: 'About Us' }
        })
        .state('welcome.aboutSoftwareDev', {
            url: "/aboutSoftwareDev",
            templateUrl: "app/views/aboutUs/aboutSoftwareDev.html",
            data: { pageTitle: 'About Us' }
        })
        .state('welcome.aboutRecruitAndEmp', {
            url: "/aboutRecruitAndEmp",
            templateUrl: "app/views/aboutUs/aboutRecruitAndEmp.html",
            data: { pageTitle: 'About Us' }
        })
        .state('welcome.trainingService', {
            url: "/trainingService",
            templateUrl: "app/views/services/trainingService.html",
            data: { pageTitle: 'Training' }
        })
        .state('welcome.softwareDevService', {
            url: "/softwareDevService",
            templateUrl: "app/views/services/softwareDevService.html",
            data: { pageTitle: 'Software Developement' }
        })
        .state('welcome.recruitService', {
            url: "/recruitService",
            templateUrl: "app/views/services/recruitService.html",
            data: { pageTitle: 'Recruitment and Employment' }
        })
}]);
