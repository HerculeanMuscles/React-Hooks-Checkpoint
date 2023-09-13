import React from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";

export default function MovieList() {
	return (
		<>
			<div className="movie-list">
				{MovieData.map((movie, index) => (
					<MovieCard key={index} {...movie} />
				))}
			</div>
		</>
	);
}
