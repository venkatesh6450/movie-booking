import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { renderRoutes } from "./routes"; 
import {useDispatch} from "react-redux";
import {Spin} from "antd";


function App() {

  return (
    <div className="App">
      <Suspense
        fallback={
          <Spin />
        }
      >
        <BrowserRouter>
          <Switch>
            {renderRoutes.map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
