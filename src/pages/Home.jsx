import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const[topMovies, setTopMovies] = useState([]);
  
  const getTopRateMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    
    getTopRateMovies(topRatedUrl)
  }, [])

  return ( 
    <div>{
      topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}

export default Home