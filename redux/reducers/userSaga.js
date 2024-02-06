import {takeEvery, put, call} from 'redux-saga/effects';
import {getUserCred} from '../../services/ReqAPI';
import {
  GET_LOGIN_CRED,
  GET_LOGIN_CRED_SUCCESS,
  GET_LOGIN_CRED_FAILURE,
} from '../actionsCreaters/Action';

function* fetchUser({payload: data}) {
  console.log('sagaUsersPayload', data);
  try {
    const user = yield call(getUserCred, data);
    console.log('sagaUsers', user.data);
    yield put({type: GET_LOGIN_CRED_SUCCESS, payload: user.data});
  } catch (e) {
    console.log('sagaError', e);
    yield put({type: GET_LOGIN_CRED_FAILURE, payload: e});
  }
}

function* userSaga() {
  yield takeEvery(GET_LOGIN_CRED, fetchUser);
}

export default userSaga;
