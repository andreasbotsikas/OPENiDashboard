var App = {
    mod: angular.module('OPENiDashboard', ['ngRoute', 'ngResource']),
    routes: {},
    registerRoute: function(path, route) {
        App.routes[path] = route;
    },
    root: null // The root controller
};
App.mod.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
    for (var path in App.routes) {
        if (path == "") {
            $routeProvider.otherwise(App.routes[path]);
            continue;
        }
        $routeProvider.when(path, App.routes[path]);
    }
}]); 