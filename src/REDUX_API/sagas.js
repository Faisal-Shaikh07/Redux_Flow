// sagas.js

import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./constants";
import { fetchIndicesSuccess, fetchIndicesFailure } from "./actions";
import axios from "axios";

function* fetchIndicesSaga() {
  try {
    const response = yield axios.get("https://jsonplaceholder.typicode.com/posts");
    yield put(fetchIndicesSuccess(response.data));
  } catch (error) {
    yield put(fetchIndicesFailure(error.message));
  }
}

export function* watchFetchIndices() {
  yield takeLatest(actionTypes.FETCH_INDICES_REQUEST, fetchIndicesSaga);
}

export default watchFetchIndices; // Add this line to export the generator function as the default export
