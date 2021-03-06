const resultsController = function ($scope, $location, omdbApi) {
    var query = $location.search().q;
    omdbApi.search(query)
        .then(function (data) {
            $scope.results = data.Search;
        })
        .catch(function () {
            $scope.errorMessage = 'Something went wrong!';
        });
};

export default resultsController;
