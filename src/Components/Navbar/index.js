import "./index.css";
import {Link} from "react-router-dom";

function Navbar(){
	return(
		<div class="navbar">
			<Link to="/home">
        	<img src="https://searchengineland.com/figz/wp-content/seloads/2015/08/movie-film-video-production-ss-1920-800x450.jpg" class="logo" />
        	</Link>
        	<h3>Movie Booking </h3>
        	<nav>
            	<ul>
                	<li><a href="/home">Home</a></li>
                	<li><a href="/movies">Movies</a></li>
                	<li><a href="/terms-conditions">Terms</a></li>
                	<li><a href="/food">Food</a></li>
            	</ul>
        	</nav>
    	</div>
		)

}

export default Navbar