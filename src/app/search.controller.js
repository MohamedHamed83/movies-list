
const searchController = function ($location) {
    var $that = this;
    $that.search = function () {
        if ($that.query) {
         				$location.path('/results').search('q', $that.query);
        }
    };
};
export default searchController;
