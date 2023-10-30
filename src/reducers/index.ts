import areas from './areas';
import selectedArea from './selectedArea';
import products from './products';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  areas,
  selectedArea,
  products,
});

export default rootReducer;
