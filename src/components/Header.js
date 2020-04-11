import React from 'react';
import { connect } from "react-redux";

const Header = props => {
  return (
    <div className="title">
      <figure className="image is-5by3">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2 className="black-text">{props.car.name}</h2>
      <h2 className="black-text">Amount: ${props.car.price}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}


export default connect(
  mapStateToProps,
  {}
)(Header);
