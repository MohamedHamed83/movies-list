import './omdb';

describe('omdb service', () => {
    var movieData = {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two" +
                " droids to save the galaxy from the Empire's world-destroying battle-station, wh" +
                "ile also attempting to rescue Princess Leia from the evil Darth Vader.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWE" +
                "wNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            }, {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.7",
        "imdbVotes": "970,649",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "N/A",
        "Production": "20th Century Fox",
        "Website": "http://www.starwars.com/episode-iv/",
        "Response": "True"
    };
    var movieDataById = {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two" +
                " droids to save the galaxy from the Empire's world-destroying battle-station, wh" +
                "ile also attempting to rescue Princess Leia from the evil Darth Vader.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWE" +
                "wNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            }, {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.7",
        "imdbVotes": "970,649",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "N/A",
        "Production": "20th Century Fox",
        "Website": "http://www.starwars.com/episode-iv/",
        "Response": "True"
    };
    var omdbApi = {};
    var $httpBackend;

    beforeEach(() => {

        angular
            .mock
            .module('omdb');

        angular
            .mock
            .inject((_omdbApi_, _$httpBackend_) => {
                omdbApi = _omdbApi_;
                $httpBackend = _$httpBackend_;
            });
    })

    it("sholud handle error", () => {
        var response;

        $httpBackend
            .expect('GET', 'http://www.omdbapi.com/?i=tt0076759')
            .respond(500);
        function successCallback(data) {
            response = data;
        }

        function errorCallback() {
            response = 'ERROR!';
        }

        omdbApi
            .find('tt0076759')
            .then(successCallback)
            .catch(errorCallback);

        $httpBackend.flush();
        expect(response).toEqual('ERROR!');
    })
    it("should return search movie data", () => {
        var response;

        $httpBackend
            .when('GET', 'http://www.omdbapi.com/?t=star%20wars')
            .respond(200, movieData);

        omdbApi
            .search('star wars')
            .then((data) => {
                response = data;
            });

        $httpBackend.flush();
        expect(response).toEqual(movieData);
    });
    it('should return movie data by id', () => {
        var response;

        $httpBackend
            .when('GET', 'http://www.omdbapi.com/?i=tt0076759')
            .respond(200, movieData);

        omdbApi
            .find('tt0076759')
            .then((data) => {
                response = data;
            });

        $httpBackend.flush();
        expect(response).toEqual(movieDataById)
    })
})