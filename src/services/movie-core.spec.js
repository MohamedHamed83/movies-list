import './movie-core';
describe('MoviCore', () => {
    var PopularMovies;
    var $httpBackend;
    beforeEach(angular.mock.module('movieCore'));

    beforeEach(angular.mock.inject((_PopularMovies_, _$httpBackend_) => {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));
    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    })
    it("should create popular movie", () => {
        // var expectedData = function (data) {     return angular.fromJson(data); }
        var expectedData = {
            "movieId": "tt0076759",
            "description": "Great movie!"
        };
        $httpBackend
            .expectPOST(/./, expectedData)
            .respond(201);
        var movies = new PopularMovies({movieId: 'tt0076759', description: 'Great movie!'});
        movies.$save();
        expect($httpBackend.flush)
            .not
            .toThrow();
    })
    it("should get popular movie by id", () => {
        $httpBackend
            .expectGET('popular/tt0076759')
            .respond(200);
        PopularMovies.get({movieId: 'tt0076759'});
        expect($httpBackend.flush)
            .not
            .toThrow();
    })
    it("should update popular movie", () => {
        $httpBackend
            .expectPUT('popular')
            .respond(200);
        var movies = new PopularMovies({"movieId": "tt0076759", "description": "Great movie!"})
        movies.$update();
        expect($httpBackend.flush)
            .not
            .toThrow();
    })
    it("should authenticate requests", () => {
        var movies = new PopularMovies({movieId: 'tt0076759', description: 'Great movie!'});
        // var expectedHeader = (header) => {     dump(angular.mock.dump(header));
        // return true; } var expectedHeader = {     "authToken": "tt1",     "Accept":
        // "application/json, text/plain, */*" }
        var expectedHeader = (headers) => {
            return headers.authToken === 'tt1';
        }
        var matchAny = /.*/;

        $httpBackend
            .whenGET(matchAny, expectedHeader)
            .respond(200);
        $httpBackend
            .expectPOST(matchAny, matchAny, expectedHeader)
            .respond(200);
        $httpBackend
            .expectPUT(matchAny, matchAny, expectedHeader)
            .respond(200);
        $httpBackend
            .expectDELETE(matchAny, expectedHeader)
            .respond(200);

        PopularMovies.query();
        PopularMovies.get({movieId: 'tt0076759'});
        new PopularMovies(movies).$save();
        new PopularMovies(movies).$update();
        new PopularMovies(movies).$remove();
        $httpBackend.flush(1);
        $httpBackend.flush(1);
        $httpBackend.flush(1);
        $httpBackend.flush(1);
        $httpBackend.flush(1);
    })
})