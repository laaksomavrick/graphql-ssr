import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Blog from '../Blog/Blog';
import './App.css';

export default function App(props: any, state: any) {

  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Blog} /> 
      </Switch>
    </div>
  )

}
