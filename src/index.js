import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

import "normalize.css/normalize.css";
import "./styles/layoutstyle.css";
import "./styles/media-queries.css";
import "./styles/form-styles.css";

import "components/products_display/products-display.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.register();
