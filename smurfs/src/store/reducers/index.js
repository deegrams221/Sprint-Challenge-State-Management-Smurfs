// Set up initialState & reducers
// set up Reducer logic for actions

const initialState = {
  smurfs: [
    {
      id: Math.random(),
      name: 'Name',
      age: 'Type',
      height: '5cm'
    },
  ],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}