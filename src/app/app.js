import 'angular-route';
import 'angular-ui-bootstrap';
import '../services/omdb';
import resultsController from './results.controller';
import searchController from './search.controller';
import template from './results.html';

const routing = ($routeProvider) => {
	$routeProvider
  		.when('/results', {
    		template : template
  		})
  		.otherwise({
    		redirectTo: '/'
  		});
};
export default angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb'])
 .controller('ResultsController', resultsController)
.controller('SearchController',searchController)
.config(routing).name;