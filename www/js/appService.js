// .controller('PlaylistCtrl', function($scope, $stateParams,appService) {
//
//   $scope.playlists =[
//     {title:'eee',id:2},
//     {title:'www',id:4},
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//   }]
// });

app.service('Products', function () {
  this.Items = function() {
    // if we want can get data from database
     product = { product: '', price: '' }
  };
  return this;
});
