import './app';
describe('testing results directive', () => {
    var result = {
        'Title': 'Star Wars: Episode IV - A New Hope',
        'Year': '1977',
        'Rated': 'PG',
        'Released': '25 May 1977',
        'Runtime': '121 min',
        'Genre': 'Action, Adventure, Fantasy',
        'Director': 'George Lucas',
        'Writer': 'George Lucas',
        'Actors': 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        'Plot': 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
        'Language': 'English', 'Country': 'USA',
        'Awards': 'Won 6 Oscars. Another 50 wins & 28 nominations.',
        'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '8.7/10' },
        {
            'Source': 'Rotten Tomatoes',
            'Value': '93%'
        },
        {
            'Source': 'Metacritic',
            'Value': '92/100'
        }],
        'Metascore': '92',
        'imdbRating': '8.7',
        'imdbVotes': '976,992',
        'imdbID': 'tt0076759',
        'Type': 'movie',
        'DVD': 'N/A',
        'BoxOffice': 'N/A',
        'Production': '20th Century Fox',
        'Website': 'http://www.starwars.com/episode-iv/',
        'Response': 'True'
    };
    var expectedHtml = '<div class="ng-binding">Star Wars: Episode IV - A New Hope</div>';
    var $compile;
    var $rootScope;
    beforeEach(angular.mock.module('movieApp'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should output the right html', () => {
        $rootScope.result = result;
        var element = $compile('<movie-result result="result"></movie-result')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toBe(expectedHtml);
    });
});