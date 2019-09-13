// Set up initialState & reducers
// set up Reducer logic for actions

import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS} from '../actions';

const initialState = {
  smurfs: [
    {
      name: 'name',
      height: 'height',
      age: 'age',
      id: Math.random()
    },
  ],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
        };
    default:
      return state;
  }
}