import { put, takeEvery, all, takeLatest } from 'redux-saga/effects'


function* getResturantsSaga() {
    try {
    //   const products = yield call(Api.fetch, '/products')
      yield put({ type: 'GET_TRANSACTIONS_SUCCESS', products })
    }
    catch(error) {
      yield put({ type: 'GET_TRANSACTIONS_FAILED', error })
    }
  }

export default function* rootSaga() {
  yield takeLatest('GET_RESTURANTS', getResturantsSaga)
}