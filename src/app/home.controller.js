const homeController = function($scope, $interval, omdbApi, PopularMovies) {
		var results = [];
		var idx = 0;
		var findMovie = function(id) {	
			omdbApi.find(id)
        	.then(function(data) {
          		$scope.result = data;
        	});
        };

	
        // Get PopularMovies list
    	var data = ['tt0076759', 'tt0080684', 'tt0086190'];
        //PopularMovies.get()
      	//	.then(function(data) {
        		results = data;
        		findMovie(results[0]);
        		$interval(function() {
        			++idx;
          			findMovie(results[idx % results.length]);
        		}, 5000);

     	//});
	};

    export default homeController;