coursesApp.factory('enroll', ['$http', function($http) {

  return {

    enrollStudent: function(courseURL, token) {
      
      var parameter = JSON.stringify({
        access_token: token,
        type: "student",
        user: {name: "Test User"}
      });
      
      return $http({
        method: 'POST',
        url: courseURL,
        params: parameter
      });

    }

  }

}]);