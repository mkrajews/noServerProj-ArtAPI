angular.module("artApp").controller("storedArtCtrl", function($scope){

  $scope.saved = JSON.parse(localStorage.getItem("hotpics"));
  console.log("from local storage", $scope.saved);

});
