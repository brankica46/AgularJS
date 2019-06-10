(function () {
    var testAngularJS = angular
        .module("f1", ["ngRoute", "num"]);
    testAngularJS
        .config(routeCtrlFunction);

    function routeCtrlFunction($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/driversView.html",
                controller: "driversCtrl"
            })
            .when("/:season", {
                templateUrl: "templates/driversView.html",
                controller: "driversCtrl"
            })
            .when("/teams", {
                templateUrl: "templates/teamsView.html",
                controller: "teamsCtrl"
            })
            .when("/:season/teams", {
                templateUrl: "templates/teamsView.html",
                controller: "teamsCtrl"
            })
            .when("/teams/:id", {
                templateUrl: "templates/teamDetailsView.html",
                controller: "teamDetailsCtrl"
            })
            .when("/:seasons/teams/:id", {
                templateUrl: "templates/teamDetailsView.html",
                controller: "teamDetailsCtrl"
            })
            .when("/races", {
                templateUrl: "templates/racesView.html",
                controller: "racesCtrl"
            })
            .when("/:seasons/races", {
                templateUrl: "templates/racesView.html",
                controller: "racesCtrl"
            })
            .when("/drivers/:id", {
                templateUrl: "templates/singleDriverView.html",
                controller: "driverDetailsCtrl"
            })
            .when("/:season/drivers/:id", {
                templateUrl: "templates/singleDriverView.html",
                controller: "driverDetailsCtrl"
            })
            .when("/races/:round", {
                templateUrl: "templates/racesGrandPrixView.html",
                controller: "racesGrandPrixCtrl"
            })
            .when("/:season/races/:round", {
                templateUrl: "templates/racesGrandPrixView.html",
                controller: "racesGrandPrixCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    }

}());
