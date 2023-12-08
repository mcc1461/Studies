import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import movies from "../api/movies";
import MovieList from "./MovieList";
// import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        name: "The Matrix 3",
        rating: "8.1",
        overview:
          "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        id: 1,
      },

      {
        name: "Saw 3D",
        rating: "7.5",
        overview:
          "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
        id: 2,
      },
      {
        name: "Blitz 007",
        rating: "11",
        overview:
          "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
        imageURL:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
        id: 3,
      },
    ],
  };
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m =>  m.id !== movie.id
    );
    // this.setState({
    //   movies: newMovieList
    // })
    this.setState(state => ({
      movies: newMovieList
    }))
  }


  render() {
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* <SearchBar /> */}
          </div>
          <MovieList 
            movies={this.state.movies}  // props
            deleteMovieProp={this.deleteMovie}  // props, function
          />
        </div>
      </div>
    );
  }
}

export default App;
