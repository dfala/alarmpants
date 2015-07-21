angular.module('alarmPants')

.controller('alarmCtrl', function($scope, $sce, alarmService) {

	$scope.alarms = [];

	$scope.trustSrc = function(src) {
	    return $sce.trustAsResourceUrl(src);
  }

	$scope.getAlarms = function() {
		console.log('clicked');
		alarmService.getAlarms().then(function(response) {
			$scope.alarms.push(response.data);
		}, function(err) {
			console.log('err ', err);
		})
	};
});