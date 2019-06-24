// creating initialState variable, set to an object
const initialState = {};
// creating rootReducer fn. takes in a state object, action object, and returns a new state depending on the type property within the action object
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
