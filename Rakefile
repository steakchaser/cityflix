require 'rubygems'
require 'httparty'
require 'json'
require 'open-uri'

namespace :data do

  task :build do
    movies = JSON.parse(HTTParty.get("https://data.sfgov.org/resource/yitu-d5am.json?$select=director,title,release_year&$group=title,release_year,director").body)
    movies.each do |movie|
      p "Get IMDB data for #{movie["title"]}..."
      imdb = JSON.parse(HTTParty.get("http://www.omdbapi.com/?t=#{movie["title"]}&plot=short&r=json").body)
      if imdb
        movie["imdb_id"] = imdb["imdbID"]
        movie["plot"] = imdb["Plot"]
        if imdb["Poster"] && imdb["Poster"] != "N/A"
          poster = "source/images/posters/#{movie["imdb_id"]}.jpg"
          if !File.exists?(poster)
            p "Download poster..."
            open(poster, 'wb') do |file|
              file << open(imdb["Poster"]).read
            end
          end
          movie["poster"] = "images/posters/#{movie["imdb_id"]}.jpg"
        end
      end
    end

    File.open("source/data/movies.json","w") do |f|
      f.write(JSON.pretty_generate(movies))
    end
  end

end