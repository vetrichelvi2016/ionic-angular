app.controller('contactController',function($scope,$stateParams,$http,$q,){

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

  //  var getdata = $http.get('https://devcmnh.azurewebsites.net/odata/')
  //  .success(function(data,status,headers,config){
  //   //  angular.forEach(data),function(index,item){
  //   //    var cusValue = index.data;
  //   //  }
  //    $scope.Details = data;
   //
  //  })
var contactData = $http({
    method:'GET',
    url:'https://devcmnh.azurewebsites.net/odata/'
  }).then(function mySuccess(response){
    $scope.contactItem = response.data.value;
    // angular.forEach(response.data.value),function(index,item){
    //   var contactData = index.data;
    // }

    })
  }
//cursor position
$('textarea').on('keyup mouseup mouseleave', function() {
	caretPosition($(this));
});

function caretPosition(input) {
	var start = input[0].selectionStart,
		end = input[0].selectionEnd,
		diff = end - start;

	if (start >= 0 && start == end) {
		$('.vis').html('Cursor Position: ' + start);
	} else if (start >= 0) {
  $('.vis').html('Cursor Position: ' + start + ' to ' + end + ' (' + diff + ' selected chars)');
	}
}
//changefunction

  $scope.myFunction = function(){
    var x = document.getElementById("changetext");
    x.value = x.value.toUpperCase();
}
//datepicker

});
