import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch(); //this hook must be called in the root scope of component
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
