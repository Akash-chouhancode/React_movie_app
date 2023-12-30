import React, { useContext } from "react";
import { Appcontext } from "./Context";

import "../Card.css";

import { Link, useNavigate } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const Movie = () => {
  // this can be done by link teg
  // const nav=useNavigate()
  // const single=(id)=>{
  //   nav(`/movie/${id}`)
  // }
  const { movies,loding } = useContext(Appcontext);

  if(loding){
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="cards-wrapper">
        {
          movies
        
        ? movies.map((val) => {
          return (
            <Link to={`/movie/${val.imdbID}`}>
              <div className="card-grid-space">
                <div className="date">
                  <div className="card">
                    <img src={val.Poster} alt=""></img>
                  </div>

                  <div className="tag">
                    <h1>{val.Title}</h1>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
        : ""}
      </div>

     
    </>
  );
};

export default Movie;
