
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Provider  from "./components/ui/Provider";
import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
