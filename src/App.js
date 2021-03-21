import React from 'react';
import Routes from './routes';
import AppProvider from './hooks';
import 'carbon-components/css/carbon-components.min.css';

const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
