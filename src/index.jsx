import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import ShopPage from './pages/ShopPage/index.js';
import CartPage from './pages/CartPage/index.js';
import HistoryPage from './pages/HistoryPage/index.js';
import ErrorPage from './pages/ErrorPage/index.js';
import WelcomePage from './pages/ShopPage/WelcomePage/index.js';
import CurrentShopPage from './pages/ShopPage/CurrentShopPage/index.js';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <ShopPage />,
        children: [
          {
            index: true,
            element: <WelcomePage />,
          },
          {
            path: ':shopId',
            element: <CurrentShopPage />,
          },
        ],
      },
      {
        path: 'shopping-cart',
        element: <CartPage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
