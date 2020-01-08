import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';

import { UserService, FileService, MetricsService } from './services';
import { UserServiceProvider, FileServiceProvider, MetricsServiceProvider  } from './contexts';
import store from './store';

const userService = new UserService();
const fileService = new FileService();
const metricsServise = new MetricsService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <UserServiceProvider value={userService}>
        <FileServiceProvider value={fileService}>
          <MetricsServiceProvider value={metricsServise}>
            <Router>
              <App />
            </Router>
          </MetricsServiceProvider>
        </FileServiceProvider>
      </UserServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);