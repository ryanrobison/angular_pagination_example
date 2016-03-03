coursesApp.factory('authToken', function($http) {
  
  return {

    getToken: function() {
      return $http({method: 'POST', url: 'http://canvas-api.herokuapp.com/api/v1/tokens'});
    }

  }

});