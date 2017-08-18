(function () {
    angular.module("managingDataApp")
            .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$Inject = ['$rootScope'];

    function HeaderCtrl($rootScope) {
        console.log("HeaderCtrl");
    }
})();

// Define data controller
(function () {
    angular.module("managingDataApp")
            .controller('DefineDataCtrl', DefineDataCtrl);

    DefineDataCtrl.$Inject = ['$rootScope'];

    function DefineDataCtrl($rootScope) {
        console.log("DefineDataCtrl");
    }
})();

// Add more controller
(function () {
    angular.module("managingDataApp")
            .controller('AddMoreCtrl', AddMoreCtrl);

    AddMoreCtrl.$Inject = ['$rootScope'];

    function AddMoreCtrl($rootScope) {
        console.log("AddMoreCtrl");
    }
})();

// My data controller
(function () {
    angular.module("managingDataApp")
            .controller('MyDataCtrl', MyDataCtrl);

    MyDataCtrl.$Inject = ['$rootScope'];

    function MyDataCtrl($rootScope) {
        console.log("MyDataCtrl");
    }
})();