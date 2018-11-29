angular.module('app', [])
    .controller('number', function($scope, $http) {
        $scope.url = "";
        $scope.availableOptions = [
                { value: 'trivia', name: 'Trivia' },
                { value: 'math', name: 'Math' },
                { value: 'year', name: 'Year' }
            ];
        $scope.triviaSelect = $scope.availableOptions[0];
        $scope.processNumber = function(post) {
            $scope.url = "http://numbersapi.com/";
            $scope.url += $scope.numberForm + "/";
            $scope.url += $scope.triviaSelect.value;

            $http.get($scope.url).
            then(function(response) {
                $scope.numberString = response.data;
            });
        };
    });
