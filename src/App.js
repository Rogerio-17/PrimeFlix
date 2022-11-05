import React from "react";
import RouterApp from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RouterApp />
    </div>
  );
}

export default App;
