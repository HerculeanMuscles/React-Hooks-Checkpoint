// App.js
import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
	const [titleFilter, setTitleFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState("");

	const handleTitleChange = (event) => {
		setTitleFilter(event.target.value);
	};

	const handleRatingChange = (event) => {
		setRatingFilter(event.target.value);
	};

	return (
		<div className="App">
			<h1 className="text-center">Movie List</h1>
			<div className="filters">
				<label htmlFor="titleFilter">Title:</label>
				<input
					type="text"
					id="titleFilter"
					value={titleFilter}
					onChange={handleTitleChange}
				/>
				<label htmlFor="ratingFilter">Rating:</label>
				<input
					type="number"
					id="ratingFilter"
					value={ratingFilter}
					onChange={handleRatingChange}
				/>
			</div>
			<MovieList titleFilter={titleFilter} ratingFilter={ratingFilter} />
		</div>
	);
}

export default App;
