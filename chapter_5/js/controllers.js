'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope',
function BlogCtrl($scope){

  $scope.blogList = [
    {
      "_id" : 1,
      "date" : 1400623623107,
      "introText" : "This is a blog post about AngularJS. We will cover how to build",
      "blogText" : "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post"
    },
    {
      "_id" : 2,
      "date" : 1400267733107,
      "introText" : "In this blog post we will learn how to build applications based on REST.",
      "blogText" : "Ins this blog post we will learn how to build applications based on REST web services that contain most of business logic needed for the application."
    }
  ];

}]);


blogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams',
function BlogViewCtrl($scope, $routeParams){

  var blogId = $routeParams.id;

  var blog1 = {
      "_id" : 1,
      "date" : 1400623623107,
      "introText" : "This is a blog post about AngularJS. We will cover how to build",
      "blogText" : "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post",
      "comments" : [
        {
          "how" : "Maria",
          "commentText" : "Very good post. I love it."
        },
        {
          "how" : "Petter",
          "commentText" : "Whem can we learn services."
        }
      ]
    };
    var blog2 = {
      "_id" : 2,
      "date" : 1400267733107,
      "introText" : "In this blog post we will learn how to build applications based on REST.",
      "blogText" : "Ins this blog post we will learn how to build applications based on REST web services that contain most of business logic needed for the application.",
      "comments" : [
        {
          "how" : "Josh",
          "commentText" : "REST is great. I watn to know more."
        },
        {
          "how" : "Jhon",
          "commentText" : "Will we use Node.js for REST services?"
        }
      ]
    };

    if (blogId === "1"){
      $scope.blogEntry = blog1;
    } else if (blogId === "2"){
      $scope.blogEntry = blog2;
    }


}]);
