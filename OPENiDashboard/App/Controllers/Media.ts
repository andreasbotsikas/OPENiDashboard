class Media {
    static $inject = ['$scope'];
    public isConnectedFb = false;
    public isConnectedTwitter = false;
    public isConnectedGoogle = false;
    public isConnectedFlickr = false;
    constructor(private $scope) {
        App.root.currentPage = "Social media";
        App.root.currentPageDescription = "Your connected social media accounts";
    }
}
// Register controller
App.mod.controller("Media", Media);
App.registerRoute("/media", {
    templateUrl: 'templates/Media.html',
    controller: 'Media',
    controllerAs: 'ctr'
});  