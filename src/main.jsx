import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { GlobalStyles } from './styles/global_styles.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <GlobalStyles/>
        <BrowserRouter>
           <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
