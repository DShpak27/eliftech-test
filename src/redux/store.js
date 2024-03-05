import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopApi from "./shop/api.js";
import orderApi from "./order/api.js";
import cartReducer from "./cart/slice.js";

const cartPersistConfig = {
    key: "cart",
    storage,
};

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        cart: persistReducer(cartPersistConfig, cartReducer),
    },
    middleware: (gDM) =>
        gDM({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(shopApi.middleware, orderApi.middleware),
});

export const persistor = persistStore(store);
