import  { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getMoviesRequest} from "../../appRedux/actions";
import MoviePresentational from "./MoviePresentational";
import Pagination from "../CustomPagination";

function MovieContainer(){


  const [state, setState] = useState({ minValue: 0, maxValue: 3 })
  const [numEachPage, setNumberEachPage] = useState(3)
  const [pageValue, setPageValue] = useState(1)


  const { pageData, moviesData } = Pagination( state, numEachPage, pageValue)

  function handlePageChange(){
      setPageValue(pageValue=> pageValue+1)
  }
  

  console.log("totalCountData", moviesData?.length)


  return(
      <>
        <MoviePresentational 
          moviesData = {pageData}
          handlePageChange = {handlePageChange}
          pageValue = {pageValue}
          pageCountData = {moviesData}
        />
      </>
    )

}

export default MovieContainer
