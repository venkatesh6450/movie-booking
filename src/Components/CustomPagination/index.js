import {useState, useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getMoviesRequest} from "../../appRedux/actions";


function Pagination(state, numEachPage, pageValue){

	const { moviesData } = useSelector(({movies}) => movies )

	
	const [data, setData] = useState([])

	const [pageData, setPageData] = useState([])

	const dispatch = useDispatch()

	  useEffect(()=>{
	    dispatch(getMoviesRequest())
	  },[dispatch])

	  useEffect(()=>{

	  	if(moviesData){

	  		setData(moviesData)
	  	}

	  },[moviesData])


	  useEffect(()=>{

	  	if(moviesData){

	  		setPageData(data.slice(0, numEachPage*pageValue) )
	  	}

	  },[numEachPage, pageValue, data])

	 console.log("newData after", pageData, data )
	  

	return{

		pageData, moviesData
		
	}


}

export default Pagination