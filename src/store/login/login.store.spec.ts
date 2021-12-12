import { User } from 'src/app/model/user/User';
import { AppInitialState } from '../AppInitialState';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFailed,
  recoverPasswordSuccess,
} from './login.actions';
import { loginReducer } from './login.reducers';
import { LoginState } from './LoginState';

describe('Login store', () => {
  it('recover password', () => {
    const initialState: LoginState = AppInitialState.login;

    const newState = loginReducer(initialState, recoverPassword());

    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    });
  });

  it('recover password success', () => {
    const initialState: LoginState = AppInitialState.login;

    const newState = loginReducer(initialState, recoverPasswordSuccess());

    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    });
  });

  it('recover password failed', () => {
    const initialState: LoginState = AppInitialState.login;
    const error = { error: 'error' };
    const newState = loginReducer(
      initialState,
      recoverPasswordFailed({ error })
    );

    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    });
  });

  it('login', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loginReducer(initialState, login());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isLoggedIn: false,
      isLoggingIn: true,
    });
  });

  it('loginSuccess', () => {
    const initialState: LoginState = {
      ...AppInitialState.login,
      isLoggingIn: true,
    };
    const user = new User();
    user.id = 'anyId';
    const newState = loginReducer(initialState, loginSuccess({ user }));
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isLoggedIn: true,
      isLoggingIn: false,
    });
  });

   it('loginFail', () => {
     const initialState: LoginState = {
       ...AppInitialState.login,
       isLoggingIn: true,
     };
     const error = {error: 'error'};
     const newState = loginReducer(initialState, loginFail({ error }));
     expect(newState).toEqual({
       ...initialState,
       error: null,
       isLoggedIn: false,
       isLoggingIn: false,
     });
   });
});
