angular.module('alarmPants')

.controller('MainController', function ($scope, $http, $sce) {

	// Get testing
	$http.get('/api/alarm')
	.success(function (response) {
		$scope.alarm = response;
	})
	.error(function (err) {
		console.error(err);
	});

})