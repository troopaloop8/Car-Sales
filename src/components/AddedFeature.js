import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li className="black-text no-dots" >
      
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log("jt: AddedFeature.js: mapPropToState: state: ", state);
//   return {
//     features: state.car.features
//   };
// };


export default connect(null, { removeFeature })(AddedFeature);
