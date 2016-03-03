coursesApp.controller('CoursesController',
	function CoursesController($scope, authToken, coursesData) {

    $scope.pageURL = 'http://canvas-api.herokuapp.com/api/v1/courses';

    // Lets get the token so we can use that to get course data.
    authToken.getToken()
      .success(function(event) {
        $scope.token = event.token;
      })
      .error(function(data) {
        console.log('could not find token');
      })
      .then(function(response) {

        coursesData.getCourses($scope.pageURL, $scope.token)
          .success(function(data, status, headers, config) {

            if ( angular.isArray(data) ) {
              $scope.courses = data;
              
            } else {
              $scope.courses = false;
              $scope.course = data
            }

          })
          .error(function(data, status, headers, config) {

            console.log('could not find courses');

          });

      });

	}
);