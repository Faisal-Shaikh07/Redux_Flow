import * as actionTypes from "./constants";

export const fetchIndicesRequest = () => ({
  type: actionTypes.FETCH_INDICES_REQUEST,
});

export const fetchIndicesSuccess = (data) => (console.log(data),{
  type: actionTypes.FETCH_INDICES_SUCCESS,
  payload: data,
});

export const fetchIndicesFailure = (error) => ({
  type: actionTypes.FETCH_INDICES_FAILURE,
  payload: error,
});
