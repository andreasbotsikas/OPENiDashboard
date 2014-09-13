class Dashboard {
    static $inject = ['$scope'];
    public numberOfImages = 0;
    public numberOfLocations = 0;
    public numberOfEvents = 0;
    public numberOfAccounts = 0;
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