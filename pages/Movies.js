import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { axiosInstance } from "../network/axiosInstance";
import axios from "axios";

export default function MoviesDetails() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // axiosInstance
      axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=0635aa13dcf8f77aa3d3a659b24086cc")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
      console.log(movies)
  return (
    <div className="container ">
    <h1>Movies</h1>
    <div className="row">
      {movies.map((movie) => {
      return (
        <div className="card col-3 offset-1" style={{width:"18 rem"}} key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <Link to={`/watchMovie/${movie.id}`} className="btn btn-primary">Watch Movie</Link>
        </div>
      </div>
      );
      })}
    </div>
    </div>
    );

}


