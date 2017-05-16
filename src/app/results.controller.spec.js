import './app';
import '../services/omdb';
import './results.controller';
describe('results controller', () => {
    var results = {
        'Search': [
            { Title: 'Star Wars: Episode IV - A new Hope', Year: '1977', imdbID: 'tt0076759', Type: 'movie' },
            { Title: 'Star Wars: Episode V - The Empire Strikes Back', Year: '1980', imdbID: 'tt0080684', Type: 'movie' },
            { Title: 'Star Wars: Episode VI - Return of the Jedi', Year: '1983', imdbID: 'tt0086190', Type: 'movie' }
        ]
    };
    var $controller;
    var $scope;
    var $q;
    var $rootScope;
    var omdbApi;
    var $location;

    beforeEach(angular.mock.module('omdb'));
    beforeEach(angular.mock.module('movieApp'));
    beforeEach(inject(function (_$controller_,_$location_, _$q_, _$rootScope_, _omdbApi_) {
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        omdbApi = _omdbApi_;
        $scope = {};
        $location = _$location_;
    }));
    it('should load search results', () => {
        spyOn(omdbApi, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(results);
            return deferred.promise;
        });
        $location.search('q', 'star wars');
        $controller('ResultsController', { $scope: $scope });
        $rootScope.$apply();
        expect(omdbApi.search).toHaveBeenCalledWith('star wars');
        expect($scope.results[0].Title).toBe(results.Search[0].Title);
        expect($scope.results[1].Title).toBe(results.Search[1].Title);
        expect($scope.results[2].Title).toBe(results.Search[2].Title);
    });
    it('should set result status to error', () => {
        spyOn(omdbApi, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.reject();
            return deferred.promise;
        });
        $location.search('q', 'star wars');
        $controller('ResultsController', { $scope: $scope });
        $rootScope.$apply();
        expect($scope.errorMessage).toBe('Something went wrong!');
    });
});