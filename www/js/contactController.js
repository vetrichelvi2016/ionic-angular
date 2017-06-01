app.controller('contactController',function($scope,$stateParams,$http){

  // $scope.getlist = function(){
  $scope.contactList = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
 $scope.getCustomerList= function(){
   var getdata = $http.get('https://devcmnh.azurewebsites.net/odata/')
   .success(function(data,status,headers,config){
     $scope.Details = data;
   })
   getdata.$promise.then(
     function(data){
       angular.forEach(data.value),function(index,item){
         alert(index.data)
        var cusValue = index.data;
       }

     }
   )
 }

});
