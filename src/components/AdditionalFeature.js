import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



const mapStateToProps = state => {
  console.log("jt: AddedFeature.js: mapPropToState: state: ", state);
  return {
    
  };
};


export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
