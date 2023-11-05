import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayinMovies);
    if (!movies) return;

    const mainMovies = movies[0];
    const { original_title , overview, id } = mainMovies; 

  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview} />
    <VideoBackground movieId = {id} />
    </div>
  )
}

export default MainContainer