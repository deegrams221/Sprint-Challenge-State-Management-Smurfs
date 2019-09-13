// Set up initialState & reducers
// set up Reducer logic for actions

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

    default:
      return state;
  }
}