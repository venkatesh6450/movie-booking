import "./index.scss";
import Navbar from "../Navbar";
import {useState,useEffect} from "react";

function Food(){

	let array = [

					{ id: 0 , 
						"image" : "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg",
						"price" : 600,
						"items" : 0,
						"itemName" : "pizza",
						"quantity" : 0
					},

					{ id: 1 , 
						"image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-qpM0B1UV699NNgKu-IZRmi0VVrYeFqVGHwY3eb6mWnz2-CetI8k_n68NtkZ2NO-gTU&usqp=CAU",
						"price" : 900,
						"items" : 0,
						"itemName" : "burger",
						"quantity" : 0
					},

					{ id: 2 , 
						"image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV123YSWK7TAjzSHz7W3IWSiZl5Y5MTwSEKw&usqp=CAU",
						"price" : 700,
						"items" : 0,
						"itemName" : "dosa",
						"quantity" : 0
					},

					{ id: 3 , 
						"image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MYHq9MLWKdGi-DB0I2yos-VEjN-mWyTRNzlNm1oxOXhB8CH-EUwowfu1Grv3VFUXb3c&usqp=CAU",
						"price" : 1000,
						"items" : 0,
						"itemName" : "meals",
						"quantity" : 0

					}

					]

	const [state, setState ] = useState(array)

	const [price, setPrice] = useState(0)

	const [priceData, setPriceData] = useState([])


	function handleAddItem(el,index){

		let data = [...state]
		data[index].items  = data[index].items + 1
		setState(data)

	}

	function handleRemovieItem(el,index){

		let data = [...state]
		data[index].items  = data[index].items > 0 ? data[index].items-1 : 0
		setState(data)
	}

	useEffect(()=>{

		let newArray = []

		let data = state.map(el=> {
			return{
				price : el.items *  el.price,
				items : el.items,
				originalPrice : el.price,
				itemName : el.itemName,
				items_tag : newArray.concat({ [el.itemName] : el.items })
			}
		}) 




		let price = 0

		setPriceData(data)

		for(let i =0; i<data.length;i++){

			if(data[i].price > 0){

				price = price+data[i].price

			}
		}

		setPrice(price)
		
		console.log("data",data)
		

	},[state])


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

			<div className="container">

				<h1>Food Cart</h1>

				<div className="cart">

					<div className="products">

						{ state.map((el,index)=>

							<div className="product" key={index}>

								<img src= {el.image} />

									<div className="product-info">

											<h4> {el.itemName} </h4>

											<h4 className="product-price">₹ {el.price} </h4>

											<h4 className="product-offer"> price : {el.price * el.items} </h4>

											<div className="product-quantity"> 

													<button onClick={()=>handleAddItem(el,index)}> + </button>  
														Qnt: <input  placeholder={el.items} name="" disabled/> 

														<button onClick={()=>handleRemovieItem(el,index)}> - </button>

												<p className="product-remove">

													<i className="fa fa-trash" aria-hidden="true"></i>

													<span className="remove">Remove</span>

												</p>
											</div>
									</div>
							</div>
						)}

					</div>

					<div className="cart-total">

						<p> <span >Total Price</span> <span>₹ {price} </span> </p>
						

						{ priceData.map((el, index)=>

							el.price > 0 ?
							<div key={index}>
							<span > {el.itemName}  : {el.originalPrice * el.items} </span>
							</div> 

							: 

							null 
						)}
					
						<a href="#">Proceed to Checkout</a>
					</div>

				</div>
		</div>
		</>
		)
}

export default Food



