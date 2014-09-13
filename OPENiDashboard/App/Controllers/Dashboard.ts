class Dashboard {
    static $inject = ['$scope'];
    constructor(private $scope) {
        App.root.currentPage = "Dashboard";
        App.root.currentPageDescription = "Control panel";
    }
}
// Register controller
App.mod.controller("Dashboard", Dashboard);
App.registerRoute("", {
    templateUrl: 'templates/Dashboard.html',
    controller: 'Dashboard',
    controllerAs: 'ctr'
}); 