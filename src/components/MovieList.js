// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";
import { filterMoviesByTitleAndRating } from "./Filter"; // Import the filter function

export default function MovieList({ titleFilter, ratingFilter }) {
	// Filter movies based on title and rating criteria
	const filteredMovies = filterMoviesByTitleAndRating(
		MovieData,
		titleFilter,
		ratingFilter
	);

	return (
		<div className="movie-list">
			{filteredMovies.map((movie, index) => (
				<MovieCard key={index} {...movie} />
			))}
		</div>
	);
}
