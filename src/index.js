import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import { AuthContextProvider } from './store/auth'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ReduxProvider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </ReduxProvider>
);

