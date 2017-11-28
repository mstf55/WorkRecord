import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { state, State } from "./reducers";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store: Store<State> = createStore(
  state,
  composeEnhancers(applyMiddleware(reduxThunk))
);
