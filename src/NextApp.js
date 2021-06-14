/*import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './appRedux/store';
import App from "./App";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";


const store = configureStore();

const NextApp = () =>{

  const match = useRouteMatch();
  console.log("match", match)

  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default NextApp;*/




import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter, Route, Switch,useRouteMatch} from "react-router-dom";
import configureStore, { history } from './appRedux/store';
import App from "./App";


const store = configureStore();

const NextApp = () =>
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </Provider>
 

export default NextApp;