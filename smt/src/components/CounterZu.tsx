import useStore from '../store/zustand/store';
import { AppState } from '../store/state';

const Counter = () => {
  const counter = useStore((state : any) => state?.counter);
  const incrementCounter = useStore((state : any) => state?.incrementCounter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;