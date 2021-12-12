import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./login/login.reducers";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("login", loginReducer)
]