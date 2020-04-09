import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	enhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
