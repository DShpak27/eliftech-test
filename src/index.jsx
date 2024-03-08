import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";
import ErrorPage from "./pages/ErrorPage";
import WelcomePage from "./pages/ShopPage/WelcomePage";
import CurrentShopPage from "./pages/ShopPage/CurrentShopPage";
import "./index.css";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "shop",
                    element: <ShopPage />,
                    children: [
                        {
                            index: true,
                            element: <WelcomePage />,
                        },
                        {
                            path: ":shopId",
                            element: <CurrentShopPage />,
                        },
                    ],
                },
                {
                    path: "shopping-cart",
                    element: <CartPage />,
                },
                {
                    path: "history",
                    element: <HistoryPage />,
                },
            ],
        },
    ],
    { basename: "/eliftech-test" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);
