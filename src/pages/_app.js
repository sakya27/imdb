import "@/styles/globals.css";
import Script from "next/script";
import { useEffect, useState } from "react";



import { AppContext } from "@/context/AppContext";




export default function App({ Component, pageProps }) {

  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
        strategy="beforeInteractive"
      />
      
      

      <AppContext.Provider value={{watchlist , handleAddtoWatchlist , handleRemoveFromWatchlist , setWatchList}}>

      <Component {...pageProps} />
     
      </AppContext.Provider>
     
    </>
  );
}









