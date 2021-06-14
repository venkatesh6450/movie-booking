import "./index.scss";
import Navbar from "../Navbar";
import {Input, Form} from "antd";
import {useHistory} from "react-router-dom";
import {updateMovieSeatRequest} from "../../appRedux/actions";
import {useDispatch, useSelector} from "react-redux";
import {movieNewData} from "../Seats";
import jspdf from "jspdf";


function Payment(){

	const history = useHistory()
	const dispatch = useDispatch()

	const {movieStoreData} = useSelector(({movies})=> movies)

	console.log("movieStoreData", movieStoreData)

	const [form] = Form.useForm()

	function onFinish(values) {
		console.log("values", values)
	dispatch(updateMovieSeatRequest(movieStoreData.state))
    form.resetFields()

   		var doc = new jspdf('p','pt')

		doc.text(20,20, 'Thanking for booking Tickets ')
		doc.setFont('courier');
		doc.text(50, 50, 'your seats are C-30 E-20')
		doc.save('tickets.pdf')
  }

  

	return(
		<>
			<Navbar/>
			<div className="wrapper">
			  <div className="payment">
			    
			    <Form
			    form={form}
        		name="nest-messages"
        		onFinish={onFinish}
        		>
			    <h2>Payment </h2>

			    <div className="form">
			      <div className="card space icon-relative">
			      
			        <label className="label">Card holder:</label>
			        <Form.Item
			          name="Card-holder-name"
			          rules={[
			            { required: true, message: "Please Enter Card Holder Name " },
			            {
			              pattern: new RegExp("^[A-Z,a-z,0-9.,'-\\s]*$"),
			              message: "Only Numbers are required",
			            },
			            {
			              pattern: new RegExp('^[^<>]*$'),
			              message: "<> are not allowed",
			            },
			            {
			              whitespace: true,
			              message: "whitespaces are not allowed",
			            },
			            {
			              max: 20,
			              message:"maximum 20 charcters are allowed",
			            },
			          ]}
			        >
			          <Input type="text" name="Card-holder-name" className="input"  placeholder="Card holder name" />
			          </Form.Item>
			        <i className="fas fa-user"></i>
			       
			      </div>
			      <div className="card space icon-relative">
			        <label className="label">Card number:</label>

			         <Form.Item
			          name="Card-Number"
			          rules={[
			            { required: true, message: "Please Enter Card Number" },
			            {
			              pattern: new RegExp("^[0-9.,'-\\s]*$"),
			              message: "Only Numbers are required",
			            },
			            {
			              pattern: new RegExp('^[^<>]*$'),
			              message: "<> are not allowed",
			            },
			            {
			              whitespace: true,
			              message: "whitespaces are not allowed",
			            },
			            {
			              max: 20,
			              message:"maximum 20 charcters are allowed",
			            },
			          ]}
			        >
			        <Input type="text" name="Card-Number" className="input" data-mask="0000 0000 0000 0000" placeholder="Card Number" />
			        </Form.Item>
			        <i className="far fa-credit-card"></i>
			      </div>
			      <div className="card-grp space">
			        <div className="card-item icon-relative">
			          <label className="label">Expiry date:</label>
			          <Form.Item
			          name="Card-expiry-date"
			          rules={[
			            { required: true, message: "Please Enter Expiry Date" },
			            {
			              pattern: new RegExp("^[0-9.,'-\\s]*$"),
			              message: "Only Numbers are required",
			            },
			            {
			              pattern: new RegExp('^[^<>]*$'),
			              message: "<> are not allowed",
			            },
			            {
			              whitespace: true,
			              message: "whitespaces are not allowed",
			            },
			            {
			              max: 20,
			              message:"maximum 20 charcters are allowed",
			            },
			          ]}
			        >
			          <Input type="text" name="Card-expiry-date" className="input"  placeholder="00 / 00" />
			          </Form.Item>
			          <i className="far fa-calendar-alt"></i>
			        </div>
			        <div className="card-item icon-relative">
			          <label className="label">CVC:</label>
			          <Form.Item
			          name="Card-cvc"
			          rules={[
			            { required: true, message: "Please Enter Card CVC" },
			            {
			              pattern: new RegExp("^[0-9.,'-\\s]*$"),
			              message: "Only Numbers are required",
			            },
			            {
			              pattern: new RegExp('^[^<>]*$'),
			              message: "<> are not allowed",
			            },
			            {
			              whitespace: true,
			              message: "whitespaces are not allowed",
			            },
			            {
			              max: 20,
			              message:"maximum 20 charcters are allowed",
			            },
			          ]}
			        >
			          <Input type="text" name="Card-cvc" className="input" data-mask="000" placeholder="000" / >
			          </Form.Item>
			          <i className="fas fa-lock"></i>
			        </div>
			      </div>

			      <button htmlType="submit" className="button">
			        Pay
			      </button> 
			     
			    </div>
			    </Form>
			  </div>
		</div>
		</>
		)

}

export default Payment




/*//h1{
//	color: white;
//	text-align:center;
//	align-items:center;
//	justify-content:center;
//}

//.card{
//	margin: 50px auto;
//	padding: 0 auto
//	width: 50vw;
//	height:50vh;
//	background-color: white;
//	align-items:center;
//	display: grid;
//	grid-template-columns:repeat(1,1fr);
//	grid-gap:0px;
//}

//.card p {
//	color:black;
//	font-family : seins;
//	font-weight: 700;
//	font-size: 1rem;
//	padding: 10px 30px 0;
/}

//.card input{
//	background-color: black;
//	font-size: 16px;
//	width: 90%;
//	padding:10px 10px;
//	border: 0;
//	border-radius: 5px;
//	outline:  none;

//}*/