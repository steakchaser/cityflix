


cityflixApp = angular.module('cityflixApp', []);
(function() {
  cityflixApp.controller('MovieListCtrl', function($scope, $filter) {
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
    $scope.movies = [
      {
        'name': '180'
      }, {
        'name': '24 Hours on Craigslist'
      }, {
        'name': '48 Hours'
      }, {
        'name': '50 First Dates'
      }, {
        'name': 'About a Boy'
      }, {
        'name': 'After the Thin Man'
      }, {
        'name': 'A Jitney Elopement'
      }, {
        'name': 'Alcatraz'
      }, {
        'name': 'Alexander\'s Ragtime Band'
      }, {
        'name': 'All About Eve'
      }, {
        'name': 'American Graffiti'
      }, {
        'name': 'American Yearbook'
      }, {
        'name': 'A Night Full of Rain'
      }
    ];
    $scope.columns = columnize($scope.movies, 3);
    return $scope.filter = function(query) {
      var filteredMovies;
      filteredMovies = $filter('filter')($scope.movies, {
        name: query
      });
      return $scope.columns = columnize(filteredMovies, 3);
    };
  });

}).call(this);
