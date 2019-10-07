import React, { Component } from "react";

class ValidationCountComponent extends Component {
  state = {};
  render() {
    return (
      <div className="row" style={rowStyle}>
        <div className="col-8">{this.props.name}</div>
        <div className="col-4" style={colStyle}>
          {this.props.count}
        </div>
      </div>
    );
  }
}

const rowStyle = {
  width: "20%",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "lightblue"
};

const colStyle = {
  backgroundColor: "lightblue",
  color: "white",
  fontWeight: "500"
};

export default ValidationCountComponent;
