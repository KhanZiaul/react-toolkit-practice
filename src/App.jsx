import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Redux/features/counter/counterSlice";

const App = () => {
  // const count = useSelector((state) => state.counter.count)
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='h-[50vh] flex justify-center items-center'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>Increment/Decrement Counter</h2>
        <p className='text-xl font-semibold text-center'>using redux-toolkit</p>
        <div className='flex justify-center items-center mt-7 gap-5'>
          <button onClick={() => dispatch(decrement())} className='btn font-bold'>-</button>
          <p className='font-bold text-xl'>{count}</p>
          <button onClick={() => dispatch(increment())} className='btn font-bold'>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className='btn font-bold'>Incremet value ( 5 )</button>
        </div>
      </div>
    </div>
  );
};

export default App;