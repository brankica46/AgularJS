(function () {
    angular.module("f1")
        .controller("racesCtrl", racesCtrlFunction);
    function racesCtrlFunction($scope, $http, $routeParams, $log) {
        $scope.season = localStorage.getItem("season");
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }
        $http({
            url: "http://ergast.com/api/f1/" + season + "/results/1.json",
            method: 'get'
        }).
        then(function (response) {
            $scope.races = response.data.MRData.RaceTable.Races;
            $scope.season = response.data.MRData.RaceTable.season;
        });
    }
}());
