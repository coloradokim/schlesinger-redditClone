app.controller('postController', function ($scope, $firebaseArray) {
  var postsRef = new Firebase("https://schles-reddit-clone.firebaseio.com/posts");
  $scope.posts = $firebaseArray(postsRef);
  $scope.newPost  = {title: 'testing', author: 'Kim'}
  //Hard coded values work, but dynamic ones do not. Solve this problem next! 
  // {title: '$scope.title', author: $scope.author, url: $scope.url, description: $scope.description, date: $scope.date};

  $scope.submitPost = function () {
    // $scope.vm = this;
    // $scope.vm.time = new Date();
    // $scope.date = $scope.vm.time;
    $scope.posts.$add($scope.newPost).then(function(data) {
      $scope.title = '';
      $scope.author = '';
      $scope.url = '';
      $scope.description = '';
    })
  };
}); //end of postController

app.controller('commentController', function ($scope) {
  $scope.comments =[];
  $scope.submitComment = function () {
    $scope.comments.push({commentAuthor: $scope.commentAuthor, commentText: $scope.commentText});
      $scope.commentAuthor = '';
      $scope.commentText = '';
  };
}); //end of commentController

app.controller('voteController', function ($scope) {
  $scope.post.vote = 0;
  $scope.upVote = function(){
    $scope.post.vote++;
  };
  $scope.downVote = function() {
    $scope.post.vote--;
  };
}); //end of voteController
