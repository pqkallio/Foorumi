FoorumApp.controller('ShowMessageController', function($scope, $rootScope, $routeParams, Api){
  Api.getMessage($routeParams.id).success(function(message) {
      $scope.message = message;
  });
  
  $scope.newReply;
  
  $scope.addReply = function() {
      Api.addReply({
          content: $scope.newReply.content,
          User: $rootScope.userLoggedIn
      }, $scope.message.id).success(function(reply) {
         $scope.message.Replies.push(reply);
         $scope.newReply.content = '';
      });
  };
});
