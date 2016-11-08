angular.module('artApp').controller('hotController', function($scope, mainSvc, $rootScope) {
    $rootScope.hotpics = [];

    $scope.getArt = function() {
        // console.log("getting art");
        mainSvc.getArtInfo().then(function(art) {
            // console.log("hit 1");
            console.log(art.records[0].images.length);
            if (art.records[0].images.length < 1) {
              // console.log("hit 2");
                $scope.getArt();
            } else {
              // console.log("hit 3");
                $scope.arts = art.records[0];
            }

        });
    };

    $scope.pushHot = function(arts) {
        // console.log(arts);
        $rootScope.hotpics.push(arts);
        console.log($rootScope.hotpics);
        localStorage.setItem("hotpics", JSON.stringify($rootScope.hotpics));
        var storedArt = localStorage.getItem("hotpics");
        JSON.parse(storedArt);
        console.log(storedArt);
        $scope.getArt();
    };
    // var storedArt = JSON.parse("hotpics");

});
