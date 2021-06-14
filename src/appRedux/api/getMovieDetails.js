import axiosInstance from "../../util/api";
import {message} from "antd";

export const getMovieDetailsApi = async (id) => 
    await axiosInstance.get(`movies/${id}`)
    .then(response => {
        return response
    })
    .catch(error =>{
    	message.error('Something went wrong. Try again!')
    });

 