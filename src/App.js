import { useDispatch, useSelector } from "react-redux"; //we dispatch our actions
import { deposit, withdraw, reset } from "./store/balance/actions"; //import our actions here!
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch(); //this hook must be called in the root scope of component
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState(0);

  //once we submit the form/input customAmount
  const handleSubmit = (event) => {
    //prevent the page from refreshing
    event.preventDefault();
    //what is my customAmount?
    console.log("what is my customAmount?", customAmount);
    //Dispatch our customAmount to our reducer store!
    dispatch(deposit(customAmount));
    //clean up the input field after submit
    setCustomAmount(0);
  };

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit $10
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw $10
      </button>
      <button
        onClick={() => {
          dispatch(reset()); //there's no diference if I put a0 o an empty ()?
        }}
      >
        Reset
      </button>
      <p>Deposit custom amount:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customAmount}
          onChange={(event) => {
            setCustomAmount(parseInt(event.target.value)); //When user press enter it will set the amount
          }}
        />
      </form>
    </div>
  );
}

export default App;
