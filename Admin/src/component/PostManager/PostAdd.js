import React, { Component } from "react";
import axios from "axios";
import Validator from "./Validator";
export default class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      note: "",
      image: null,
      model: null,
      prices: "",
      quantity: 0,
      headlight: "",
      parking_light: "",
      daylight: "",
      steering_wheel: "",
      display: "",
      technology: "",
      sound_connect: "",
      equipment: "",
      length: "",
      width: "",
      height: "",
      standard_long: "",
      weight: "",
      engine: "",
      transmission: "",
      cylinder_capacity: "",
      maximum_power: "",
      maximum_speed: "",
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
        field: 'model',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'prices',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'quantity',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'headlight',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'parking_light',
        method: 'isEmpty',
        validWhen: false,
        message: 'Display notification "Please complete this field',
      },
      {
        field: 'daylight',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'steering_wheel',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'display',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'technology',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'sound_connect',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'equipment',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'length',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'width',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'height',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'standard_long',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },    {
        field: 'weight',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'engine',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'transmission',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'cylinder_capacity',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'maximum_power',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'maximum_speed',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
      {
        field: 'note',
        method: 'isEmpty',
        validWhen: false,
        message: 'The message field is required when subject is present.',
      },
    ];
    this.validator = new Validator(rules);
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/get_car_model").then((data) => {
      this.setState({
        car_models: data.data,
      });
    });
  }

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onChangeImage = (event) => {
    var input = event.target;
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
      debugger
        var img = document.getElementById("yourImgTag");
        img.src = event.target.result;
    }
  }

  handleSubmit = (event) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    var data = {
      name: this.state.name,
      note: this.state.note,
      image: this.state.image,
      model: this.state.model,
      prices: this.state.prices,
      quantity: this.state.quantity,
      headlight: this.state.headlight,
      parking_light: this.state.parking_light,
      daylight: this.state.daylight,
      steering_wheel: this.state.steering_wheel,
      display: this.state.display,
      technology: this.state.technology,
      sound_connect: this.state.sound_connect,
      equipment: this.state.equipment,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      standard_long: this.state.standard_long,
      weight: this.state.weight,
      engine: this.state.engine,
      transmission: this.state.transmission,
      cylinder_capacity: this.state.cylinder_capacity,
      maximum_power: this.state.maximum_power,
      maximum_speed: this.state.maximum_speed,
    };
    axios
      .post("http://localhost:3000/api/add_post", data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Create successfully !!!");
      this.props.history.push('/post');
  };
  render() {
    const {errors} = this.state;
    const { car_models } = this.state;
    return (
      <div className="content">
        <div className="heading mb-16">POST MANAGER</div>
        <form method="POST" className="box-content">
          <div className="sub-heading mb-16">ADD NEW PRODUCT</div>
          <div className="row">
            <div className="col-5">
              <div className="input-info">
                <label htmlFor="product_name">Product name:</label>
                <input
                required
                 className="Product_name_car"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.isChangeData}
                />
                  {errors.name}
              </div>
              <div className="input-info">
                <label id="note" htmlFor="product-desc">
                  Product description:
                </label>
                <textarea
                  name="note"
                  id="note"
                  cols={30}
                  rows={8}
                  defaultValue={""}
                  onChange={this.isChangeData}
                  className="description"
                />
                  {errors.note}
              </div>
            </div>
            <div className="col-7">
             
            </div>
          </div>
          <div className="price-list input-box  mt-4">
            <h4 className="sub-title">Product Detail</h4>
            <div className="line" />
            <div className="input-info">
              <label htmlFor style={{ fontWeight: 600 }}>
                Price list of car models
              </label>
              <table className="table">
                <tbody>
                  <tr className="tr_table">
                    <th className="col-4 th_table">
                      <p className="price-list-title">Model</p>
                    </th>
                    <th className="col-4  th_table">
                      <p className="price-list-title">Price</p>
                    </th>
                    <th className="col-4  th_table">
                      <p className="price-list-title">Quantity</p>
                    </th>
                  </tr>
                  <tr>
                    <td className="col-4 td_table">
                      <select
                        name="model"
                        id="model select_table"
                        onChange={this.isChangeData}
                      >
                        <option value="">Choose type model</option>
                        {car_models.map((car_model) => (
                          <option value={car_model._id} key={car_model._id}>
                            {car_model.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="prices"
                        id="prices"
                        onChange={this.isChangeData}
                      />
                       {errors.prices}
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        onChange={this.isChangeData}
                      />
                      {errors.quantity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="product-data input-box mt-4">
            <h4 className="sub-title">Product data</h4>
            <div className="line" />
            <div className="input-info">
              <div className="row">
                <div className="col-6">
                  <div className="product-data-item">
                    <div className="product-data-title">Volume-Size</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-length">Length</label>
                        <input
                          type="text"
                          name="length"
                          id="length"
                          onChange={this.isChangeData}
                        />
                          {errors.length}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="width">Width</label>
                        <input
                          type="text"
                          name="width"
                          id="width"
                          onChange={this.isChangeData}
                        />
                          {errors.width}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-height">Height</label>
                        <input
                          type="text"
                          name="height"
                          id="height"
                          onChange={this.isChangeData}
                        />
                         {errors.height}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-long">Standard Long</label>
                        <input
                          type="text"
                          name="standard_long"
                          id="standard_long"
                          onChange={this.isChangeData}
                        />
                         {errors.standard_long}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-weight">Weight</label>
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          onChange={this.isChangeData}
                        />
                         {errors.weight}
                      </div>
                    </div>
                  </div>
                  <div className="product-data-item">
                    <div className="product-data-title">Furniture</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-steering-wheel">
                          Steering Wheel
                        </label>
                        <input
                          type="text"
                          name="steering_wheel"
                          id="steering_wheel"
                          onChange={this.isChangeData}
                        />
                        {errors.steering_wheel}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-display">Display</label>
                        <input
                          type="text"
                          name="display"
                          id="display"
                          onChange={this.isChangeData}
                        />
                         {errors.display}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-technology">
                          Technology
                        </label>
                        <input
                          type="text"
                          name="technology"
                          id="technology"
                          onChange={this.isChangeData}
                        />
                        {errors.technology}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-sound-connect">
                          Sound Connect
                        </label>
                        <input
                          type="text"
                          name="sound_connect"
                          id="sound_connect"
                          onChange={this.isChangeData}
                        />
                         {errors.sound_connect}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-equipment">
                          Equipment
                        </label>
                        <input
                          type="text"
                          name="equipment"
                          id="equipment"
                          onChange={this.isChangeData}
                        />
                        {errors.equipment}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="product-data-item">
                    <div className="product-data-title">Engine - Gearbox</div>
                    <div className="product-data-input-list ">
                      <div className="product-data-info">
                        <label htmlFor="product-data-engine">Engine</label>
                        <input
                         className="input_Transmission"
                          type="text"
                          name="engine"
                          id="engine"
                          onChange={this.isChangeData}
                        />
                         {errors.engine}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-transmission">
                          Transmission
                        </label>
                        <input
                         className="input_Transmission"
                          type="text"
                          name="transmission"
                          id="transmission"
                          onChange={this.isChangeData}
                        />
                         {errors.transmission}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-cylinder-capacity">
                          Cylinder Capacity
                        </label>
                        <input
                         className="input_Transmission"
                          type="text"
                          name="cylinder_capacity"
                          id="cylinder_capacity"
                          onChange={this.isChangeData}
                        />
                          {errors.cylinder_capacity}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-power">
                          Maximum Power
                        </label>
                        <input
                         className="input_Transmission"
                          type="text"
                          name="maximum_power"
                          id="maximum_power"
                          onChange={this.isChangeData}
                        />
                        {errors.maximum_power}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-speed">
                          Maximum Speed
                        </label>
                        <input
                         className="input_Transmission"
                          type="text"
                          name="maximum_speed"
                          id="maximum_speed"
                          onChange={this.isChangeData}
                        />
                         {errors.maximum_speed}
                      </div>
                    </div>
                  </div>
                  <div className="product-data-item">
                    <div className="product-data-title">Exterior</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-head-light">
                          Head Light
                        </label>
                        <input
                          type="text"
                          name="headlight"
                          id="headlight"
                          onChange={this.isChangeData}
                        />
                           {errors.headlight}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-parking-light">
                          Parking Light
                        </label>
                        <input
                          type="text"
                          name="parking_light"
                          id="parking_light"
                          onChange={this.isChangeData}
                        />
                         {errors.parking_light}
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-day-light">
                          Day Light
                        </label>
                        <input
                          type="text"
                          name="daylight"
                          id="daylight"
                          onChange={this.isChangeData}
                        />
                        {errors.daylight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-info btn-add-new"
            onClick={this.handleSubmit}
          >
            Add New
          </button>
        </form>
      </div>
    );
  }
}