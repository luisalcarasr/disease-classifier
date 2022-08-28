import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
