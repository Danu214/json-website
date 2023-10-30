import { Actions, Product } from '../interface';

const setProducts = (areas: Product[]) => {
  return {
    type: Actions.SET_PRODUCTS,
    payload: areas,
  };
};

const clearProducts = () => {
  return {
    type: Actions.CLEAR_PRODUCTS,
  };
};

export default {
  setProducts,
  clearProducts,
};
