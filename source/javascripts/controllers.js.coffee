cityflixApp.controller 'MovieListCtrl', ($scope, $filter) ->

  columnize = (input, cols) ->
    arr = []
    i = 0
    while i < input.length
      colIdx = i % cols
      arr[colIdx] = arr[colIdx] or []
      arr[colIdx].push input[i]
      i++
    arr

  $scope.movies = [
    {
      'name': '180'
    }
    {
      'name': '24 Hours on Craigslist'
    }
    {
      'name': '48 Hours'
    }
    {
      'name': '50 First Dates'
    }
    {
      'name': 'About a Boy'
    }
    {
      'name': 'After the Thin Man'
    }
    {
      'name': 'A Jitney Elopement'
    }
    {
      'name': 'Alcatraz'
    }
    {
      'name': 'Alexander\'s Ragtime Band'
    }
    {
      'name': 'All About Eve'
    }
    {
      'name': 'American Graffiti'
    }
    {
      'name': 'American Yearbook'
    }
    {
      'name': 'A Night Full of Rain'
    }
  ]

  $scope.columns = columnize($scope.movies, 3)

  $scope.filter = (query) ->
    filteredMovies = $filter('filter')($scope.movies, name: query)
    $scope.columns = columnize(filteredMovies, 3)