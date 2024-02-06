import {configureStore, combineReducers} from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer';
import LoaderReducer from './reducers/LoaderReducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from './reducers/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    user: UserReducer,
    loader: LoaderReducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);

export default store;
