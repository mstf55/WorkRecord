import * as React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { App } from "./app";
import { About } from "./components";
import { TableContainer } from "./containers";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={About} />
          <Route path="/about" component={About} />
          <Route path="/table" component={TableContainer} />
        </Route>
      </Router>
    </Provider>
  );
};
