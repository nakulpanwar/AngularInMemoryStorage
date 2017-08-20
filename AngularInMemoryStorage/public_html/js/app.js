var managingDataApp = angular.module("managingDataApp", ['ngRoute', 'ngAnimate', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ngJsonExportExcel']);

managingDataApp.run(function ($rootScope) {
   $rootScope.userData = []; 
});