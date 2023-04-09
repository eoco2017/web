import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { ConfigProvider } from 'antd';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
      {/* 所有组件都能接受store */}
      <Provider store={store}>
        <App />
      </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

