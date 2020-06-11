import { put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import resturantsApi from '../api/resturants'


function* getResturantsSaga() {
    try {
      console.log(resturantsApi, 'resturantsApi')
      const resturants = yield resturantsApi.getResturants()
      console.log(resturants.data, 'resturants')
      yield put({ type: 'GET_RESTURANTS_SUCCESS', payload: resturants.data })
    }
    catch(error) {
      yield put({ type: 'GET_RESTURANTS_FAILED', error })
    }
  }

export default function* rootSaga() {
  yield takeLatest('GET_RESTURANTS', getResturantsSaga)
}