(function() {
  cityflixApp.controller('MovieListCtrl', function($filter, $http, $log, $scope) {
    var columnize;
    columnize = function(input, cols) {
      var arr, colIdx, i;
      arr = [];
      i = 0;
      while (i < input.length) {
        colIdx = i % cols;
        arr[colIdx] = arr[colIdx] || [];
        arr[colIdx].push(input[i]);
        i++;
      }
      return arr;
    };
    $http.get('data/movies.json').success(function(data) {
      $scope.movies = data;
    });
    $scope.posterFilter = function(movie) {
      if ($scope.postersOnly === true) {
        return movie.poster;
      } else {
        return true;
      }
    };
    $scope.postersOnly = false;
    $scope.yearFilter = function(movie) {
      return movie.release_year >= $scope.yearSlider.min && movie.release_year <= $scope.yearSlider.max;
    };
    return $scope.yearSlider = {
      min: 1915,
      max: 2015,
      ceil: 2015,
      floor: 1915
    };
  });

}).call(this);
