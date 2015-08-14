# cityflix
Responsive website to discover movies shot in the city of San Francisco.

## Requirements
1. Pull the list of movies shot in San Francisco from the [SF OpenData API](https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am)
2. Find the poster image and details for each unique movie in that list using the [OMDB API](http://www.omdbapi.com/)
3. Display all the entries in a responsive, Pinterest-style grid, including:
  1. Poster (and fallback image)
  2. Movie title
  3. Year
  4. Director
  5. Plot excerpt
4. The user should also be able to:
  1. Type into a text box and filter the list by the entered string (matched against any attributes you find relevant)
  2. Use sliders (two sliders in one track) to control the relevant years for the search (start/end year)
  3. Toggle a mode which hides/shows movies for which there is no poster picture
  
## Assumptions / Constraints
1. No server-side application should be needed / used
2. Use any frameworks or libraries (both JS and CSS)
3. Host on GitHub
4. Publish full commit history

## Stack Details
1. [Bootstrap](http://getbootstrap.com/) - Responsive CSS framework + pre-built UI components
2. [Bower](http://bower.io/) - Package manager for front-end assets.
3. [CoffeeScript](http://coffeescript.org/) - CoffeeScript is a little language that compiles into JavaScript
4. [jQuery](https://jquery.com/) - JavaScript library for DOM manipulation, event handling, animation, and more
5. [Middleman](https://middlemanapp.com/) - Static website generator that lets you use modern-day development tools
6. [Sass](http://sass-lang.com/) - CSS with superpowers
7. [Slim](http://slim-lang.com/) - Lightweight templating language used instead of typing raw HTML
8. *More coming soon...*