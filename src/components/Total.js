import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h1>Total Amount: ${props.car.price + props.additionalPrice}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {}
)(Total);
