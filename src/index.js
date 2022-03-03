import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";

// const middleware = [thunk];
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
