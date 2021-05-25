const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  //our actions will always have an 'action.type' and we want to do different things based on that 'type'
  switch (action.type) {
    //add a case in our reducer
    case "balance/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
