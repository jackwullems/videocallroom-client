import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import App from './App'

export default function AppWrapper() {
    return (
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    )
}