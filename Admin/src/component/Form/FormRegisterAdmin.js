import React, { Component } from "react";
import axios from "axios";
import Checkbox from "../Storage/Checkbox";

export default class FormRegisterAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: [],
      cus: [],
      info: [],
      modalStatus: false,
      edit_car: null,
      nameCustomer: "",
      nameCar: "",
      nameModel: "",
      phoneNumber: null,
      email: "",
      address: "",
      note: "",
      status: null,
      _id: null,
      ids: [],
      checked: false,
      stringID: "",
      customerCar: null,
      buttonState: true,
      nd: "",
    };
  }
  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      nd: event.target.value,
    });
  };
  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      nd: event.target.value,
    });
    this.props.checkConnectProps(this.state.nd);
  };
  handleStatus = () => {
    this.setState({
      buttonState: !this.state.buttonState,
    });
  };

  showModal = () => {
    const {
      nameCustomer,
      nameCar,
      nameModel,
      phoneNumber,
      email,
      address,
      note,
    } = this.state;
    if (this.state.modalStatus === true) {
      return (
        <form onSubmit={this.updateCustomer} method="PUT">
          <div className="modal open">
            <div className="modal-container">
            
              <div className="modal-header">
                <div className="header-text">CUSTOMER INFORMATION</div>
              </div>
              <div className="modal-body">
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Full Name:</span>
                    <span className="lbl-fname">
                      <input value={nameCustomer} name="name" className="name_Customer"/>
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Email:</span>
                    <span className="lbl-email">
                      <input value={email} name="email" className="Input_Customer" />
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Phone Number:</span>
                    <span className="lbl-phonenumber">
                      <input value={phoneNumber} name="phoneNumber" className="phone_customer"  />
                    </span>
                  </div>
                </div>
                <div className="row mb-32">
                  <div className="col">
                    <span className="lbl-title">Address:</span>
                    <span className="lbl-address">
                      <input value={address} name="address" className="address_customer"/>
                    </span>
                  </div>
                </div>
                <div className="row mb-40">
                  <div className="col">
                    <span className="lbl-title">Vehicle Type:</span>
                    <span className="lbl-vehicletype">
                      <input value={nameCar} name="nameCar"  className="vehicletype_customer"/>
                    </span>
                  </div>
                </div>
                <div className="row mb-40">
                  <div className="col">
                    <span className="lbl-title">Note:</span>
                    <span className="lbl-note">
                      <input value={note} name="note"  className="note_customer" />
                    </span>
                  </div>
                </div>
                <div className="mb-32 confirm">
                  <button className="btn btn-success btn-return" >return </button>
                  <button className="btn btn-danger btn-update"  >Accept</button>
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

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/get_data")
      .then((response) => response.data)
      .then((data) => {
        debugger
        this.setState({
          info: data.map((data) => ({ ...data, isChecked: false })),
        });
      });
  }

  changeModalStatus = (event) => {
    
    const id = event.target.value;
    axios
      .get("http://localhost:3000/api/edit_customer", {
        params: { _id: id },
      })
      .then((data) => {
      debugger
        this.setState({
          nameCustomer: data.data.customer.name,
          nameCar: data.data.car.name,
          // nameModel: data.data.name,
          phoneNumber: data.data.customer.phoneNumber,
          email: data.data.customer.email,
          address: data.data.customer.address,
          note: data.data.customer.note,
          status: data.data.status,
          _id: data.data._id,
          modalStatus: !this.state.modalStatus,
       
        });
      });
  };
  updateCustomer = () => {
    // const value = event.target.value
      axios
      .put(
        `http://localhost:3000/api/update_customer/${this.state._id}`,
        {
          status: 0,
        }
      )
      .then((data) => {
        console.log("Update success");
      });
  };
  handleCheckChildElement = (event) => {
    let info = this.state.info;
    info.forEach((car) => {
      if (car._id === parseInt(event.target.value))
        car.isChecked = event.target.checked;
    });
    this.setState({ info: info });
  };

  multiDeleteCustomer = () => {
    let ids = this.state.info
      .filter((info) => info.isChecked === true)
      .map((info) => parseInt(info._id));
    axios
      .delete(`http://localhost:3000/api/multi_delete_customer`, {
        params: { ids: ids },
      })
      .then(() => {
        this.setState({
          ids: [],
        });
        window.location.reload(false);
      });
  };
  checkedAll = (event) => {
    let info = this.state.info;
    info.forEach((car) => (car.isChecked = event.target.checked));
    this.setState({
      info: info,
    });
  };
// RenderInfo = () => {
//   const { info } = this.state;
//   debugger
//   info.map((info, key) => {
//   //   debugger
//   //   if (info.customer === null || info.car === null) {
//   //     return "";
//   //   }
//   //   else{
//       return(
       
//       )
//     // }
//   });
// }


  StyleStatus(status) {
    if (status === 1) {
      return <i className="fa fa-exclamation-circle" />;
    } else if (status === 0) {
      return <i className="fa fa-check-circle" />;
    } 
  }
  checkedAll = (event) => {
    let info = this.state.info;
    info.forEach((car) => (car.isChecked = event.target.checked));
    this.setState({
      info: info,
    });
  };

  render() {
    console.log(this.state.info);
    return (
      <div className="content">
        <div className="heading mb-16">REGISTER TEST DRIVE</div>
        <div className="box-content">
          <div className="sub-heading mb-16">LIST REGISTER TEST DRIVE</div>
          <div className="nav-menu-content mb-16">
            <ul className="list-menu">
            
              <li className="item-menu">
                <button
                  className="btn btn-light"
                  onClick={this.multiDeleteCustomer}
                >
                  Delete All
                  <i class="fa fa-trash pl-1"></i>
                </button>
              </li>
            </ul>
          
          </div>
         
          {/* Table Model */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    name
                    id
                    onClick={(event) => this.checkedAll(event)}
                  />
                </th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Model</th>
                <th scope="col">Status</th>
                <th scope="col">Confirm</th>
              </tr>
            </thead>
            <tbody>
              {
               this.state.info.map((info,key) => {
                 if(info.customer === null || info.car === null){
                  return "";
                 }else{
                    return(
                <tr>
                <td>
                <Checkbox
                      {...info}
                      handleCheckChildElement={this.handleCheckChildElement}
                    />
                </td>
                <td>{key + 1}</td>
                <td>{info.customer === null ? "" : info.customer.name}</td>
                <td>{info.customer === null ? "" : info.customer.phoneNumber}</td>
                <td>{info.customer === null ? "" : info.customer.email}</td>
                <td>{info.customer === null ? "" : info.customer.address}</td>
                <td>{info.car === null ? "" : info.car.name}</td>
                <td>{this.StyleStatus(info.status)}</td>
                <td>
                  <button
                    value={info._id}
                    className="btn btn-primary edit-button"
                    onClick={(event) => this.changeModalStatus(event)}
                  >
                    Confirm
                  </button>
                </td>
              </tr>
                    )
                 } 
               })
              }
              </tbody>
          </table>
        </div>
        {/* When user double-click inline customer add class name 'open' to open modal CUSTOMER DETAIL */}
        {this.showModal()}
      </div>
    );
  }
}
