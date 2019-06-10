(function () {
    angular.module("f1")
        .controller('driversCtrl', driversCtrlFunction);

    function driversCtrlFunction($scope, $http, $routeParams) {
        $scope.season = localStorage.getItem("season");
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }
        $http({
            url: "http://ergast.com/api/f1/" + season + "/driverStandings.json",
            method: 'get'
        }).
        then(function (response) {
            $scope.drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    }
}());
