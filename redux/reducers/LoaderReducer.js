import {SET_LOAD, SET_FREE} from '../actionsCreaters/Action';
const initalState = {
  loading: false,
};

const loaderReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOAD:
      return {
        ...state,
        loading: true,
      };
    case SET_FREE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
