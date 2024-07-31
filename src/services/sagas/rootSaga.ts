// rootSaga.ts
import { all } from 'redux-saga/effects';
import watchFetchData from './sagas';

export default function* rootSaga() {
    yield all([
        watchFetchData(),
    ]);
};
