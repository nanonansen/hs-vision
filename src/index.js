import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";

import ScrollToTop from "./components/ScrollToTop";

import App from "./components/App";

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>,
    document.getElementById("root")
);
