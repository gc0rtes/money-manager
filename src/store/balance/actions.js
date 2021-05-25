//a function that returns an "action object" called an "action creator"
export const deposit = (depositAmount) => ({
  type: "balance/deposit",
  payload: depositAmount,
});
