var app = angular.module("weatherApp", []); 
app.controller("myCtrl", function($scope,$http) {

    $scope.convert = function(){
    	$http.get("data.json")
    	.then(function(response){
    		$scope.weatherData = response;
            $scope.curr_temp = response.data.weather.curren_weather[0].temp;
            $scope.curr_wind_speed = response.data.weather.curren_weather[0].wind[0].speed+" "+response.data.weather.curren_weather[0].wind[0].wind_unit;
            $scope.curr_humidity = response.data.weather.curren_weather[0].humidity;
            $scope.curr_weather_text = response.data.weather.curren_weather[0].weather_text;
            $scope.forecast = response.data.weather.forecast;
    	});
    }
    $scope.convert();
});