(function () {
    angular.module("f1")
        .controller("seasonCtrl", seasonCtrlFunction);
    function seasonCtrlFunction($scope, $location, $log) {
        localStorage.setItem("season", "2018");
        $scope.seasonList = ["2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];
        $scope.updateState = function() {
            localStorage.setItem("season", this.season);
            window.location.href = "#!/" + this.season;
            console.log($location.$$path);
        };
    }
})();
