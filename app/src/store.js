import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import {loadState, saveState} from './localStorage';

// Keep the state when the page is reloaded
const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
  )
);

store.subscribe(() => {
    saveState(store.getState())
});

export default store;
