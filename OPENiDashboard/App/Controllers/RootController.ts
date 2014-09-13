class RootController {
    static $inject = ['$scope'];
    public messages = [];
    public username = window.localStorage.getItem("username");
    public currentPageDescription = "Control panel";
    public currentPage = "Dashboard";
    public signOut = function() {
        // TODO: OPENi signout
        window.location.replace("Index.html");
    };
    constructor(private $scope) {
        // Set a reference to the application
        App.root = this;
        this.messages.push({ title: "test title", body: "message body" }, { title: "test title 2", body: "message body 2" });
    }
}
// Register controller
App.mod.controller("RootController", RootController); 