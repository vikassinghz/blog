import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProviderWrapper } from './ThemeContext';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </Provider>,
  document.getElementById('root')
);
