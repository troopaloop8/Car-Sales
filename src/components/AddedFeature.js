import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log("jt: AddedFeature.js: mapPropToState: state: ", state);
  return {
    
  };
};


export default connect(
  null,
  { removeFeature }
)(AddedFeature);
