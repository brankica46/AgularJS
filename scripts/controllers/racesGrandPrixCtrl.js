(function () {
    angular.module("f1")
        .controller("racesGrandPrixCtrl", racesGrandPrixCtrl);

    function racesGrandPrixCtrl($scope, $http, $routeParams, $log) {
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
        var round = $routeParams.round;
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }

        $scope.season = localStorage.getItem("season");

        $http({
            url: "http://ergast.com/api/f1/" + season + "/" + round + "/qualifying.json",
            params: {position:$routeParams.position},
            method: 'get'
        })
         .then(function (response) {
            var raceTable = response.data.MRData.RaceTable;
            var test = response.data.MRData.RaceTable.Races[0].QualifyingResults;

            $scope.racesGP = response.data.MRData.RaceTable.Races[0].QualifyingResults;

            $scope.raceName = raceTable.Races[0].raceName;
            $scope.country = raceTable.Races[0].Circuit.Location.country;
            $scope.location = raceTable.Races[0].Circuit.Location.locality;
            $scope.date = raceTable.Races[0].date;
            $scope.flagNat = raceTable.Races[0].Circuit.Location.country;

            $scope.url = raceTable.Races[0].url;

            

            $scope.qualifications = response.data.MRData.RaceTable.Races[0].QualifyingResults;

            var quaPool = [];
            var quaRes = $scope.qualifications;
            var i = 0;

            for (i; i < quaRes.length; i++) {
                var q = quaRes[i];
                if (q.Q3) {
                    quaPool.push(q.Q3);
                }
                else if (q.Q2) {
                    quaPool.push(q.Q2);
                }
                else if (q.Q1) {
                    quaPool.push(q.Q1);
                }
                else {
                    quaPool.push("N/Q")
                }
            }
            $scope.quaPool = quaPool;

        });


        $http({
            url: "http://ergast.com/api/f1/" + season + "/" + round + "/results.json",
            params: {position:$routeParams.position},
            method: 'get'
        })
         .then(function (response) {
            
            var raceT = response.data.MRData.RaceTable;

            $scope.racesRes = response.data.MRData.RaceTable.Races[0].Results;

            $scope.position = raceT.Races[0].Results.position;           
        });
    }
}());
