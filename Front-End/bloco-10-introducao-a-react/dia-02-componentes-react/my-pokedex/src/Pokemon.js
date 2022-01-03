import React from "react";
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.value}{this.props.measurementUnit}</p>
        <img src={this.props.image} alt='Imagem pokemon'></img>
      </div>
    );
  }
}

Pokemon.Prototypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
};

export default Pokemon;