import "../css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import { Component } from "react";
import Chatbox from "./Chatbox/Chatbox";
import axios from "axios"

import Landing from "./Landing/Landing";
import MenuSecondary from "./Menu/MenuSecondary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      searchnd: "",
      cars:[],
    
    };
  }
  checkConnect = (dl) => {
    // console.log("du lieu bo nhan duoc la:" + dl);
    this.setState({ searchnd: dl });
 
  };
  componentDidMount() {
    axios.get("http://localhost:3000/api/get_image").then((data) => {
      this.setState({
        cars: data.data,
      });
    });
  }
  render() {
    var ketqua = [];
    // debugger
    this.state.cars.forEach((item) => {
   
      if (item._doc.files_id.metadata.name.indexOf(this.state.searchnd) !== -1) {
        ketqua.push(item);
      }
    });
    // console.log(ketqua);
    return (
      <div>
        <Router>
          <Menu     checkConnectProps={(dl) => this.checkConnect(dl)}
          />
          <Landing   dataUserProps={ketqua} ></Landing>
          <Footer />
          <Chatbox />
        </Router>
      </div>
    );
  }
}

export default App;
