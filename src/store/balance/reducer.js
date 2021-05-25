//Reducer: Here is my store! A collection of reducers
//Is how my state is defined according the actions

const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  //our actions will always have an 'action.type' and we want to do different things based on that 'type'
  switch (action.type) {
    //add a case in our reducer
    case "balance/deposit": {
      console.log("action deposit:", action);
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "balance/withdraw": {
      console.log("action withdraw:", action);
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    case "balance/reset": {
      console.log("action reset:", action);
      return {
        ...state,
        amount: initialState.amount,
      };
    }
    default: {
      return state;
    }
  }
}
