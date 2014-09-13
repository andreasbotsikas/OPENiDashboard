class RootController {
    static $inject = ['$scope'];

    constructor(private $scope) {
        // Set a reference to the application
        App.root = this;
    }
}
// Register controller
App.mod.controller("RootController", RootController); 