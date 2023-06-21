import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './counterActionTypes';

export const incrementCounterAction = (parameter) => {
   return {
      type: INCREMENT_COUNTER,
      payload: parameter
   }
}
export const decrementCounterAction = () => {
   return {
      type: DECREMENT_COUNTER
   }
}