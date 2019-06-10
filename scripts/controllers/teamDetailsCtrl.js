(function () {
    angular.module("f1")
        .controller("teamDetailsCtrl", teamDetailsFunction);
    function teamDetailsFunction($scope, $http, $routeParams, $log) {
        $scope.colors = {
            "0": "#ffccff",
            "1": "yellow",
            "2": "gray",
            "3": "orange",
            "4": "lightgreen",
            "5": "lightblue",
            "6": "powderblue",
            "7": "lightskyblue",
            "8": "skyblue",
            "9": "steelblue",
            "10": "cadetblue",
            "11": "darkgray",
            "12": "darkgray",
            "13": "darkgray",
            "14": "darkgray",
            "15": "darkgray",
            "16": "darkgray",
            "17": "darkgray",
            "18": "darkgray",
            "19": "darkgray",
            "20": "darkgray",
            "21": "darkgray",
            "22": "darkgray",
            "23": "darkgray",
            "24": "darkgray",
            "25": "darkgray"
        };
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }
        $scope.season = localStorage.getItem("season");
        var constructorId = $routeParams.id;
        var succesFunction = function(response) {
            var data;
            data = response.data.MRData.RaceTable.Races;
            $scope.teams = data;
            $log.info($scope.teams[0].Results);
            var season;
            season = response.data.MRData.RaceTable.season;
            $scope.season = season;
            var driver1;
            driver1 = response.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName;
            $scope.driver1 = driver1;
            var driver2;
            driver2 = response.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName;
            $scope.driver2 = driver2;
            var teamName;
            teamName = response.data.MRData.RaceTable.Races[0].Results[0].Constructor.name;
            $scope.teamName = teamName;
            teamLogo = response.data.MRData.RaceTable.constructorId;
            $scope.teamLogo = teamLogo;
            teamLogo = response.data.MRData.RaceTable.constructorId;
            $scope.teamLogo = teamLogo;
            country = response.data.MRData.RaceTable.Races[0].Results[0].Constructor.nationality;
            $scope.country = country;
            position = response.data.MRData.RaceTable.Races[0].Results[0].position;
            $scope.position = position;
            points = response.data.MRData.RaceTable.Races[0].Results[0].points;
            $scope.points = points;
        };
        var failFunction = function(reason) {
            $log.warn(reason);
        };
        $http.get("http://ergast.com/api/f1/" + season + "/constructors/" + constructorId +"/results.json")
            .then(succesFunction, failFunction);
    }
}());
