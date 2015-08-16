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
1. [AngularJS](https://angularjs.org/) - HTML enhanced for web apps!
2. [AngularJS Bootstrap Switch](https://github.com/frapontillo/angular-bootstrap-switch) - AngularJS directive for the bootstrap-switch jQuery plugin
3. [AngularJS Slider](https://github.com/rzajac/angularjs-slider) - AngularJS slider directive with no external dependencies
4. [Bootstrap](http://getbootstrap.com/) - Responsive CSS framework + pre-built UI components
5. [Bower](http://bower.io/) - Package manager for front-end assets.
6. [CoffeeScript](http://coffeescript.org/) - CoffeeScript is a little language that compiles into JavaScript
7. [Console.log wrapper](https://github.com/patik/console.log-wrapper) - Safe, clear console logging for every browser
8. [jQuery](https://jquery.com/) - JavaScript library for DOM manipulation, event handling, animation, and more
9. [Middleman](https://middlemanapp.com/) - Static website generator that lets you use modern-day development tools
10. [Sass](http://sass-lang.com/) - CSS with superpowers
11. [Slim](http://slim-lang.com/) - Lightweight templating language used instead of typing raw HTML
12. *More coming soon...*

## TODO
- [x] Pull in real data from SF OpenData API
- [x] Pull in box art from OMDB
- [ ] Other filter controls
- [ ] Style filter controls
- [ ] Style thumbs
- [ ] Style page header
- [x] Properly organize Angular files
- [ ] No results message on empty search / filter

## Developer Setup
### Install
Clone the repo and install gems required for Middleman
```
$ git@github.com:steakchaser/cityflix.git && cd cityflix
$ bundle install
```

### Development Cycle
The Middleman separates your development and production code from the start. This allows you to utilize a bevy of tools 
(such as Haml, Sass, CoffeeScript, etc.) during development that are unnecessary or undesirable in production.

From the command-line, start the preview web-server from inside your project folder
```
$ cd cityflix
$ bundle exec middleman server
```
This will start a local web server running at: http://localhost:4567/

### Build & Deploy
Finally, when you are ready to deliver static code or, in the case of "blog mode", host a static blog, you will need to 
build the site. Using the command-line, from the project folder, run middleman build:
```
$ cd cityflix
$ bundle exec middleman build
```
Push the build folder to the gh-pages branch
```
$ bundle exec middleman deploy
```
View the static site (hosted for free) on GitHub Pages: http://steakchaser.github.io/cityflix/