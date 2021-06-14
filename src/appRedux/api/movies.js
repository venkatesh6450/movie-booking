import axiosInstance from "../../util/api";
import {message} from "antd";

export const addmoviesApi = async (data) => 
    await axiosInstance.post('movies',{
        movieName : data.movie_name,
        seats_reserved : 0,
        description : data.movie_description,
        Rating : data.movie_rating,
        image : data.movie_image
    })
    .then(response => {
        return response
    })
    .catch(error =>{
    	//message.error('Something went wrong. Try again!')
    });

 