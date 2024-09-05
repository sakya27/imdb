
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "@/pages/movies";
import WatchList from "@/pages/watchlist";
import { useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import Banner from "@/components/Banner";
import MovieList from "@/components/MovieList";




export default function Home() {

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
    <Navbar />
    <AppContext.Provider value={{watchlist , handleAddtoWatchlist , handleRemoveFromWatchlist , setWatchList}}>
      
        
        <Banner />
        <MovieList />

        {/*<Routes>
          <Route
            path="/"
            element={
              
                
                <Movies/>
              
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList/>
            }
          />
        </Routes>
      </BrowserRouter>*/}


      </AppContext.Provider>
    </>
  );
}
