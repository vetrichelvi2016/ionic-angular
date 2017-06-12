app.controller('searchController',['$scope','dataShare',function($scope,$stateParams,$http,$q,dataShare){
  $scope.text = 'Hey';
  $scope.send = function(){
    console.log("searchController"+$scope.text);
   dataShare.sendData($scope.text);
}
}
]);
