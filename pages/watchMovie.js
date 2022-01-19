import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesDetails from "./Movies";

export default function WatchMovie() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  // console.log(params);
  useEffect(() => {
    // axiosInstance
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0635aa13dcf8f77aa3d3a659b24086cc`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(params.id)
  return (
    <div>
      <h1>Details</h1>
      <h3 className="text-danger">Movie Name : {details.title}</h3>
      <h3 className="text-danger">review : {details.overview}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} style={{width:350}} className="card-img-top" alt="..."/>
    </div>
  );
}