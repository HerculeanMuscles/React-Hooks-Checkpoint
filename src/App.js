import "./App.css";
import MovieList from "./components/MovieList";

function App() {
	return (
		<>
			<div className="App">
				<h1 className="text-center">Movie List</h1>
				<MovieList /> {/* Render the MovieList component */}
			</div>
		</>
	);
}

export default App;
