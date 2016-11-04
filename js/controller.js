angular.module("artApp").controller("mainCtrl", function($scope, mainSvc){

// $scope.arts= [];
$scope.getArt = function(){
  console.log("hi again");
  mainSvc.getArtInfo().then(function(art){
    console.log(art);
    // $scope.arts.push(art);
    $scope.arts = art.records;
    });
  };
  // $scope.getArt()
});
