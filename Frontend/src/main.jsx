import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bulma/css/bulma.css"
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import axios from 'axios'
import { RouterProvider } from 'react-router-dom'

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
  </React.StrictMode>,
)
