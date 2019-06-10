(function () {
    var app = angular.module("num",[]);
    app.filter("toNumber", toNumberFunction);
    function toNumberFunction() {
        return function (input) {
            return parseInt(input, 10);
        }
    }
}());
