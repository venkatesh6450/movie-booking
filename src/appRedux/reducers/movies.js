import {GET_MOVIES_LIST_SUCCESS,
        ADD_MOVIES_NAME_SUCCESS,
        UPDATE_MOVIE_SEAT_SUCCESS,
        GET_MOVIE_DETAILS_SUCCESS,
        MOVIE_STORE_DATA } from "../../constant/ActionTypes";

const INIT_STATE = {
 moviesData : null,
 updateMovieSeatData : null,
 addmoviesData : null,
 getMovieDetailsData : null,
 movieStoreData : null

};

const movies =  (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST_SUCCESS: {
      return {
        ...state,
        moviesData : action.data
      }
    }

    case ADD_MOVIES_NAME_SUCCESS: {
      return {
        ...state,
        addmoviesData : action.data
      }
    }

    case GET_MOVIE_DETAILS_SUCCESS: {
      return {
        ...state,
        getMovieDetailsData : action.data
      }
    }

    case UPDATE_MOVIE_SEAT_SUCCESS: {
      return {
        ...state,
        updateMovieSeatData : action.data
      }
    }

    case MOVIE_STORE_DATA:{
      console.log("MOVIE_STORE_DATA", action.data)
      return{
        ...state,
        movieStoreData : action.data
      }
    }

    default:
      return state;
  }
}

export default movies