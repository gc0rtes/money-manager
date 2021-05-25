//Selector: Get data from the store (reducer). reducers (and selectors actually) need to be pure functions.
export const selectBalance = (reduxState) => reduxState.balance.amount;
//'balance' come from /store/index.js and 'amount' from balance/reducer.js
