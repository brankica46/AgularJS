(function () {
    angular.module("f1")
        .controller('driverDetailsCtrl', driverDetailsCtrlFunction);
    function driverDetailsCtrlFunction($scope, $http, $routeParams) {
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
        var driverId;
        driverId = $routeParams.id;
        var season;
        season = "2018";
        if($routeParams.season) {
            season = $routeParams.season;
        }
        $scope.season = localStorage.getItem("season");
        $http({
            url: "https://ergast.com/api/f1/" + season + "/drivers/" + driverId + "/results.json",
            method: 'get'
        })
            .then(function (response) {
                $scope.races = response.data.MRData.RaceTable.Races;
            });

        $http({
            url: "https://ergast.com/api/f1/" + season + "/drivers/" + driverId + ".json",
            method: 'get'
        })
            .then(function (response) {
                $scope.firstName = response.data.MRData.DriverTable.Drivers[0].givenName;
                $scope.lastName = response.data.MRData.DriverTable.Drivers[0].familyName;
                $scope.fullName = $scope.firstName + " " + $scope.lastName;
                $scope.driverId = response.data.MRData.DriverTable.Drivers[0].driverId;
                $scope.nationality = response.data.MRData.DriverTable.Drivers[0].nationality;
                $scope.dob = response.data.MRData.DriverTable.Drivers[0].dateOfBirth;
                $scope.bioUrl = response.data.MRData.DriverTable.Drivers[0].url;
            });

        $http({
            url: "https://ergast.com/api/f1/" + season + "/drivers/" + driverId + "/constructors.json",
            method: 'get'
        })
            .then(function (response) {
                $scope.team = response.data.MRData.ConstructorTable.Constructors[0].name;
            });

    }
}());
