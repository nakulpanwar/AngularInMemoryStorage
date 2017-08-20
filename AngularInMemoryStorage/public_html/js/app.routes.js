(function() {
    angular.module("managingDataApp")
            .config(configureRoutes);
    
    function configureRoutes($routeProvider) {
        
        $routeProvider.when('/', {
            templateUrl : 'partials/my_data.html',
            controller : 'MyDataCtrl'
        }).when('/add_more_to_data', {
            templateUrl : 'partials/add_more_to_data.html',
            controller : 'AddMoreCtrl'
        }).when('/my_data', {
            templateUrl : 'partials/my_data.html',
            controller : 'MyDataCtrl'
        }).otherwise({
            redirectTo : '/'
        });
        
    }
})();