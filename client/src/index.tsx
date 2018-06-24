
import { client } from './api/apollo';
import App from './components/App/App';

import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// tslint:disable:no-string-literal

// App render :)
ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>  
      <App state={window['__PRELOADED_STATE__']}/>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root') as HTMLElement
);

// Service worker
// registerServiceWorker();