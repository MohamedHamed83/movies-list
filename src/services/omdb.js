angular
    .module('omdb', [])
    .factory('omdbApi', ($http, $q) => {
        var basUrl = 'http://www.omdbapi.com/?'
        var httpPromise = (url) => {
            var deferred = $q.defer();
            function successCallback(response) {
                deferred.resolve(response.data);
            }
            function errorCallback() {
                deferred.reject();
            }
            $http
                .get(url)
                .then(successCallback, errorCallback);
            return deferred.promise;
        };
        return {
            search: (query) => {
                return httpPromise(basUrl + 't=' + encodeURIComponent(query));
            },
            find: (id) => {
                return httpPromise(basUrl + 'i=' + id);

            }

        }
    })