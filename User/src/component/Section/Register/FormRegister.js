import React, { Component } from "react";
import axios from "axios";
import Validator from "./Validator";
export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      car_model_id: "",
      car_id: "",
      note: "",
      cars: [],
      car_models: [],
      errors: {},
    };
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
    const rules = [
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'name',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'The name must be at least 5 characters.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter your email',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
      },
      {
        field: 'phoneNumber',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'vehicletype',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'vehiclemodel',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'address',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'note',
        method: requiredWith,
        args: ['subject'],
        validWhen: true,
        message: 'The message field is required when subject is present.',
      },
    ];
    this.validator = new Validator(rules);
  }
  
  componentDidMount() {
    axios.get("http://localhost:3000/new_test_driver").then((data) => {
      this.setState({
        cars: data["data"]["cars"],
        car_models: data["data"]["car_models"],
      });
    });
  }

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      errors: this.validator.validate(this.state),
    });
    var user = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      address: this.state.address,
      note: this.state.note,
      car_model_id: this.state.car_model_id,
      car_id: this.state.car_id,
    };
    axios
      .post("http://localhost:3000/api/register_test_drive", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Send Register Test Drive Complete")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {errors} = this.state;
    return (
      <div>
        <form id="register-form" className="container wide">
          <h1 className="heading-form">
            PLEASE COMPLETE INFORMATION BELLOW TO REGISTER
          </h1>
          <div className="spacer" />
          {/* FullName */}
          <div className="row">
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                value={this.state.name}
                required
                name="name"
                type="text"
                placeholder="Eg: Joe Biden"
                className="form-control"
              />
              {errors.name}
            </div>
          </div>
          <div className="row">
            {/* Phone Number */}
            <div className="form-group Col-lg-6 col-md-6 col-12">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                value={this.state.phoneNumber}
                id
                required
                name="phoneNumber"
                type="text"
                placeholder="Eg:+84 123 456 789"
                className="form-control"
              />
                 {errors.phoneNumber}
            </div>
            {/* Email */}
            <div className="form-group Col-lg-6 col-md-6 col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                 value={this.state.email}
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                id
                required
                name="email"
                type="email"
                placeholder="VD: email@domain.com"
                className="form-control"
              />
                 {errors.email}
            </div>
          </div>
          {/* Address */}
          <div className="row">
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                 value={this.state.address}
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                id
                required
                name="address"
                type="text"
                placeholder="Your Address: District - City"
                className="form-control"
              />
                 {errors.address}
            </div>
          </div>

          <div className="row">
            <div className="form-group Col-lg-6 col-md-6 col-12">
              <label htmlFor="vehicletype" className="form-label">
                Choose Vehicle Model
              </label>
              <select
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                name="car_model_id"
                value={this.state.car_model_id}
                required
                id="vehicletype"
                className="form-control"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              >
                {this.state.car_models.map((car_models) => (
                  <option value={car_models._id}>{car_models.name}</option>
                ))}
              </select>
              {errors.car_model_id}
            </div>

            <div className="form-group Col-lg-6 col-md-6 col-12">
              <label htmlFor="vehiclemodel" className="form-label">
                Choose Vehicle Type
              </label>
              <select
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                name="car_id"
                value={this.state.car_id}
                required
                id="vehiclemodel"
                className="form-control"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              >
                {this.state.cars.map((car) => (
                  <option value={car._id}>{car.name}</option>
                ))}
              </select>
              {errors.car_id}
            </div>
          </div>
          <div className="row">
            {/* Note */}
            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="note" className="form-label">
                Note
              </label>
              <textarea
                onChange={(event) => {
                  this.isChangeData(event);
                }}
                name="note"
                id
                value={this.state.note}
                cols={30}
                rows={3}
                placeholder="Enter note..."
                className="form-control"
                style={{ height: "unset" }}
                defaultValue={""}
              />
                 {errors.note}
            </div>
          </div>
          <input
            value="SEND"
            className="form-submit"
            type="reset"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}