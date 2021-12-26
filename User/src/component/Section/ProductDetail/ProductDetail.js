import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderProductDetail from '../../Header/HeaderProductDetail'
import MenuSecond from '../Product/MenuSecond'
import BannerBottomPD from './BannerBottomPD'
import NamePD from './NamePD'
import SpecificationsPD from './SpecificationsPD'
import axios from "axios"
export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
          cars:[],
        
        }
      }
      onChange =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
      }
      componentDidMount() {
        axios.get("http://localhost:3000/api/search").then((data) => {
          debugger
          this.setState({ 
            cars: data.data,
          });
        });
    
      }
   
    render() {
        return (
            <div>
              {
                this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
              <MenuSecond
                    id={car._id}
                    name={car.name}
              />
                  )
                })
              }
                <HeaderProductDetail/>
               
              {
                this.state.cars.map((car) => {
                  // console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
                    <NamePD name={car.name}/>
                  )
                })
              }


{
                this.state.cars.map((car) => {
                  // console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
                    <SpecificationsPD
                    Length = {car.car_detail.size_volume.length}
                    Width = {car.car_detail.size_volume.width}
                    Height= {car.car_detail.size_volume.height}
                    Standard_Long = {car.car_detail.size_volume.standard_long}
                    Weight={car.car_detail.size_volume.weight}
                    Engine={car.car_detail.engine_transmission.engine}
                    Transmission={car.car_detail.engine_transmission.transmission}
                    Cylinder_Capacity={car.car_detail.engine_transmission.cylinder_capacity}
                    Maximum_Power={car.car_detail.engine_transmission.maximum_power}
                    Maximum_Speed={car.car_detail.engine_transmission.maximum_speed}
                    Head_Light={car.car_detail.exterior.headlight}
                    Parking_Light={car.car_detail.exterior.parking_light}
                    Day_Light={car.car_detail.exterior.daylight}
                    Steering_Wheel={car.car_detail.furniture.steering_wheel}
                    Display={car.car_detail.furniture.display}
                    Technology={car.car_detail.furniture.technology}
                    Sound_Connect={car.car_detail.furniture.sound_connect}
                    Equipment={car.car_detail.furniture.equipment}
                    />
                  )
                })
              }
                 
               
                  
                <BannerBottomPD/>
            </div>
        )
    }
}
