import { Actions, Area } from '../interface';

const setAreas = (areas: Area[]) => {
  return {
    type: Actions.SET_AREAS,
    payload: areas,
  };
};

const clearAreas = () => {
  return {
    type: Actions.CLEAR_AREAS,
  };
};

export default {
  setAreas,
  clearAreas,
};
