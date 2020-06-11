import { firstAction } from './actionTypes'

export const dummyAction = (data) => {
    return {
        types: firstAction,
        payload: {
            data
        }
    }
}