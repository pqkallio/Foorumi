FoorumApp.controller('ShowTopicController', function($scope, $rootScope, $routeParams, $location, Api){
  var topicId = $routeParams.id;
  $scope.newMessage;
  
  Api.getTopic(topicId).success(function(topic) {
      $scope.topic = topic;
  });
  
  $scope.addMessage = function() {
      Api.addMessage({
          title: $scope.newMessage.title,
          content: $scope.newMessage.content,
          User: $rootScope.userLoggedIn
      }, $scope.topic.id)
      .success(function(message) {
          $location.path('/messages/' + message.id);
      });
  };
});
