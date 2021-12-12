import { AppState } from "./AppState";

export const AppInitialState: AppState = {
  login: {
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
    isLoggedIn: false,
    isLoggingIn: false
  },
};