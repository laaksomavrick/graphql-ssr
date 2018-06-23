import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// tslint:disable:no-string-literal

// App render :)
ReactDOM.render((
  <Router>  
    <App state={window['__PRELOADED_STATE__']}/>
  </Router>),
  document.getElementById('root') as HTMLElement
);

// Service worker
registerServiceWorker();