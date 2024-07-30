import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/online_restaurant_react/'}
    >
      <App />
    </BrowserRouter>
  </Provider>,
);
