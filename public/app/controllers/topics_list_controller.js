FoorumApp.controller('TopicsListController', function($scope, $location, Api){
    getTopics();
        
    $scope.addTopic = function() {
        Api.addTopic({
            name: $scope.newTopic.name,
            description: $scope.newTopic.description
        })
        .success(function(topic) {
            $scope.newTopic.name = '';
            $scope.newTopic.description = '';
            
            $location.path('/topics/' + topic.id);
        });
    };
    
    function getTopics() {
        Api.getTopics().success(function(topics) {
            $scope.topics = topics;
        });
    }
});
