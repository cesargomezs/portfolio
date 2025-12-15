import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { ThemeProvider } from './components/themeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
