import actiontypes from "../actiontypes";
import axios from "axios";
import { toast } from "react-toastify";

const API_ENDPOINTS = "http://localhost:9999/userdata";

export const register = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_ENDPOINTS);
      const users = response.data;

      const existingUser = users.find((user) => user.email === userData.email);

      if (existingUser) {
        dispatch(registerFailure("User with this email already exists"));
        toast.info("User with this email already exists");
      } else {
        dispatchRequest(
          dispatch,
          actiontypes.auth.registerRequest,
          API_ENDPOINTS,
          userData,
          registerSuccess,
          registerFailure
        );
        toast.success("User registered successfuly");
      }
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    dispatch({ type: actiontypes.auth.loginRequest });

    try {
      const response = await axios.get(API_ENDPOINTS);
      const users = response.data;
      const user = users.find((user) => {
        return (
          user.email === userData.email && user.password === userData.password
        );
      });

      if (user) {
        dispatch(loginSuccess(user));
        toast.success("User logged in successfuly");
      } else {
        dispatch(loginFailure("Invalid username or password"));
        toast.error("Invalid username or password");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      toast.error(error.message);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: actiontypes.auth.logout });
  };
};

const dispatchRequest = async (
  dispatch,
  requestType,
  endpoint,
  data,
  successCallback,
  failureCallback
) => {
  dispatch({ type: requestType });

  try {
    const response = await axios.post(endpoint, data);
    dispatch(successCallback(response.data));
  } catch (error) {
    dispatch(failureCallback(error.message));
  }
};

const registerSuccess = (userData) => {
  return { type: actiontypes.auth.registerSuccess, payload: userData };
};

const registerFailure = (error) => {
  return { type: actiontypes.auth.registerFailure, payload: error };
};

const loginSuccess = (userData) => {
  return { type: actiontypes.auth.loginSuccess, payload: userData };
};

const loginFailure = (error) => {
  return { type: actiontypes.auth.loginFailure, payload: error };
};
