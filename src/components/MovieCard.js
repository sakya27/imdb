import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import  { useEffect, useState } from "react";




function MovieCard({
  movieObj,
  poster_path,
  name,
}) {

   const myContext = useContext(AppContext)

   const [backgroundImg, setBackgroundImage] = useState('');

   useEffect(() => {
     if (poster_path) {
       const imageUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
       const img = new Image();
       
       img.onload = () => {
         // Image loaded successfully
         setBackgroundImage(imageUrl);
       };
       
       img.onerror = () => {
         // Image failed to load (invalid URL or network error)
         setBackgroundImage(`${poster_path}`);
       };
 
       img.src = imageUrl; // Triggers the image load
     } 
   }, [poster_path]);


  function doesContain(movieObj) {
    for (let i = 0; i < myContext.watchlist.length; i++) {
      if (myContext.watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[30vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(${backgroundImg})`,

       }}
       
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => myContext.handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => myContext.handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
