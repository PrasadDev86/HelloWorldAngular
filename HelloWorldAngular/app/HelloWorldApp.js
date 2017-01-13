var HelloWorldApp = angular.module("HelloWorldApp", []);  //Creating Hello World Module

HelloWorldApp.controller('HelloWorldController', function ($scope) { //Creating the Hello World Controller
    $scope.greeting = "Hello World!";
});