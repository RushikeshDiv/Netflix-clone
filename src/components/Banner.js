import React, { useEffect, useState } from 'react';
import axios from "../axios";
import requests from '../request';
import '../components/Banner.css';


function Banner (){
  const[movie,setMovie]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchNetflixOriginals) ;
    
    setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
    return request;
    } 
    fetchData();
  },[]);
  console.log(movie);
  function truncate(str,n){
    return str?.length>n?str.substr[0,(n-1)]+"...":str;
  }
  return ( 

     <header className='banner'
             style={{backgroundSize:"cover",
             backgroundImage:`url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
             backgroundPosition:"center center" }}>

       <div className='banner__content'>
             <h1 className='banner_title'>
              {movie?.title||movie?.name || movie?.original_name}

             </h1>
       </div>

       <div className="banner__button">
            <button className="banner_buttons">
              Play
              </button>
            <button className="banner_buttons">
              My list
              </button>
       </div>

       <div className='banner__description'>
        { <h1>{truncate(movie?.overview)}</h1> }
       </div>

      <div className='banner--fadeBottom'></div>
      
     </header>


  )
}
export default Banner;


