import { AnyAction } from 'redux';
import { Actions, Product } from '../interface';

const products = (state: Product[] = [], action: AnyAction) => {
  switch (action.type) {
    case Actions.SET_PRODUCTS:
      return action.payload;
    case Actions.CLEAR_PRODUCTS:
      return [];
    default:
      return state;
  }
};

export default products;
