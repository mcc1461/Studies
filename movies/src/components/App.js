import React from "react";
import movies from "../api/movies";
import MovieList from "./MovieList";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My Movies</h1>
                <MovieList movies={movies} />
            </div>
        );   
}
}    
export default App;
