import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/authReducer";
// import { cartReducer } from "./CartReducer/CartReducer";

const rootReducer=combineReducers({
    auth:authReducer,  
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({  }) : compose;

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
