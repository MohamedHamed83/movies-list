import './search.controller';

describe("Search Controller", () => {
    var $this;
    var $location;
    var $controller;

    beforeEach(angular.mock.module('movieApp'));

    beforeEach(inject((_$controller_, _$location_) => {
        $controller = _$controller_;
        $location = _$location_;
    }));

    it('should redirect to the query results page after nont-empty query', () => {
        $this = $controller('SearchController', { $location: $location }, { query: 'star wars' });
        $this.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    })
    it("should not redirect to query results for empty query", function () {
        $this = $controller('SearchController', { $location: $location }, { query: '' });
        $this.search();
        expect($location.url()).toBe('');
    })
})