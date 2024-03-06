import actiontypes from "../actiontypes";

// initial state
const initState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

// auth reducer
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.auth.loginRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actiontypes.auth.loginSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload,
      };

    case actiontypes.auth.loginFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actiontypes.auth.registerRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actiontypes.auth.registerSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload,
      };

    case actiontypes.auth.registerFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actiontypes.auth.logout:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
