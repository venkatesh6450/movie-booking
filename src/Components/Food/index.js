import "./index.scss";
import Navbar from "../Navbar";

function Food(){
	return(
		<>
			<Navbar/>
			<div id="slider">
				<figure>
					<img className= "image" src= "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg" />
					<img className= "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-qpM0B1UV699NNgKu-IZRmi0VVrYeFqVGHwY3eb6mWnz2-CetI8k_n68NtkZ2NO-gTU&usqp=CAU" />
					<img className= "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV123YSWK7TAjzSHz7W3IWSiZl5Y5MTwSEKw&usqp=CAU" />
					<img className= "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MYHq9MLWKdGi-DB0I2yos-VEjN-mWyTRNzlNm1oxOXhB8CH-EUwowfu1Grv3VFUXb3c&usqp=CAU" />
					<img className= "image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MYHq9MLWKdGi-DB0I2yos-VEjN-mWyTRNzlNm1oxOXhB8CH-EUwowfu1Grv3VFUXb3c&usqp=CAU" />
				</figure>
			</div>
		</>
		)
}

export default Food