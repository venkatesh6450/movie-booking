import "./index.css";
import {Link} from "react-router-dom";

function Login(){

	return(
		<div className="container">
		<div className="login-form">
		<div>
		<h1>Login To Book a Ticket</h1>
			<p> User Name </p>
			<input type="text" name="user" placeholder="User Name" />

			<p> Password </p>
			<input type="password" name="password" placeholder="Password" />
			 <a href="/home"> <button> Login </button> </a>
			</div>
		</div>
		</div>
		)


}

export default Login