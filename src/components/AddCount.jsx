/* eslint react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount } from '../redux/actions';

const AddCount = ({ count, addCountDispatch }) => {
  return (
    <div>
      <style jsx>
        {`
          div {
            padding: 0 0 20px 0;
          }
        `}
      </style>
      <h1>
        AddCount:
        <span>{count}</span>
      </h1>
      <button type="button" onClick={addCountDispatch}>
        Add To Count
      </button>
    </div>
  );
};

const mapStateToProps = ({ clock }) => ({ count: clock.count });

const mapDispatchToProps = dispatch => {
  return {
    addCountDispatch: bindActionCreators(addCount, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
