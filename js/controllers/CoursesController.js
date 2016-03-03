coursesApp.controller('CoursesController',
	function CoursesController($scope, authToken) {

    // Lets get the token so we can use that to get course data.
    authToken.getToken()
      .success(function(event) {
        $scope.token = event.token;
      })
      .error(function(data) {
        console.log('could not find token');
      })
      .then(function(response) {
        


      });


	}
);