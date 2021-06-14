import {useHistory} from "react-router-dom";
import "./book.scss";
import Seat from "../Seats"

function BookTicketContainer(){

	const history = useHistory()
	let data =  history.location.state.el
	return(
		<>
		<Seat />
		</>
		)

}


export default BookTicketContainer




/*<div className="BookList">
			<img src="https://searchengineland.com/figz/wp-content/seloads/2015/08/movie-film-video-production-ss-1920-800x450.jpg" />
			<div className="block">
				<h4> MovieName  :  {data.movieName} </h4>
				<h4> Tickets Booked : {data.seats_reserved} </h4>
				<h4> Available Tickets : {100 - data.seats_reserved} </h4>
			</div>
			<Seat />
		</div>*/