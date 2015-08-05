FoorumApp.controller('UsersController', function($scope, $location, Api){
  $scope.login = function() {
      Api.login({
          username: $scope.username,
          password: $scope.password
      }).success(function(user) {
          $location.path('/');
      }).error(function() {
          $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
      });
  };
  
  $scope.register = function() {
        if ($scope.password == $scope.passwordConfirmation) {
            Api.register({
                username: $scope.username,
                password: $scope.password
            }).success(function(user) {
                $location.path('/');
            }).error(function() {
                $scope.errorMessage = 'Käyttäjätunnus on jo käytössä!';
            });
        } else {
            $scope.errorMessage = 'Salasanat eivät täsmää!';
        }
  };
});
