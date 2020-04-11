import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h4>Added features</h4>
      {props.car.features.length ? (
        <ul className="no-dots" type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ul>
      ) : (
        <p className="black-text">You can purchase items from the store.</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    car: state.car
  }
}

//export default AddedFeatures;
export default connect(mapStateToProps, {})(AddedFeatures);
