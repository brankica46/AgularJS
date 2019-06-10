(function () {
    angular.module("f1")
        .controller("teamsCtrl", teamsCtrlFunction);
    function teamsCtrlFunction($scope, $http, $routeParams, $log) {
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }
        $scope.season = localStorage.getItem("season");
        var succesFunction = function(response) {
            var data;
            data = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            $scope.teams = data;
            $log.info(data);
            // var season;
            // season = response.data.MRData.StandingsTable.StandingsLists[0].season;
            // $scope.season = season;
        };
        var failFunction = function(reason) {
            $log.warn(reason);
        };
        $http.get("http://ergast.com/api/f1/" + season + "/constructorStandings.json")
            .then(succesFunction, failFunction);
    }
}());
