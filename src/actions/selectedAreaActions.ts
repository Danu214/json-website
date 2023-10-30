import { Actions, Area } from '../interface';

const setSelectedArea = (area: Area) => {
  return {
    type: Actions.SET_SELECTED_AREA,
    payload: area,
  };
};

const clearSelectedArea = () => {
  return {
    type: Actions.CLEAR_SELECTED_AREA,
  };
};

export default {
  setSelectedArea,
  clearSelectedArea,
};
