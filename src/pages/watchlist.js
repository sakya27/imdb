import  { useContext, useEffect, useState } from "react";


import { AppContext } from "@/context/AppContext";

import genreids from "@/utility/genre";

import Navbar from "@/components/Navbar";

export default function WatchList() {

  const {watchlist , setWatchList , handleRemoveFromWatchlist} = useContext(AppContext)


  const [search, setSearch] = useState("");
  const [genreList , setGenreList] = useState(['All Genres'])
  const [currGenre , setCurrGenre] = useState('All Genres')
  const [backgroundImg, setBackgroundImage] = useState('');

  console.log(handleRemoveFromWatchlist)


  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre)=>{
     setCurrGenre(genre)
  }

  let sortIncreasing = ()=>{
    let sortedIncreasing =  watchlist.sort((movieA , movieB)=>{
         return movieA.vote_average - movieB.vote_average
     })

     setWatchList([...sortedIncreasing])

     
  }

  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA , movieB)=>{
        return movieB.vote_average - movieA.vote_average
    })

    setWatchList([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres' , ...temp])
    console.log(temp)
  } , [watchlist])


  useEffect(() => {

   

      for (let i = 0; i < watchlist.length; i++) {

      let poster_path = watchlist[i].poster_path;
      console.log("Poster path");
      console.log(poster_path);
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

    }
    
  }, [watchlist]);




  return (
    <>

<Navbar />
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=>{
           return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?"flex justify-center items-center py-2 px-6 bg-blue-400 rounded-xl text-white font-semibold mx-4" :'flex justify-center items-center py-2 px-6 bg-gray-400/50 rounded-xl text-white font-semibold mx-4' }>
           {genre}
         </div>
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4  text-center"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 m-8">
        <table className="min-w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th className="text-gray-600 text-lg font-semibold pb-4">Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing}className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                <div className="text-gray-600 text-lg font-semibold pb-4">Ratings</div>
                <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
              </th>

              <th className="text-gray-600 text-lg font-semibold pb-4">Popularity</th>
              <th className="text-gray-600 text-lg font-semibold pb-4">Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
                if(currGenre=='All Genres'){
                    return true
                }else{
                    return genreids[movieObj.genre_ids[0]]==currGenre;
                }
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                
                return (
                  
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}


