class MediaConnect {
    static $inject = ['$scope', '$routeParams'];
    public socialType = "";
    constructor(private $scope, $routeParams: ng.route.IRouteParamsService) {
        this.socialType = $routeParams["media"];
        App.root.currentPage = "Manage " + this.socialType;
        App.root.currentPageDescription = "Connect/Disconnect account";
    }
}
// Register controller
App.mod.controller("MediaConnect", MediaConnect);
App.registerRoute("/media/:media", {
    templateUrl: 'templates/MediaConnect.html',
    controller: 'MediaConnect',
    controllerAs: 'ctr'
});  