import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import recommendedReducer from './recommended/recommendedSlice'
import productsReducer from './products/productsSlice'
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";
import menuReducer from "./menu/menuSlice";
import modalReducer from "./modal/modalSlice";




const persistConfig = {
    key: "root",
    storage,
};

const rootReducers = combineReducers({
    recommended: recommendedReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    menu: menuReducer,
    modal: modalReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
}),
})



export const persistor = persistStore(store);