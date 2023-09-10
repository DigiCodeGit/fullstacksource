import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
const store = legacy_createStore(() => [], [], applyMiddleware());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
