require 'rubygems'
require 'httparty'
require 'json'
require 'open-uri'

namespace :data do

  task :build do
    movies_file = "source/data/movies.json"
    sf_opendata_endpoint = "https://data.sfgov.org/resource/yitu-d5am.json?$select=director,title,release_year&$group=title,release_year,director"
    omdb_endpoint = "http://www.omdbapi.com/?t=%{title}&plot=short&r=json"
    poster_url = "images/posters/%{imdb_id}.jpg"

    existing_movies = File.exists?(movies_file) ? JSON.parse(File.read(movies_file)) : []

    movies = JSON.parse(HTTParty.get(sf_opendata_endpoint).body)
    movies.each do |movie|
      # See if this movie is already in the data file
      found = existing_movies.find{ |existing_movie|
        existing_movie["title"] == movie["title"] &&
        existing_movie["release_year"] == movie["release_year"]
      }

      # Merge in attrs if movie already exists
      found.merge!(movie) if found

      # Get IMDB and poster data for new movies
      if !found
        p "Get IMDB data for #{movie["title"]}..."
        imdb = JSON.parse(HTTParty.get(omdb_endpoint % {title: movie["title"]}).body)
        if imdb
          movie["imdb_id"] = imdb["imdbID"]
          movie["plot"] = imdb["Plot"]
          if imdb["Poster"] && imdb["Poster"] != "N/A"
            poster = File.join("source", poster_url % {imdb_id: movie["imdb_id"]})
            if !File.exists?(poster)
              p "Download poster..."
              open(poster, 'wb') do |file|
                file << open(imdb["Poster"]).read
              end
            end
            movie["poster"] = poster_url % {imdb_id: movie["imdb_id"]}
          end
        end
        # Add to existing
        existing_movies << movie
      end
    end

    # Write out the data file
    File.open(movies_file,"w") do |f|
      f.write(JSON.pretty_generate(existing_movies.sort_by{|movie| movie["title"]}))
    end
  end

end