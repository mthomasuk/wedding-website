import React, { PureComponent } from "react";
import "./Form.css";

class Form extends PureComponent {
  state = {
    name: null,
    address: []
  };

  onChange = (e, index) => {
    const { value } = e.target;
    if (!index && index !== 0) {
      this.setState({
        name: value
      });
    } else {
      const { address } = this.state;
      address[index] = value;
      this.setState({
        address
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <label>
          <span className="field-name">Name/s</span>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="e.g. Simon and Jade"
          />
        </label>
        <label>
          <span className="field-name">Address</span>
          <input
            onChange={e => this.onChange(e, 0)}
            type="text"
            placeholder="Building name or number"
          />
          <input
            onChange={e => this.onChange(e, 1)}
            type="text"
            placeholder="Street name"
          />
          <input
            onChange={e => this.onChange(e, 2)}
            type="text"
            placeholder="City"
          />
          <input
            onChange={e => this.onChange(e, 3)}
            type="text"
            placeholder="Country"
          />
          <input
            onChange={e => this.onChange(e, 4)}
            type="text"
            placeholder="Postcode"
          />
        </label>
        <button>ENTER →</button>
      </form>
    );
  }
}

export default Form;
