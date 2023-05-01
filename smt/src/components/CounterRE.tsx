import { connect } from 'react-redux';
import { incrementCounter } from '../store/redux/actions';

const Counter = ({ counter, incrementCounter } : any) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state: { counter: any; }) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  incrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);