import React, { Component } from 'react'
import axios from "axios"
import Service from '../HomePage/Service';
import MenuSecond from './MenuSecond';
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state={
      cars:[],
      imageFirstCar: null,
      firstCar: null,
    }
  }
  onChange =(event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  componentDidMount() {
  axios.get("http://localhost:3000/api/get_image").then((data) => {
      this.setState({
        cars: data.data,
      });
    });
    
 
  }


    render() {
      // console.log(this.props.match.params.id);
        return (
         
            <div>
              
              {
                this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._doc.files_id.metadata._id == this.props.match.params.id)
                  return(
                 <MenuSecond
                    id={car._doc.files_id.metadata._id}
                    name={car._doc.files_id.metadata.name}
              />
                  )
                })
              }
       
  
         
            {/* Info Product */}
            <div >
            {
                 this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._doc.files_id.metadata._id == this.props.match.params.id)
                  return(
                    <img  className="product-img-main" src={`data:image/png;base64,${car.base64}`} alt="" />
                  
                  )
                })
              } 
            
          </div>
            <div className="container section info-product">
              {
                 this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._doc.files_id.metadata._id == this.props.match.params.id)
                  return(
                    <div>
                    <h1 className="heading">
                      {car._doc.files_id.metadata.name}
                    </h1>
                    <p className="description">
                  {car._doc.files_id.metadata.node}
                    </p>
                  </div>
                  
                  )
                })
              }    
            </div>
       
            {/* 3D Model */}
     
            {/* Services */}
      <Service/>
            {/* Footer */}
            </div>
          

        )
    }
}
