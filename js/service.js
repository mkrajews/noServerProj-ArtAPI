angular.module("artApp").service("mainSvc", function($http) {

    var baseUrl = "http://api.harvardartmuseums.org";

    this.getArtInfo = function() {
        // console.log("getArtInfo hit");
        return $http({

            method: "GET",
            url: "http://api.harvardartmuseums.org/object?apikey=bd9c2c20-a116-11e6-ac56-6f22b9ea04b3&size=1&sort=random&hasimage=1&classification=Paintings"
        }).then(function(response) {
            console.log(response);
            // console.log("hit");
            return response.data;
        });
    };
});

// modified api url for specific needs
