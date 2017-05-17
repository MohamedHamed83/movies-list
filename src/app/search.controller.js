
const searchController = function ($location, $timeout) {
    var $that = this;
    var timeout;
    $that.keyup = function () {
        timeout = $timeout($that.search(), 1000);
    };

    $that.keydown = function () {
        $timeout.cancel(timeout);
    };
    $that.search = function () {
        $timeout.cancel(timeout);
        if ($that.query) {
            $location.path('/results').search('q', $that.query);
        }
    };
};
export default searchController;
