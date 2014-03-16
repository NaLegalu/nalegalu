// $http.post('http://127.0.0.1:8000/search',  { 'message' : message });

angular.module('nalegaluApp.controllers', []).
controller('searchController', function($scope, $http) {
    $scope.searchList = [
      {
            "full_title": "Cztery noce z Anną",
            "iplex": "",
            "ipla": "",
            "tvp": "http://vod.tvp.pl//filmy-fabularne/dramat/cztery-noce-z-anna"
        }

    ];

    $scope.clickEventFunction = function (){
        var data = {query:"z"};
        $http.post('http://127.0.0.1:8000/search', data).success(successCallback);
        console.log("potanto");
    }
});

angular.module('nalegaluApp', [
  'nalegaluApp.controllers'
]);