// actions.js
import { AppState } from '../state';

export const incrementCounter = () : AppState => ({
    type: 'INCREMENT_COUNTER',
  });