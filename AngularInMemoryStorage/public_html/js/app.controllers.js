// Add more controller
(function () {
    angular.module("managingDataApp")
            .controller('AddMoreCtrl', AddMoreCtrl);

    AddMoreCtrl.$Inject = ['$rootScope', '$scope'];

    function AddMoreCtrl($rootScope, $scope) {
        $scope.inputs = {
            firstName : "",
            middleName : "",
            lastName : ""
        }
        
        $scope.save = function () {
            $rootScope.userData.push($scope.inputs);
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("inMemoryStore", JSON.stringify($rootScope.userData));
                var data = localStorage.getItem("inMemoryStore");
                $rootScope.userData = JSON.parse(data);
            } else {
                console.log("Sorry! no local storage support");
            }
        }
        
    }
})();

// My data controller
(function () {
    angular.module("managingDataApp")
            .controller('MyDataCtrl', MyDataCtrl);

    MyDataCtrl.$Inject = ['$rootScope', '$scope'];

    function MyDataCtrl($rootScope, $scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        
        $scope.remove = function (item) {
            for(var l=0; l < $rootScope.userData.length; l++) {
                if($rootScope.userData[l] == item) {
                    var index = $rootScope.userData.indexOf($rootScope.userData[l]);
                    $rootScope.userData.splice(index, 1);
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("inMemoryStore", JSON.stringify($rootScope.userData));
                        var data = localStorage.getItem("inMemoryStore");
                        $rootScope.userData = JSON.parse(data);
                    } else {
                        console.log("Sorry! no local storage support");
                    }
                    $scope.getMyData();
                }
            }
        }
        
        $scope.getMyData = function () {
            if (typeof (Storage) !== "undefined") {
                var data = localStorage.getItem("inMemoryStore");
                $rootScope.userData = JSON.parse(data);
                $scope.totalItems = $rootScope.userData.length;
                $scope.items = $rootScope.userData;
            } else {
                console.log("Sorry! no local storage support");
            }
        }
        
        $scope.getMyData();
    }
})();