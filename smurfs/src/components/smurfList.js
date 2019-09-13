//  Build out components
// import connect and set up mSTP

// getSmurfData  name: '', age: [], height: '', id: []

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfData} from '../store/actions';
 
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
          <div role="list" class="ui divided relaxed list">
            <div role="listitem" class="item">
              <div class="content">
                <div class="header">Smurf: {smurf.name}</div>
              </div>
              <div class="content">
                <div class="description">
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                  <hr />
                </div>
              </div>
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