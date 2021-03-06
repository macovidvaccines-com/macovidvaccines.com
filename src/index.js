import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./Router";
import reportWebVitals from "./reportWebVitals";

import "./i18n"; // load translations

//Use Axe for accessibility profiling when not in production mode
if (process.env.NODE_ENV !== "production") {
    const axe = require("@axe-core/react");
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
