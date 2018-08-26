# Movie-Collection

This application create two views that allows you to do a few things with your movie collection. The "add movie" view allows you to add a new movie to your collection. Once you have completed adding a movie it will automatically add this movie into your collection and appear on the screen. If you get rid of a movie there is a feature that will delete that movie. Each movie shows different properties of the movie such as the name, runtime, release date and an image if provided. In the manage genre view you can see your current projects and the total 

##SQL 

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    genre_id INT REFERENCES "movies",
	release_date date,
	runtime time,
	image_path varchar(255)
	
);

CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    genre varchar(150),
    
);

SELECT * FROM "movies";


SELECT "genre".*,  COUNT("movies") FROM "genre" LEFT JOIN "movies" ON "genre"."id" = "movies"."genre_id" GROUP BY "genre"."id";
