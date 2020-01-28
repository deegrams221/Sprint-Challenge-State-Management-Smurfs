//  Build out components
// import connect and set up mSTP

// getSmurfData  name: '', age: [], height: '', id: []

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfData} from '../store/actions';
import './App.css';
 
const SmurfList = ({getSmurfData, smurfs, isFetching}) => {
  useEffect(() => {
    getSmurfData();
  }, [getSmurfData])

  if(isFetching) {
    return <h2>Fetching Smurfs!</h2>
  }

  return (
    <div className="smurf-list">
      {smurfs.map((smurf) => {
        return (
          <div>
            <div className="smurf-content">
              <h2>Smurf: {smurf.name}</h2>
            </div>
            <div className="smurf-description">
              <p>Height: {smurf.height}</p>
              <p>Age: {smurf.age}</p>
              <hr />
            </div>
        </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log ('mSTP: ', state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getSmurfData})(SmurfList);