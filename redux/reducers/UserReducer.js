import {
  GET_LOGIN_CRED,
  GET_LOGIN_CRED_SUCCESS,
  GET_LOGIN_CRED_FAILURE,
} from '../actionsCreaters/Action';

const initialUserState = {
  userDetails: {
    mobile: '',
    pin: '',
    plan: '',
    validTill: '',
    bill: '',
    dueDate: '',
    dataRemaining: '',
    id: '',
  },
  errorMsg: '',
};

const UserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_LOGIN_CRED_SUCCESS:
      console.log('GET_LOGIN_CRED_SUCCESS', action.payload);
      return {
        ...state,
        userDetails: action.payload,
      };
    case GET_LOGIN_CRED_FAILURE:
      console.log('GET_LOGIN_CRED_FAILURE', action.payload);
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      console.log('default', action.payload);
      return state;
  }
};

export default UserReducer;
