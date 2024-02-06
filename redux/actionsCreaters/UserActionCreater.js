import {
  GET_LOGIN_CRED,
  GET_LOGIN_CRED_SUCCESS,
  GET_LOGIN_CRED_FAILURE,
} from './Action';

export const getLoginCred = data => {
  return {type: GET_LOGIN_CRED, payload: data};
};

export const getLoginCredSuccess = () => ({
  type: GET_LOGIN_CRED_SUCCESS,
});

export const getLoginCredFailure = () => ({
  type: GET_LOGIN_CRED_FAILURE,
});
