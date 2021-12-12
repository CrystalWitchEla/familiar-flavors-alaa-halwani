import { createReducer, on } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFailed,
  recoverPasswordSuccess,
} from './login.actions';
import { LoginState } from './LoginState';

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(
  initialState,
  on(recoverPassword, (currentState) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    };
  }),
  on(recoverPasswordSuccess, (currentState) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    };
  }),
  on(recoverPasswordFailed, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    };
  }),
  on(login, (currentState) => {
    return {
      ...currentState,
      isLoggedIn: false,
      isLoggingIn: true,
    };
  }),
  on(loginSuccess, (currentState) => {
    return {
      ...currentState,
      isLoggedIn: true,
      isLoggingIn: false,
    };
  }),
  on(loginFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isLoggedIn: false,
      isLoggingIn: false,
    };
  })
);

export function loginReducer(state: LoginState, action) {
  return reducer(state, action);
}
