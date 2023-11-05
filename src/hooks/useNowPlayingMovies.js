
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayinMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS); 
  
      const json = await data.json();
      dispatch(addNowPlayinMovies(json.results));
    }
  
  useEffect(() => {
    getNowPlayingMovies();
  },[])
}


export default useNowPlayingMovies;