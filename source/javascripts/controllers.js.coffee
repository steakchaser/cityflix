cityflixApp.controller 'MovieListCtrl', ($filter, $http, $scope) ->

  # Split data equally into x arrays so that we can display in columns
  # See: http://stackoverflow.com/questions/21644493/how-to-split-the-ng-repeat-data-with-three-columns-using-bootstrap
  # See also (for filtering): http://stackoverflow.com/questions/28392651/angular-js-filtering-nested-array-in-controller
  columnize = (input, cols) ->
    arr = []
    i = 0
    while i < input.length
      colIdx = i % cols
      arr[colIdx] = arr[colIdx] or []
      arr[colIdx].push input[i]
      i++
    return arr

  $http.get('data/movies.json').success (data) ->
    # Fixture generated using:
    # https://data.sfgov.org/resource/yitu-d5am.json?$select=title,release_year&$group=title,release_year
    # movies = data.map((movie, i) ->
      # API returns invalid JSON when you call with plot=short
      # API is really slow and occasionally you get a 403 on the image itself
      # May need to side-load or use a different API
      #   http://stackoverflow.com/questions/29334108/image-not-loading-javascript-html-angular-imdb-api
      # $http.get("http://www.omdbapi.com/?t=#{movie.title}&y=#{movie.release_year}&plot=full&r=json").success (data) ->
      #   movie.poster = data.Poster
      # return movie
    # )
    $scope.movies = movies
    # $scope.columns = columnize($scope.movies or [], 3)
    return

  # $scope.filter = (query) ->
  #   filteredMovies = $filter('filter')($scope.movies, title: query)
  #   $scope.columns = columnize(filteredMovies, 3)
  #   return

  # $scope.onSliderChange = ->
  #   moviesFilteredByYear = $filter('filter')($scope.movies, release_year: query)
  #   log 'changed', $scope.yearSlider
  #   return

  $scope.yearFilter = (movie) ->
    movie.release_year >= $scope.yearSlider.min and movie.release_year <= $scope.yearSlider.max

  $scope.yearSlider = {
    min: 2010,
    max: 2015,
    ceil: 2015,
    floor: 1915
  };