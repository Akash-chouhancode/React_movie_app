import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Card2.css";

const SingleMovie = () => {
  const { id } = useParams();
  const [moviedata, setMoviedata] = useState("");

  const[loding,setLoding]=useState(true)


  const Singledata = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=cf9a0122&i=${id}`
      );
      let data = await response.json();
      console.log(data)
     
      if (data.Response==="True") {
       
        setMoviedata(data);
        setLoding(false)
      } 




    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Singledata();
  }, []);

  if(loding){
    return(
      <h1>Loading...</h1>

    )
   
  }

  return (
    <>

<div className="con">
<div className="movie">
        <div className="movie__hero">
          <img src={moviedata.Poster} alt="Rambo" className="movie__img"></img>
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary"> {moviedata.Title} </h1>
        
            <div className="movie__tag movie__tag--2">{moviedata.Genre}</div>
          </div>
          <p className="movie__description">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cumque totam. Veritatis quisquam explicabo dolores placeat illum expedita earum, neque perferendis? Praesentium earum totam cum pariatur, sequi explicabo quae quod!
          </p>
          <div className="movie__details">
            <p className="movie__detail">{moviedata.imdbRating}</p>
            <p className="movie__detail">{moviedata.Released}</p>
            <p className="movie__detail">{moviedata.Country}</p>
          </div>

          <Link to="/">
          <button className="btn">Back To Home</button>
</Link>
          
        </div>
        
    </div>


</div>












      
    </>
  );
};
export default SingleMovie;
