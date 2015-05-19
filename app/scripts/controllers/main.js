'use strict';

/**
 * @ngdoc function
 * @name expensesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expensesApp
 */
angular.module('expensesApp')
  .controller('MainCtrl', function ($scope,$http, appSettings) {
  console.log(appSettings);
  //$scope.test = "hai buddy ";
  function getItems () {
		  $http.get(appSettings.db + '/_design/expenses/_view/byName')
		    .success(function (data) {
		    	console.log(data);
		      $scope.items = data.rows;
		    });
		}
		getItems();

	$scope.processForm = function () {
	  var item = {name: $scope.name, price: $scope.price};
  		postItem(item);
};	
	function postItem (item) {
		  // optimistic ui update
		  $scope.items.push({key: $scope.name, value: $scope.price});
		  // send post request
		  $http.post(appSettings.db, item)
		    .success(function () {
		      $scope.status = '';
		    }).error(function (res) {
		      $scope.status = 'Error: ' + res.reason;
		      // refetch items from server
		      getItems();
		    });
}

});