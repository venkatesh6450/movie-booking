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
	            <p>We're providing free content on our platform for future programmers.<br/> 
	            If you want to become a good programmer then Join our community now & level up your skills with u </p>
	            <a href="/movies" > <button class="btn">Book a Ticket Now</button></a>
        </div>
    	</div>
		)
}

export default LandingPage