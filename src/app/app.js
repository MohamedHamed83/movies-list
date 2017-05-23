import 'angular-route';
import 'angular-ui-bootstrap';
import '../services/omdb';
import '../services/movie-core';
import home from './home.html';
import homeController from './home.controller';
import resultsController from './results.controller';
import searchController from './search.controller';
import template from './results.html';
import movieResultDirect from './movieResult.directive';

const routing = ($routeProvider) => {
	$routeProvider
		.when('/', {
			template: home,
			controller: 'HomeController'
		})
		.when('/results', {
			template: template
		})
		.otherwise({
			redirectTo: '/'
		});
};
export default angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore'])
	.controller('ResultsController', resultsController)
	.controller('SearchController', searchController)
	.controller('HomeController', homeController)
	.directive('movieResult', movieResultDirect)
	.config(routing).name;