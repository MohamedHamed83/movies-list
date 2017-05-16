
const searchController = function ($location, $timeout) {
    var $that = this;
    $that.keyup = function () {
        $timeout(function () {
            $scope.search();
        }, 1000);
    };
    $that.search = function () {
        if ($that.query) {
            $location.path('/results').search('q', $that.query);
        }
    };
};
export default searchController;
