import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import CounterProvider from './context/Counter.tsx'
// import { Provider } from 'react-redux'
// import store from './components/store/index.ts'
import CounterProvider from './context/Counter.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CounterProvider>
    <App />
  </CounterProvider>,

/* <Provider store = {store}>
  <App/>
</Provider> */

)
