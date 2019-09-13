//  Action Creators/Types
//  import Axios and set up dispatch
//    axios.get(`http://localhost:3333/smurfs`)
//    axios.post('http://localhost:3333/smurfs'): name: '', age: [], height: '', id: []

import axios from 'axios';

// action types
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const SEND_SMURF_START = 'SEND_SMURF_START';
export const SEND_SMURF_SUCCESS = 'SEND_SMURF_SUCCESS';

// action creators
export const sendSmurfData = () => dispatch =>  {
  // dispatch and axios request - send
  dispatch({type: SEND_SMURF_START});
    axios
      .post('http://localhost:3333/smurfs', {
            name: '',
            height: '',
            age: [],
            id: []
      })
      .then(res => {
        dispatch({type: SEND_SMURF_SUCCESS, payload: res.data});
      });
};

export const getSmurfData = () => dispatch => {
  // dispatch and axios request - fetch
    dispatch({ type: FETCH_SMURF_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // console.log("axios request: ", res.data)
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data});
      })
      .catch(error => {
        // console.log("catch error: ", error.res.message);
        dispatch({type: FETCH_SMURF_FAILURE, payload: error.response});
      });
}; 