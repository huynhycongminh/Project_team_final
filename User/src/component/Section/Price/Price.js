import React, { Component } from 'react'
import axios from 'axios'
import ProductItems from './ProductItems';
export default class Price extends Component {
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

      numberFormat(a) {
        var nf = new Intl.NumberFormat();
        return nf.format(a);
      }
    render() {
        return (
            <div>
            <div className="banner-top" style={{backgroundImage: 'url("./image/priceList/banner.png")'}}>
              <h1 className="banner-heading">PRICE LIST</h1>
            </div>
            <div className="container section">
              <div className="row">    
                <div className="col-lg-9 col-md-8">
                  <div className="filtered-list">
                  {
                        this.state.cars.map((car) => (
                            <ProductItems
                            image={`data:image/png;base64,${car.base64}`}
                            name = {car._doc.files_id.metadata.name}
                            prices ={this.numberFormat(car._doc.files_id.metadata.prices)} 
                            />
                        ))
                  }
                    {/* <div className="filtered-item">
                      <div className="car-name">Audi A6</div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 car-img">
                          <a href="#">
                            <img src="./image/priceList/ModelA6.png" alt="Audi A6" />
                          </a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 car-price">Price: 2.650.000 VND</div>
                        <div className="col-lg-3 col-md-3 col-6 book-test-drive"><a href="#">Book a test drive</a></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}
