var app = angular.module("redditClone", []);

app.controller('postController', function ($scope) {
  $scope.posts = [];
  $scope.submitPost = function () {
    $scope.posts.push({title: $scope.title, author: $scope.author, url: $scope.url, description: $scope.description})
      $scope.title = "";
      $scope.author = "";
      $scope.url = "";
      $scope.description = "";

  }
}) //end of app
