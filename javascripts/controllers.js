(function() {
  cityflixApp.controller('MovieListCtrl', function($filter, $http, $scope) {
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
      var movies;
      movies = data.map(function(movie, i) {
        return movie;
      });
      $scope.movies = movies;
      $scope.columns = columnize($scope.movies || [], 3);
    });
    return $scope.filter = function(query) {
      var filteredMovies;
      filteredMovies = $filter('filter')($scope.movies, {
        title: query
      });
      $scope.columns = columnize(filteredMovies, 3);
    };
  });

}).call(this);
