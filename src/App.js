import React from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";
import "./App.css";

class App extends React.Component {
  state = {
    iname: "",
    iprice: "",
  };

  onFormSubmit = (iname, iprice) => {
    this.setState({ iname: iname });
    this.setState({ iprice: iprice });
  };

  render() {
    return (
      <div className="App">
        <Form submittedVals={this.onFormSubmit} />
        <ItemsList itemName={this.state.iname} itemPrice={this.state.iprice} />
      </div>
    );
  }
}

export default App;
