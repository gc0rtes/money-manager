//Here we put all actions to perfom inside the store>reducer
//Action: a function that returns an "action object" called an "action creator"

//Action type deposit +$10
export const deposit = (depositAmount) => ({
  type: "balance/deposit",
  payload: depositAmount,
});

//New action.type withdraw -$10
export const withdraw = (withdrawAmount) => ({
  type: "balance/withdraw",
  payload: withdrawAmount,
});

//Action type Reset to initial state {amount: 0}
export const reset = (resetToInitialState) => ({
  type: "balance/reset",
  payload: resetToInitialState,
});
