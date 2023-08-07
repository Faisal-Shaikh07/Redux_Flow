import * as actionTypes from "./constants";

const initialState = {
  indices: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INDICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_INDICES_SUCCESS:
      return {
        ...state,
        loading: false,
        indices: action.payload,
      };
    case actionTypes.FETCH_INDICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
