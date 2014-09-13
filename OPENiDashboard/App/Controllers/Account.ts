class Account {
    static $inject = ['$scope'];
    constructor(private $scope) {
        App.root.currentPage = "Account";
        App.root.currentPageDescription = "Your personal information";
    }
}
// Register controller
App.mod.controller("Account", Account);
App.registerRoute("/account", {
    templateUrl: 'templates/account.html',
    controller: 'Account',
    controllerAs: 'ctr'
});