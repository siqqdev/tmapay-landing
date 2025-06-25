import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import PreventZoom from "./PreventZoom.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <PreventZoom />
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
