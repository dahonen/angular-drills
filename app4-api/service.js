angular.module('apiApp').
service('apiService', function($http) {

    this.getBlog = function(url) {
        return $http({
                method: 'GET',
                url: 'https://www.googleapis.com/blogger/v3/blogs/byurl?url=http%3A%2F%2F' + url + '&key=AIzaSyBq4Nwmc-r4zKNaZhkcyEbirQ21sU3Da9Y'
            })
            .then(function(response) {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log('status code is ' + response.status)
                    return response.status;
                }
            })
            .catch(function(err) {
                console.log('Error code: ' + err.status);
                console.log(err);
            });

    };

    this.getPosts = function(blogId) {
        return $http({
                method: 'GET',
                url: 'https://www.googleapis.com/blogger/v3/blogs/' +
                    blogId + '/posts?key=AIzaSyBq4Nwmc-r4zKNaZhkcyEbirQ21sU3Da9Y'
            })
            .then(function(response) {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log('status code is ' + response.status)
                    return response.status;
                }
            })
            .catch(function(err) {
                console.log('Error code: ' + err.status);
                console.log(err);
            });

    };

});