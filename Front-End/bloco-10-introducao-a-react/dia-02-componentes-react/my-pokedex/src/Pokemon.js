import React from "react";
import Prototype from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.averageWeight.value}{this.props.averageWeight.measurementUnit}</p>
        <img src={this.props.image}></img>
      </div>
    );
  }
}

Pokemon.prototype = {
  name: Prototype.string,
  type: Prototype.string,
  value: Prototype.number,
  measurementUnit: Prototype.string,
  image: Prototype.string,
};

export default Pokemon;