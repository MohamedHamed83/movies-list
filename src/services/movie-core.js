angular
    .module('movieCore', ['ngResource'])
    .factory('PopularMovies', ($resource) => {
        var token = 'tt1';
        return $resource('popular/:movieId', {
            movieId: '@id'
        }, {
            update: {
                method: 'PUT',
                headers: {
                    'authToken': token
                }
            },
            get: {
                method: 'GET',
                headers: {
                    'authToken': token
                }
            },
            query: {
                method: 'GET',
                headers: {
                    'authToken': token
                }
            },
            save: {
                method: 'POST',
                headers: {
                    'authToken': token
                }
            },
            remove: {
                method: 'DELETE',
                headers: {
                    'authToken': token
                }
            }
        });
    });