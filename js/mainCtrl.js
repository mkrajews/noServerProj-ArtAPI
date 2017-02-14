angular.module("artApp").controller("mainCtrl", function($scope, mainSvc, $rootScope) {

    // $scope.arts= [];
    $scope.getArt = function() {
        console.log("getting art");
        mainSvc.getArtInfo().then(function(art) {
            console.log(art);
            $scope.arts = art.records[0];
        });
    };
    // $scope.getArt()
    console.log($rootScope.hotpics);
});
