import { put, takeLatest, select } from 'redux-saga/effects'

import { selectOrder } from './selectors'
import resturantsApi from '../api/resturants'
import checkoutApi from '../api/checkout'
import { postOrderStartAction, postOrderErrorAction, postOrderSuccessAction } from './actionTypes'


function* getResturantsSaga() {
  try {
    const resturants = yield resturantsApi.getResturants()
    yield put({ type: 'GET_RESTURANTS_SUCCESS', payload: resturants.data })
  }
  catch (error) {
    yield put({ type: 'GET_RESTURANTS_FAILED', error })
  }
}

function* postOrderSaga(orderPayload) {
  try {
    yield put({ type: postOrderStartAction })
    const mockOrder = yield select(selectOrder)
    yield checkoutApi.postOrder()
    yield put({ type: postOrderSuccessAction })
  } catch (error) {
    yield put({ type: postOrderErrorAction, error })
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_RESTURANTS', getResturantsSaga)
  yield takeLatest('POST_ORDER', postOrderSaga)
}