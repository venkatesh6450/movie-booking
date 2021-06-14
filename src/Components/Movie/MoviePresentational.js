import "./movie.scss"
import {Button,Modal,Drawer,Form,Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import Navbar from "../Navbar"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMovieNameRequest,getMovieDetailsRequest} from "../../appRedux/actions";


    const {TextArea} = Input
   

function MoviePresentational({moviesData}){

    const dispatch = useDispatch()

     const [form] = Form.useForm()

    const history = useHistory()

    const [state, setState] = useState(false)
    const [imageUpload, setImageUpload] = useState()

    function MovieTicket(el,index){

        console.log("el MovieTicket Clicked",el,index)
        history.push({pathname: `/movie/${el.movieName}`, state: {el} })
        dispatch(getMovieDetailsRequest(index))
    }

    function showDrawer(){
        setState(true)
    }

    function onClose(){
        setState(false)
    }

    function onFinish(values){
       
         form.resetFields()
         values.movie_image = imageUpload.image
         console.log("values",values)
        // dispatch(addMovieNameRequest(values))

    }


    const handlePhoto = async (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0]

          setImageUpload({
            image: URL.createObjectURL(img),
          })
        }
      }
  

  console.log("imageUpload", imageUpload?.image )

	return(
		<>
        <Navbar/>
        <button className="button button_width" onClick={showDrawer}> Add a movie </button>
		<div className="container">
        <main className="card">

            { moviesData?.map((el,index)=>

            <article key={el.index}>
                
            <img src="https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
                <div className="text" >
                    <h3>{el.movieName}</h3>
                    <h5> Tickets Booked : {el.seats_reserved} </h5>
                    <h5> Rating : {el.Rating}/5</h5>
                    <p> {el.description} </p>

                    <button className="button" onClick={()=>MovieTicket(el,index)}> Book Now </button>
                </div>
            </article>
            )}
            

        </main>
    </div>

        <Drawer
        title="Add a Movie"
        visible={state}
        onClose={onClose} 
        width= {"35%"}
      >

       <Form
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        >

        <label className="label">Movie Name </label>
            <Form.Item
              name="movie_name"
              rules={[ { required: true, message: "Please Enter Movie Name" } ]}>
            <Input type="text" name="movie_name" placeholder="Card Movie Name"  />
            </Form.Item>


            <label> Movie Rating</label>
             <Form.Item
              name="movie_rating"
              rules={[ { required: true, message: "Please Enter Movie Rating" } ]}>
            <Input type="text"  name="movie_rating" placeholder="Enter Rating"  />
            </Form.Item>

            <label> Movie Description</label>
             <Form.Item
              name="movie_description"
              rules={[ { required: true, message: "Please Enter Movie Description" } ]}>
            <TextArea type="text" name="movie_description"  placeholder="Enter Description"  />
            </Form.Item>

            <label> Movie Image</label>
             <Form.Item
              name="movie_image"
              rules={[ { required: true, message: "Please Upload Movie Image" } ]}>
            <Input type="file" name="movie_image"  placeholder="Upload a Image"  onChange={(e) => handlePhoto(e)}  />
            </Form.Item>
            
          <button htmlType="submit" className="button">
            Add
          </button> 
        
    </Form>


      </Drawer>
		</>
	)

}

export default MoviePresentational;