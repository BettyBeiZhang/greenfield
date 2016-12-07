angular.module("app.status", [])

.controller("statusController", function($scope, $http) {
  $scope.user = {};

  $http.get('/status')
    .success(function(user) {
      $scope.user = user;
      console.log(user.responses.length);
    })
    .error(function(data) {
      console.console.error(err);
    })
});
