FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  var topicId = $routeParams.id;
  
  Api.getTopic(topicId).success(function(topic) {
      $scope.topic = topic;
  });
  
  $scope.addMessage = function() {
      Api.addMessage({
          title: $scope.newMessage.title,
          content: $scope.newMessage.content
      }, $scope.topic.id)
      .success(function(message) {
          $location.path('/messages/' + message.id);
      });
  };
});
