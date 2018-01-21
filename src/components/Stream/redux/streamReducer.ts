import { FETCH_STREAM_PENDING, FETCH_STREAM_FULFILLED, FETCH_STREAM_REJECTED } from './constants'
import { IStreamState } from '../Models'

const initialState : IStreamState = {
  blogs: [],
  fetching: false,
  fetched: false,
  error: false
}

export default function blogReducer (state = initialState, action: any): IStreamState {
  switch (action.type) {
    case FETCH_STREAM_PENDING:
      return {
        ...state,
        blogs: [],
        fetching: true
      }
    case FETCH_STREAM_FULFILLED:
      return {
        ...state,
        fetching: false,
        blogs: action.payload
      }
    case FETCH_STREAM_REJECTED:
      return {
        ...state,
        fetching: false,
        error: true
      }
    default:
      return state
  }
}