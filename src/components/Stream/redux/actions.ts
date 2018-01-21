import { FETCH_STREAM_PENDING, FETCH_STREAM_FULFILLED, FETCH_STREAM_REJECTED } from './constants'
import { IStreamService } from '../service/IStreamService'
import { MockService } from '../service/MockService'
import { Blog, IStreamState } from '../Models'
import { Dispatch } from 'redux'

const service: IStreamService = new MockService()

export function getStream() {
  return {
    type: FETCH_STREAM_PENDING
  }
}

export function getStreamSuccess(stream: Blog[]) {
  return {
    type: FETCH_STREAM_FULFILLED,
    payload: stream
  }
}

export function getStreamFailure(error: Error) {
  return {
    type: FETCH_STREAM_REJECTED,
    payload: error
  }
}

export function fetchStream() {
  return (dispatch: Dispatch<IStreamState>) => {
    dispatch(getStream())
    service.getStream()
      .then((data) => {
        dispatch(getStreamSuccess(data))
      })
      .catch((error) => {
        dispatch(getStreamFailure(error))
      })
  }
}