import Counter from "./component/Counter";
import ToTalCount from "./component/ToTalCount";
import { useDispatch, useSelector } from "react-redux";
import { decriment, incriment } from "./featurs/countersSlice";

function App() {

  // redux start ==================
  const counters = useSelector((store)=> store.counters);
  const dispatch = useDispatch();
  const toTalCount = counters.reduce((sum, item) => sum + item.value, 0);


  const handleIncrement = (id)=>{
      dispatch(incriment(id))
  };
  const handleDecrement = (id)=>{
      dispatch(decriment(id))
  };
  return (
    <div>
      {counters.map((counterbd) => (
        <Counter
          key={counterbd.id}
          value={counterbd.value}
          onIncrement={() => handleIncrement(counterbd.id)}
          onDecrement={() => handleDecrement(counterbd.id)}
        />
      ))}
      <ToTalCount toTalCount={toTalCount} />
    </div>
  );
}

export default App;
