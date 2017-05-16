import './omdb';

describe('omdb service', () => {
    var movieDataById = {
        Title: 'Star Wars: Episode IV - A New Hope',
        Year: '1977',
        Rated: 'PG',
        Released: '25 May 1977',
        Runtime: '121 min',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'George Lucas',
        Writer: 'George Lucas',
        Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        Plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
        Language: 'English',
        Country: 'USA',
        Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        Ratings: [
            {
                Source: 'Internet Movie Database',
                Value: '8.7/10'
            },
            {
                Source: 'Rotten Tomatoes',
                Value: '93%'
            },
            {
                Source: 'Metacritic',
                Value: '92/100'
            }
        ],
        Metascore: '92',
        imdbRating: '8.7',
        imdbVotes: '970,649',
        imdbID: 'tt0076759',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: '20th Century Fox',
        Website: 'http://www.starwars.com/episode-iv/',
        Response: 'True'
    };
    var movieData = {
        Search: [
            {
                Title: 'Star Wars: Episode IV - A New Hope',
                Year: '1977',
                imdbID: 'tt0076759',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Episode V - The Empire Strikes Back',
                Year: '1980',
                imdbID: 'tt0080684',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Episode VI - Return of the Jedi',
                Year: '1983',
                imdbID: 'tt0086190',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: The Force Awakens',
                Year: '2015',
                imdbID: 'tt2488496',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Episode I - The Phantom Menace',
                Year: '1999',
                imdbID: 'tt0120915',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Episode III - Revenge of the Sith',
                Year: '2005',
                imdbID: 'tt0121766',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Episode II - Attack of the Clones',
                Year: '2002',
                imdbID: 'tt0121765',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDRkYzA4OGYtOTBjYy00YzFiLThhYmYtMWUzMDBmMmZkM2M3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: The Clone Wars',
                Year: '2008',
                imdbID: 'tt1185834',
                Type: 'movie',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: The Clone Wars',
                Year: '2008–2015',
                imdbID: 'tt0458290',
                Type: 'series',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGNhYmVlNDAtYmYyMi00ZjI0LTg2MDEtNzhkMTdlMmRhYTI5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
            },
            {
                Title: 'Star Wars: Clone Wars',
                Year: '2003–2005',
                imdbID: 'tt0361243',
                Type: 'series',
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTQ4MDY0MDAtZGJhNi00YWU3LThhMjgtMzVkZWIyZDU4M2Y1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
            }
        ],
        totalResults: '395',
        Response: 'True'
    };
    var omdbApi = {};
    var $httpBackend;

    beforeEach(() => {
        angular.mock.module('omdb');
        angular.mock.inject((_omdbApi_, _$httpBackend_) => {
            omdbApi = _omdbApi_;
            $httpBackend = _$httpBackend_;
        });
    });

    it('sholud handle error', () => {
        var response;
        $httpBackend.expect('GET', 'http://www.omdbapi.com/?i=tt0076759').respond(500);
        function successCallback(data) {
            response = data;
        }
        function errorCallback() {
            response = 'ERROR!';
        }
        omdbApi.find('tt0076759').then(successCallback).catch(errorCallback);

        $httpBackend.flush();
        expect(response).toEqual('ERROR!');
    });
    it('should return search movie data', () => {
        var response;
        $httpBackend.when('GET', 'http://www.omdbapi.com/?s=star%20wars').respond(200, movieData);
        omdbApi.search('star wars').then((data) => {
            response = data;
        });
        $httpBackend.flush();
        expect(response).toEqual(movieData);
    });
    it('should return movie data by id', () => {
        var response;
        $httpBackend.when('GET', 'http://www.omdbapi.com/?i=tt0076759').respond(200, movieDataById);

        omdbApi.find('tt0076759').then((data) => {
            response = data;
        });

        $httpBackend.flush();
        expect(response).toEqual(movieDataById);
    });
});