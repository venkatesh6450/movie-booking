import axiosInstance from "../../util/api";
import {message} from "antd";

export const moviesListApi = async (data) => 
    await axiosInstance.get('movies')
    .then(response => {
        return response
    })
    .catch(error =>{
    	message.error('Something went wrong. Try again!')
    });

 