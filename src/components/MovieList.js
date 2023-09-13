import React from "react";
import MovieCard from "./MovieCard";
import MovieData from "./MovieData";

export default function MovieList() {
	return (
		<>
			<div className="player-list">
				{MovieData.map((player, index) => (
					<MovieCard key={index} {...player} />
				))}
			</div>
		</>
	);
}
