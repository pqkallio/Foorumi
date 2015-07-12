FoorumApp.controller('ShowMessageController', function($scope, $routeParams, Api){
  Api.getMessage($routeParams.id).success(function(message) {
      $scope.message = message;
  });
  
  $scope.addReply = function() {
      Api.addReply({
          content: $scope.newReply.content
      }, $scope.message.id).success(function(reply) {
         $scope.message.Replies.push(reply);
         $scope.newReply.content = '';
      });
  };
});
