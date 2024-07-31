// sagas.ts
import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import { Data } from '../../types/types';
import { fetchDataFailure, fetchDataSuccess } from '../slices/slice';
import { GETTESTIMONIALS } from '../api/Api';

// Define the type for the saga generator function
export function* fetchDataSaga({ payload, type }: { payload: any, type: string }): Generator<CallEffect | PutEffect, void, { data: Array<Data> }> {
    try {
        const response = yield call(GETTESTIMONIALS);
        const data: Array<Data> = response.data;
        yield put(fetchDataSuccess(data));
    } catch (error: any) {
        yield put(fetchDataFailure(error.message));
    }
}

export default function* watchFetchData() {
    yield takeLatest('productSlice/fetchDataRequest', fetchDataSaga);
}