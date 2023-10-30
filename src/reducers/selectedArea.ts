import { AnyAction } from 'redux';
import { Actions, Area } from '../interface';

const selectedArea = (state: Area | null = null, action: AnyAction) => {
  switch (action.type) {
    case Actions.SET_SELECTED_AREA:
      return { ...action.payload };
    case Actions.CLEAR_SELECTED_AREA:
      return null;
    default:
      return state;
  }
};

export default selectedArea;
