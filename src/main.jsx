import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Provider } from 'react-redux'
import { store } from './redux/store.js'

library.add(fas);


createRoot(document.getElementById('root')).render(
       <Provider store={store}>
       <App />
     </Provider>,
)
