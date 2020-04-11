import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ul className="no-dots" type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ul>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("jt: AdditionalFeatures.js: mapPropToState: state: ", state);
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);

