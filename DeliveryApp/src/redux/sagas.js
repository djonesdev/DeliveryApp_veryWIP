import { put, takeLatest, select } from 'redux-saga/effects'
import * as NavigationService from '../navigation/navigationService'
import { selectOrder } from './selectors'
import resturantsApi from '../api/resturants'
import checkoutApi from '../api/checkout'
import { postOrderStartAction, postOrderFailedAction, postOrderSuccessAction } from './actionTypes'

// Redux-saga is my preferred middlewear over Thunk, i've used both though. 
// I find sagas are much more readable and give you extra control over side effects, 
// also prevents any weird race conditions that might happen with some lazy code by giving predictable step by step execution using generators. 

function* getResturantsSaga() {
  try {
    const resturants = yield resturantsApi.getResturants()
    let responseArray = []
    const transformedPayload = resturants.data.map(item =>  responseArray.push({ ...item, image: `data:image/jpeg;base64,${item.image}` }))
    console.log(responseArray, 'transformedPayload')
    yield put({ type: 'GET_RESTURANTS_SUCCESS', payload: resturants.data })
  }
  catch (error) {
    yield put({ type: 'GET_RESTURANTS_FAILED', error })
  }
}

function* postOrderSaga() {
  try {
    yield put({ type: postOrderStartAction })
    const order = yield select(selectOrder)
    yield checkoutApi.postOrder(order)
    NavigationService.navigate('Resturants')
    yield put({ type: postOrderSuccessAction })
  } catch (error) {
    yield put({ type: postOrderFailedAction, error })
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_RESTURANTS', getResturantsSaga)
  yield takeLatest('POST_ORDER', postOrderSaga)
}