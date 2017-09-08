var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
  $scope.welcome ="hello to you";
  $scope.elements = [
    {
     about: 'présentation'
    },
    {
      skill: 'compétences'
    }
  ];

  $scope.showUser = function(element){
    $scope.element= element;
  }
});
