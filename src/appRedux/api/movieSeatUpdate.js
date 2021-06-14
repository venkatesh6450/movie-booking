import axiosInstance from "../../util/api";
import {message} from "antd";

export const movieSeatUpdateApi = async (data) => 
    await axiosInstance.patch(`movies/${data.getMovieDetailsData.id}`,{
        "movieName": data.getMovieDetailsData.movieName,
        "seats_reserved" : data.getMovieDetailsData.seats_reserved,
        "description" : data.getMovieDetailsData.description,
        "Rating" : data.getMovieDetailsData.Rating,
        "image" :  data.getMovieDetailsData.image,
        "seats" : data.seats
    })
    .then(response => {
        return response
    })
    .catch(error =>{
    	message.error('Something went wrong. Try again!')
    });

 