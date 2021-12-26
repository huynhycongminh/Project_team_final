import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ProductItems extends Component {
    render() {
        return (
            <div className="filtered-item">
            <div className="car-name">{this.props.name}</div>
            <div className="row">
              <div className=" col-12 car-img">
                <a href="#">
                  <img src={this.props.image} alt="Audi A4" />
                </a>
              </div>
              <div className="  col-3 car-price">{this.props.prices} VNĐ</div>
              <div className="col-3 book-test-drive"><NavLink to="/Register">Book a test drive</NavLink></div>
            </div>
          </div>
        )
    }
}
