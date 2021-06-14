import  { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getMoviesRequest} from "../../appRedux/actions";
import MoviePresentational from "./MoviePresentational";

function MovieContainer(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMoviesRequest())
  },[dispatch])

  const { moviesData } = useSelector(({movies}) => movies )

  return(
      <>
        <MoviePresentational 
          moviesData = {moviesData}
        />
      </>
    )

}

export default MovieContainer
