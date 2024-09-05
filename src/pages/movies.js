
import { useEffect, useState } from "react";
import axios from 'axios';

import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";



export default function Movies() {

    const [movies , setMovies] = useState([{'adult': false, 'backdrop_path': '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg', 'genre_ids': [28, 35, 878], 'id': 533535, 'original_language': 'en', 'original_title': 'Deadpool & Wolverine', 'overview': 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.', 'popularity': 3225.2, 'poster_path': '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg', 'release_date': '2024-07-24', 'title': 'Deadpool & Wolverine', 'video': false, 'vote_average': 7.753, 'vote_count': 2620}, 
                                            {'adult': false, 'backdrop_path': '/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg', 'genre_ids': [16, 10751, 12, 35], 'id': 1022789, 'original_language': 'en', 'original_title': 'Inside Out 2', 'overview': "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.", 'popularity': 1605.708, 'poster_path': '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg', 'release_date': '2024-06-11', 'title': 'Inside Out 2', 'video': false, 'vote_average': 7.676, 'vote_count': 3301}, 
                                            {'adult': false, 'backdrop_path': '/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg', 'genre_ids': [16, 10751, 35, 28], 'id': 519182, 'original_language': 'en', 'original_title': 'Despicable Me 4', 'overview': 'Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.', 'popularity': 1351.672, 'poster_path': '/wWba3TaojhK7NdycRhoQpsG0FaH.jpg', 'release_date': '2024-06-20', 'title': 'Despicable Me 4', 'video': false, 'vote_average': 7.227, 'vote_count': 1421}, 
                                            {'adult': false, 'backdrop_path': '/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg', 'genre_ids': [28, 80, 53, 35], 'id': 573435, 'original_language': 'en', 'original_title': 'Bad Boys: Ride or Die', 'overview': 'After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.', 'popularity': 1207.193, 'poster_path': '/oGythE98MYleE6mZlGs5oBGkux1.jpg', 'release_date': '2024-06-05', 'title': 'Bad Boys: Ride or Die', 'video': false, 'vote_average': 7.564, 'vote_count': 1806}, 
                                            {'adult': false, 'backdrop_path': '/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg', 'genre_ids': [28, 12, 53], 'id': 718821, 'original_language': 'en', 'original_title': 'Twisters', 'overview': 'As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.', 'popularity': 1143.472, 'poster_path': '/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg', 'release_date': '2024-07-10', 'title': 'Twisters', 'video': false, 'vote_average': 7.027, 'vote_count': 1237}, 
                                            {'adult': false, 'backdrop_path': '/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg', 'genre_ids': [28, 12, 80, 53], 'id': 923667, 'original_language': 'cn', 'original_title': '九龍城寨之圍城', 'overview': 'Set in the 1980s, troubled youth Chan Lok-kwun accidentally enters the Walled City, discovers the order amidst its chaos, and learns important life lessons along the way. In the Walled City, he becomes close friends with Shin, Twelfth Master and AV. Under the leadership of Cyclone, they resist against the invasion of villain Mr. Big in a series of fierce battles. Together, they vow to protect the safe haven that is Kowloon Walled City.', 'popularity': 1603.602, 'poster_path': '/PywbVPeIhBFc33QXktnhMaysmL.jpg', 'release_date': '2024-04-23', 'title': 'Twilight of the Warriors: Walled In', 'video': false, 'vote_average': 7.2, 'vote_count': 95}, 
                                            {'adult': false, 'backdrop_path': '/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg', 'genre_ids': [80, 53], 'id': 1032823, 'original_language': 'en', 'original_title': 'Trap', 'overview': "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.", 'popularity': 1308.217, 'poster_path': '/jwoaKYVqPgYemFpaANL941EF94R.jpg', 'release_date': '2024-07-31', 'title': 'Trap', 'video': false, 'vote_average': 6.5, 'vote_count': 752}, {'adult': false, 'backdrop_path': '/4ft6TR9wA6bra0RLL6G7JFDQ5t1.jpg', 'genre_ids': [28, 35], 'id': 704239, 'original_language': 'en', 'original_title': 'The Union', 'overview': 'A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.', 'popularity': 917.192, 'poster_path': '/d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg', 'release_date': '2024-08-15', 'title': 'The Union', 'video': false, 'vote_average': 6.246, 'vote_count': 534},
                                             {'adult': false, 'backdrop_path': '/bxwKC4qAbceMgHU1xCCTBK1eYdn.jpg', 'genre_ids': [28, 53, 80], 'id': 5492, 'original_language': 'en', 'original_title': 'Gunner', 'overview': "While on a camping trip in order to reconnect, war veteran Colonel Lee Gunner must save his two sons from a gang of violent bikers when they're kidnapped after accidentally stumbling upon to a massive drug operation.", 'popularity': 857.707, 'poster_path': '/eEkAY5veAnwxUOOlpF62KawkFO9.jpg', 'release_date': '2024-08-16', 'title': 'Gunner', 'video': false, 'vote_average': 5.245, 'vote_count': 55}, 
                                             {'adult': false, 'backdrop_path': '/lkmkNVFGsRVKZs1MqKbE6zabXc4.jpg', 'genre_ids': [80, 27, 53], 'id': 1226578, 'original_language': 'en', 'original_title': 'Longlegs', 'overview': 'FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.', 'popularity': 766.415, 'poster_path': '/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg', 'release_date': '2024-07-10', 'title': 'Longlegs', 'video': false, 'vote_average': 6.704, 'vote_count': 678}, 
                                             {'adult': false, 'backdrop_path': '/9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg', 'genre_ids': [10749, 18], 'id': 1079091, 'original_language': 'en', 'original_title': 'It Ends with Us', 'overview': "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.", 'popularity': 775.952, 'poster_path': '/4TzwDWpLmb9bWJjlN3iBUdvgarw.jpg', 'release_date': '2024-08-07', 'title': 'It Ends with Us', 'video': false, 'vote_average': 6.854, 'vote_count': 246}, 
                                             {'adult': false, 'backdrop_path': '/6IrZ3C8qSZ8Tbb32s41ReJOXpI0.jpg', 'genre_ids': [12, 10751, 14, 35], 'id': 826510, 'original_language': 'en', 'original_title': 'Harold and the Purple Crayon', 'overview': "Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.", 'popularity': 787.946, 'poster_path': '/dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg', 'release_date': '2024-07-31', 'title': 'Harold and the Purple Crayon', 'video': false, 'vote_average': 6.779, 'vote_count': 86}, 
                                             {'adult': false, 'backdrop_path': '/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg', 'genre_ids': [28, 80], 'id': 1160018, 'original_language': 'hi', 'original_title': 'Kill', 'overview': 'When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.', 'popularity': 850.524, 'poster_path': '/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg', 'release_date': '2024-07-03', 'title': 'Kill', 'video': false, 'vote_average': 6.761, 'vote_count': 111}, 
                                             {'adult': false, 'backdrop_path': '/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg', 'genre_ids': [27, 878], 'id': 945961, 'original_language': 'en', 'original_title': 'Alien: Romulus', 'overview': 'While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.', 'popularity': 824.291, 'poster_path': '/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg', 'release_date': '2024-08-13', 'title': 'Alien: Romulus', 'video': false, 'vote_average': 7.2, 'vote_count': 852}, 
                                             {'adult': false, 'backdrop_path': '/rSRA1p4e3laAAJflzdgtqNlx27Y.jpg', 'genre_ids': [28], 'id': 1049574, 'original_language': 'en', 'original_title': 'Darkness of Man', 'overview': 'Russell Hatch, an Interpol operative who takes on the role of father figure to Jayden, the son of an informant killed in a routine raid gone wrong. Years later, Hatch finds himself protecting Jayden and his grandfather from a group of merciless gangs in an all-out turf war, stopping at nothing to protect Jayden and fight anyone getting in his way.', 'popularity': 775.805, 'poster_path': '/fzmQ7mMYlBE8q459F6x9BAGgmj9.jpg', 'release_date': '2024-05-07', 'title': 'Darkness of Man', 'video': false, 'vote_average': 6.5, 'vote_count': 110}, 
                                             {'adult': false, 'backdrop_path': '/pzFbYJfqGKlGxOsDIIsUi6YxVQ.jpg', 'genre_ids': [35, 878], 'id': 1094138, 'original_language': 'en', 'original_title': 'Jackpot!', 'overview': "In the near future, a 'Grand Lottery' has been established - the catch: kill the winner before sundown to legally claim their multi-billion dollar jackpot. When Katie Kim mistakenly finds herself with the winning ticket, she reluctantly joins forces with amateur lottery protection agent Noel Cassidy who must get her to sundown in exchange for a piece of her prize.", 'popularity': 716.221, 'poster_path': '/fOsamTFIyGxjw1jLSKdZYxQBJOT.jpg', 'release_date': '2024-08-13', 'title': 'Jackpot!', 'video': false, 'vote_average': 6.421, 'vote_count': 392}, 
                                             {'adult': false, 'backdrop_path': '/mKOBdgaEFguADkJhfFslY7TYxIh.jpg', 'genre_ids': [28, 878, 35, 12, 53], 'id': 365177, 'original_language': 'en', 'original_title': 'Borderlands', 'overview': 'Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.', 'popularity': 1045.258, 'poster_path': '/865DntZzOdX6rLMd405R0nFkLmL.jpg', 'release_date': '2024-08-07', 'title': 'Borderlands', 'video': false, 'vote_average': 5.694, 'vote_count': 310}, 
                                             {'adult': false, 'backdrop_path': '/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg', 'genre_ids': [27, 878, 53], 'id': 762441, 'original_language': 'en', 'original_title': 'A Quiet Place: Day One', 'overview': 'As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.', 'popularity': 690.034, 'poster_path': '/hU42CRk14JuPEdqZG3AWmagiPAP.jpg', 'release_date': '2024-06-26', 'title': 'A Quiet Place: Day One', 'video': false, 'vote_average': 6.833, 'vote_count': 1622}, {'adult': false, 'backdrop_path': '/kwzNUM4yZ26XuNAPSyaWwJeWRP4.jpg', 'genre_ids': [28, 35, 14], 'id': 950526, 'original_language': 'pt', 'original_title': 'O Mestre da Fumaça', 'overview': 'The journey of Gabriel and Daniel, two brothers cursed by the Chinese mafia with its feared Three Generations Revenge, who have already reaped the life of their grandfather and their father. To survive, one of the brothers must learn the Smoke Style secrets, a little known Cannabis martial art, taught by a single master, high up in the mountains.', 'popularity': 832.46, 'poster_path': '/mg6YkwftQOJjpT2ygYlCi11LWeC.jpg', 'release_date': '2023-05-18', 'title': 'The Smoke Master', 'video': false, 'vote_average': 7.667, 'vote_count': 3}, 
                                             {'adult': false, 'backdrop_path': '/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg', 'genre_ids': [16, 35, 12, 10751], 'id': 831815, 'original_language': 'en', 'original_title': 'Saving Bikini Bottom: The Sandy Cheeks Movie', 'overview': 'When Bikini Bottom is scooped from the ocean, scientific squirrel Sandy Cheeks and her pal SpongeBob SquarePants saddle up for Texas to save their town.', 'popularity': 637.221, 'poster_path': '/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg', 'release_date': '2024-08-01', 'title': 'Saving Bikini Bottom: The Sandy Cheeks Movie', 'video': false, 'vote_average': 6.378, 'vote_count': 196}])
    const [pageNo , setPageNo] = useState(1)
    const [useCache, setUseCache] = useState(false);


    const handlePrev = ()=>{
        if(pageNo===1){
            setPageNo(pageNo)
        }
        else{
            setPageNo(pageNo-1)
        }
   
    }


    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }



    /*useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then(function(res){
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    } ,[pageNo])*/

    useEffect(()=>{

        const fetchMovies = async () => {
        try{

        
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
            console.log(response.data.results)
            setMovies(response.data.results)
        } catch(error)
        {
                console.log("API not working");
                setUseCache(true);
        }   
    };
    fetchMovies();       
    } ,[pageNo])

   
    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f1abfd77dd4b2f4f92e3214ebe9be3a2`).then(function(res){
    //         console.log(res.data.results)
    //         setMovies(res.data.results)
    //     })
    // } , [search])

  return (
    <>
    <Navbar />
    <div className='p-5'>
       <div className='text-2xl m-5 font-bold text-center '>
          {/* <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' value={search} /> */}
          <h1>Trending Movies</h1>
       </div>

       <div className='flex flex-row flex-wrap justify-around gap-8'>
          
           {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path}  />
           })}
       </div>

       <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}  useCache={useCache}/>
        
    
    </div>
    </>
  );
}




// https://api.themoviedb.org/3/movie/popular?api_key=f1abfd77dd4b2f4f92e3214ebe9be3a2&language=en-US&page=2