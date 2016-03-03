coursesApp.factory('courseData', ['$http', function($http) {

  return {

    getCourses: function(url, token) {
      return $http({method: 'GET', url: url, params: {access_token: token}});
    }

  }

}]);