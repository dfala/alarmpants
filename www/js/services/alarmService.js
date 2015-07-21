angular.module('alarmPants')

.service('alarmService', function($q, $http) {
	
	this.getAlarms = function() {
		return $http({
			method: 'GET',
			url: 'http://192.168.0.211:3000/api/alarm'
		})
	}
})