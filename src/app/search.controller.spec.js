import './app';
import './search.controller';

describe('Search Controller', () => {
    var $this;
    var $location;
    var $controller;
var $timeout;
    beforeEach(angular.mock.module('movieApp'));

    beforeEach(inject((_$controller_, _$location_,_$timeout_) => {
        $controller = _$controller_;
        $location = _$location_;
        $timeout=_$timeout_;
    }));

    it('should redirect to the query results page after nont-empty query', () => {
        $this = $controller('SearchController', { $location: $location, $timeout: $timeout }, { query: 'star wars' });
        $this.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });
    it('should not redirect to query results for empty query', function () {
        $this = $controller('SearchController', { $location: $location, $timeout:$timeout }, { query: '' });
        $this.search();
        expect($location.url()).toBe('');
    });

});