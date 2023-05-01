import CounterZu from './components/CounterZu';
import Counter from './components/CounterRe';
import { Provider } from 'react-redux';
import store from './store/redux/store';

function App() {

  return (
    <>
      <p>Redux</p>
      <Provider store={store}>
        <Counter/>
      </Provider>

      <p>Zustand</p>
      <CounterZu/>
    </>
  )
}

export default App
