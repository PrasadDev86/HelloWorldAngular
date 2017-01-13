describe('Hello World Tests', function () { //describing the object type
    beforeEach(module('HelloWorldApp')); //load module

    describe('Test Hello World Controller', function () { //describing the app name
        var $controller;
        beforeEach(inject(function (_$controller_) { //Mocking the hello world controller
            $controller = _$controller_;
        }));

        it('Hello World Message Test', function () {
            var $scope = {};
            var controller = $controller('HelloWorldController', { $scope: $scope }); //Referring Hello World Controller
            expect($scope.greeting).toBe("Hello World!");  //Verifying the Hello World Message
        });
    });
});