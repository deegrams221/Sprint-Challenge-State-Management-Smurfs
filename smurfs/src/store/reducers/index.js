// Set up initialState & reducers
// set up Reducer logic for actions

import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS} from '../actions';

const initialState = {
  smurfs: [
    {
      name: 'name',
      age: 'age',
      height: 'height',
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
        isLoading: true,
        error: ''
      };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload,
          error: ''
        };
    default:
      return state;
  }
}