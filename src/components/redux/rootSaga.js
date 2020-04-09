import { all } from 'redux-saga/effects';
// import { userAuthSaga } from './Authentication';
// import { userPropSaga } from './User';
import { productSaga } from './product';

export default function* rootSaga() {
    yield all([
        // userAuthSaga(),
        // userPropSaga(),
        productSaga()
    ]);
}