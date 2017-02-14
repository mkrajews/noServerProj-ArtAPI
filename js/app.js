angular.module("artApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/main.html',
                controller: 'mainCtrl'
            })

        .state('hotOrNot', {
            url: '/hotOrNot',
            templateUrl: './views/hotOrNot.html',
            controller: 'hotController'
        })

        .state('Hot', {
            url: '/hot',
            templateUrl: './views/hottest.html',
            controller: 'storedArtCtrl'
        });
    });
