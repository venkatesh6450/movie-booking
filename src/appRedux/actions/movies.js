import {
	GET_MOVIES_LIST_REQUEST,
	GET_MOVIES_LIST_SUCCESS,
	ADD_MOVIES_NAME_REQUEST,
	ADD_MOVIES_NAME_SUCCESS,
	UPDATE_MOVIE_SEAT_REQUEST,
	UPDATE_MOVIE_SEAT_SUCCESS,
	GET_MOVIE_DETAILS_REQUEST,
	GET_MOVIE_DETAILS_SUCCESS,
	MOVIE_STORE_DATA
} from "../../constant/ActionTypes";

export const getMoviesRequest = () =>{
	return{
		type : GET_MOVIES_LIST_REQUEST
	}
}

export const getMoviesSuccess = (data) =>{
	return{
		type : GET_MOVIES_LIST_SUCCESS,
		data : data.data
	}
}


export const addMovieNameRequest = (data) =>{
	return{
		type : ADD_MOVIES_NAME_REQUEST,
		data : data
	}
}

export const addMovieNameSuccess = (data) =>{
	return{
		type : ADD_MOVIES_NAME_SUCCESS,
		data : data.data
	}
}


export const getMovieDetailsRequest = (id) =>{
	
	return{
		type : GET_MOVIE_DETAILS_REQUEST,
		id : id
	}
}

export const getMovieDetailsSuccess = (data) =>{
	return{
		type : GET_MOVIE_DETAILS_SUCCESS,
		data : data.data
	}
}

export const updateMovieSeatRequest = (data) =>{
	console.log("updateMovieSeatRequest actions", data)
	return{
		type : UPDATE_MOVIE_SEAT_REQUEST,
		data : data
	}
}

export const updateMovieSeatSuccess = (data) =>{
	return{
		type : UPDATE_MOVIE_SEAT_SUCCESS,
		data : data.data
	}
}

export const movieStoreData = (data) =>{
	return{
		type : MOVIE_STORE_DATA,
		data : data
	}
}