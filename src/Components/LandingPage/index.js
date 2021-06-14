import "./index.css";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";

function LandingPage(){
	return(
		 <div class="container">
		 	<Navbar/>
	        
	        <div class="content">
	            <div class="text">
	               Book A Ticket A Now and Watch The Movie At Our Screens
	            </div>
	            <a href="/movies" > <button class="btn">Book a Ticket Now</button></a>
        </div>
    	</div>
		)
}

export default LandingPage