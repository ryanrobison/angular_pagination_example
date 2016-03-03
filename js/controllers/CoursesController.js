coursesApp.controller('CoursesController',
	function CoursesController($scope, authToken, coursesData) {

    $scope.pageURL = 'http://canvas-api.herokuapp.com/api/v1/courses';

    // Lets get the token so we can use that to get course data.
    getCourseData = function() {

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

              if ( headers('Link') !== null ) {
                parseLinks( headers('Link').split(',') );
              }

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

      parseLinks = function(links) {

        $scope.pagination = {};
        
        angular.forEach(links, function (l) {
          
          var linkParts = l.split(';'),
            rel = linkParts[1].replace(/rel="(.*)"/, '$1').trim(),
            url = linkParts[0].replace(/<(.*)>/, '$1').trim();

          if ( rel == 'prev' || rel == 'next' ) {
            $scope.pagination[rel] = url;
          }

        });

      }

      getCourseData();

	}
);