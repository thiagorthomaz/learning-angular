'use strict'

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', function MainCtrl($scope){
  $scope.message = "Hello World";
}]);


helloWorldControllers.controller('ShowCtrl', ['$scope', function ShowCtrl($scope){
  console.log("teste");
  $scope.message = "Show Hello World";
}]);
