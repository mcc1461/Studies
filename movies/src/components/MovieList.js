import React from "react";
import "./MovieList.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => {
        return (
          <div className="col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm mcc">
              <img
                src={movie.imageURL}
                alt={movie.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    onClick={(event) => {
                      props.deleteMovieProp(movie);
                    }}
                  >
                    Delete
                  </Button>

                  <h2>
                    <Badge pill bg="info">
                      {movie.rating}
                    </Badge>
                  </h2>
                </div>
              </div>
              {/* <div className="card-footer">
                <small className="text-muted">{movie.releaseDate}</small>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
