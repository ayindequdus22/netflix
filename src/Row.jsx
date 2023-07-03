import React, { useState,useEffect } from 'react'
import './Row.css'
import axios from './axios';
import movieTrailer from "movie-trailer"
import Youtube from 'react-youtube';
const Row = ({title,fetchUrl,isLargeRow}) => {
  const [movies,Setmovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original"
 const [trailerUrl,setTrailerUrl] = useState("")
  useEffect(()=>{
async function fetchData(){
 const request = await axios.get(fetchUrl)
 Setmovie(request.data.results)
 return request;
}
fetchData()
 },[fetchUrl])
//  console.log(movies)
const opts = {
  height:"390",
  width:"100%",
  playerVars:{
 autoplay:1   
  }
} 
const handleClick = (movie) => {
if(trailerUrl){
  setTrailerUrl('');
}
else{
  movieTrailer(movie?.name || "")
  .then((url) => {
    console.log(url)
const urlParams = new URLSearchParams(new URL(url).search)
setTrailerUrl(urlParams.get("v"));
  }).catch(error =>console.log(error.message))
}
}
return (
    <>
    <div className='row'>
        <h2>{title}</h2>
<div className="row__posters">
  {movies.map(movie => 
    <>
    {/* <p style={{color:'white'}}>{movie.name}</p> */}
    <img key={movie.id} onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
    
    </>
   )}
</div>
    </div>
    {trailerUrl &&
  <Youtube videoId={trailerUrl} opts={opts}/>
     }
      </>
  )
}

export default Row