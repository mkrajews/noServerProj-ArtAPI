angular.module('artApp').controller('hotController', function($scope, mainSvc, $rootScope) {
    $rootScope.hotpics = [];

    //get request for art in here, then set the response to a $scope variable, and then display the info without ng-repeat
    $scope.getArt = function() {
        // console.log("getting art");
        mainSvc.getArtInfo().then(function(art) {
            // console.log(art);
            $scope.arts = art.records[0];
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
