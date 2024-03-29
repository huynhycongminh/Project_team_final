import React, { Component } from "react";
import axios from "axios";
import Checkbox from "./Checkbox";
export default class StorageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      car_models: [],
      modalStatus: false,
      edit_car: null,
      name: "",
      number: null,
      prices: null,
      _id: null,
      ids: [],
      checked: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/cars")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          cars: data.map((data) => ({ ...data, isChecked: false })),
        });
      });
    axios.get("http://localhost:3000/new_test_driver").then((data) => {
      this.setState({
        car_models: data["data"]["car_models"],
      });
    });
  }

  showModal = () => {
    const { name, number, prices } = this.state;
    if (this.state.modalStatus === true) {
      return (
        <form onSubmit={this.updateCar} method="PUT">
          <div className="modal open ">
            <div className="modal-container">
              <div className="modal-header">
                <div className="header-text">UPDATE QUANTITY</div>
              </div>
              <div className="modal-body">
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Product Name:</span>
                    <span className="lbl-fname">
                      <input className="Input_name_storage"
                          onChange={(event) => {
                            this.isChangeData(event);
                          }}
                          value={name}
                        type="text"
                        name="name"
                        style={{ width: "100px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Price:</span>
                    <span className="lbl-email">
                      <input className="Input_Price"
                        onChange={(event) => {
                          this.isChangeData(event);
                        }}
                        value={prices}
                        type="text"
                        name="prices"
                        style={{ width: "100px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Quantity:</span>
                    <span className="lbl-phonenumber">
                      <input  className="Input_Number"
                        onChange={(event) => {
                          this.isChangeData(event);
                        }}
                        value={number}
                        type="number"
                        name="number"
                        style={{ width: "100px" }}
                      />
                    </span>
                  </div>
                </div>

                <div className="mt-4 mb-16 confirm">
                  <button className="btn btn-danger btn-return">Return</button>
                  <button className="btn btn-success btn-update">Update</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        
      );
    } else {
      return "";
    }
  };

  numberFormat(a) {
    var nf = new Intl.NumberFormat();
    return nf.format(a);
  }

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  changeModalStatus = (event) => {
    const id = event.target.value;
    axios
      .get("http://localhost:3000/api/edit_car", {
        params: { _id: parseInt(id) },
      })
      .then((data) => {
        this.setState({
          name: data.data.name,
          number: data.data.number,
          prices: data.data.prices,
          _id: data.data._id,
          modalStatus: !this.state.modalStatus,
        });
      });
  };

  updateCar = () => {
    const new_car = {
      name: this.state.name,
      prices: this.state.prices,
      number: this.state.number,
    };

    axios
      .put(`http://localhost:3000/api/update_car/${this.state._id}`, new_car)
      .then((data) => {
        console.log("Update success");
       
      });
  };

  handleCheckChildElement = (event) => {
    let cars = this.state.cars;
    cars.forEach((car) => {
      if (car._id === parseInt(event.target.value))
        car.isChecked = event.target.checked;
    });
    this.setState({ cars: cars });
  };

  multiDeleteCar = () => {
    let ids = this.state.cars
      .filter((car) => car.isChecked === true)
      .map((car) => parseInt(car._id));
    axios
      .delete(`http://localhost:3000/api/multi_delete_car`, {
        params: { ids: ids },
      })
      .then(() => {
        this.setState({
          ids: [],
        });
        window.location.reload(false);
      });
  };

  deleteCar = (event) => {
    axios
      .delete(`http://localhost:3000/api/delete_car/${event.target.value}`)
      .then(() => {
        console.log("Delete success");
        window.location.reload(false);
      });
  };

  checkedAll = (event) => {
    let cars = this.state.cars;
    cars.forEach((car) => (car.isChecked = event.target.checked));
    this.setState({
      cars: cars,
    });
  };
  render() {
    
    return (
      <div className="content">
        <div className="heading mb-16">STORAGE MANAGER</div>
        <div className="box-content">
          <div className="sub-heading mb-16">LIST OF PRODUCTS</div>
          <div className="nav-menu-content mb-16">
            <ul className="list-menu">
            
              <li className="item-menu">
                <button className="btn btn-light" onClick={this.multiDeleteCar}>
                  Delete All
                  <i class="fa fa-trash pl-1"></i>
                </button>
              </li>
            </ul>
          
          </div>
          {/* Filter Model */}
          {/* Table Model */}
          <table className="table table-striped table-model">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    onClick={(event) => this.checkedAll(event)}
                  />
                </th>
                <th scope="col">ID</th>
              
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cars.map((car,key) => (
                <tr>
                  <td>
                    <Checkbox
                      {...car}
                      handleCheckChildElement={this.handleCheckChildElement}
                    />
                  </td>
                  <td>{key+1}</td>
              
                  <td>{car.name}</td>
                  <td>{this.numberFormat(car.prices)} VNĐ</td>
                  <td>{car.number}</td>
                  <td>
                    <button
                      value={car._id}
                      className="btn btn-primary edit-button"
                      onClick={(event) => this.changeModalStatus(event)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger delete-button"
                      value={car._id}
                      onClick={(event) => this.deleteCar(event)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {this.showModal()}
      </div>
    );
  }
}
