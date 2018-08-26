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
