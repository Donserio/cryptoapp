import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";

import App from './App';
import store from "./app/store";
import "antd/dist/reset.css";

// import { Router } from "react-router-dom";

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root'));

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </Router>
  </StrictMode>
);
