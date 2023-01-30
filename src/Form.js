import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "", itemPrice: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name) {
    this.setState({ itemName: name.target.value });
  }
  handlePriceChange(price) {
    this.setState({ itemPrice: price.target.value });
  }
  handleSubmit(e) {
    alert(
      "Item Name: " + this.state.itemName + " Price: " + this.state.itemPrice
    );
    this.props.submittedVals(this.state.itemName, this.state.itemPrice)
    e.preventDefault();
  }
  render() {
    return (
      <div className="wrap">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2>{this.props.name}</h2>
            <h1>
              FORM <span>( Add New Item )</span>
            </h1>
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter Item Name"
                    value={this.state.itemName}
                    onChange={this.handleNameChange}
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    className="form-control"
                    placeholder="Enter Price"
                    value={this.state.itemPrice}
                    onChange={this.handlePriceChange}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <button className="btn btn-primary w-100">Add Item</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
