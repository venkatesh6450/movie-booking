import "./index.css";
import React,{useState,useEffect} from "react"; 
import {Link,useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {movieStoreData} from "../../appRedux/actions";

function Seat(){

	let selected = true
	let notSelected = false

  const dispatch = useDispatch()

  const history = useHistory()
  const {getMovieDetailsData} = useSelector(({movies}) => movies )

	const [selectedSeat, setSelectedSeat] = useState([])

  const [state, setState] = useState([])

  useEffect(()=>{

    if(getMovieDetailsData){
      let array = [...getMovieDetailsData.seats]
      setState(array)
    }
  },[getMovieDetailsData])


	
	const [count, setCount] = useState(0)

	function handleSelectRow(el, element, index,elementIndex){

    console.log("selectedSeat", selectedSeat.find(data => data.Key === el.Key ))

    if( selectedSeat.find(data => ( ( data.Key === el.Key )  && (element.value === data.seats[0].value) ) ) ){

         let data = [...state]
        data[index].seat[elementIndex].value = false
        setState(data)
       setCount(count=>count-1)

       let data2 = [...selectedSeat]

       data2.map((data,index)=> { 
         if( ( data.Key === el.Key )  && (element.value === data.seats[0].value) ) {
            data2.splice(index,1)
            setSelectedSeat(data2)

            }
         } ) 
           
    }

    else {
		
      let data = [...state]
        data[index].seat[elementIndex].value = true 
        setState(data)
        setCount(count=>count+1)
         setSelectedSeat([...selectedSeat, { "Key" : el.Key , seats : [element], index: index, elementIndex: elementIndex }])
       
	 }

}


  function handleClick(){
    dispatch(movieStoreData({ state: {state : state,  getMovieDetailsData : getMovieDetailsData } } ))

    history.push("/terms-conditions")
  }

	return(
		<div className="screen-window">

			

		    <div className="price">  
		    	<h3> Price : {count* 120} </h3>   
		    	<h3> Tickets Selected : { count } </h3>
		    </div>
		     <button onClick={handleClick} >  Buy  </button>  

		    <div className="container"> 
		     <div className="screen"> <img src="https://searchengineland.com/figz/wp-content/seloads/2015/08/movie-film-video-production-ss-1920-800x450.jpg" /> </div>
		    </div>

		    { state.map((el,index)=>
		    <div className="row" key={index} >
		    	    { el.seat.map((element,elementIndex) =>


	       			 <div className= { element.value  ?  "seat_selected" : "seat" }  onClick={()=> handleSelectRow(el, element, index, elementIndex ) }></div>
              )}
	    
	      </div>
	  	)}

    	</div>
		)
}


export default Seat





/*

    <div class="container">
      <div class="screen"></div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
      </div>
    </div>

    <p class="text">
      You have selected <span id="count">0</span> seats for a price of $<span
        id="total"
        >0</span
      >
    </p>
		</div>*/