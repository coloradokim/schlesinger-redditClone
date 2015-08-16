var app = angular.module("redditClone", ['angularMoment'])

app.controller('postController', function ($scope) {
  $scope.posts = [];
  $scope.submitPost = function () {
    $scope.vm = this;
    $scope.vm.time = new Date();
    $scope.date = $scope.vm.time;
    $scope.posts.push({title: $scope.title, author: $scope.author, url: $scope.url, description: $scope.description, date: $scope.date})
      $scope.title = "";
      $scope.author = "";
      $scope.url = "";
      $scope.description = "";
  }
  $scope.comments =[]
  $scope.submitComment = function () {
    $scope.comments.push({commentAuthor: $scope.commentAuthor, commentText: $scope.commentText})
      $scope.commentAuthor = "";
      $scope.commentText = ""
  }


}) //end of app
