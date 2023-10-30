import { AnyAction } from 'redux';
import { Actions, Area } from '../interface';

const areas = (state: Area[] = [], action: AnyAction) => {
  switch (action.type) {
    case Actions.SET_AREAS:
      return action.payload;
    case Actions.CLEAR_AREAS:
      return [];
    default:
      return state;
  }
};

export default areas;
